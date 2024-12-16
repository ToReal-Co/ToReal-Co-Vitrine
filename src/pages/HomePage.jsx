import React from 'react';
import HeroSection from '../sections/Hero';
import Footer from '../components/Footer';
import Faq from '../sections/Faq';
import WhatsAppButton from '../common/WhatsAppButton';
import Header from '../components/Header';
import WhoWeAre from '../sections/WhoWeAre';

const HomePage = () => {
  return (
    <div className=" h-full w-full text-xl md:text-4xl lg:text-8xl">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
