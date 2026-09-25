import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logoOnDark.svg';
import { useBooking } from '../common/BookingContext';
import { useI18n, localizePath } from '../i18n';
import { CONTACT, ADDRESS, SOCIAL } from '../lib/siteConfig';

const ICON_PATHS = {
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z',
  x: 'M17.53 3h3.2l-7 8 8.23 10h-6.44l-5.05-6.6L4.7 21H1.5l7.49-8.56L1.1 3h6.6l4.56 6.03L17.53 3Zm-1.12 16.1h1.77L7.68 4.8H5.78l10.63 14.3Z',
  instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.26a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Zm5.6-7.44a1.03 1.03 0 1 1-2.06 0 1.03 1.03 0 0 1 2.06 0Z',
  facebook:
    'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z',
  github:
    'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z',
};

const Footer = () => {
  const { openBooking } = useBooking();
  const { locale, t } = useI18n();
  const { pathname } = useLocation();

  const home = localizePath('/', locale);
  const onHome = pathname === home || pathname === home.replace(/\/$/, '');
  const anchor = (hash) => (onHome ? `#${hash}` : `${home}#${hash}`);

  const navLinks = [
    { label: t.nav.services, href: anchor('services') },
    { label: t.nav.about, href: anchor('about') },
    { label: t.nav.work, href: anchor('work') },
    { label: t.nav.process, href: anchor('process') },
    { label: t.nav.faq, href: anchor('faq') },
  ];

  // Only profiles that actually exist are linked — an anchor pointing at
  // "#" is a dead end for users and a wasted crawl for search engines.
  const socials = Object.entries(SOCIAL)
    .filter(([, href]) => Boolean(href))
    .map(([key, href]) => ({ key, href, label: key, path: ICON_PATHS[key] }));

  return (
    <footer
      data-screen-label="Footer"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] pb-6"
      style={{ paddingTop: 'clamp(90px,11vw,150px)' }}
    >
      <div className="relative overflow-hidden rounded-[36px] bg-navy px-[clamp(28px,5vw,64px)] pb-7 pt-[clamp(28px,5vw,64px)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[300px] -right-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.4),transparent_65%)]"
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative z-[1] min-w-0 sm:col-span-2 lg:col-span-1">
            <Link to={home} aria-label={t.nav.home} className="inline-flex max-w-full">
              <img
                src={logo}
                alt="ToReal&Co"
                width={154}
                height={56}
                className="h-10 w-auto max-w-full object-contain object-left sm:h-12"
              />
            </Link>
            <p className="mt-5 text-[17px] leading-relaxed text-periwinkle">{t.footer.tagline}</p>

            {socials.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/15 text-white transition-all duration-300 ease-out-magnet hover:border-trBlue hover:bg-trBlue"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
                      <path d={social.path} fill="currentColor" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              {t.footer.servicesTitle}
            </div>
            <div className="flex flex-col gap-3">
              {t.services.items.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="text-[16px] transition-colors hover:text-electric"
                >
                  {service.linkLabel}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              {t.footer.explore}
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[16px] transition-colors hover:text-electric"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              {t.footer.getInTouch}
            </div>
            <address className="flex flex-col gap-3 not-italic">
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="text-[16px] transition-colors hover:text-electric"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] transition-colors hover:text-electric"
              >
                WhatsApp
              </a>
              <span className="text-[16px] text-periwinkle">
                {ADDRESS.locality}, {ADDRESS.countryName}
              </span>
            </address>

            <button
              type="button"
              onClick={openBooking}
              className="mt-3 text-left text-[16px] text-white transition-colors hover:text-electric"
            >
              {t.footer.discoveryCall}
            </button>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1000 150"
          className="relative mt-16 block w-full select-none"
          preserveAspectRatio="xMinYMid meet"
        >
          <text
            x="0"
            y="118"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.5"
            style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 148,
              letterSpacing: '-0.06em',
            }}
          >
            ToReal&amp;Co
          </text>
        </svg>

        <div className="relative mt-7 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-[22px] text-[14px] text-steel">
          <span>{t.footer.rights}</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={t.footer.legalNotice}>
            <Link
              to={localizePath('/mentions-legales/', locale)}
              className="transition-colors hover:text-white"
            >
              {t.footer.legalNotice}
            </Link>
            <Link
              to={localizePath('/politique-de-confidentialite/', locale)}
              className="transition-colors hover:text-white"
            >
              {t.footer.privacy}
            </Link>
          </nav>
          <span className="font-mono text-[12px]">{t.footer.location}</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
