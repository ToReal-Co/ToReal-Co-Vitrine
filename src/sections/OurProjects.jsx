import React, { useEffect, useRef, useState } from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import SectionHeading from '../common/SectionHeading';
import { localizedProjects } from '../content/projects';
import { useI18n } from '../i18n';
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from '../common/Icons';

function OurProjects() {
  const { t, locale } = useI18n();
  const ALL = t.projects.filterAll;
  const [projects, setProjects] = useState(() => localizedProjects(locale));
  const [filter, setFilter] = useState(ALL);
  const [hovered, setHovered] = useState(null);
  const trackRef = useRef(null);

  useEffect(() => {
    setProjects(localizedProjects(locale));
    setFilter(ALL);
  }, [locale, ALL]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    setHovered(null);
  }, [filter]);

  const cats = [ALL, ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];
  const shown = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-project-card]');
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section
      id="work"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="flex flex-wrap items-end justify-between gap-7">
        <div className="max-w-[760px]">
          <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div
            role="tablist"
            aria-label={t.projects.filterLabel}
            className="flex flex-wrap gap-1.5 rounded-full border border-darkBlue/[0.07] bg-white/75 p-1.5"
          >
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-[18px] py-2.5 text-[14px] font-semibold transition-colors duration-250 ${
                  filter === c ? 'bg-darkBlue text-white' : 'text-muted hover:text-darkBlue'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="hidden gap-1.5 sm:flex">
            <button
              type="button"
              aria-label={t.projects.prev}
              onClick={() => scrollByCard(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-darkBlue/10 bg-white text-darkBlue transition-colors hover:border-trBlue hover:text-trBlue"
            >
              <IconArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={t.projects.next}
              onClick={() => scrollByCard(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-darkBlue/10 bg-white text-darkBlue transition-colors hover:border-trBlue hover:text-trBlue"
            >
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-[28px]">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {shown.map((project) => {
            const isHovered = hovered === project.name;

            return (
              <TiltCard
                key={project.name}
                max={3}
                spotlight
                className="w-[min(100%,calc(100%-28px))] shrink-0 snap-start sm:w-[min(72%,400px)]"
              >
                <article
                  data-project-card
                  tabIndex={0}
                  role="button"
                  aria-label={`${project.name} — ${project.description}`}
                  onMouseEnter={() => setHovered(project.name)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(project.name)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setHovered((prev) => (prev === project.name ? null : project.name))}
                  className="relative h-[min(62vh,460px)] cursor-pointer overflow-hidden rounded-[28px] bg-navy shadow-[0_20px_50px_-40px_rgba(6,19,64,0.5)] transition-shadow duration-400"
                >
                  <CardSpotlight color="rgba(91,155,255,.25)" size={420} />

                  <div
                    className="absolute inset-0 transition-transform duration-[900ms] ease-out-magnet"
                    style={{ transform: isHovered ? 'scale(1.07)' : 'scale(1)' }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg,rgba(6,19,64,0) 35%,rgba(6,19,64,.55) 62%,rgba(6,19,64,.94) 100%)',
                    }}
                  />

                  <div className="pointer-events-none absolute inset-x-[18px] top-[18px] flex justify-between">
                    <span className="rounded-full border border-white/25 bg-white/[0.18] px-3 py-[7px] font-mono text-[11px] uppercase tracking-[0.1em] text-white backdrop-blur-md">
                      {project.kind}
                    </span>
                    <span
                      className="grid h-9 w-9 place-items-center rounded-full bg-white text-darkBlue transition-transform duration-500 ease-out-magnet"
                      style={{ transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'rotate(0deg)' }}
                    >
                      <IconArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-[26px] text-white">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[clamp(26px,2.4vw,34px)] font-bold tracking-[-0.03em]">
                        {project.name}
                      </h3>
                      <span className="font-mono text-[12px] text-skyline">{project.year}</span>
                    </div>
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-out-magnet"
                      style={{ gridTemplateRows: isHovered ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="mt-3 max-w-[520px] text-[15px] leading-[1.55] text-[#D5DEF3] transition-opacity duration-400"
                          style={{ opacity: isHovered ? 1 : 0 }}
                        >
                          {project.description}
                          {project.link && (
                            <>
                              {' '}
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="pointer-events-auto font-semibold text-electric underline underline-offset-4 hover:text-white"
                              >
                                {project.linkLabel || t.projects.visit}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </TiltCard>
            );
          })}
          <div className="w-1 shrink-0 sm:w-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
