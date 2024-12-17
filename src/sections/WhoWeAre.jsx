import React, { useState, useEffect, useRef } from 'react';

const WhoWeAre = () => {
  const [count, setCount] = useState(0);
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
      const duration = 2000; // Durée totale en ms
      let currentCount = 0;
      let speed = 20; // Vitesse initiale de l'intervalle (en ms)
      let lastTimestamp = Date.now();

      const increment = () => {
        const elapsedTime = Date.now() - lastTimestamp;
        if (currentCount < target) {
          currentCount++;
          setCount(currentCount);

          // Calcule la nouvelle vitesse en fonction de l'écart restant
          const remaining = target - currentCount;
          speed = Math.max(50, duration / (remaining + 1)); // Ralentir progressivement, mais ne pas trop ralentir

          lastTimestamp = Date.now();
          setTimeout(increment, speed); // Incrémenter avec un délai réduit
        }
      };

      increment();
    }
  }, [isInView]);

  return (
    <section id="whoWeAre" className="py-12 px-6 sm:px-12 bg-gray-50">
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Who We Are</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        <div className="w-full lg:w-[25%] flex flex-col gap-4 text-[24px] sm:text-[32px]">
          <div className="bg-blueBg p-8 rounded-lg">
            <p className="text-medium text-[22px]">Capital Achieved</p>

            <p
              ref={ref}
              className="inset-0 flex items-center justify-center font-semibold text-[72px] my-12"
            >
              +{count}
              <span className="text-trBlue">K</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 text-base">
          <div className="bg-blueBg p-6 rounded-lg flex-1">
            <p>Div 3</p>
          </div>
          <div className="bg-blueBg p-6 rounded-lg flex-1">
            <p>Div 4</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-4 mt-4 text-base">
        <div className="bg-trBlue p-6 rounded-lg flex-1">
          <p>Div 5</p>
        </div>
        <div className="bg-blueBg p-6 rounded-lg flex-1">
          <p>Div 6</p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
