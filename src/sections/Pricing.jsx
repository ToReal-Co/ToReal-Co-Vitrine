import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import checkIcon from '../assets/icons/check.svg';
import airbnbIcon from '../assets/brands/airbnbIcon.png';
import instagramIcon from '../assets/brands/instgramIcon.png';
import uberIcon from '../assets/brands/uberIcon.png';
import tinderIcon from '../assets/brands/tinderIcon.png';
import telegramIcon from '../assets/brands/telegramIcon.png';

const Pricing = () => {
  const [currency, setCurrency] = useState('USD');
  const [conversionRate, setConversionRate] = useState(1);
  const API_KEY = 'fa9d916961334fd89a8c7c95654487a6';
  const scrollContainerRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  const allowedCurrencies = ['USD', 'EUR', 'TND'];

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`
        );
        const fetchedCurrency = response.data.currency.code;
        const conversionRate = response.data.currency.rate;

        if (allowedCurrencies.includes(fetchedCurrency)) {
          setCurrency(fetchedCurrency);
          setConversionRate(conversionRate || 1);
        } else {
          setCurrency('USD');
          setConversionRate(1);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
        setCurrency('USD');
        setConversionRate(1);
      }
    };

    fetchCurrency();
  }, []);

  const convertPrice = (priceUSD) => {
    return (
      Math.round(priceUSD * conversionRate).toLocaleString() + ` ${currency}`
    );
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.1;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    isDragging = true;
    startX = touch.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  return (
    <section id="pricing" className="py-12 px-6 sm:px-10">
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Pricing</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4 md:px-16 lg:px-24">
        <div className="bg-blueBg text-darkBlue rounded-[20px] p-6 sm:p-8 flex flex-col justify-between w-full lg:w-[28%] h-auto">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-medium">
              Essential
            </h2>
            <p className="text-[14px] sm:text-[16px] font-normal mt-2">
              iOS & Android apps, landing page
            </p>
            <h3 className="text-[28px] sm:text-[34px] font-semibold mt-4">
              +{convertPrice(12999)}
            </h3>
            <ul className="mt-6 space-y-2">
              {[
                'UI/UX Design',
                'Backend Development',
                'Frontend (up to 10 screens)',
                'Analytics Setup',
                'Landing Page',
                'Delivery in 45 days',
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <img
                    src={checkIcon}
                    alt="Check"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 bg-trBlue text-white py-2 px-6 mx-auto rounded-md hover:bg-darkBlue transition">
            Book a Call
          </button>
        </div>
        <div className="bg-blueBg text-darkBlue rounded-[20px] p-6 sm:p-8 flex flex-col justify-between w-full lg:w-[28%] relative h-auto">
          <p className="text-[12px] sm:text-[14px] font-medium rounded-xl py-1 sm:py-2 px-3 sm:px-4 bg-darkBlue absolute top-[-20px] right-[10px] sm:right-[20px] text-white">
            Recommended
          </p>
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-medium">Advanced</h2>
            <p className="text-[14px] sm:text-[16px] font-normal mt-2">
              iOS & Android apps, website, Back-office
            </p>
            <h3 className="text-[28px] sm:text-[34px] font-semibold mt-4">
              +{convertPrice(17999)}
            </h3>
            <ul className="mt-6 space-y-2">
              {[
                'UI/UX Design',
                'Backend Development',
                'Frontend (up to 16 screens)',
                'Advanced Analytics',
                'Landing Page',
                'Delivery in 65 days',
                'Secure payment integration with Stripe and in-app options.',
                'Back-office',
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <img
                    src={checkIcon}
                    alt="Check"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 bg-trBlue text-white py-2 px-6 mx-auto rounded-md hover:bg-darkBlue transition">
            Book a Call
          </button>
        </div>

        <div className="bg-darkBlue text-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between w-full lg:w-[28%] h-auto">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-medium">Ultimate</h2>
            <p className="text-[14px] sm:text-[16px] font-normal mt-2">
              iOS & Android apps, website, AI integration, Back-office
            </p>
            <h3 className="text-[28px] sm:text-[34px] font-semibold mt-4">
              +{convertPrice(27000)}
            </h3>
            <p className="text-[12px] sm:text-[14px] font-normal mt-6">
              Develop an app similar to
            </p>
            <div
              className="mt-6 overflow-x-hidden scrollbar-none overflow-hidden"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex space-x-4 cursor-grab active:cursor-grabbing select-none">
                {[
                  { brand: 'Airbnb', price: '$40,000', icon: airbnbIcon },
                  { brand: 'Instagram', price: '$38,000', icon: instagramIcon },
                  { brand: 'Uber', price: '$42,000', icon: uberIcon },
                  { brand: 'telegram', price: '$26,000', icon: telegramIcon },
                  { brand: 'tinder', price: '$22,000', icon: tinderIcon },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#00185A] p-2 rounded-lg items-center flex flex-col justify-center shadow-md gap-y-1 px-4 sm:px-6"
                  >
                    <h4 className="font-normal text-[10px] sm:text-[12px]">
                      {item.brand}
                    </h4>
                    <img
                      src={item.icon}
                      alt={item.brand}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      onDragStart={(e) => e.preventDefault()}
                    />
                    <p className="text-[13px] sm:text-[15px]">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-6 bg-trBlue text-white py-2 px-6 mx-auto rounded-md hover:bg-lightBlue transition">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
