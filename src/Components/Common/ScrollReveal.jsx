import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 14,
        delay: delay,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
