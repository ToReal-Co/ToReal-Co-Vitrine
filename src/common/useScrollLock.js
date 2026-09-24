import { useEffect } from 'react';

/**
 * Locks page scroll while `active` is true. Plain `overflow: hidden` on the
 * body isn't enough on iOS Safari — the page can still rubber-band/scroll
 * behind an open overlay — so this pins the body at its current scroll
 * offset instead, and restores the scroll position on cleanup.
 */
export default function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    const scrollY = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
