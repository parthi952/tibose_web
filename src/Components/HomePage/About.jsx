import React from "react";
import { motion } from "framer-motion";
import Img from "../../Constents";
import MotionButton from "../Common/MotionButton";

const AboutImg = Img.HomePage.AboutImg;

const About = () => {
  return (
    <section className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 flex-col lg:flex-row gap-10 md:gap-14 font-sans overflow-hidden">

      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-5 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <h4 className="text-blue-600 font-bold uppercase tracking-wider text-2xl sm:text-3xl lg:text-4xl">
          About Us
        </h4>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
          Trusted Microsoft Solutions Partner for Businesses.
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
         TIBOS is a technology company that helps businesses use Microsoft cloud services easily. 
         They support companies in setting up secure IT systems, improving teamwork, and increasing productivity.
          Their solutions make it easier for employees to work together, stay connected, and keep data safe.
        </p>

        <div className="flex justify-center lg:justify-start">
          <MotionButton
            B_Name="Explore Our Solutions"
            ActionToClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          />
        </div>

      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={AboutImg}
            alt="Business team collaborating in a corporate meeting with laptops"
            className="w-full max-h-[260px] sm:max-h-[320px] md:max-h-[400px] lg:max-h-none object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default About;