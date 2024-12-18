import React, { useState, useEffect, useRef } from 'react';
import CapitalAchieved from '../components/CapitalAchieved';
import Collaborators from '../components/collaborators';
import ReleasedProjects from '../components/ReleasedProjects';
import BookaCallButton from '../common/BookACallButton';

const WhoWeAre = () => {
  const [count, setCount] = useState(35); // Débuter à 35
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
    <section id="whoWeAre" className="py-12 px-6 sm:px-12 bg-gray-50">
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Who We Are</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        <div className="w-full lg:w-[30%] flex flex-col gap-4 text-[24px] sm:text-[32px]">
          <CapitalAchieved className="bg-blueBg p-8 rounded-lg" />
          <Collaborators className="bg-blueBg p-8 rounded-lg relative" />
        </div>

        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 text-base">
          <ReleasedProjects className="bg-blueBg p-6 rounded-lg flex-1 text-center relative min-h-[400px]" />

          <div className="bg-blueBg p-6 rounded-lg flex-1 flex justify-center">
            <p className="text-[32px] font-semibold text-darkBlue">
              Released Projects
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-4 mt-4 text-base">
        <div className="bg-trBlue p-6 rounded-lg flex-1 flexrow">
          <div className="flex">
            <div className="w-[70%] p-4">
              <p className="text-4xl font-semibold text-blueBg">
                Ready to create your project?
              </p>
            </div>
            <div className="w-[35%] flex items-center p-4">
              <BookaCallButton color="white">Book a call</BookaCallButton>
            </div>
          </div>
        </div>

        <div className="bg-blueBg p-6 rounded-lg flex-1">
          <p>Div 6</p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
