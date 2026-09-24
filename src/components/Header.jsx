import React, { useEffect, useRef, useState } from 'react';

import logoMark from '../assets/images/logoWithoutText.svg';
import BookaCallButton from '../common/BookACallButton';
import { useBooking } from '../common/BookingContext';
import useScrollLock from '../common/useScrollLock';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Who we are', href: '#about' },
  { label: 'Our projects', href: '#work' },
  { label: 'How we work', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { openBooking } = useBooking();

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
    <header
      className="fixed inset-x-0 top-3.5 z-50 px-3.5 transition-transform duration-[450ms] ease-out-magnet sm:px-8"
      style={{ transform: hidden && !menuOpen ? 'translateY(calc(-100% - 24px))' : 'translateY(0)' }}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-full py-2.5 pl-[18px] pr-2.5 backdrop-blur-xl transition-shadow duration-400 ${
          scrolled
            ? 'bg-white/72 shadow-[0_18px_40px_-22px_rgba(10,20,51,0.35)] ring-1 ring-darkBlue/[0.07]'
            : 'bg-white/72 shadow-none ring-1 ring-darkBlue/[0.07]'
        }`}
        style={{ backdropFilter: 'blur(18px) saturate(1.4)' }}
      >
        <a href="#top" aria-label="ToReal&Co home" className="flex shrink-0 items-center gap-2.5 text-darkBlue">
          <img src={logoMark} alt="" width={34} height={34} className="block shrink-0" />
          <span className="text-[19px] font-bold tracking-[-0.02em]">
            ToReal<span className="text-trBlue">&amp;</span>Co
          </span>
        </a>

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
          <BookaCallButton
            className="hidden px-5 py-3 text-[15px] min-[900px]:inline-flex"
            color="blue"
            onClick={openBooking}
          >
            Book a call
          </BookaCallButton>

          <button
            type="button"
            aria-label="Menu"
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
        </div>
      )}
    </header>
  );
};

export default Header;
