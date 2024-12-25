import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import partner1 from '../assets/images/partner1.png';

const partners = [
  { logo: partner1, name: 'Partner 1' },
  { logo: partner1, name: 'Partner 2' },
  { logo: partner1, name: 'Partner 3' },
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
        className="w-full max-w-[480px] h-full min-h-[400px] m-0 active:cursor-grabbing hover:cursor-grab"
      >
        {partners.map((partner, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center "
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-32 h-32 lg:mt-0 mt-20 mb-8 lg:mb-0"
            />
            <p className="text-darkBlue mt-4 text-[18px] text-center">
              {partner.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default OurPartners;
