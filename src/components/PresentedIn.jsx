import React from 'react';
import fiver from '../assets/brands/fiver.svg';
import freelanceCom from '../assets/brands/freelanceCom.svg';
import upwork from '../assets/brands/Upwork-logo.svg 5.svg';
import guru from '../assets/brands/guru.svg';
import mostakel from '../assets/brands/mostakel.svg';
import Marquee from 'react-fast-marquee';
const PresentedIn = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Title */}
      <p className="text-medium text-[18px] text-start p-6">Presented In</p>

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <Marquee autoFill="true">
          <div className="flex justify-between items-center whitespace-nowrap">
            <img className="px-12 h-8" src={fiver} alt="Image description" />
            <img
              className="px-12 h-10"
              src={freelanceCom}
              alt="Image description"
            />
            <img className="px-12 h-14" src={upwork} alt="Image description" />
            <img className="px-12 h-8" src={guru} alt="Image description" />
            <img
              className="px-12 h-12"
              src={mostakel}
              alt="Image description"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default PresentedIn;
