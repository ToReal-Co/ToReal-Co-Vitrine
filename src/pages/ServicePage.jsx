import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import SectionReveal from '../common/SectionReveal';
import BookaCallButton from '../common/BookACallButton';
import TiltCard, { CardSpotlight } from '../common/TiltCard';
import useMagnetic from '../common/useMagnetic';
import { useBooking } from '../common/BookingContext';
import { useI18n, localizePath } from '../i18n';
import { getServicePage, localizedServicePages } from '../content/services';
import { localizedProjects } from '../content/projects';
import { CONTACT } from '../lib/siteConfig';
import Contact from '../sections/Contact';
import {
  IconApple,
  IconAndroid,
  IconReact,
  IconBrowser,
  IconArrowRight,
  IconArrowUpRight,
} from '../common/Icons';

const SHOWCASES = {
  'developpement-mobile-tunisie': {
    names: ['CastMate', 'Serenity'],
    titleKey: 'mobileWorkTitle',
    leadKey: 'mobileWorkLead',
    badgeLabelKey: 'platforms',
    badges: [
      { icon: IconApple, label: 'iOS' },
      { icon: IconAndroid, label: 'Android' },
    ],
  },
  'developpement-web-tunisie': {
    names: ['Secret Hitler', 'Puretopia'],
    titleKey: 'webWorkTitle',
    leadKey: 'webWorkLead',
    badgeLabelKey: 'builtWith',
    badges: [
      { icon: IconReact, label: 'React' },
      { icon: IconBrowser, label: 'Web' },
    ],
  },
};

