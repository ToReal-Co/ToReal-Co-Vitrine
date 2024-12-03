import React from 'react';
import BookaCallButton from '../common/BookACallButton';
import logo from '../assets/images/logoToReal.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import xIcon from '../assets/icons/x.svg';
import whatsappIcon from '../assets/icons/whatsApp.svg';

const Footer = () => {
  const handleRedirect = () => {
    window.open(
      'https://calendly.com/d/crkr-jbr-n53/one-off-meeting',
      '_blank'
    );
  };

  return (
    <footer className="bg-[#F2F2F2] text-black py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Section - Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="ToReal&Co Logo" className="w-24 md:w-30" />
        </div>

        {/* Middle Section - Links */}
        <div className="text-center md:text-left">
          <div className="grid grid-cols-2 gap-6 text-[20px] md:text-[20px] lg:text-[24px] font-normal mb-4">
            <div>Services</div>
            <div>Who We Are</div>
            <div>Projects</div>
            <div>Pricing</div>
          </div>
          <div className="text-[20px] md:text-[24px] font-normal">FAQs</div>
        </div>

        {/* Right Section - Button */}
        <div className="flex justify-center md:justify-end mt-6">
          <BookaCallButton color="blue" onClick={handleRedirect}>
            Book a call
          </BookaCallButton>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-10">
        {/* Left Bottom - Copyright */}
        <div className="text-center md:text-left text-[14px] md:text-[18px] font-normal">
          ©2025 ToReal&Co
        </div>

        {/* Middle Bottom - Address */}
        <div className="text-center text-[14px] md:text-[16px] text-trBlue">
          13 Rue au Maire, Paris, France
        </div>

        {/* Right Bottom - Social Media & Slogan */}
        <div className="text-center md:text-right">
          <div className="text-[16px] md:text-[18px] font-medium mb-4">
            From Concept to Real <br />
            Bring your digital vision to life
          </div>
          <div className="flex justify-center md:justify-end gap-3">
            <img
              src={linkedinIcon}
              alt="linkedin"
              className="w-6 md:w-8 h-6 md:h-8"
            />
            <img src={xIcon} alt="x" className="w-6 md:w-8 h-6 md:h-8" />
            <img
              src={whatsappIcon}
              alt="whatsapp"
              className="w-6 md:w-8 h-6 md:h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
