import React, { useEffect, useState } from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import { getCmsProjects } from '../lib/projectsApi';
import SectionHeading from '../common/SectionHeading';
import podcastImage from '../assets/images/podcast.webp';
import clothesImage from '../assets/images/clothes.webp';
import childEducationImage from '../assets/images/childEducation.webp';
import bioFoodImage from '../assets/images/bioFood.webp';
import salesOverviewImage from '../assets/images/salesOverviewImage.webp';
import meditationImage from '../assets/images/meditationImage.webp';
import teamUnityImage from '../assets/images/teamUnity.webp';
import sushiImage from '../assets/images/sushi.webp';
import glamoraImage from '../assets/images/glamoraImage.webp';
import secretHitlerImage from '../assets/images/secret-hitler-web-poster-square.webp';

const FALLBACK_PROJECTS = [
  {
    name: 'CastMate',
    category: 'Mobile',
    kind: 'Mobile app',
    year: '2025',
    image: podcastImage,
    description:
      'Find and listen to podcasts according to your preferences with simplicity. Offline content, an intelligent recommendation system, and a huge collection of media. All on a single app!',
  },
  {
    name: 'Secret Hitler',
    category: 'Web',
    kind: 'Web experience',
    year: '2025',
    image: secretHitlerImage,
    description:
      'The social deduction game, online. Betrayal, votes and laws around the same table — for 5 to 10 players, in French and English.',
    link: 'https://secret-hetler.netlify.app/',
  },
  {
    name: 'Dapperdash',
    category: 'E-commerce',
    kind: 'E-commerce',
    year: '2024',
    image: clothesImage,
    description: 'A mobile fashion store with curated collections, categories and a fast checkout.',
  },
  {
    name: 'Puretopia',
    category: 'Web',
    kind: 'Website',
    year: '2024',
    image: childEducationImage,
    description:
      'An educational platform for preschoolers, featuring fun games and activities that support early learning and development.',
  },
  {
    name: 'Avocado Mood',
    category: 'Web',
    kind: 'Website',
    year: '2024',
    image: bioFoodImage,
    description:
      'Discover bio food with Avocado Mood — expert tips, healthy recipes and insights on organic food for a balanced lifestyle.',
  },
  {
    name: 'SyncroWave',
    category: 'UI/UX',
    kind: 'Product design',
    year: '2025',
    image: salesOverviewImage,
    description: 'A sales analytics dashboard: overview, insights and targets in one screen.',
  },
  {
    name: 'Serenity',
    category: 'Mobile',
    kind: 'Mobile app',
    year: '2024',
    image: meditationImage,
    description:
      'Find peace with Serenity, the meditation app designed for relaxation, stress relief, and enhanced focus in just a few minutes a day.',
  },
  {
    name: 'Team Unity',
    category: 'Web',
    kind: 'Website',
    year: '2024',
    image: teamUnityImage,
    description:
      'Enhance team collaboration and productivity — organize tasks, monitor performance, and simplify communication in one app.',
  },
  {
    name: 'SushiMan',
    category: 'Mobile',
    kind: 'Mobile app',
    year: '2024',
    image: sushiImage,
    description:
      'Discover, personalize and order your favorite sushi dishes easily, and enjoy the best sushi.',
  },
  {
    name: 'Glamora',
    category: 'E-commerce',
    kind: 'E-commerce',
    year: '2024',
    image: glamoraImage,
    description:
      'Shop fashion with Glamora — trendy clothing, accessories, hassle-free ordering and secure payments.',
  },
];

function OurProjects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const onResize = () => setDesktop(window.innerWidth >= 900);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    getCmsProjects().then((cmsProjects) => {
      if (cancelled || !cmsProjects) return;
      const mapped = cmsProjects
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((p) => ({
          name: p.name,
          category: p.category,
          kind: p.category,
          year: p.year || '',
          description: p.description,
          link: p.link || undefined,
          image: p.imageUrl,
        }));
      setProjects(mapped);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const cats = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="work"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="flex flex-wrap items-end justify-between gap-7">
        <div className="max-w-[760px]">
          <SectionHeading eyebrow="[03] Our projects" title="Products we designed, built and shipped" />
        </div>
        <div
          role="tablist"
          aria-label="Filter projects"
          className="flex flex-wrap gap-1.5 rounded-full border border-darkBlue/[0.07] bg-white/75 p-1.5"
        >
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              onClick={() => {
                setFilter(c);
                setHovered(null);
              }}
              className={`rounded-full px-[18px] py-2.5 text-[14px] font-semibold transition-colors duration-250 ${
                filter === c ? 'bg-darkBlue text-white' : 'text-muted hover:text-darkBlue'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mt-12 grid gap-5"
        style={{
          gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))',
          gridAutoFlow: 'dense',
        }}
      >
        {shown.map((project, index) => {
          const isHovered = hovered === project.name;
          const spanFirst = filter === 'All' && index === 0 && desktop;

          return (
            <TiltCard
              key={project.name}
              max={3}
              spotlight
              className={spanFirst ? 'sm:col-span-2' : ''}
            >
              <article
                tabIndex={0}
                role="button"
                aria-label={`${project.name} — ${project.description}`}
                onMouseEnter={() => setHovered(project.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(project.name)}
                onBlur={() => setHovered(null)}
                onClick={() => setHovered((prev) => (prev === project.name ? null : project.name))}
                className="relative h-[clamp(380px,38vw,480px)] cursor-pointer overflow-hidden rounded-[28px] bg-navy shadow-[0_20px_50px_-40px_rgba(6,19,64,0.5)] transition-shadow duration-400"
              >
                <CardSpotlight color="rgba(91,155,255,.25)" size={420} />

                <div
                  className="absolute inset-0 transition-transform duration-[900ms] ease-out-magnet"
                  style={{ transform: isHovered ? 'scale(1.07)' : 'scale(1)' }}
                >
                  {project.image && (
                    <img src={project.image} alt={project.name} loading="lazy" className="h-full w-full object-cover" />
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
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-[15px] text-darkBlue transition-transform duration-500 ease-out-magnet"
                    style={{ transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'rotate(0deg)' }}
                  >
                    ↗
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-[26px] text-white">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[clamp(26px,2.4vw,34px)] font-bold tracking-[-0.03em]">{project.name}</h3>
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
                              Play now
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
      </div>
    </section>
  );
}

export default OurProjects;
