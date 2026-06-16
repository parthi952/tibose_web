import React, { useRef } from "react";
import Hero from "../HomePage/Hero";
import About from "../HomePage/About";
import Achievements from "../HomePage/Achievements";
import Services from "../HomePage/Services";
import OurSolution from "../HomePage/OurSolution";
import TestimonialSlider from "../HomePage/TestimonialSlider";
import OurPartners from "../HomePage/OurPartners";
import IndustriesShowcase from "../HomePage/IndustriesShowcase";
import OurBlogs from "../HomePage/OurBlogs";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxLayer = ({ children, index, isFirst }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress of this specific section.
  // "start start" = top of container hits top of viewport
  // "end start" = bottom of container hits top of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // As we scroll past, the section moves down slower than the scroll, fades, and shrinks.
  // This creates the massive depth effect as the next section slides over it.
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "12vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Using z-index hierarchy: early elements have lower z-index so later elements cover them naturally.
  // Actually, standard DOM flow already does this (later elements sit on top), but we add z-index to be perfectly safe.
  const zIndex = index + 1; 

  return (
    <div ref={containerRef} className="relative w-full" style={{ zIndex }}>
      <motion.div 
        style={{ y, opacity, scale }}
        className="w-full relative origin-top will-change-transform"
      >
        <div 
          className={`w-full bg-white relative ${
            !isFirst ? "rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.08)] mt-[-20px]" : ""
          }`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Microsoft Solutions Partner in Chennai | Tibos Solutions</title>
        <meta
          name="description"
          content="Tibos Solutions is a trusted Microsoft partner providing Microsoft 365, Azure, cybersecurity, and enterprise IT solutions in Chennai."
        />
        <meta
          name="keywords"
          content="Microsoft partner Chennai, Microsoft solutions India, Azure, Microsoft 365, cybersecurity services"
        />
        <link rel="canonical" href="https://tibos.co.in/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tibos Solutions | Microsoft Partner Chennai" />
      </Helmet>

      {/* Global Background Layer */}
      <div className="fixed inset-0 bg-slate-50 -z-50" />

      <div className="relative min-h-screen text-slate-800 font-sans">
        
        {/* Soft, beautiful modern tech mesh gradients - fixed to background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-gradient-to-tr from-blue-200/40 to-indigo-200/30 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-bl from-cyan-200/30 to-sky-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-indigo-200/20 to-blue-200/40 rounded-full blur-[130px]" />

          {/* Subtle elegant tech grid coordinates */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(59,130,246,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px'
          }} />
        </div>

        {/* Main Content Stacking Container - Removed gaps to allow overlapping */}
        <div className="relative z-10 w-full flex flex-col">
          <ParallaxLayer index={0} isFirst={true}><Hero /></ParallaxLayer>
          <ParallaxLayer index={1}><About /></ParallaxLayer>
          <ParallaxLayer index={2}><Achievements /></ParallaxLayer>
          <ParallaxLayer index={3}><Services /></ParallaxLayer>
          <ParallaxLayer index={4}><OurSolution /></ParallaxLayer>
          <ParallaxLayer index={5}><TestimonialSlider /></ParallaxLayer>
          <ParallaxLayer index={6}><OurPartners /></ParallaxLayer>
          <ParallaxLayer index={7}><IndustriesShowcase /></ParallaxLayer>
          <ParallaxLayer index={8}><OurBlogs /></ParallaxLayer>
        </div>
      </div>
    </div>
  );
};

export default Home;
