import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/logoToRealSVG.svg';
import BookaCallButton from '../common/BookACallButton';
import { useBooking } from '../common/BookingContext';
import useScrollLock from '../common/useScrollLock';
import { useI18n, localizePath, swapLocalePath } from '../i18n';

/** Compact SVG flags — emoji flags render poorly on Windows. */
function Flag({ locale, className = 'h-4 w-6' }) {
  if (locale === 'en') {
    return (
      <svg
        viewBox="0 0 60 40"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="5" />
        <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
        <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="7" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="20" height="40" fill="#002395" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#ED2939" />
    </svg>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { openBooking } = useBooking();
  const { locale, t } = useI18n();
  const { pathname } = useLocation();

  const home = localizePath('/', locale);
  // On a service page the section anchors have to travel back to the
  // homepage first, otherwise they resolve against the wrong document.
  const onHome = pathname === home || pathname === home.replace(/\/$/, '');
  const anchor = (hash) => (onHome ? `#${hash}` : `${home}#${hash}`);

  const navLinks = [
    { label: t.nav.services, href: anchor('services') },
    { label: t.nav.about, href: anchor('about') },
    { label: t.nav.work, href: anchor('work') },
    { label: t.nav.process, href: anchor('process') },
    { label: t.nav.faq, href: anchor('faq') },
  ];

  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const switchHref = swapLocalePath(pathname, otherLocale);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      setScrolled(y > 24);
      setHidden((prev) => {
        if (y < 80) return false;
        if (dy > 6) return true;
        if (dy < -6) return false;
        return prev;
      });
      if (Math.abs(dy) > 6 || y < 80) lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useScrollLock(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen &&
        createPortal(
          <button
            type="button"
            aria-label={locale === 'en' ? 'Close menu' : 'Fermer le menu'}
            className="fixed inset-0 z-40 cursor-default border-0 bg-inkDeep/35 backdrop-blur-[2px] min-[900px]:hidden"
            onClick={closeMenu}
          />,
          document.body
        )}

    <header
      className="fixed inset-x-0 top-3.5 z-50 px-3.5 transition-transform duration-[450ms] ease-out-magnet sm:px-8"
      style={{ transform: hidden && !menuOpen ? 'translateY(calc(-100% - 24px))' : 'translateY(0)' }}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-full py-2.5 pl-[18px] pr-2.5 backdrop-blur-xl transition-shadow duration-400 ${
          scrolled
            ? 'bg-white/95 shadow-[0_18px_40px_-22px_rgba(10,20,51,0.35)] ring-1 ring-darkBlue/[0.08]'
            : 'bg-white/95 shadow-none ring-1 ring-darkBlue/[0.08]'
        }`}
        style={{ backdropFilter: 'blur(18px) saturate(1.4)' }}
      >
        <Link
          to={home}
          aria-label={t.nav.home}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="ToReal&Co"
            width={122}
            height={45}
            className="block h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="hidden min-[900px]:flex min-[900px]:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-slate transition-colors duration-200 hover:bg-trBlue/[0.08] hover:text-trBlue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={switchHref}
            hrefLang={otherLocale}
            aria-label={t.nav.langSwitchLabel}
            title={t.nav.langSwitch}
            className="hidden h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-darkBlue/10 bg-white transition-transform duration-200 hover:scale-105 min-[900px]:inline-flex"
          >
            <Flag locale={otherLocale} className="h-[14px] w-[21px] rounded-[2px] shadow-sm" />
          </Link>

          <BookaCallButton
            className="hidden px-5 py-3 text-[15px] min-[900px]:inline-flex"
            color="blue"
            magnetic={false}
            onClick={openBooking}
          >
            {t.nav.bookCall}
          </BookaCallButton>

          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-darkBlue/10 bg-white transition-transform duration-200 hover:scale-105 min-[900px]:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-[1.5px] w-4 bg-darkBlue" />
              <span className="h-[1.5px] w-4 bg-darkBlue" />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 flex max-w-[1280px] flex-col rounded-3xl border border-darkBlue/[0.07] bg-white/95 p-2.5 shadow-[0_20px_50px_-20px_rgba(10,20,51,0.3)] backdrop-blur-xl min-[900px]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3.5 text-[17px] font-medium text-darkBlue transition-colors hover:bg-trBlue/[0.06]"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={switchHref}
            hrefLang={otherLocale}
            onClick={closeMenu}
            aria-label={t.nav.langSwitchLabel}
            className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[17px] font-medium text-darkBlue transition-colors hover:bg-trBlue/[0.06]"
          >
            <Flag locale={otherLocale} className="h-4 w-6 rounded-[2px] shadow-sm" />
            {t.nav.langSwitch}
          </Link>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
