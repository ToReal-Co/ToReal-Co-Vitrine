import React from 'react';
import TiltCard from '../common/TiltCard';
import SectionHeading from '../common/SectionHeading';

const Stack = () => {
  return (
    <section
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div
        className="grid items-center gap-x-[72px] gap-y-10"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}
      >
        <div>
          <SectionHeading eyebrow="[06] Tech stack" title="Proven tools, chosen for your product" />
          <p className="mt-[22px] max-w-[460px] text-[18px] leading-relaxed text-muted">
            One codebase for iOS and Android, a modern web toolchain, and a testing routine
            that runs before every release.
          </p>
        </div>

        <TiltCard max={4} className="relative overflow-hidden rounded-3xl bg-navy shadow-[0_40px_80px_-40px_rgba(6,19,64,0.7)]">
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-[18px] py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.16]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.16]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.16]" />
            <span className="ml-2.5 font-mono text-[12px] text-fog">stack.json</span>
          </div>
          <pre className="m-0 overflow-x-auto px-6 pb-7 pt-6 font-mono text-[clamp(12px,1.1vw,14px)] leading-[1.9] text-[#C9D4F0]">
            <span className="text-electric">~/toreal-co</span> $ cat stack.json{'\n'}
            {'{\n'}
            {'  '}
            <span className="text-sky-300">&quot;mobile&quot;</span>:  [<span className="text-emerald-200">&quot;React Native&quot;</span>,{' '}
            <span className="text-emerald-200">&quot;In-app purchases&quot;</span>],{'\n'}
            {'  '}
            <span className="text-sky-300">&quot;web&quot;</span>:     [<span className="text-emerald-200">&quot;React&quot;</span>,{' '}
            <span className="text-emerald-200">&quot;Vite&quot;</span>, <span className="text-emerald-200">&quot;Tailwind&quot;</span>],{'\n'}
            {'  '}
            <span className="text-sky-300">&quot;backend&quot;</span>: [<span className="text-emerald-200">&quot;Node.js&quot;</span>,{' '}
            <span className="text-emerald-200">&quot;REST APIs&quot;</span>],{'\n'}
            {'  '}
            <span className="text-sky-300">&quot;design&quot;</span>:  [<span className="text-emerald-200">&quot;Figma&quot;</span>,{' '}
            <span className="text-emerald-200">&quot;Wireframes&quot;</span>, <span className="text-emerald-200">&quot;Prototypes&quot;</span>],{'\n'}
            {'  '}
            <span className="text-sky-300">&quot;quality&quot;</span>: [<span className="text-emerald-200">&quot;Code reviews&quot;</span>,{' '}
            <span className="text-emerald-200">&quot;UAT&quot;</span>, <span className="text-emerald-200">&quot;Cross-device&quot;</span>]{'\n'}
            {'}'}
          </pre>
        </TiltCard>
      </div>
    </section>
  );
};

export default Stack;
