import React from 'react';

const base = 'shrink-0';

/** Shared stroke icons — replaces emoji/unicode symbols in the UI. */
export function IconArrowRight({ className = 'h-4 w-4', strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M4 10h11M11 5.5 15.5 10 11 14.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowLeft({ className = 'h-4 w-4', strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M16 10H5M9 5.5 4.5 10 9 14.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowUpRight({ className = 'h-4 w-4', strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M6 14 14 6M8 6h6v6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconClose({ className = 'h-4 w-4', strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M5 5l10 10M15 5 5 15"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCheck({ className = 'h-4 w-4', strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDot({ className = 'h-1.5 w-1.5' }) {
  return (
    <svg viewBox="0 0 8 8" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="4" cy="4" r="3" />
    </svg>
  );
}

export function IconApple({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function IconAndroid({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.25L16.46 8.9A11.5 11.5 0 0 0 12 8c-1.6 0-3.11.31-4.46.9L5.65 5.7a.637.637 0 0 0-.83-.25c-.3.16-.42.54-.26.85L6.4 9.48A10.7 10.7 0 0 0 1 18h22a10.7 10.7 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

export function IconReact({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function IconBrowser({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
