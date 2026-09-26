import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import { IconCheck } from '../common/Icons';

/**
 * three.js is heavy (~100KB). Skip on mobile / reduced-motion. On desktop,
 * load shortly after first paint so the mark appears quickly without
 * blocking FCP/LCP.
 */
const HeroShowcase = () => {
  const { t } = useI18n();
  const [Cube, setCube] = useState(null);

  useEffect(() => {
    let alive = true;
    let idleId;
    let timeoutId;

    const skipCube =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 900px)').matches ||
      Boolean(navigator.connection?.saveData);

    if (skipCube) return undefined;

    const load = () => {
      import('./HeroCube')
        .then((mod) => {
          if (alive) setCube(() => mod.default);
        })
        .catch(() => {});
    };

    const start = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(load, { timeout: 1200 });
      } else {
        timeoutId = window.setTimeout(load, 400);
      }
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    return () => {
      alive = false;
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative z-[1] h-[clamp(360px,46vw,600px)] -translate-y-3 sm:-translate-y-4 lg:-translate-y-6">
      {Cube ? <Cube /> : null}

      <div className="pointer-events-none absolute right-[2%] top-[4%] flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/[0.66] py-2.5 pl-2.5 pr-4 shadow-[0_16px_40px_-18px_rgba(10,20,51,0.35)] backdrop-blur-md">
        <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-trBlue/[0.12] text-trBlue">
          <IconCheck className="h-3.5 w-3.5" />
        </span>
        <span className="text-[14px] font-semibold leading-[1.2]">
          {t.hero.showcase.badgeTop}
          <br />
          {t.hero.showcase.badgeBottom}
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-[6%] left-0 min-w-[240px] rounded-2xl border border-white/[0.08] bg-navy/[0.86] px-4 py-3.5 font-mono text-[12px] leading-[1.8] text-skyline shadow-[0_20px_50px_-20px_rgba(6,19,64,0.6)] backdrop-blur-md">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
        </div>
        <div>
          <span className="text-electric">~/toreal</span> $ {t.hero.showcase.command}
        </div>
        {t.hero.showcase.lines.map((line) => (
          <div key={line}>
            <span className="inline-flex text-emerald-300">
              <IconCheck className="h-3 w-3" strokeWidth={2.2} />
            </span>{' '}
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroShowcase;
