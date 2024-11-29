import React from "react";
import IphoneVideo from "../common/IphoneVideo";
import video from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import video4 from '../assets/videos/video4.mp4'


const IphoneSectionComponent = () => {

    return( 
    
        <div className="grid sm:gap-64 grid-cols-2 sm:grid-cols-4 mx-auto max-w-screen-md place-items-center my-12">
  <div className="p-2">
    <div className="transform rotate-5">
      <IphoneVideo video={video} />
    </div>
  </div>
  <div className="p-2">
    <IphoneVideo video={video2} />
  </div>
  <div className="p-2">
    <IphoneVideo video={video3} />
  </div>
  <div className="p-2">
    <div className="transform rotate-4">
      <IphoneVideo video={video4} />
    </div>
  </div>
</div>


      
    );
   
}

export default IphoneSectionComponent;