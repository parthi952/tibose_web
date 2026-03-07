import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/Hero.png';
import Ms365 from '../../assets/Ms365.png';

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-shift logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // 5s is usually better for reading time

    return () => clearInterval(timer);
  }, []);

  // Shared Button Component for DRY code
  const ActionButton = ({ text }) => (
    <button className="px-8 py-3 bg-blue-600 text-white  rounded-2xl font-semibold transition-all hover:bg-transparent hover:text-blue-600 hover:shadow-xl active:scale-95 mt-6 lg:mt-8">
      {text}
    </button>
  );

  return (
    <section className="bg-blue-50 min-h-screen pt-24 lg:pt-32 w-full flex flex-col justify-between overflow-hidden">
      
      
    
      <div className="relative grow flex items-center justify-center px-6">
        

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32 max-w-7xl">
            <div className="max-w-md text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Professional <br /> Technology <br />
                <span className="text-blue-600">Assistance.</span>
              </h1>
              <p className="text-gray-600 text-lg mt-4">We make technology accessible!</p>
              <ActionButton text="Reach us" />
            </div>
            <img src={heroImg} alt="Hero" className="w-full max-w-sm lg:max-w-lg object-contain drop-shadow-2xl" />
          </div>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-32 max-w-7xl">
            <img src={Ms365} alt="Microsoft 365" className="w-full max-w-sm lg:max-w-lg object-contain" />
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                <span className="text-blue-600">Microsoft 365</span> <br />
                for business
              </h1>
              <p className="text-gray-600 mt-4 max-w-sm">Boost productivity with the world's most recognized cloud tools.</p>
              <ActionButton text="Learn more" />
            </div>
          </div>
        </div>

      </div>


      <div className="flex justify-center gap-3 mb-12 z-10">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${index === i ? 'w-12 bg-blue-600' : 'w-6 bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;