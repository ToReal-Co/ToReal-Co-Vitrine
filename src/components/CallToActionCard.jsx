import React from 'react';
import BookaCallButton from '../common/BookACallButton';

const CallToActionCard = ({ className = '' }) => {
  return (
    <div className={className}>
      <div className="flex flex-col p-4 lg:flex-row items-center justify-around">
        <div className="lg:w-full lg:p-4 p-2">
          <p className="text-4xl font-semibold text-blueBg align-middle">
            Ready to create your project?
          </p>
        </div>
        <div className="lg:w-full flex items-center justify-end p-4 bg-red-500x h-full">
          <BookaCallButton color="white">Book a call</BookaCallButton>
        </div>
      </div>
    </div>
  );
};
export default CallToActionCard;
