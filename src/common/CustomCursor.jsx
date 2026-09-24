import React, { useEffect, useRef } from 'react';

/**
 * Decorative ring + dot that trail the pointer with easing, and grow over
 * interactive elements. Fine-pointer devices only — never shown on touch,
 * and frozen (no rAF loop) under prefers-reduced-motion.
 */
const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || rm) return undefined;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return undefined;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let moved = false;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      moved = true;
      const t = e.target && e.target.closest ? e.target : null;
      hovering = !!(t && t.closest('a,button,[data-tilt],input,textarea,select'));
    };

    const loop = () => {
      if (moved) {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
        ring.style.transform = `translate(${rx}px,${ry}px) scale(${hovering ? 1.7 : 1})`;
        ring.style.background = hovering ? 'rgba(21,112,239,.08)' : 'transparent';
        dot.style.transform = `translate(${mx}px,${my}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] -m-[19px] h-[38px] w-[38px] rounded-full border-[1.5px] border-trBlue/55 opacity-0 transition-[width,height,margin,background,opacity] duration-300"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] -m-[3px] h-[6px] w-[6px] rounded-full bg-trBlue opacity-0"
      />
    </>
  );
};

export default CustomCursor;
