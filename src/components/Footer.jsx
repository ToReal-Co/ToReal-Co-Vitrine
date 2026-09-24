import React from 'react';
import mark from '../assets/images/logoWithoutText.svg';
import { useBooking } from '../common/BookingContext';

const WHATSAPP_URL = 'https://wa.me/21658693946';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Who we are', href: '#about' },
  { label: 'Our projects', href: '#work' },
  { label: 'How we work', href: '#process' },
  { label: 'FAQs', href: '#faq' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    hover: 'hover:bg-trBlue hover:border-trBlue',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z',
  },
  {
    label: 'X',
    href: '#',
    hover: 'hover:bg-trBlue hover:border-trBlue',
    path: 'M17.53 3h3.2l-7 8 8.23 10h-6.44l-5.05-6.6L4.7 21H1.5l7.49-8.56L1.1 3h6.6l4.56 6.03L17.53 3Zm-1.12 16.1h1.77L7.68 4.8H5.78l10.63 14.3Z',
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    hover: 'hover:bg-whatsapp hover:border-whatsapp',
    path: 'M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.13h-.01a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 0 1-1.27-4.4c0-4.56 3.72-8.28 8.3-8.28 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.72 8.27-8.28 8.27Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.12.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.05-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z',
  },
];

const Footer = () => {
  const { openBooking } = useBooking();

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
          <div className="min-w-0 sm:col-span-2 lg:col-span-2 lg:max-w-[420px]">
            <div className="flex items-center gap-3">
              <img src={mark} alt="" aria-hidden="true" className="h-11 w-11" />
              <span className="text-[26px] font-bold tracking-[-0.02em]">ToReal&amp;Co</span>
            </div>
            <p className="mt-5 text-[17px] leading-relaxed text-periwinkle">
              From Concept to Real — bring your digital vision to life.
            </p>
          </div>

          <div>
            <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.2em] text-fog">Explore</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-[16px] transition-colors hover:text-electric">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.2em] text-fog">Get in touch</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+21658693946" className="text-[16px] transition-colors hover:text-electric">
                +216 58 693 946
              </a>
              <button
                type="button"
                onClick={openBooking}
                className="text-left text-[16px] transition-colors hover:text-electric"
              >
                Free 30-min discovery call
              </button>
            </div>

            <div className="mt-1.5 flex gap-2 pt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className={`grid h-[42px] w-[42px] place-items-center rounded-full border border-white/15 text-white transition-all duration-300 ease-out-magnet ${social.hover}`}
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
                    <path d={social.path} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mt-16 overflow-x-clip whitespace-nowrap font-extrabold leading-[0.95] tracking-[-0.06em] text-transparent"
          style={{
            fontSize: 'clamp(64px,15vw,210px)',
            paddingBottom: '0.08em',
            WebkitTextStroke: '1px rgba(255,255,255,.18)',
          }}
        >
          ToReal&amp;Co
        </div>

        <div className="relative mt-7 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-[22px] text-[14px] text-steel">
          <span>©2026 ToReal&amp;Co</span>
          <span className="font-mono text-[12px]">Bizerte, Tunisia · 37.27°N 9.87°E</span>
          <span>Expert solutions, real results!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
