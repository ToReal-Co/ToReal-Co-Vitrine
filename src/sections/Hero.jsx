import React from 'react';
import IphoneSectionComponent from '../components/IphoneSectionComponent';
import TrustedByComponent from '../components/TrustedByComponent';
import HeroDescription from '../components/HeroDescription';

const HeroSection = () => {
  return (
    <div>
      <HeroDescription />
      <IphoneSectionComponent />
      <TrustedByComponent />
    </div>
  );
};

export default HeroSection;
