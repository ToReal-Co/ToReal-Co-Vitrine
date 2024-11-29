import React from 'react';
import HeroSection from '../sections/Hero';
import WhatsAppButton from '../common/WhatsAppButton';
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div className=" h-full w-full px-8 text-xl md:text-4xl lg:text-8xl">
      <Header/>
      <HeroSection/>

    <WhatsAppButton/>
    </div>
  );
};

export default HomePage;
