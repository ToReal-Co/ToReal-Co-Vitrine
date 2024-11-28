import React from 'react';
import Header from '../components/Header';
import IphoneSectionComponent from '../components/IphoneSectionComponent';
import TrustedByComponent from '../components/TrustedByComponent';
import HeroDescription from '../components/HeroDescription';


const HeroSection = () => {
  return (
    <div>
        <Header/>
        <HeroDescription/>
        <IphoneSectionComponent/>
        <TrustedByComponent/>
    </div>
    
    

  );
};

export default HeroSection;