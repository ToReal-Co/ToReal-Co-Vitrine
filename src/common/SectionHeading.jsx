import React from 'react';

/**
 * Section header: a bracketed mono eyebrow ("[01] Services") over a large
 * headline. Deliberately renders only these two lines — each section lays
 * out its own lead paragraph alongside/below, since the source design puts
 * that paragraph in very different grid positions from section to section.
 */
const SectionHeading = ({
  eyebrow,
  title,
  tone = 'light',
  align = 'left',
  size = 'xl',
  className = '',
}) => {
  const isDark = tone === 'dark';
  const titleSize =
    size === 'lg' ? 'text-[clamp(34px,4.2vw,58px)] leading-[1.04]' : 'text-[clamp(36px,4.6vw,64px)] leading-[1.02]';

  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div
          className={`font-mono text-[12px] uppercase tracking-[0.14em] ${
            isDark ? 'text-electric' : 'text-trBlue'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-balance mt-[18px] font-bold tracking-[-0.04em] ${titleSize} ${
          isDark ? 'text-white' : 'text-darkBlue'
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
