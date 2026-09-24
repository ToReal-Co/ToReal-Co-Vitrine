import React, { useEffect, useState } from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import BookaCallButton from '../common/BookACallButton';
import useMagnetic from '../common/useMagnetic';
import { useBooking } from '../common/BookingContext';
import {
  DEFAULT_SLOT_MINUTES,
  DEFAULT_TIMEZONE,
  formatZoneLabel,
  getNextAvailableSlots,
} from '../lib/bookingApi';

const WHATSAPP_URL = 'https://wa.me/21658693946';

const Contact = () => {
  const { openBooking } = useBooking();
  const whatsapp = useMagnetic();
  const [nextSlots, setNextSlots] = useState([]);
  const [timezone, setTimezone] = useState(DEFAULT_TIMEZONE);
  const [slotMinutes, setSlotMinutes] = useState(DEFAULT_SLOT_MINUTES);

  useEffect(() => {
    let cancelled = false;
    getNextAvailableSlots(3).then((data) => {
      if (cancelled) return;
      setNextSlots(data.slots);
      setTimezone(data.timezone);
      setSlotMinutes(data.slotMinutes);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div
        className="grid items-center gap-x-[72px] gap-y-10"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))' }}
      >
        <div>
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-trBlue">
            Free discovery call — {slotMinutes} minutes
          </div>
          <h2 className="text-balance mt-[18px] text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.02] tracking-[-0.04em] text-darkBlue">
            Ready to create your project?
          </h2>
          <p className="mt-[22px] max-w-[460px] text-[18px] leading-relaxed text-muted">
            Pick a time with the founders. We&apos;ll talk through your idea, scope and next
            steps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BookaCallButton color="blue" onClick={openBooking}>
              Book a call
            </BookaCallButton>
            <a
              ref={whatsapp.ref}
              onMouseMove={whatsapp.onMouseMove}
              onMouseLeave={whatsapp.onMouseLeave}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-darkBlue/[0.12] bg-white/70 px-7 py-3.5 text-[17px] font-semibold text-darkBlue backdrop-blur-md transition-[transform,border-color] duration-300 ease-out-magnet hover:border-whatsapp"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-mutedSoft">
            <a href="tel:+21658693946" className="text-slate">
              +216 58 693 946
            </a>
            <span>Bizerte, Tunisia</span>
            <span>FR / EN</span>
          </div>
        </div>

        <TiltCard max={3} spotlight className="relative overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/80 p-[clamp(22px,3vw,32px)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_40px_80px_-48px_rgba(10,20,51,0.45)]">
          <CardSpotlight />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex">
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-trBlue text-[13px] font-semibold text-white">
                  AM
                </span>
                <span className="-ml-2.5 grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-navy text-[13px] font-semibold text-white">
                  MZ
                </span>
              </span>
              <span className="flex flex-col">
                <span className="text-[16px] font-semibold">Discovery call</span>
                <span className="text-[13px] text-mutedSoft">
                  {slotMinutes} min · Meet, WhatsApp or phone
                </span>
              </span>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-trBlue">
              <span className="h-[7px] w-[7px] rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]" />
              Open
            </span>
          </div>

          <div className="relative mt-[26px] font-mono text-[11px] uppercase tracking-[0.14em] text-haze">
            Next available · {formatZoneLabel(timezone)}
          </div>

          <div className="relative mt-3 flex flex-col gap-2">
            {nextSlots.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-darkBlue/[0.12] px-4 py-4 text-[14px] text-muted">
                Checking the calendar…
              </p>
            ) : (
              nextSlots.map((slot) => (
                <button
                  key={`${slot.date}-${slot.time}`}
                  type="button"
                  onClick={() => openBooking(slot)}
                  className="flex items-center justify-between gap-3 rounded-2xl border-[1.5px] border-darkBlue/[0.09] bg-white px-[18px] py-4 text-left text-darkBlue transition-[border-color,transform] duration-200 hover:border-trBlue"
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[16px] font-semibold">{slot.day}</span>
                    <span className="text-[13px] text-mutedSoft">{slot.rel}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[15px] font-medium">{slot.time}</span>
                    <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-trBlue text-[13px] text-white">
                      →
                    </span>
                  </span>
                </button>
              ))
            )}
          </div>

          <button
            type="button"
            onClick={() => openBooking()}
            className="relative mt-4 bg-transparent p-0 py-1.5 text-[15px] font-semibold text-trBlue"
          >
            See all times →
          </button>
        </TiltCard>
      </div>
    </section>
  );
};

export default Contact;
