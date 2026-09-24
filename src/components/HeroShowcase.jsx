import React from 'react';
import HeroCube from './HeroCube';

const HeroShowcase = () => {
  return (
    <div className="relative z-[1] h-[clamp(360px,46vw,600px)]">
      <HeroCube />

      <div className="pointer-events-none absolute right-[2%] top-[8%] flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/[0.66] py-2.5 pl-2.5 pr-4 shadow-[0_16px_40px_-18px_rgba(10,20,51,0.35)] backdrop-blur-md">
        <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-trBlue/[0.12] text-[14px] font-bold text-trBlue">
          ✓
        </span>
        <span className="text-[14px] font-semibold leading-[1.2]">
          Shipped to
          <br />
          production
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-[6%] left-0 min-w-[240px] rounded-2xl border border-white/[0.08] bg-navy/[0.86] px-4 py-3.5 font-mono text-[12px] leading-[1.8] text-skyline shadow-[0_20px_50px_-20px_rgba(6,19,64,0.6)] backdrop-blur-md">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
        </div>
        <div>
          <span className="text-electric">~/toreal</span> $ release --prod
        </div>
        <div>
          <span className="text-emerald-300">✓</span> tests passed
        </div>
        <div>
          <span className="text-emerald-300">✓</span> client sign-off
        </div>
        <div>
          <span className="text-emerald-300">✓</span> live
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
