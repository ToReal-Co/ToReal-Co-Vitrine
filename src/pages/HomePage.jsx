import React from 'react';
import Pricing from '../sections/Pricing';
import HeroSection from '../sections/Hero';
import Footer from '../components/Footer';
import Faq from '../sections/Faq';
import WhatsAppButton from '../common/WhatsAppButton';
import Header from '../components/Header';
import Services from '../sections/Services';

const HomePage = () => {
  return (
    <div className=" h-full w-full">
      <Header />
      <HeroSection />
      <Services />
      <Pricing />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
