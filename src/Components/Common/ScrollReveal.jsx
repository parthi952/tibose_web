import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);

  // Track the scroll progress of the section as it enters the viewport
  // "start end" = top of the element enters the bottom of the viewport
  // "start center" = top of the element reaches the center of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  // Establish smooth mapping values for entering
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  // Apply high-performance spring physics to make the 3D scroll movement feel fluid and heavy
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20, mass: 0.8 });
  const rotateX = useSpring(rawRotateX, { stiffness: 60, damping: 20, mass: 0.8 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  return (
    <div
      ref={ref}
      className="w-full overflow-visible"
      style={{ perspective: "1500px" }} // Establish perspective layer context
    >
      <motion.div
        style={{
          scale,
          rotateX,
          opacity,
          y,
          transformOrigin: "top center", // Anchor rotation to pivot into screen elegantly
          backfaceVisibility: "hidden",
          willChange: "transform, opacity"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
