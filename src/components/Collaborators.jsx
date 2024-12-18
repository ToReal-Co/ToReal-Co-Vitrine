import React from 'react';
import ahmedPunk from '../assets/images/ahmedPunk.png';
import kalechPunk from '../assets/images/kalechPunk.png';
import punk1 from '../assets/images/punk1.png';
import punk2 from '../assets/images/punk2.png';

const Collaborators = ({ className = '' }) => {
  return (
    <div className={className}>
      <p className="text-medium text-[18px] text-center mb-6">
        12 Collaborators
      </p>

      <div className="flex justify-center items-center space-x-[-15px]">
        <img
          src={ahmedPunk}
          alt="Collaborator 1"
          className="w-16 h-16 rounded-full border-2 border-blueBg bg-[#6A8494]"
        />
        <img
          src={kalechPunk}
          alt="Collaborator 2"
          className="w-16 h-16 rounded-full border-2 border-blueBg bg-[#FF6F06]"
        />
        <img
          src={punk1}
          alt="Collaborator 3"
          className="w-16 h-16 rounded-full border-2 border-blueBg bg-[#DE89B5]"
        />
        <img
          src={punk2}
          alt="Collaborator 4"
          className="w-16 h-16 rounded-full border-2 border-blueBg bg-[#FFD800]"
        />
        {/* Rond bleu avec le texte +8 */}
        <div className="w-16 h-16 rounded-full border-2 border-blueBg bg-trBlue flex items-center justify-center">
          <p className="text-[14px] font-medium text-blueBg">+8</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
