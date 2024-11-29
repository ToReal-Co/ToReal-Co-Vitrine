import React from 'react';
import HeroSection from '../sections/Hero';
import Footer from "../components/Footer"; 
import Faq from '../sections/Faq'


const HomePage = () => {
  return (
    <div className=" h-full w-full text-xl md:text-4xl lg:text-8xl">
     <HeroSection/>
     <Faq/>
     <Footer/>
     
    </div>
  );
};

export default HomePage;
