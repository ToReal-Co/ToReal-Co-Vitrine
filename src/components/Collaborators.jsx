import React from 'react';
import ahmedPunk from '../assets/images/ahmedPunk.png';
import kalechPunk from '../assets/images/kalechPunk.png';
import punk1 from '../assets/images/punk1.png';
import punk2 from '../assets/images/punk2.png';

const Collaborators = ({ className = '' }) => {
  const collaborators = [
    { src: ahmedPunk, alt: 'Collaborator 1', bgColor: '#6A8494' },
    { src: kalechPunk, alt: 'Collaborator 2', bgColor: '#FF6F06' },
    { src: punk1, alt: 'Collaborator 3', bgColor: '#DE89B5' },
    { src: punk2, alt: 'Collaborator 4', bgColor: '#FFD800' },
  ];

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-between items-center mb-4">
        {/* Titre */}
        <p className="text-medium text-[18px] text-start">12 Collaborators</p>
      </div>

      <div className="flex justify-start items-start space-x-[-15px]">
        {collaborators.map((collaborator, index) => (
          <img
            key={index}
            src={collaborator.src}
            alt={collaborator.alt}
            className={`w-14 h-14 rounded-full border-2 border-blueBg`}
            style={{ backgroundColor: collaborator.bgColor }}
          />
        ))}
        {/* Rond bleu avec le texte +8 */}
        <div className="w-14 h-14 rounded-full border-2 border-blueBg bg-trBlue flex items-center justify-center">
          <p className="text-[14px] font-medium text-blueBg">+8</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
