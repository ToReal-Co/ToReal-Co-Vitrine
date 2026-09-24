import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionReveal = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
  });

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${className} ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
