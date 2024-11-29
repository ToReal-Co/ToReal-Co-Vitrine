import React from "react";
import IphoneVideo from "../common/IphoneVideo";
import video from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import video4 from '../assets/videos/video4.mp4'


const IphoneSectionComponent = () => {

    return( 
    
      <div className="flex justify-center flex-row items-center mx-auto my-6 space-x-16">
      <div className="transform rotate-5">
        <IphoneVideo video={video} />
      </div>
      <div>
        <IphoneVideo video={video2} />
      </div>
      <div className="hidden md:block">
        <IphoneVideo video={video3} />
      </div>
      <div className="hidden lg:block transform rotate-4">
        <IphoneVideo video={video4} />
      </div>
    </div>
    

    



      
    );
   
}

export default IphoneSectionComponent;