const ServicePage = ({ slug }) => {
  const { t, locale } = useI18n();
  const page = getServicePage(slug, locale);
  const { openBooking } = useBooking();
  const whatsapp = useMagnetic();
  const [openFaq, setOpenFaq] = useState(null);

  if (!page) return null;

  const related = localizedServicePages(locale).filter((item) => item.slug !== slug);
  const home = localizePath('/', locale);
  const showcase = SHOWCASES[slug];
  const showcaseProjects = showcase
    ? showcase.names
        .map((name) => localizedProjects(locale).find((project) => project.name === name))
        .filter(Boolean)
    : [];

  return (
    <div className="relative min-h-screen w-full">
      <Header />

      <main id="top" className="relative">
        <article
          className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] pb-10"
          style={{ paddingTop: 'clamp(120px,14vw,170px)' }}
        >
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-mutedSoft">
              <li>
                <Link to={home} className="transition-colors hover:text-trBlue">
                  {t.breadcrumb.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={`${home}#services`} className="transition-colors hover:text-trBlue">
                  {t.breadcrumb.services}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-trBlue">
                {page.eyebrow}
              </li>
            </ol>
          </nav>

          <header className="mt-9 max-w-[860px]">
            <h1 className="text-balance text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-darkBlue">
              {page.h1}
            </h1>
            <p className="text-pretty mt-7 text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-muted">
              {page.lead}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <BookaCallButton color="blue" onClick={openBooking}>
                {t.servicePage.ctaButton}
              </BookaCallButton>
              <a
                ref={whatsapp.ref}
                onMouseMove={whatsapp.onMouseMove}
                onMouseLeave={whatsapp.onMouseLeave}
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-darkBlue/[0.12] bg-white/70 px-7 py-3.5 text-[17px] font-semibold text-darkBlue backdrop-blur-md transition-[transform,border-color] duration-300 ease-out-magnet hover:border-whatsapp"
              >
                {t.servicePage.whatsapp} <IconArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </header>

          <SectionReveal delay={0}>
            <div className="mt-[clamp(40px,5vw,72px)] grid gap-x-[72px] gap-y-12 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="flex flex-col gap-[clamp(40px,5vw,64px)]">
                {page.sections.map((section) => (
                  <section key={section.h2}>
                    <h2 className="text-balance text-[clamp(26px,2.8vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-darkBlue">
                      {section.h2}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-pretty mt-5 text-[17px] leading-[1.7] text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <TiltCard
                  max={3}
                  spotlight
                  className="relative overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/80 p-[clamp(22px,3vw,32px)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_40px_80px_-48px_rgba(10,20,51,0.45)]"
                >
                  <CardSpotlight />
                  <h2 className="relative font-mono text-[12px] uppercase tracking-[0.14em] text-trBlue">
                    {t.servicePage.highlightsTitle}
                  </h2>
                  <ul className="relative mt-5 flex flex-col gap-3.5">
                    {page.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-[1.55] text-slate">
                        <span aria-hidden="true" className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-trBlue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </aside>
            </div>
          </SectionReveal>

          {showcaseProjects.length > 0 && (
            <SectionReveal delay={0}>
              <section className="mt-[clamp(40px,5vw,72px)]">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <h2 className="text-balance text-[clamp(26px,3vw,42px)] font-bold leading-[1.1] tracking-[-0.035em] text-darkBlue">
                      {t.servicePage[showcase.titleKey]}
                    </h2>
                    <p className="mt-3 text-[17px] text-muted">{t.servicePage[showcase.leadKey]}</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze">
                      {t.servicePage[showcase.badgeLabelKey]}
                    </span>
                    {showcase.badges.map(({ icon: BadgeIcon, label }) => (
                      <span key={label} className="inline-flex items-center gap-1.5 text-[13px] font-medium">
                        <BadgeIcon className="h-[18px] w-[18px]" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {showcaseProjects.map((project) => (
                    <article
                      key={project.name}
                      className="overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/80"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-navy">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-darkBlue">
                            {project.name}
                          </h3>
                          <span className="font-mono text-[12px] text-haze">{project.year}</span>
                        </div>
                        <p className="mt-2.5 line-clamp-2 text-[15px] leading-relaxed text-muted">
                          {project.description}
                        </p>
                        <div className="mt-5 flex items-center gap-3 text-slate">
                          {showcase.badges.map(({ icon: BadgeIcon, label }) => (
                            <BadgeIcon key={label} className="h-4 w-4" />
                          ))}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-trBlue transition-colors hover:text-darkBlue"
                            >
                              {project.linkLabel || 'Link'}
                              <IconArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </SectionReveal>
          )}

          <SectionReveal delay={0}>
            <section className="mt-[clamp(40px,5vw,72px)]">
              <h2 className="text-balance text-center text-[clamp(26px,3vw,42px)] font-bold leading-[1.1] tracking-[-0.035em] text-darkBlue">
                {t.servicePage.faqTitle}
              </h2>

              <div className="mx-auto mt-9 flex max-w-[900px] flex-col gap-3">
                {page.faq.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={item.question}
                      className="rounded-3xl bg-white/[0.82] transition-[border-color,box-shadow] duration-300"
                      style={{
                        border: `1px solid ${isOpen ? 'rgba(21,112,239,.35)' : 'rgba(10,20,51,.07)'}`,
                        boxShadow: isOpen ? '0 30px 60px -40px rgba(21,112,239,.5)' : 'none',
                      }}
                    >
                      <h3 className="m-0">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left text-[clamp(16px,1.4vw,19px)] font-semibold text-darkBlue"
                        >
                          {item.question}
                          <span
                            aria-hidden="true"
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[20px] font-normal transition-[transform,background,color] duration-[350ms]"
                            style={{
                              background: isOpen ? '#1570EF' : 'rgba(21,112,239,.1)',
                              color: isOpen ? '#fff' : '#1570EF',
                              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                            }}
                          >
                            +
                          </span>
                        </button>
                      </h3>
                      <div
                        className="grid transition-[grid-template-rows] duration-[450ms] ease-out-magnet"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[760px] whitespace-pre-line px-7 pb-7 text-[16px] leading-[1.7] text-muted">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0}>
            <section className="mt-[clamp(40px,5vw,72px)]">
              <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-trBlue">
                {t.servicePage.relatedTitle}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={localizePath(item.path, locale)}
                    className="group rounded-[24px] border border-darkBlue/[0.07] bg-white/[0.78] p-7 transition-[border-color,transform] duration-300 hover:border-trBlue"
                  >
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-darkBlue">
                      {item.h1}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-trBlue">
                      {t.services.readMore}
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </SectionReveal>
        </article>

        <SectionReveal delay={0}>
          <Contact />
        </SectionReveal>
      </main>

      <SectionReveal delay={0}>
        <Footer />
      </SectionReveal>
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
