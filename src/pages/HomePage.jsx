import React from 'react';
import Projects from '../sections/OurProjects';
import HowWeWork from '../sections/HowWeWork';
import HeroSection from '../sections/Hero';
import Stack from '../sections/Stack';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import Faq from '../sections/Faq';
import WhatsAppButton from '../common/WhatsAppButton';
import Header from '../components/Header';
import Services from '../sections/Services';
import WhoWeAre from '../sections/WhoWeAre';
import SectionReveal from '../common/SectionReveal';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <main id="top" className="relative">
        <HeroSection />
        <SectionReveal delay={0}>
          <Services />
        </SectionReveal>
        <SectionReveal delay={0}>
          <WhoWeAre />
        </SectionReveal>
        <SectionReveal delay={0}>
          <Projects />
        </SectionReveal>
        <SectionReveal delay={0}>
          <HowWeWork />
        </SectionReveal>
        <SectionReveal delay={0}>
          <Stack />
        </SectionReveal>
        <SectionReveal delay={0}>
          <Faq />
        </SectionReveal>
        <SectionReveal delay={0}>
          <Contact />
        </SectionReveal>
      </main>
      <SectionReveal delay={0}>
        <Footer />
      </SectionReveal>
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
