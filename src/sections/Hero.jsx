import React from 'react';
import HeroShowcase from '../components/HeroShowcase';
import HeroDescription from '../components/HeroDescription';

const HeroSection = () => {
  return (
    <section
      data-screen-label="Hero"
      className="relative mx-auto grid max-w-[1280px] items-center gap-[clamp(24px,4vw,56px)] px-[clamp(20px,4vw,48px)] pb-6"
      style={{
        paddingTop: 'clamp(120px,14vw,170px)',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,500px),1fr))',
      }}
    >
      <HeroDescription />
      <HeroShowcase />
    </section>
  );
};

export default HeroSection;
