import React from "react";
import GreenBtn from "./GreenBtn";
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-full md:h-screen bg-gray-900 text-white text-center md:text-left pt-16"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-gray-600">
            Cheapest Hosting on Planet Earth
          </p>
          <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
            <span className="text-lightColor">ONNN</span> Web services
          </h1>

          <p className="text-base font-light text-gray-500">
            Cloud has emerged as an enabler of transformation, but there are
            still significant barriers to cloud expansion and many enterprises
            are struggling to prove transformation value or to tie IT value to
            business outcomes. ONNN Cloud Services provide a 360-degree
            approach identifying and solving challenges and driving
            transformation forward.
          </p>

          <GreenBtn title='Sign up' className='capitalize px-6 py-3 sm:w-8/12 my-8'/>
        </div>
        <div className="flex items-center justify-center">
            <img src={hero} alt="hero" className="w-3/4 rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
