import { useInView } from 'react-intersection-observer';

/**
 * Fades a section in as it scrolls into view.
 *
 * The hidden state lives in CSS behind a `.js` class on <html> rather than
 * in a class applied here, so a reader that does not execute scripts gets
 * the fully visible prerendered content instead of a page held at zero
 * opacity by an animation that will never run. See index.css.
 */
const SectionReveal = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  });

  return (
    <div
      ref={ref}
      data-reveal={inView ? 'in' : 'pending'}
      className={`transform-gpu will-change-transform ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
