import React, { useState, useEffect, useRef } from 'react';

const CapitalAchieved = ({ className = '' }) => {
  const [count, setCount] = useState(35);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const target = 63;
      const duration = 1000;
      let currentCount = 35;
      let speed = 10;
      let lastTimestamp = Date.now();

      const increment = () => {
        const elapsedTime = Date.now() - lastTimestamp;
        if (currentCount < target) {
          currentCount++;
          setCount(currentCount);
          const remaining = target - currentCount;
          speed = Math.max(50, duration / (remaining + 1));

          lastTimestamp = Date.now();
          setTimeout(increment, speed);
        }
      };

      increment();
    }
  }, [isInView]);

  return (
    <div className={className}>
      <p className="text-medium text-[22px]">Capital Achieved</p>

      <p
        ref={ref}
        className="inset-0 flex items-center justify-center font-semibold text-8xl my-6 h-full"
      >
        +{count}
        <span className="text-trBlue">K</span>
      </p>
    </div>
  );
};

export default CapitalAchieved;
