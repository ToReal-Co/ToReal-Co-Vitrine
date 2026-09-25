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

  const match = typeof eyebrow === 'string' ? eyebrow.match(/^\[([^\]]+)\]\s*(.*)$/) : null;
  const eyebrowIndex = match?.[1];
  const eyebrowLabel = match?.[2] || eyebrow;

  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 font-mono text-[13px] font-normal uppercase tracking-[0.12em] ${
            align === 'center' ? 'justify-center' : ''
          } ${isDark ? 'text-electric' : 'text-trBlue'}`}
        >
          {eyebrowIndex ? (
            <>
              <span
                className={`inline-grid h-8 min-w-8 place-items-center rounded-lg px-2 tracking-[0.08em] ${
                  isDark
                    ? 'bg-white/[0.08] ring-1 ring-inset ring-white/20'
                    : 'bg-trBlue/[0.1] ring-1 ring-inset ring-trBlue/20'
                }`}
              >
                {eyebrowIndex}
              </span>
              <span>{eyebrowLabel}</span>
            </>
          ) : (
            <span>{eyebrow}</span>
          )}
        </div>
      )}
      <h2
        className={`text-balance mt-5 font-bold tracking-[-0.04em] ${titleSize} ${
          isDark ? 'text-white' : 'text-darkBlue'
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
