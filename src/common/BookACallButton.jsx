import React from 'react';
import useMagnetic from './useMagnetic';

const colorClasses = {
  blue: 'bg-trBlue text-white shadow-[0_14px_34px_-12px_rgba(21,112,239,0.7)] hover:bg-trBlueDark',
  dark: 'bg-darkBlue text-white shadow-soft hover:bg-inkSoft',
  white: 'bg-white text-darkBlue shadow-soft hover:bg-trWhite',
  ghost:
    'bg-white/70 backdrop-blur-md ring-1 ring-inset ring-darkBlue/[0.12] text-darkBlue hover:ring-trBlue hover:text-trBlue',
  outline:
    'bg-transparent text-white ring-1 ring-inset ring-white/25 hover:ring-white/60 hover:bg-white/10',
};

const BookaCallButton = ({
  color = 'blue',
  children,
  onClick,
  className = '',
  arrow = true,
  type = 'button',
}) => {
  const magnetic = useMagnetic();
  const base =
    'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-[16px] font-semibold tracking-[-0.01em] transition-[transform,background,color,box-shadow] duration-300 ease-out-magnet';

  return (
    <button
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      type={type}
      className={`${base} ${colorClasses[color] || colorClasses.blue} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {arrow && (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        >
          <path
            d="M4 10h11M11 5.5 15.5 10 11 14.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default BookaCallButton;
