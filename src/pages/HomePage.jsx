import React from 'react';
import Projects from '../sections/OurProjects';
import HowWeWork from '../sections/HowWeWork';
import HeroSection from '../sections/Hero';
import Footer from '../components/Footer';
import Faq from '../sections/Faq';
import WhatsAppButton from '../common/WhatsAppButton';
import Header from '../components/Header';
import Services from '../sections/Services';
import WhoWeAre from '../sections/WhoWeAre';
import SectionReveal from '../common/SectionReveal';

const HomePage = () => {
  return (
    <div className=" h-full w-full">
      <Header />
      <SectionReveal delay={0}>
        <HeroSection />
      </SectionReveal>
      <SectionReveal delay={40}>
        <Services />
      </SectionReveal>
      <SectionReveal delay={80}>
        <WhoWeAre />
      </SectionReveal>
      <SectionReveal delay={120}>
        <Projects />
      </SectionReveal>
      <SectionReveal delay={160}>
        <HowWeWork />
      </SectionReveal>
      <SectionReveal delay={200}>
        <Faq />
      </SectionReveal>
      <SectionReveal delay={240}>
        <Footer />
      </SectionReveal>
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
