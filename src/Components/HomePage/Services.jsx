import React from "react";
import MotionButton from "../Common/MotionButton";
import Img from "../../Constents";

const OurService = Img.HomePage.OurService;

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 font-sans overflow-hidden">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10 md:mb-14 uppercase tracking-wide">
        Business Technology & Connectivity Services
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 md:gap-14 lg:gap-20">

        {/* Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl">
          <img
            src={OurService}
            alt="Cybersecurity operations center monitoring global network threats and IT infrastructure"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Business Data, Internet & <span className="text-blue-600">Voice Connectivity Solutions</span>
          </h3>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            We provide fast and secure internet and communication solutions for businesses. Our services include high-speed leased lines,
            broadband, VPN for safe connections, smart office networking, and business voice services like Centrex and PRI.
            These solutions help companies stay connected, communicate smoothly, and work more efficiently.
          </p>

          <div className="flex cursor-pointer justify-center lg:justify-start pt-2">
            <MotionButton
              B_Name="View Our Data Services"
              ActionToClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
