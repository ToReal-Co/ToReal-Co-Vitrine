const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

export class BookingApiError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BookingApiError';
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
 */
export async function getNextAvailableSlots(count = 3, daysAhead = 10) {
  const out = [];
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
  return out;
}
