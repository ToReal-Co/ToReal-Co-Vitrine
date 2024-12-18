import React from 'react';

import macbookImage from '../assets/images/macbookImage.png';
import iphoneImage from '../assets/images/iphoneImage.png';
const ReleasedProjects = ({ className = '' }) => {
  return (
    <div className={className}>
      <p className="text-[32px] font-semibold text-darkBlue">
        Released Projects
      </p>
      <p className="text-[18px] text-trBlue mt-2">+11 Projects</p>

      {/* Centered overlapping div */}
      <div className="flex items-center justify-center mt-16">
        {/* Image */}
        <img
          src={macbookImage} // Replace with your image path
          alt="Released Projects"
          className="w-[300px] h-[200px]"
        />
        <img
          src={iphoneImage} // Replace with your image path
          alt="Released Projects"
          className="w-[300px] h-[200px] max-w-[150px] max-h-[250px] -ml-16 mb-6"
        />
      </div>
    </div>
  );
};

export default ReleasedProjects;
