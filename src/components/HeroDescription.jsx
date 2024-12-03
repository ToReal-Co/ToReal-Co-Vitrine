import React from 'react';
import logoWithoutText from '../assets/images/logoWithoutText.svg';
import BookaCallButton from '../common/BookACallButton';
const HeroDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-8 mb-32 sm:mb-32 px-4 sm:px-8">
      <div className="font-semibold text-darkBlue p-4 sm:p-6 max-w-2xl sm:max-w-4xl mx-auto">
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl py-2 sm:py-3 leading-relaxed">
          From concept
          <span className="bg-blueBg text-trBlue rounded-md px-2 py-0 ml-2">
            to real
          </span>
          <img
            src={logoWithoutText}
            alt="Image description"
            className="inline-block w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-2"
          />
          <br />
          Bring your
          <span className="bg-blueBg text-trBlue rounded-md px-2 py-0 ml-2 mt-2">
            digital
          </span>{' '}
          vision to life.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center py-1 sm:py-2">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
          <span className="font-medium">Expert solutions, </span>
          <span className="font-semibold">real results!</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-4">
        <BookaCallButton color="blue" onClick={() => console.log('hello')}>
          Book a call
        </BookaCallButton>
        <BookaCallButton color="dark" onClick={() => console.log('hello')}>
          View pricing
        </BookaCallButton>
      </div>
    </div>
  );
};

export default HeroDescription;
