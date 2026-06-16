import React, { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Img from "../../Constents";

const OurPartners = () => {
  const logos = [
    { name: "Airtel", url: Img.HomePage.OurPartners.Airtel },
    { name: "Ola", url: Img.HomePage.OurPartners.Ola },
    { name: "Microsoft", url: Img.HomePage.OurPartners.Microsoft },
    { name: "Omega", url: Img.HomePage.OurPartners.Omega },
    { name: "Swiggy", url: Img.HomePage.OurPartners.Swiggy },
    { name: "TC", url: Img.HomePage.OurPartners.TC },
    { name: "TATA Tele", url: Img.HomePage.OurPartners.TT },
  ];

  // Tripled to ensure endless smooth scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const containerRef = useRef(null);
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    const moveBy = -80 * (delta / 1000); // Constant speed
    const newX = baseX.get() + moveBy;

    // Reset loop point when we've scrolled past one full set of logos
    if (newX <= -containerRef.current.scrollWidth / 4) {
      baseX.set(0);
    } else {
      baseX.set(newX);
    }
  });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950 border-y border-slate-800">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 mb-12 relative z-10">
        <h2 className="text-sm md:text-base font-bold tracking-[0.4em] text-slate-400 uppercase text-center mb-4">
          Trusted By Industry Leaders
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white text-center">
          Our Partners
        </h3>
      </div>

      <div className="relative flex items-center justify-center w-full z-10">
        {/* Transparent gradient masks for smooth fade out at edges - Dark theme */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="w-screen overflow-hidden relative z-10 flex items-center py-16">
          <motion.div
            ref={containerRef}
            className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
            style={{ x: baseX }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={index} logo={logo} parentRef={containerRef} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoItem = ({ logo, parentRef }) => {
  const itemRef = useRef(null);
  const [position, setPosition] = useState(0);

  useAnimationFrame(() => {
    if (!itemRef.current || !parentRef.current) return;

    const containerRect = parentRef.current.parentElement.getBoundingClientRect();
    const itemRect = itemRef.current.getBoundingClientRect();

    const containerCenter = containerRect.left + containerRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;

    const distance = itemCenter - containerCenter;

    // Normalize distance to define the center bounds for scaling
    const normalizedDistance = Math.min(Math.max(distance / (containerRect.width / 4), -1), 1);
    setPosition(normalizedDistance);
  });

  // Scale: Max 1.25 at center, drops to 0.85 away from center
  const scale = 1.25 - Math.abs(position) * 0.4;
  
  // Opacity: Full 1 at center, drops slightly at edges
  const opacity = 1 - Math.abs(position) * 0.5;

  return (
    <motion.div
      ref={itemRef}
      style={{
        scale: scale,
        opacity: opacity,
      }}
      className="flex shrink-0 items-center justify-center w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[260px] md:h-[160px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl"
    >
      <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center bg-white rounded-3xl">
        <img
          src={logo.url}
          alt={logo.name}
          className="max-w-full max-h-full object-contain select-none pointer-events-none filter transition-all duration-500 hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
};

export default OurPartners;
