import React, { useRef } from 'react';

/**
 * Wraps children in a card that tilts toward the cursor in 3D and exposes
 * `--mx`/`--my`/`--go` custom properties for a cursor-spotlight overlay (see
 * CardSpotlight). The float/entrance animation must live on a PARENT
 * element, not here — this component drives `transform` directly via JS on
 * every mousemove, which would fight a CSS animation declared on the same
 * node.
 */
const TiltCard = ({ children, className = '', max = 8, spotlight = false }) => {
  const ref = useRef(null);
  const frame = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      if (spotlight) {
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
        el.style.setProperty('--go', '1');
      }
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    if (spotlight) el.style.setProperty('--go', '0');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`[transform-style:preserve-3d] transition-transform duration-300 ease-out-expo will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export const CardSpotlight = ({ color = 'rgba(21,112,239,.16)', size = 380 }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[var(--go,0)] transition-opacity duration-400"
    style={{
      background: `radial-gradient(${size}px circle at var(--mx,50%) var(--my,50%), ${color}, transparent 60%)`,
    }}
  />
);

export default TiltCard;
