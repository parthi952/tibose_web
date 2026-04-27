import React from "react";
import { motion } from "framer-motion";
import MotionButton from "../Common/MotionButton";
import Img from "../../Constents";

const OurService = Img.HomePage.OurService;

const Services = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 font-sans overflow-hidden">

      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10 md:mb-14 uppercase tracking-wide"
      >
        Business Technology & Connectivity Services
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 md:gap-14 lg:gap-20">

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={OurService}
            alt="BCybersecurity operations center monitoring global network threats and IT infrastructure"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left"
        >

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

        </motion.div>
      </div>
    </section>
  );
};

export default Services;