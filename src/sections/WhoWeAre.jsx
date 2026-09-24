import React, { useEffect, useState } from 'react';
import TeamGrid from '../components/TeamGrid';
import SectionHeading from '../common/SectionHeading';
import CountUp from '../common/CountUp';
import { FALLBACK_WHO_WE_ARE, getWhoWeAreContent } from '../lib/whoWeAreApi';

const YEARS_ACTIVE = Math.max(1, new Date().getFullYear() - 2024);

const WhoWeAre = () => {
  const [content, setContent] = useState(FALLBACK_WHO_WE_ARE);

  useEffect(() => {
    let cancelled = false;
    getWhoWeAreContent().then((data) => {
      if (!cancelled) setContent(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = [
    { to: content.stats.capitalAchieved, prefix: '+', suffix: 'K', label: 'Capital achieved' },
    { to: content.stats.releasedProjects, prefix: '+', suffix: '', label: 'Released projects' },
    { to: content.stats.collaborators, prefix: '+', suffix: '', label: 'Collaborators' },
    { to: YEARS_ACTIVE, prefix: '', suffix: ' yrs', label: 'Of experience' },
    { to: 100, prefix: '', suffix: '%', label: 'Client satisfaction', accent: true },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="relative overflow-hidden rounded-[36px] bg-navy p-[clamp(32px,5vw,72px)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            WebkitMaskImage: 'radial-gradient(ellipse at 80% 0%, #000, transparent 70%)',
            maskImage: 'radial-gradient(ellipse at 80% 0%, #000, transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[120px] -top-[200px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.45),transparent_65%)]"
        />

        <div
          className="relative grid gap-x-[72px] gap-y-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}
        >
          <SectionHeading
            tone="dark"
            size="lg"
            eyebrow="[02] Who we are"
            title="Mobile, web and design, under one roof"
          />
          <p className="text-pretty self-end text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-periwinkle">
            {content.intro}
          </p>
        </div>

        <div
          className="relative mt-16 grid border-t border-white/10"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="pb-1 pr-5 pt-7">
              <div
                className={`text-[clamp(40px,4.4vw,60px)] font-bold leading-none tracking-[-0.04em] tabular ${
                  stat.accent ? 'text-electric' : 'text-white'
                }`}
              >
                <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[clamp(64px,8vw,110px)] flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-trBlue">Our team</div>
          <h3 className="mt-4 text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.05] tracking-[-0.035em] text-darkBlue">
            The people you&apos;ll work with
          </h3>
        </div>
        <p className="max-w-[400px] text-[17px] leading-relaxed text-muted">
          The founders are on every project, from the discovery call to the release.
        </p>
      </div>

      <div className="mt-9">
        <TeamGrid team={content.team} />
      </div>
    </section>
  );
};

export default WhoWeAre;
