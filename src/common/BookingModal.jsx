import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createBooking, getAvailability, BookingApiError, toISODate } from '../lib/bookingApi';
import useScrollLock from './useScrollLock';
import logoMark from '../assets/images/logoWithoutText.svg';

const DAYS_AHEAD = 14;
const PROJECT_TYPES = ['Mobile app', 'Website', 'UI/UX design', 'Not sure yet'];
const CONFETTI_COLORS = ['#1570EF', '#5B9BFF', '#0B4FD1', '#DBE9FE', '#0A1433'];
const CONFETTI_DURATION_MS = 2600;

function buildConfettiPieces(count = 28) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.35,
    duration: 1.7 + Math.random() * 1.1,
    size: 6 + Math.random() * 6,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    rotate: 180 + Math.random() * 360,
    drift: (Math.random() - 0.5) * 180,
  }));
}

function buildDays() {
  const out = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < DAYS_AHEAD; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    out.push(d);
  }
  return out;
}

function groupSlots(slots) {
  const morning = slots.filter((t) => Number(t.split(':')[0]) < 12);
  const afternoon = slots.filter((t) => Number(t.split(':')[0]) >= 12);
  const out = [];
  if (morning.length) out.push({ label: 'Morning', slots: morning });
  if (afternoon.length) out.push({ label: 'Afternoon', slots: afternoon });
  return out;
}

function downloadIcs(dateIso, time) {
  const [hh, mm] = time.split(':').map(Number);
  const [y, m, d] = dateIso.split('-').map(Number);
  const st = new Date(Date.UTC(y, m - 1, d, hh - 1, mm));
  const en = new Date(st.getTime() + 30 * 60000);
  const f = (x) => x.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ToReal&Co//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@toreal-co.com`,
    `DTSTAMP:${f(new Date())}`,
    `DTSTART:${f(st)}`,
    `DTEND:${f(en)}`,
    'SUMMARY:Discovery call — ToReal&Co',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'toreal-discovery-call.ics';
  a.click();
}

