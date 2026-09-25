import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import SectionReveal from '../common/SectionReveal';
import { useI18n, localizePath } from '../i18n';
import { getLegalPage, localizedLegalPages } from '../content/legal';

const LegalPage = ({ slug }) => {
  const { locale, t } = useI18n();
  const page = getLegalPage(slug, locale);

  if (!page) return null;

  const home = localizePath('/', locale);
  const other = localizedLegalPages(locale).filter((item) => item.slug !== slug);

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
              <li aria-current="page" className="text-trBlue">
                {page.eyebrow}
              </li>
            </ol>
          </nav>

          <header className="mt-9 max-w-[820px]">
            <h1 className="text-balance text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-darkBlue">
              {page.h1}
            </h1>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-mutedSoft">
              {page.updated}
            </p>
          </header>

          <div className="mt-[clamp(40px,5vw,64px)] flex max-w-[760px] flex-col gap-[clamp(36px,4vw,52px)]">
            {page.sections.map((section) => (
              <section key={section.h2}>
                <h2 className="text-balance text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.15] tracking-[-0.03em] text-darkBlue">
                  {section.h2}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 56)}
                    className="text-pretty mt-4 text-[17px] leading-[1.7] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {other.length > 0 && (
            <SectionReveal delay={0}>
              <nav className="mt-[clamp(56px,7vw,96px)] border-t border-darkBlue/[0.08] pt-10">
                <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-mutedSoft">
                  {t.legal.also}
                </p>
                <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">
                  {other.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={localizePath(item.path, locale)}
                        className="text-[17px] font-semibold text-darkBlue underline decoration-[1.5px] underline-offset-4 transition-colors hover:text-trBlue"
                      >
                        {item.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SectionReveal>
          )}
        </article>
      </main>

      <SectionReveal delay={0}>
        <Footer />
      </SectionReveal>
      <WhatsAppButton />
    </div>
  );
};

export default LegalPage;
