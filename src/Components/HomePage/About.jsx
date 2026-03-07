import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion
import AboutImg from "../../assets/AboutUs.png";

const About = () => {
  return (
    <section className="flex items-center max-w-7xl mx-auto px-6 md:px-20 py-10 flex-col md:flex-row gap-12 font-sans overflow-hidden">
      
      {/* Left Content Side */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}     // Start hidden and 50px to the left
        whileInView={{ opacity: 1, x: 0 }}   // Animate in when visible
        viewport={{ once: true }}            // Only animate once
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="text-blue-600 font-bold uppercase tracking-wider text-5xl">
          About Us
        </h4>
        
        <h2 className="text-4xl md:text-3xl font-bold text-slate-900 leading-tight">
          We assure you of our utmost satisfaction guarantee for the work we deliver.
        </h2>
        
        <p className="text-gray-600 leading-relaxed max-w-lg">
          We are a team of seasoned experts from various business sectors. We 
          partner with top-tier technology companies to offer our clients relevant, 
          reliable, and cost-effective solutions based on our experience and 
          understanding of markets.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}       // Subtle grow on hover
          whileTap={{ scale: 0.95 }}        // Subtle shrink on click
          className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-200 transition-all duration-300"
        >
          Learn more
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            »
          </span>
        </motion.button>
      </motion.div>

      {/* Right Image Side */}
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: 50, scale: 0.9 }} // Start smaller and to the right
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for a sequenced feel
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={AboutImg} 
            alt="Business team meeting" 
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default About;