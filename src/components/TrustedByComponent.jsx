import Marquee from 'react-fast-marquee';
import podcast from '../assets/brands/podcastbrand.svg';
import tagna from '../assets/brands/tagnabrand.svg';
import iotSqure from '../assets/brands/iotSquare.png';
import dapperdash from '../assets/brands/dapperdashbrand.svg';
import puretopia from '../assets/brands/puretopiabrand.svg';
import altfolio from '../assets/brands/altfoliobrand.svg';
import glamora from '../assets/brands/glamorabrand.svg';
import serenity from '../assets/brands/serenitybrand.svg';


const TrustedByComponent = () => {
  return (
    <div className="mt-24">
      <div className="text-center mb-6">
        <p className="font-medium text-2xl lg:text-4xl text-darkBlue">
          Trusted By <span className="text-trBlue">11</span> Companies
        </p>
      </div>

      <Marquee
        gradient={true}
        gradientColor="#F7F6F5"
        autoFill="true"
        pauseOnHover={false}
        className="my-12"
        speed={100}
      >
        <div className="w-full flex justify-between items-center">
          <img className="px-9" src={podcast} alt="Image description" />
          <img className="px-9 h-10" src={iotSqure} alt="Image description" />
          <img className="px-9 h-10" src={tagna} alt="Image description" />
          <img className="px-9 h-14" src={altfolio} alt="Image description" />
          <img className="px-9 h-8" src={dapperdash} alt="Image description" />
          <img className="px-9 h-14" src={serenity} alt="Image description" />
          <img className="px-9 h-8" src={puretopia} alt="Image description" />
          <img className="px-9 h-12" src={glamora} alt="Image description" />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedByComponent;
