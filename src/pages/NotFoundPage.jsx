import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useI18n, localizePath } from '../i18n';
import { IconArrowRight } from '../common/Icons';

const COPY = {
  fr: {
    title: 'Page introuvable',
    lead: 'Cette adresse n’existe pas — ou plus. Retournez à l’accueil pour continuer.',
    home: 'Retour à l’accueil',
  },
  en: {
    title: 'Page not found',
    lead: 'This address doesn’t exist — or no longer does. Head home to keep going.',
    home: 'Back to home',
  },
};

const NotFoundPage = () => {
  const { locale } = useI18n();
  const copy = COPY[locale] || COPY.fr;
  const home = localizePath('/', locale);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />

      <main
        id="top"
        className="relative flex flex-1 items-center justify-center px-[clamp(20px,4vw,48px)] pb-16"
        style={{ paddingTop: 'clamp(110px,12vw,150px)' }}
      >
        <div className="relative w-full max-w-[920px] overflow-hidden rounded-[36px] bg-navy px-[clamp(28px,6vw,72px)] py-[clamp(48px,8vw,88px)] text-center text-white shadow-[0_40px_80px_-48px_rgba(6,19,64,0.7)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[20%] top-[-30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.45),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[40%] -right-[15%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(91,155,255,.28),transparent_65%)]"
          />

          <div
            aria-hidden="true"
            className="relative mx-auto select-none font-extrabold leading-[0.85] tracking-[-0.07em] text-transparent"
            style={{
              fontSize: 'clamp(7rem, 28vw, 13.5rem)',
              WebkitTextStroke: '1.5px rgba(255,255,255,.22)',
            }}
          >
            404
          </div>

          <p className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-electric">
            Error
          </p>

          <h1 className="relative mt-4 text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            {copy.title}
          </h1>

          <p className="relative mx-auto mt-5 max-w-[420px] text-pretty text-[17px] leading-[1.65] text-periwinkle">
            {copy.lead}
          </p>

          <Link
            to={home}
            className="relative mt-9 inline-flex items-center gap-2.5 rounded-full bg-trBlue px-7 py-3.5 text-[16px] font-semibold text-white transition-[transform,background] duration-300 ease-out-magnet hover:scale-[1.02] hover:bg-trBlueDark"
          >
            {copy.home}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
