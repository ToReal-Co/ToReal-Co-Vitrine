import React from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import SectionHeading from '../common/SectionHeading';

const quotes = [
  { text: 'Add a client quote: the problem, what we built, and the result.', who: 'Client name', role: 'Role · Company' },
  { text: 'Add a client quote: the problem, what we built, and the result.', who: 'Client name', role: 'Role · Company' },
  { text: 'Add a client quote: the problem, what we built, and the result.', who: 'Client name', role: 'Role · Company' },
];

const Testimonials = () => {
  return (
    <section
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <SectionHeading eyebrow="[05] Client words" title="What founders say" />

      <div
        className="mt-12 grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))' }}
      >
        {quotes.map((q, i) => (
          <TiltCard key={i} max={4} spotlight>
            <figure className="relative m-0 flex min-h-[260px] flex-col overflow-hidden rounded-[28px] border-[1.5px] border-dashed border-trBlue/30 bg-white/60 p-8">
              <CardSpotlight color="rgba(21,112,239,.1)" size={320} />
              <span aria-hidden="true" className="text-[64px] font-bold leading-[0.6] text-trBlue">
                “
              </span>
              <blockquote className="mt-[18px] text-[18px] italic leading-relaxed text-mutedSoft">
                {q.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                <span className="h-11 w-11 rounded-full border border-dashed border-trBlue/35 bg-trBlue/10" />
                <span className="flex flex-col">
                  <span className="font-semibold text-slate">{q.who}</span>
                  <span className="font-mono text-[12px] text-haze">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
