import { useMemo, useRef } from 'react';

/**
 * Pulls an element slightly toward the cursor while hovered — the "magnetic
 * button" effect. Spread the returned props onto the element you want to
 * move; the ref is required for reading its bounding box.
 */
export default function useMagnetic() {
  const ref = useRef(null);
  const fine = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
    []
  );
  const reduced = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  if (!fine || reduced) return { ref };

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.22;
    const dy = (e.clientY - r.top - r.height / 2) * 0.32;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  return { ref, onMouseMove, onMouseLeave };
}
