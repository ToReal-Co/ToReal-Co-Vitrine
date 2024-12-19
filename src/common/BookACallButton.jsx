import React from 'react';

const BookaCallButton = ({ color = 'blue', children, onClick, className }) => {
  const baseClasses = 'px-7 py-2 rounded-lg font-semibold text-base';
  const colorClasses = {
    blue: 'bg-trBlue text-trWhite',
    dark: 'bg-darkBlue text-trWhite',
    white: 'bg-trWhite text-trBlue',
  };

  return (
    <button
      className={`${baseClasses} ${colorClasses[color] || colorClasses.blue} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BookaCallButton;
