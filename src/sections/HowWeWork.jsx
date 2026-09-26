import React from 'react';
import BookaCallButton from '../common/BookACallButton';
import SectionHeading from '../common/SectionHeading';
import { IconArrowRight } from '../common/Icons';
import { useBooking } from '../common/BookingContext';
import { useI18n } from '../i18n';

const HowWeWork = () => {
  const { openBooking } = useBooking();
  const { t } = useI18n();

  return (
    <section
      id="process"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(56px,7vw,96px)' }}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <div className="max-w-[720px]">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          <p className="mt-[18px] max-w-[540px] text-[18px] leading-relaxed text-muted">
            {t.process.lead}
          </p>
        </div>
        <BookaCallButton color="blue" onClick={openBooking}>
          {t.process.cta}
        </BookaCallButton>
      </div>

      <div
        className="mt-14 grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))' }}
      >
        {t.process.phases.map((phase) => (
          <div
            key={phase.key}
            className="flex flex-col rounded-[28px] border border-darkBlue/[0.07] bg-white/[0.78] p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_30px_60px_-40px_rgba(10,20,51,0.2)]"
          >
            <h3 className="font-mono text-[12px] uppercase tracking-[0.14em] text-trBlue">
              {phase.label}
            </h3>

            <ol className="mt-7 flex flex-1 flex-col gap-7">
              {phase.steps.map((step) => (
                <li key={step.n} className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="shrink-0 font-mono text-[13px] text-haze">{step.n}</span>
                    <h4 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-darkBlue">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{step.desc}</p>
                  <div className="mt-3.5 inline-flex max-w-full items-center gap-2 rounded-[10px] bg-darkBlue/[0.04] px-3 py-2 font-mono text-[12px] text-mutedSoft">
                    <IconArrowRight className="h-3 w-3 text-trBlue" strokeWidth={2} />
                    {step.out}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
