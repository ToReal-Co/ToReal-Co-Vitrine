import React from 'react';
import plusIcon from '../assets/images/serviceImage.png';
import BookaCallButton from '../common/BookACallButton';
import badgeCheck from '../assets/icons/badge-check.svg';
const servicesData = [
  {
    title: 'Mobile Development',
    description:
      'Building and deploying mobile apps with seamless backend integration.',
  },
  {
    title: 'Web Development',
    description: 'Responsive websites with secure backend and ongoing support.',
  },
  {
    title: 'UI UX Design',
    description:
      'Intuitive designs with wireframes and prototypes for seamless user experiences.',
  },
];

const Services = () => {
  const handleRedirect = () => {
    window.open(
      'https://calendly.com/d/crkr-jbr-n53/one-off-meeting',
      '_blank'
    );
  };

  return (
    <section id="services" className="py-12 px-6 sm:px-12">
      {/* Title */}
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Services</h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[30%] p-4">
          <div className=" flex justify-center mt-4 sm:mt-0 relative sm:order-1 order-last">
            {/* Image */}
            <a
              href="https://calendly.com/d/crkr-jbr-n53/one-off-meeting"
              target="_blank"
            >
              <img
                src={plusIcon}
                alt="Left side icon"
                className="w-[300px] h-auto object-contain max-w-md"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </a>

            {/* Bouton sur l'image */}
            <BookaCallButton
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 block lg:flex min-w-max"
              color="dark"
              onClick={handleRedirect}
            >
              Book a call
            </BookaCallButton>
          </div>
        </div>
        <div className="w-full lg:w-[70%] p-4 lg:ml-4 lg:mt-0 mt-4">
          <div className="flex flex-col space-y-3">
            {/* Boucle pour générer les sections dynamiquement */}
            {servicesData.map((service, index) => (
              <div key={index}>
                {/* Titre et Description */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mr-0 sm:mr-8">
                  {/* Titre avec ligne verticale */}
                  <div className="flex-1 flex items-center space-x-4">
                    <div className="h-6 w-[4px] bg-darkBlue rounded-lg"></div>
                    <h2 className="text-lg sm:text-xl text-darkBlue font-semibold">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="flex-1 w-full">
                    <p className="text-sm sm:text-base text-darkBlue">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Séparateur */}
                {index < servicesData.length - 1 && (
                  <div className="border-t-2 border-blueBg my-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Description en bas */}
          <div className="flex items-center justify-between mt-16 sm:mt-16 md:mt-16 lg:mt-32">
            <p className="text-sm sm:text-base text-darkBlue">
              Crafting Digital Solutions with <br />
              Innovation and Expertise
            </p>
            <div className="relative flex items-center justify-center w-[80px] h-[60px] sm:w-[100px] sm:h-[75px] md:w-[120px] md:h-[90px] bg-trBlue rounded-lg overflow-visible">
              <img
                src={badgeCheck}
                alt="Top-right icon"
                className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <div className="text-center text-white">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  100%
                </p>
                <p className="text-[8px] sm:text-[10px] md:text-xs font-medium leading-none">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
