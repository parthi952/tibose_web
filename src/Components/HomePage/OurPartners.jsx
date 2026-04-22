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

  const duplicatedLogos = [...logos, ...logos, ...logos];
  const containerRef = useRef(null);
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    const moveBy = -80 * (delta / 1000); // Smooth constant speed
    const newX = baseX.get() + moveBy;

    // Reset loop point
    if (newX <= -containerRef.current.scrollWidth / 3) {
      baseX.set(0);
    } else {
      baseX.set(newX);
    }
  });

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-blue-600 mb-8 sm:mb-10 uppercase text-center">
        Our Partners
      </h2>

        <div className="relative flex items-center justify-center">
          {/* GLASS CARD (Z-index 10) */}
          <div className="absolute z-10 w-[260px] h-[140px] sm:w-[340px] sm:h-[180px] md:w-[420px] md:h-[220px] 
                          bg-white/30 backdrop-blur-lg rounded-[2.5rem] border border-white/50 
                          shadow-[0_20px_50px_rgba(0,0,0,0.06)] pointer-events-none" />

          {/* LOGOS WRAPPER (Z-index 20) */}
          {/* Removed the maskImage here so logos are visible across the whole screen */}
          <div className="w-screen overflow-hidden relative z-20 flex items-center py-10">
            <motion.div 
              ref={containerRef}
              className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
              style={{ x: baseX }}
            >
              {duplicatedLogos.map((logo, index) => (
                <LogoItem key={index} logo={logo} parentRef={containerRef} />
              ))}
            </motion.div>
          </div>
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
    
    // Get the center point of the current screen/container
    const containerRect = parentRef.current.parentElement.getBoundingClientRect();
    const itemRect = itemRef.current.getBoundingClientRect();
    
    const containerCenter = containerRect.left + containerRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;
    
    const distance = itemCenter - containerCenter;
    
    // We normalize the distance. 
    // 0 = Center of card. 
    // 1 or -1 = Just outside the card boundaries.
    const normalizedDistance = Math.min(Math.max(distance / (containerRect.width / 4), -1), 1);
    
    setPosition(normalizedDistance);
  });

  // ANIMATION LOGIC
  // Scale: 1.3 at center, 0.75 everywhere else
  const scale = 1.3 - Math.abs(position) * 0.55; 
  
  // Opacity: 1 at center, stays visible at 0.35 on the far sides (International standard look)
  const opacity = 1 - Math.abs(position) * 0.65; 

  // Blur: Sharp at center, very slight blur (1px) on sides for depth
  const blurValue = Math.abs(position) * 2;

  return (
    <motion.div
      ref={itemRef}
      style={{ 
        scale: scale, 
        opacity: opacity,
        filter: `blur(${blurValue}px)`,
    
      }}
      className="flex shrink-0 items-center justify-center w-[120px] h-[80px] sm:w-[160px] sm:h-[110px] md:w-[220px] md:h-[140px]"
    >
      <img
        src={logo.url}
        alt={logo.name}
        className="max-w-[70%] max-h-[70%] w-auto h-auto object-contain select-none pointer-events-none"
      />
    </motion.div>
  );
};

export default OurPartners;