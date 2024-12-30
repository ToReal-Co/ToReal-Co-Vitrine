import celio from '../assets/brands/celio.png';
import iotSqure from '../assets/brands/iotSquare.png';
import lego from '../assets/brands/lego.png';
import nikeledeon from '../assets/brands/nikeledeon.png';
import notion from '../assets/brands/notion.png';
import viber from '../assets/brands/viber.png';
import Marquee from 'react-fast-marquee';

const TrustedByComponent = () => {
  return (
    <div className="my-24">
      <div className="text-center mb-6">
        <p className="font-medium text-2xl lg:text-4xl text-darkBlue">
          Trusted By <span className="text-trBlue">11</span> Companies
        </p>
      </div>

      <Marquee
        gradient={true}
        gradientColor="#F7F6F5"
        autoFill="true"
        pauseOnHover={true}
        className="hover:cursor-pointer my-12"
      >
        <div className="w-full flex justify-between items-center">
          <img className="px-12 h-8" src={celio} alt="Image description" />
          <img className="px-12 h-10" src={iotSqure} alt="Image description" />
          <img className="px-12 h-14" src={lego} alt="Image description" />
          <img className="px-12 h-8" src={nikeledeon} alt="Image description" />
          <img className="px-12 h-12" src={notion} alt="Image description" />
          <img className="px-12 h-8" src={viber} alt="Image description" />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedByComponent;
