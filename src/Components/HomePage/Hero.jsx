import React from 'react';
import heroImg from '../../assets/Hero.png';
const Hero = () => {
  return (
    // Change min-h-screen to min-h-[calc(100vh-5rem)] (5rem = 80px = h-20)
<div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-40 p-10 bg-blue-100 min-h-[calc(100vh-5rem)] w-full font-sans">
      <div className="max-w-md text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight text-black mb-2">
          Professional <br />
          Technology <br />
          <span className="text-blue-600">Assistance.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          We make technology accessible!
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white border-2 border-transparent rounded-2xl font-semibold transition-all hover:bg-white hover:text-blue-600 hover:shadow-lg active:scale-95">
          Reach us
        </button>
      </div>
      <img src={heroImg} alt="Hero" className="w-full max-w-sm lg:max-w-md object-contain" />
    </div>
  );
};

export default Hero;
