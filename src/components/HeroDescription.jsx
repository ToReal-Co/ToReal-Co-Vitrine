import React from 'react';
import BookaCallButton from '../common/BookACallButton';
import useMagnetic from '../common/useMagnetic';
import { useBooking } from '../common/BookingContext';
import logoMark from '../assets/images/logoWithoutText.svg';

const HeroDescription = () => {
  const { openBooking } = useBooking();
  const secondaryCta = useMagnetic();

  return (
    <div className="relative z-[2]">
      <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-trBlue/[0.14] bg-white/80 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-slate sm:whitespace-nowrap">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-trBlue shadow-[0_0_0_4px_rgba(21,112,239,0.15)]" />
        Digital product studio — open for new projects
      </div>

      <h1 className="mt-7 text-balance text-[clamp(2.5rem,4.9vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-darkBlue">
        From concept <span className="text-trBlue">to real</span>{' '}
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="inline-block h-[0.7em] w-[0.7em] align-middle"
        />
        <br />
        <span className="font-normal text-slate">
          bring your <span className="font-medium text-trBlue">digital</span> vision to life.
        </span>
      </h1>

      <p className="text-pretty mt-7 max-w-[540px] text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-muted">
        Mobile apps, web platforms and product design — built end to end, with weekly
        demos until launch.{' '}
        <strong className="font-semibold text-darkBlue">Expert solutions, real results!</strong>
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <BookaCallButton color="blue" onClick={openBooking}>
          Start a project
        </BookaCallButton>
        <a
          ref={secondaryCta.ref}
          onMouseMove={secondaryCta.onMouseMove}
          onMouseLeave={secondaryCta.onMouseLeave}
          href="#work"
          className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-darkBlue/[0.12] bg-white/70 px-7 py-3.5 text-[17px] font-semibold text-darkBlue backdrop-blur-md transition-[transform,color,border-color] duration-300 ease-out-magnet hover:border-trBlue hover:text-trBlue"
        >
          See our work
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 font-mono text-[12px] tracking-[0.04em] text-mutedSoft">
        <span>● Bizerte, Tunisia</span>
        <span>● FR / EN</span>
        <span>● Since 2024</span>
      </div>
    </div>
  );
};

export default HeroDescription;
