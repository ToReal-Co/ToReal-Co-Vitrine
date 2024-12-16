import React, { useState, useRef, useEffect } from 'react';

const WhoWeAre = () => {
  return (
    <section id="FAQ" className="py-12 px-6 sm:px-12">
      {/* Title */}
      <div className="mx-auto text-left flex text-[24px] sm:text-[32px] font-medium mb-6 sm:mb-12">
        <h1 className="text-trBlue">✦</h1>
        <h1 className="ml-2 text-darkBlue">Who We Are</h1>
      </div>

      {/* Grid View Section */}
<div className="container mx-auto p-4 space-y-4 bg-slate-500">
  {/* Row with three divs */}
  <div className="flex flex-wrap lg:flex-nowrap lg:flex-row flex-col justify-center items-center">
    {/* First Div - 30% width */}
    <div className="w-full lg:w-[30%] bg-blue-500 h-32 flex items-center justify-center text-base text-white mb-2 lg:mb-0">
      First Div
    </div>
    {/* Second Div - 35% width */}
    <div className="w-full lg:w-[35%] bg-green-500 h-auto flex items-center justify-center text-base text-white mb-2 lg:mb-0 lg:mx-2">
      Second Div
    </div>
    {/* Third Div - 35% width */}
    <div className="w-full lg:w-[35%] bg-red-500 h-auto flex items-center justify-center text-base text-white">
      Third Div
    </div>
  </div>
</div>


    

    </section>
  );
};

export default WhoWeAre;
