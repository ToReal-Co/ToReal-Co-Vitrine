import React from 'react';
import BookaCallButton from '../common/BookACallButton';

const CallToActionCard = ({ className = '' }) => {
  const handleRedirect = () => {
    window.open(
      'https://calendly.com/ahmedmahouachi66/project-discussion',
      '_blank'
    );
  };
  return (
    <div className={className}>
      <div className="flex flex-col p-4 lg:flex-row items-center justify-around">
        <div className="lg:w-full lg:p-4 p-2">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blueBg align-middle">
            Ready to create your project?
          </p>
        </div>
        <div className="lg:w-full flex items-center justify-start lg:justify-end p-2 sm:p-4 h-full">
          <BookaCallButton color="white" onClick={handleRedirect}>
            Book a call
          </BookaCallButton>
        </div>
      </div>
    </div>
  );
};
export default CallToActionCard;
