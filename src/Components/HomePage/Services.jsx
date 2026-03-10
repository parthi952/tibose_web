import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion
// import OurService from "../../assets/OurSolution.png";

import MotionButton from '../Common/MotionButton';
import Img from "../../Constents"

const OurService = Img.HomePage.OurService;

const Services = () => {
  // Animation Variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-10 font-sans overflow-hidden">
      
      {/* Animated Title */}
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16 tracking-wide uppercase"
      >
        Our Services
      </motion.h2>

      <div className="flex flex-col md:flex-row items-stretch gap-20 md:min-h-96">
        
        {/* Animated Image Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl"
        >
          <img 
            src={OurService} 
            alt="Business Data and Voice Services" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Animated Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-12"
        >
          <h3 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Business Data and <span className="text-blue-600">Voice Services</span>
          </h3>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            We deliver secure, high-speed connectivity solutions for modern 
            businesses, including Internet Leased Lines, Broadband, Smart Office 
            setups, VPN services, and voice solutions such as Centrex, PRI, 
            and enterprise mobile connections.
          </p>

          <div className="pt-4">
            <MotionButton 
              B_Name="Learn more" 
              ActionToClick={() => alert('Learn more clicked!')} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;