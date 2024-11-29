import React from 'react';
import logoWithoutText from "../assets/images/logoWithoutText.png";
import BookaCallButton from '../common/BookACallButton';
const HeroDescription = () => {


    return(
 <div className="flex flex-col items-center justify-center text-center my-1 my-16">
            <div className="font-semibold text-darkBlue p-6 max-w-4xl mx-auto">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 leading-relaxed">
                     From concept 
                    <span className="bg-blueBg text-trBlue rounded-md px-2 py-0 ml-2">to real</span>
                    <img 
                        src={logoWithoutText} 
                        alt="Image description" 
                        className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-2" /> 
                    <br />
                    Bring your 
                    <span className="bg-blueBg text-trBlue rounded-md px-2 py-0 ml-2 mt-4">digital</span> vision to life.
                </p>
            </div>
            <div className="flex flex-row items-center justify-center text-center py-2">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    <span className="font-medium">Expert solutions, </span> 
                    <span className="font-semibold">real results!</span>
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6">
                <BookaCallButton color="blue" onClick={console.log("hello")}>
                    Book a call
                </BookaCallButton>
                <BookaCallButton color="dark" onClick={console.log("hello")}>
                    View pricing
                </BookaCallButton>
            </div>



        </div>
    );
}

export default HeroDescription;