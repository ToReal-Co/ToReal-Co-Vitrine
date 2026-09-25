import React from 'react';
import BookaCallButton from '../common/BookACallButton';
import useMagnetic from '../common/useMagnetic';
import { useBooking } from '../common/BookingContext';
import { useI18n } from '../i18n';
import { IconArrowUpRight, IconDot } from '../common/Icons';
import logoMark from '../assets/images/logoWithoutText.svg';

const HeroDescription = () => {
  const { openBooking } = useBooking();
  const secondaryCta = useMagnetic();
  const { t } = useI18n();

  return (
    <div className="relative z-[2]">
      <div className="inline-flex max-w-full items-start gap-2.5 rounded-full border border-trBlue/[0.14] bg-white/80 px-3.5 py-2 font-mono text-[11px] uppercase leading-snug tracking-[0.06em] text-slate sm:items-center sm:text-[12px] sm:tracking-[0.08em] lg:w-max lg:max-w-none lg:whitespace-nowrap">
        <span className="mt-[0.35em] h-[7px] w-[7px] shrink-0 rounded-full bg-trBlue shadow-[0_0_0_4px_rgba(21,112,239,0.15)] lg:mt-0" />
        <span className="min-w-0 text-pretty lg:min-w-min">{t.hero.badge}</span>
      </div>

      <h1 className="mt-7 text-balance text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-darkBlue">
        {t.hero.h1Lead} <span className="text-trBlue">{t.hero.h1Accent}</span> {t.hero.h1Tail}{' '}
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="inline-block h-[0.7em] w-[0.7em] align-middle"
        />
        <br />
        <span className="text-[0.72em] font-normal text-slate">{t.hero.h1Sub}</span>
      </h1>

      <p className="text-pretty mt-7 max-w-[540px] text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-muted">
        {t.hero.lead}{' '}
        <strong className="font-semibold text-darkBlue">{t.hero.leadStrong}</strong>
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <BookaCallButton color="blue" onClick={openBooking}>
          {t.hero.ctaPrimary}
        </BookaCallButton>
        <a
          ref={secondaryCta.ref}
          onMouseMove={secondaryCta.onMouseMove}
          onMouseLeave={secondaryCta.onMouseLeave}
          href="#work"
          className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-darkBlue/[0.12] bg-white/70 px-7 py-3.5 text-[17px] font-semibold text-darkBlue backdrop-blur-md transition-[transform,color,border-color] duration-300 ease-out-magnet hover:border-trBlue hover:text-trBlue"
        >
          {t.hero.ctaSecondary}
          <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 font-mono text-[12px] tracking-[0.04em] text-mutedSoft">
        {t.hero.meta.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <IconDot className="h-1.5 w-1.5 text-trBlue" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroDescription;
