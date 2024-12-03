import React from 'react';
import '../styles/ipohoneVideo.css';
const IphoneVideo = ({ video }) => {
  return (
    <div className="card">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"></div>
      <div className="card-int">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>
      <div className="top">
        <div className="camera">
          <div className="int"></div>
        </div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default IphoneVideo;
