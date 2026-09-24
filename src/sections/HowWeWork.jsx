import React, { useEffect, useState } from 'react';
import BookaCallButton from '../common/BookACallButton';
import SectionHeading from '../common/SectionHeading';
import { useBooking } from '../common/BookingContext';

const steps = [
  {
    n: '01',
    title: 'Initial contact',
    desc: 'We discuss your vision, goals, and project scope in a free discovery call.',
    out: 'Call summary',
  },
  {
    n: '02',
    title: 'Requirements document',
    desc: 'We turn the call into a written brief: features, users, priorities and constraints.',
    out: 'Requirements doc',
  },
  {
    n: '03',
    title: 'Specification validation',
    desc: 'You approve the specification, timeline and budget before any code is written.',
    out: 'Signed spec',
  },
  {
    n: '04',
    title: 'Development kickoff',
    desc: 'Design and development start, with a shared board to follow every task.',
    out: 'Project board',
  },
  {
    n: '05',
    title: 'Weekly demos',
    desc: 'Every week you test working software; your feedback shapes the next sprint.',
    out: 'Weekly build',
  },
  {
    n: '06',
    title: 'Scrum delivery',
    desc: 'Tested, signed off and released to production, with support after launch.',
    out: 'Production release',
  },
];

const HowWeWork = () => {
  const { openBooking } = useBooking();
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const procWide = width >= 1180;
  const procCols = procWide
    ? 'repeat(6,minmax(0,1fr))'
    : width >= 700
      ? 'repeat(3,minmax(0,1fr))'
      : 'minmax(0,1fr)';
  const procGap = procWide ? '0' : '40px 24px';
  const tlGap = procWide ? '28px' : '48px';
  const fill = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 100;

  return (
    <section
      id="process"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="relative overflow-hidden rounded-[36px] bg-navy p-[clamp(28px,5vw,64px)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 75%)',
            maskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 75%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[260px] left-[30%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.35),transparent_65%)]"
        />

        <div className="relative flex flex-wrap items-end justify-between gap-7">
          <div className="max-w-[720px]">
            <SectionHeading tone="dark" size="lg" eyebrow="[04] How we work" title="A clear process, from first contact to launch" />
            <p className="mt-[18px] text-[18px] leading-relaxed text-periwinkle">
              No surprises, full collaboration at every step.
            </p>
          </div>
          <BookaCallButton color="white" onClick={openBooking}>
            Book a call
          </BookaCallButton>
        </div>

        {procWide && (
          <div className="relative mt-16 grid grid-cols-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
            {[
              ['Define', '01 — 03'],
              ['Build', '04 — 05'],
              ['Ship', '06'],
            ].map(([label, range]) => (
              <div key={label} className="pb-3 pr-6 last:pr-0">
                <div className="flex justify-between border-t border-white/[0.14] pt-3">
                  <span className="text-white">{label}</span>
                  <span>{range}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          className="relative mt-[var(--tl-gap)] grid"
          style={{ '--tl-gap': tlGap, marginTop: tlGap, gridTemplateColumns: procCols, gap: procGap }}
        >
          {procWide && (
            <>
              <span
                aria-hidden="true"
                className="absolute left-[22px] top-[21px] h-0.5 rounded-full bg-white/10"
                style={{ right: 'calc(100% / 6 - 22px)' }}
              />
              <span
                aria-hidden="true"
                className="absolute left-[22px] top-[21px] h-0.5 overflow-hidden rounded-full"
                style={{ right: 'calc(100% / 6 - 22px)' }}
              >
                <span
                  className="block h-full bg-gradient-to-r from-trBlue to-electric shadow-[0_0_14px_rgba(91,155,255,0.8)]"
                  style={{ width: `${fill}%` }}
                />
              </span>
            </>
          )}

          {steps.map((step, index) => {
            const on = index <= active;
            return (
              <button
                key={step.n}
                type="button"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className="group relative flex min-w-0 flex-col pr-6 text-left transition-opacity duration-500"
                style={{ opacity: on ? 1 : 0.5 }}
              >
                <span
                  className="relative z-[1] grid h-11 w-11 place-items-center rounded-full font-mono text-[13px] transition-[background,color,border-color,box-shadow] duration-400 group-hover:border-trBlue"
                  style={{
                    background: on ? '#1570EF' : '#061340',
                    color: on ? '#fff' : '#8FA0CC',
                    border: `1.5px solid ${on ? '#1570EF' : 'rgba(255,255,255,.18)'}`,
                    boxShadow: on ? '0 0 0 6px rgba(21,112,239,.22)' : 'none',
                  }}
                >
                  {step.n}
                </span>
                <h3 className="mt-6 text-[20px] font-semibold leading-[1.2] tracking-[-0.015em]" style={{ overflowWrap: 'anywhere' }}>
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-skyline">{step.desc}</p>
                <div className="mt-auto pt-5">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-[10px] border border-white/[0.08] bg-white/[0.06] px-3 py-2 font-mono text-[12px] text-[#D5DEF3]">
                    <span className="text-electric">→</span>
                    {step.out}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
