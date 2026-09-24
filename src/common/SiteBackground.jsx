import React from 'react';

// Fractal-noise grain, tiled as a data-URI — no binary asset to ship.
const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.04 0 0 0 0 0.08 0 0 0 0 0.2 0 0 0 .08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Page wallpaper: a soft dot grid over the brand off-white, three blurred
 * brand-blue blobs and a hair of grain. Sits inside the same relative
 * wrapper as the page content (not viewport-fixed) so it scrolls with the
 * page like the source design, instead of staying pinned behind it.
 */
const SiteBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dot-light [background-size:28px_28px]" />

      <div className="absolute -left-[180px] -top-[220px] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.20),transparent_65%)] blur-[20px]" />
      <div className="absolute -right-[260px] top-[340px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(64,150,255,.22),transparent_62%)] blur-[24px]" />
      <div className="absolute -left-[300px] top-[170vh] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(21,112,239,.14),transparent_62%)]" />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: '160px 160px' }}
      />
    </div>
  );
};

export default SiteBackground;
