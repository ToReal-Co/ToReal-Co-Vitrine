import celio from "../assets/marquee/celio.png"
import iotSqure from "../assets/marquee/iotSquare.png"
import lego from "../assets/marquee/lego.png"
import nikeledeon from "../assets/marquee/nikeledeon.png"
import notion from "../assets/marquee/notion.png"
import viber from "../assets/marquee/viber.png"
import Marquee from "react-fast-marquee";

const TrustedByComponent = () => {
    return (
        <div className="my-24">
            <div className="text-center mb-6">
            <p className="font-medium text-4xl">
                Trusted By <span className="text-trBlue">11</span> Companies
            </p>
        </div>
      
        <Marquee gradient={true} gradientColor='#F7F6F5' autoFill='true' pauseOnHover={true} className='hover:cursor-pointer my-12'>
          <div className='w-full flex justify-between items-center'>
            <img className='px-12 h-8' src={celio} alt="Image description"/>
            <img className='px-12 h-10' src={iotSqure} alt="Image description"/>
            <img className='px-12 h-14' src={lego} alt="Image description"/>
            <img className='px-12 h-8' src={nikeledeon} alt="Image description"/>
            <img className='px-12 h-12' src={notion} alt="Image description"/>
            <img className='px-12 h-8' src={viber} alt="Image description"/>
          </div>
        </Marquee>
        </div>
       
      );
      
}

export default TrustedByComponent