const BookingModal = ({ onClose, preset }) => {
  const days = useMemo(buildDays, []);
  const closeRef = useRef(null);
  const [wide, setWide] = useState(typeof window !== 'undefined' ? window.innerWidth >= 820 : true);
  const [page, setPage] = useState(0);
  const [dayIndex, setDayIndex] = useState(() => {
    if (preset?.date) {
      const i = days.findIndex((d) => toISODate(d) === preset.date);
      if (i >= 0) return i;
    }
    return 0;
  });
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [slotsError, setSlotsError] = useState('');
  const [selectedTime, setSelectedTime] = useState(preset?.time || null);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({ name: '', email: '', notes: '' });
  const [ptype, setPtype] = useState(PROJECT_TYPES[0]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    setPage(Math.floor(dayIndex / 7));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!success) return undefined;
    setConfettiPieces(buildConfettiPieces());
    const t = setTimeout(() => setConfettiPieces([]), CONFETTI_DURATION_MS);
    return () => clearTimeout(t);
  }, [success]);

  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= 820);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useScrollLock(true);

  useEffect(() => {
    const t = setTimeout(() => closeRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, []);

  const selectedDay = days[dayIndex];
  const selectedIso = selectedDay ? toISODate(selectedDay) : null;

  useEffect(() => {
    if (!selectedIso) return undefined;
    let cancelled = false;
    setSlotsLoading(true);
    setSlotsError('');
    getAvailability(selectedIso)
      .then((data) => {
        if (cancelled) return;
        setSlots(data?.slots || []);
      })
      .catch((err) => {
        if (cancelled) return;
        setSlotsError(
          err instanceof BookingApiError ? err.message : "Couldn't load available times."
        );
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedIso]);

  const groups = groupSlots(slots);
  const dayLong = selectedDay
    ? selectedDay.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    : '';
  const monthLabel = days[page * 7]
    ? days[page * 7].toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
    : '';
  const maxPage = Math.max(0, Math.ceil(days.length / 7) - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime || !selectedIso) return;
    if (!form.name.trim() || !form.email.trim()) {
      setSubmitError('Name and email are required.');
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      await createBooking({
        name: form.name.trim(),
        email: form.email.trim(),
        notes: [`Project type: ${ptype}`, form.notes.trim()].filter(Boolean).join(' — '),
        date: selectedIso,
        time: selectedTime,
      });
      setSuccess(true);
      setStep(3);
    } catch (err) {
      if (err instanceof BookingApiError) {
        setSubmitError(err.message);
        if (err.message.toLowerCase().includes('slot')) {
          setSelectedTime(null);
          setStep(1);
          getAvailability(selectedIso).then((data) => setSlots(data?.slots || []));
        }
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="presentation"
      aria-modal="true"
      aria-label="Book a discovery call"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className={
        wide
          ? 'fixed inset-0 z-[200] grid place-items-center bg-navy/[0.42] p-[clamp(10px,3vw,32px)] backdrop-blur-md'
          : 'fixed inset-0 z-[200] flex items-end bg-navy/[0.42] backdrop-blur-md'
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          wide
            ? 'relative w-full max-w-[1040px] overflow-hidden rounded-[32px] bg-white shadow-[0_60px_120px_-40px_rgba(6,19,64,0.6)]'
            : 'relative flex w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_-20px_60px_-20px_rgba(6,19,64,0.5)] animate-sheet-up'
        }
        style={
          wide
            ? {
                maxHeight: 'calc(100vh - 24px)',
                gridTemplateColumns: 'minmax(0,330px) minmax(0,1fr)',
                display: 'grid',
                overflow: 'auto',
              }
            : { maxHeight: '90dvh' }
        }
      >
        {wide && (
        <aside className="relative flex flex-col gap-6 overflow-hidden bg-navy p-[clamp(24px,3vw,36px)] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)',
              backgroundSize: '32px 32px',
              WebkitMaskImage: 'linear-gradient(180deg,#000,transparent 70%)',
              maskImage: 'linear-gradient(180deg,#000,transparent 70%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.5),transparent_65%)]"
          />

          <div className="relative flex items-center gap-2.5">
            <img src={logoMark} alt="" width={30} height={30} className="block" />
            <span className="text-[17px] font-bold">ToReal&amp;Co</span>
          </div>

          <div className="relative">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-electric">
              Free discovery call
            </div>
            <h3 className="mt-2.5 text-[clamp(26px,2.6vw,34px)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Let&apos;s talk about your project
            </h3>
          </div>

          {wide && (
            <>
              <div className="relative flex flex-col gap-3 text-[15px] text-periwinkle">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] font-mono text-[11px] text-fog">DUR</span>30 minutes
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-[30px] font-mono text-[11px] text-fog">VIA</span>Google Meet, WhatsApp or phone
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-[30px] font-mono text-[11px] text-fog">LNG</span>Français or English
                </div>
              </div>
              <div className="relative flex items-center gap-3">
                <span className="flex">
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full border-2 border-navy bg-trBlue text-[13px] font-semibold">
                    AM
                  </span>
                  <span className="-ml-2.5 grid h-[38px] w-[38px] place-items-center rounded-full border-2 border-navy bg-blueBg text-[13px] font-semibold text-navy">
                    MZ
                  </span>
                </span>
                <span className="text-[14px] leading-[1.35] text-periwinkle">
                  With Ahmed &amp; Skander,
                  <br />
                  the founders
                </span>
              </div>
            </>
          )}

          <div className="relative mt-auto rounded-2xl border border-white/10 bg-white/[0.06] p-[18px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-fog">Your slot</div>
            <div className="mt-2 text-[20px] font-semibold tracking-[-0.01em]">
              {selectedTime && selectedDay ? dayLong : 'Pick a date and time'}
            </div>
            {selectedTime && (
              <div className="mt-0.5 font-mono text-[14px] text-electric">{selectedTime} · GMT+1</div>
            )}
          </div>

          <div className="relative flex gap-1.5">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-[3px] flex-1 rounded-[3px] transition-colors duration-400"
                style={{ background: step >= n ? '#1570EF' : 'rgba(255,255,255,.14)' }}
              />
            ))}
          </div>
        </aside>
        )}

        {!wide && (
          <div className="relative shrink-0 bg-navy px-5 pb-4 pt-3 text-white">
            <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/25" />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <img src={logoMark} alt="" width={24} height={24} className="block" />
                <span className="text-[15px] font-bold">ToReal&amp;Co</span>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[16px] text-white"
              >
                ✕
              </button>
            </div>
            <h3 className="mt-3 text-[20px] font-semibold leading-tight tracking-[-0.02em]">
              {selectedTime && selectedDay ? `${dayLong} · ${selectedTime}` : "Let's talk about your project"}
            </h3>
            <div className="relative mt-3.5 flex gap-1.5">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className="h-[3px] flex-1 rounded-[3px] transition-colors duration-400"
                  style={{ background: step >= n ? '#1570EF' : 'rgba(255,255,255,.14)' }}
                />
              ))}
            </div>
          </div>
        )}

        <div
          className={
            wide
              ? 'relative min-w-0 p-[clamp(22px,3vw,40px)]'
              : 'relative min-h-0 min-w-0 flex-1 overflow-y-auto p-5'
          }
        >
          {wide && (
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-[18px] top-[18px] z-[2] grid h-[42px] w-[42px] place-items-center rounded-full border border-darkBlue/10 bg-white text-[18px] text-darkBlue hover:bg-trWhite"
            >
              ✕
            </button>
          )}

          {step === 1 && (
            <div className="flex h-full flex-col gap-[26px]">
              <div className={`flex items-center justify-between gap-3 ${wide ? 'pr-14' : ''}`}>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze">Step 1 / 2</div>
                  <div className="mt-1.5 text-[22px] font-semibold tracking-[-0.02em]">{monthLabel}</div>
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    aria-label="Previous week"
                    disabled={page === 0}
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    className="grid h-10 w-10 place-items-center rounded-full border border-darkBlue/[0.12] bg-white text-[16px] disabled:opacity-35"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Next week"
                    disabled={page === maxPage}
                    onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
                    className="grid h-10 w-10 place-items-center rounded-full border border-darkBlue/[0.12] bg-white text-[16px] disabled:opacity-35"
                  >
                    →
                  </button>
                </div>
              </div>

              <div role="listbox" aria-label="Date" className="grid grid-cols-7 gap-1.5">
                {days.slice(page * 7, page * 7 + 7).map((d, k) => {
                  const i = page * 7 + k;
                  const on = i === dayIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="option"
                      aria-selected={on}
                      onClick={() => {
                        setDayIndex(i);
                        setSelectedTime(null);
                      }}
                      className="flex flex-col items-center gap-1 rounded-2xl border-[1.5px] py-3 pb-3.5 transition-all duration-200"
                      style={{
                        borderColor: on ? '#1570EF' : 'rgba(10,20,51,.1)',
                        background: on ? '#1570EF' : '#fff',
                        color: on ? '#fff' : '#0A1433',
                      }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-75">
                        {d.toLocaleDateString('en-GB', { weekday: 'short' })}
                      </span>
                      <span className="tabular text-[20px] font-semibold">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="text-[16px] font-semibold">{dayLong}</div>
                  <span className="rounded-full bg-trWhite px-2.5 py-1.5 font-mono text-[11px] text-muted">
                    GMT+1 · Tunisia
                  </span>
                </div>

                {slotsLoading ? (
                  <p className="mt-4 text-[14px] text-haze">Loading available times…</p>
                ) : slotsError ? (
                  <p className="mt-4 text-[14px] text-red-500">{slotsError}</p>
                ) : groups.length === 0 ? (
                  <div className="mt-[18px] rounded-[14px] border-[1.5px] border-dashed border-darkBlue/[0.12] p-[22px] text-[15px] text-muted">
                    No times left on this day — pick another date.
                  </div>
                ) : (
                  groups.map((g) => (
                    <div key={g.label} className="mt-[18px]">
                      <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-haze">
                        {g.label}
                      </div>
                      <div
                        className="grid gap-2"
                        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(100px,1fr))' }}
                      >
                        {g.slots.map((t) => {
                          const on = selectedTime === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              aria-pressed={on}
                              onClick={() => setSelectedTime(t)}
                              className="rounded-xl border-[1.5px] py-3 font-mono text-[14px] font-medium transition-all duration-200 hover:border-trBlue"
                              style={{
                                borderColor: on ? '#0A1433' : 'rgba(10,20,51,.12)',
                                background: on ? '#0A1433' : '#fff',
                                color: on ? '#fff' : '#0A1433',
                              }}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <button
                type="button"
                disabled={!selectedTime}
                onClick={() => setStep(2)}
                className="mt-auto flex w-full items-center justify-center gap-2.5 rounded-full px-[26px] py-4 text-[16px] font-semibold text-white transition-colors duration-250 disabled:cursor-not-allowed"
                style={{ background: selectedTime ? '#1570EF' : '#B8C6E3' }}
              >
                Continue <span aria-hidden="true">→</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-[18px]">
              <div className={wide ? 'pr-14' : ''}>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze">Step 2 / 2</div>
                <div className="mt-1.5 text-[22px] font-semibold tracking-[-0.02em]">Your details</div>
              </div>

              <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
                <label className="flex flex-col gap-2 text-[14px] font-semibold">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                    className="rounded-[14px] border-[1.5px] border-darkBlue/[0.12] bg-trWhite px-4 py-[15px] text-[16px] text-darkBlue outline-none transition-colors focus:border-trBlue focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[14px] font-semibold">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                    className="rounded-[14px] border-[1.5px] border-darkBlue/[0.12] bg-trWhite px-4 py-[15px] text-[16px] text-darkBlue outline-none transition-colors focus:border-trBlue focus:bg-white"
                  />
                </label>
              </div>

              <div>
                <div className="mb-2.5 text-[14px] font-semibold">What do you need?</div>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => {
                    const on = ptype === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setPtype(t)}
                        className="cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[14px] font-semibold transition-all duration-200"
                        style={{
                          borderColor: on ? '#1570EF' : 'rgba(10,20,51,.12)',
                          background: on ? '#1570EF' : '#fff',
                          color: on ? '#fff' : '#2A3558',
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="flex flex-col gap-2 text-[14px] font-semibold">
                Anything we should know? <span className="-mt-1 font-normal text-haze">Optional</span>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="resize-y rounded-[14px] border-[1.5px] border-darkBlue/[0.12] bg-trWhite px-4 py-[15px] text-[16px] text-darkBlue outline-none transition-colors focus:border-trBlue focus:bg-white"
                />
              </label>

              {submitError && <p className="text-[14px] text-red-500">{submitError}</p>}

              <div className="mt-auto flex flex-col gap-3 pt-1.5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="self-start bg-transparent p-0 py-2.5 text-[15px] font-semibold text-muted"
                >
                  ← Change time
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-trBlue px-[26px] py-4 text-[16px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(21,112,239,0.7)] transition-colors hover:bg-trBlueDark disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Confirm booking'} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && success && (
            <div
              role="status"
              className={`flex h-full min-h-[280px] flex-col items-start justify-center gap-3.5 ${
                wide ? 'pr-10' : ''
              }`}
            >
              <div className="relative grid h-[64px] w-[64px] shrink-0 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-trBlue/25" />
                <span className="relative grid h-[64px] w-[64px] animate-pop-in place-items-center rounded-full bg-trBlue shadow-[0_0_0_10px_rgba(21,112,239,0.12)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                    <path
                      d="M5 12.5 10 17.5 19 7"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="1"
                      strokeDasharray="1"
                      strokeDashoffset="1"
                      className="animate-[dash_0.5s_ease-out_0.18s_forwards]"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="mt-3.5 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.12s_both] text-[clamp(28px,3vw,38px)] font-semibold tracking-[-0.03em]">
                Rendez-vous confirmed
              </h3>
              <p className="animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.22s_both] text-[17px] leading-relaxed text-muted">
                {dayLong} at {selectedTime} (GMT+1) — your slot is locked in. We&apos;ll get back to you by email at{' '}
                {form.email || 'your inbox'} to confirm the details.
              </p>
              <div className="mt-2.5 flex w-full animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_0.32s_both] flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => selectedIso && selectedTime && downloadIcs(selectedIso, selectedTime)}
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-full border-[1.5px] border-darkBlue/[0.12] bg-white px-[22px] py-3.5 text-[15px] font-semibold text-darkBlue hover:border-trBlue hover:text-trBlue"
                >
                  Add to calendar
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full bg-darkBlue px-[22px] py-3.5 text-[15px] font-semibold text-white"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {confettiPieces.length > 0 && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[210] overflow-hidden">
          {confettiPieces.map((p) => (
            <span
              key={p.id}
              className="absolute top-[-24px] rounded-sm"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.6,
                backgroundColor: p.color,
                animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
                '--confetti-drift': `${p.drift}px`,
                '--confetti-rotate': `${p.rotate}deg`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingModal;
