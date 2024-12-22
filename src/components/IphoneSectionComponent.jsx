import React, { useState } from 'react';
import IphoneVideo from '../common/IphoneVideo';
import video from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

const IphoneSectionComponent = () => {
  // Définir un état pour l'élément sélectionné
  const [selected, setSelected] = useState(null);

  // Fonction pour gérer le clic sur un téléphone
  const handleClick = (index) => {
    setSelected(index); // Mettre à jour l'état avec l'index du téléphone sélectionné
  };

  return (
    <div className="flex justify-center items-center space-x-2 w-full px-8 md:space-x-16">
      <div
        className={`transform rotate-5 ${selected === 0 ? 'z-10' : ''}`}
        onClick={() => handleClick(0)}
      >
        <IphoneVideo video={video} />
      </div>
      <div
        className={`${selected === 1 ? 'z-10' : ''} rotate-4`}
        onClick={() => handleClick(1)}
      >
        <IphoneVideo video={video2} />
      </div>
      <div
        className={`hidden md:block ${selected === 2 ? 'z-10' : ''} md:mx-2`}
        onClick={() => handleClick(2)}
      >
        <IphoneVideo video={video3} />
      </div>
      <div
        className={`hidden lg:block transform rotate-4 mx-4 md:mx-6 ${selected === 3 ? 'z-10' : ''}`}
        onClick={() => handleClick(3)}
      >
        <IphoneVideo video={video4} />
      </div>
    </div>
  );
};

export default IphoneSectionComponent;
