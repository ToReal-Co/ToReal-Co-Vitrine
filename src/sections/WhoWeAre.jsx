import React from 'react';
import CapitalAchieved from '../components/CapitalAchieved';
import Collaborators from '../components/Collaborators';
import ReleasedProjects from '../components/ReleasedProjects';
import OurPartners from '../components/OurPartners';
import PresentedIn from '../components/PresentedIn';
import CallToActionCard from '../components/CallToActionCard';

const WhoWeAre = () => {
  return (
    <section id="whoWeAre" className="py-12 px-6 sm:px-12">
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Who We Are</h1>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          <div className="w-full lg:w-[30%] flex flex-col gap-4 text-[24px] sm:text-[32px]">
            <CapitalAchieved className="bg-blueBg p-8 rounded-lg min-w-72 h-full" />
            <Collaborators className="bg-blueBg p-4 rounded-lg relative flex flex-col justify-between min-w-72" />
          </div>

          <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 text-base">
            <ReleasedProjects className="bg-blueBg p-6 rounded-lg flex-1 text-center relative min-h-[400px] min-w-[300px]" />
            <OurPartners className="bg-blueBg py-6  rounded-lg flex-1 text-center flex flex-col min-h-[350px] items-center " />{' '}
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-4 mt-4 text-base">
          <CallToActionCard className="bg-trBlue rounded-lg flex-1 flex-row" />
          <PresentedIn className="bg-blueBg rounded-lg flex flex-col justify-center items-center w-full overflow-hidden lg:max-w-[50%] max-w-full pb-4" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
