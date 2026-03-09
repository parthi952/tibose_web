import React from 'react';
import { Aurora } from '../../../Components/Common/Aurora';

export const Animation = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Aurora component as the main ambient background */}
      <Aurora />

      {/* Floating UI Elements localized to the left side */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Central Logo */}
          <div className="z-20 bg-white/80 p-5 rounded-3xl shadow-xl backdrop-blur-md border border-white">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
              alt="Microsoft" 
              className="w-20"
            />
          </div>
          
          {/* Animated Circles */}
          <div className="absolute w-full h-full border border-gray-700/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-88 h-88 border border-gray-400 rounded-full"></div>

          {/* Floating Icons */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-green-400 rounded-xl shadow-lg animate-bounce duration-2000"></div>
          <div className="absolute -bottom-8 -left-4 w-12 h-12 bg-blue-400/80 rounded-xl shadow-lg animate-pulse"></div>
          <div className="absolute -bottom-0/4 left-3/4 w-8 h-8 bg-red-500 rounded-lg rotate-45 animate-spin"></div>
          <div className="absolute -top-0/3 left-1/4 w-5 h-5 bg-yellow-500 rounded-lg  animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
