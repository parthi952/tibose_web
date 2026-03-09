import React from "react";
import { motion } from "framer-motion";
import MotionButton from "../../Common/MotionButton";

const BlogCard = ({ title, description, imageUrl, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center max-w-7xl mx-auto pb-10 gap-10 md:gap-26 font-sans`}
    >
      {/* Text Content */}
      <motion.div

  className="flex-1  md:px-0  " 
  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-4xl font-bold text-slate-900 mb-4">{title}</h3>
  <p className="text-slate-600 text-xl leading-relaxed mb-6">{description}</p>
  <MotionButton
    B_Name="Read More"
    ActionToClick={() => alert("Read more clicked!")}
  />
</motion.div>



      {/* Image Content */}
      <motion.div
        className="flex-1 overflow-hidden rounded-3xl shadow-xl"
        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          height={500}
          className="w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>



    </motion.div>
  );
};

export default BlogCard;