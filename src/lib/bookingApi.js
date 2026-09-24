const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

/** Used only until /availability answers with the studio's configured settings. */
export const DEFAULT_TIMEZONE = 'Africa/Tunis';
export const DEFAULT_SLOT_MINUTES = 30;

export class BookingApiError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BookingApiError';
  }
}

/** Offset of `timeZone` at a given instant, in minutes east of UTC. */
function zoneOffsetMinutes(timeZone, at) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(at);
  const p = {};
  for (const part of parts) if (part.type !== 'literal') p[part.type] = part.value;
  const asUtc = Date.UTC(
    Number(p.year),
    Number(p.month) - 1,
    Number(p.day),
    Number(p.hour) % 24,
    Number(p.minute),
    Number(p.second)
  );
  return (asUtc - at.getTime()) / 60000;
}

/**
 * Short label for the slot times shown to visitors, e.g. "GMT+1". Pass the
 * instant being labelled: in a zone with daylight saving, the offset of a slot
 * booked next winter is not the offset of today.
 */
export function formatZoneLabel(timeZone = DEFAULT_TIMEZONE, at = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(at);
    const name = parts.find((part) => part.type === 'timeZoneName')?.value;
    if (name) return name === 'GMT' ? 'GMT+0' : name;
  } catch {
    // Unsupported option or unknown zone — fall through to the arithmetic below.
  }
  try {
    const offset = zoneOffsetMinutes(timeZone, at);
    const sign = offset < 0 ? '-' : '+';
    const abs = Math.abs(offset);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    return `GMT${sign}${h}${m ? `:${String(m).padStart(2, '0')}` : ''}`;
  } catch {
    return 'GMT+1';
  }
}

/** City part of an IANA zone name, e.g. "Africa/Tunis" → "Tunis". */
export function formatZoneCity(timeZone = DEFAULT_TIMEZONE) {
  const last = String(timeZone).split('/').pop() || '';
  return last.replace(/_/g, ' ');
}

/**
 * Turns a slot's wall-clock time in the studio's timezone into a real instant,
 * so a calendar file lands at the right moment for a visitor in any timezone.
 */
export function zonedWallTimeToUtc(dateIso, time, timeZone = DEFAULT_TIMEZONE) {
  const [y, m, d] = dateIso.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  const guessMs = Date.UTC(y, m - 1, d, hh, mm);
  try {
    return new Date(guessMs - zoneOffsetMinutes(timeZone, new Date(guessMs)) * 60000);
  } catch {
    return new Date(guessMs);
  }
}

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    });
  } catch {
    throw new BookingApiError(
      "Couldn't reach the server. Check your connection and try again."
    );
  }

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new BookingApiError(data?.error || 'Something went wrong.');
  }
  return data;
}

export function getAvailability(dateISO) {
  return request(`/availability?date=${encodeURIComponent(dateISO)}`);
}

export function createBooking({ name, email, phone, notes, date, time }) {
  return request('/bookings', {
    method: 'POST',
    body: JSON.stringify({ name, email, phone, notes, date, time }),
  });
}

export function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Walks forward from today looking for the next few days with an open
 * slot — used by the contact section's "next available" preview. Silently
 * stops early on any request failure so the preview just shows less.
 * Also reports the studio's timezone and call length so the preview can
 * label the times it shows instead of assuming them.
 */
export async function getNextAvailableSlots(count = 3, daysAhead = 10) {
  const out = [];
  let timezone = DEFAULT_TIMEZONE;
  let slotMinutes = DEFAULT_SLOT_MINUTES;
  const today = new Date();
  for (let i = 0; i < daysAhead && out.length < count; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const iso = toISODate(d);
    let data;
    try {
      data = await getAvailability(iso);
    } catch {
      break;
    }
    if (data?.timezone) timezone = data.timezone;
    if (data?.slotMinutes) slotMinutes = data.slotMinutes;
    const time = data?.slots?.[0];
    if (time) {
      out.push({
        date: iso,
        time,
        day: d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }),
        rel:
          i === 0
            ? 'Today'
            : i === 1
              ? 'Tomorrow'
              : `In ${i} days`,
      });
    }
  }
  return { slots: out, timezone, slotMinutes };
}
