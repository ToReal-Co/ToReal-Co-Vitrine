import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import flow from '../assets/brands/flow.png';
import complicecreation from '../assets/brands/compliceCreations.jpg';

const partners = [
  { logo: flow, name: 'Flow', link: 'https://flow.com/' },
  { logo: complicecreation, name: 'Complice creations' },
];
const OurPartners = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Titre */}
      <p className="text-[32px] font-semibold text-darkBlue text-center">
        Our Partners
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-[480px] h-full min-h-[250px] sm:min-h-[320px] lg:min-h-[400px] m-0 active:cursor-grabbing hover:cursor-grab"
      >
        {partners.map((partner, index) => {
          const content = (
            <>
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 sm:w-32 sm:h-32 mt-6 sm:mt-10 lg:mt-0 mb-4 sm:mb-6 rounded-full object-cover object-center"
              />
              <p className="text-darkBlue mt-2 text-[18px] text-center">
                {partner.name}
              </p>
            </>
          );

          return (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center justify-center text-center"
                >
                  {content}
                </a>
              ) : (
                <div className="w-full flex flex-col items-center justify-center text-center">
                  {content}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default OurPartners;
