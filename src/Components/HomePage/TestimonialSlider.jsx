import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Partnering with this team has transformed our workflow and communication. Their solutions are reliable, modern, and perfectly aligned with our business needs. We’ve seen remarkable improvements in efficiency, connectivity, and customer satisfaction across all departments.",
    name: "Aravind Kumar",
    role: "Operations Manager",
  },
  {
    quote:
      "We rely on their technology solutions daily, and the impact has been outstanding. Performance improved, downtime reduced, and communication became effortless. Their expertise and commitment make them one of the most dependable partners we’ve collaborated with.",
    name: "Sandeep Reddy",
    role: "Business Development Header",
  },
  {
    quote:
      "Their service quality is consistently exceptional, and the support team responds faster than any provider we’ve worked with. From implementation to ongoing optimization, everything has been smooth, transparent, and results-driven. Truly a partner who understands business challenges.",
    name: "Priya Sharma",
    role: "IT Director",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 flex flex-col items-center py-12 sm:py-14 md:py-16 px-4">

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-blue-600 mb-8 sm:mb-10 uppercase text-center">
        Our Testimonials
      </h2>

      {/* Testimonial Card */}
      <div className="relative bg-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-lg sm:max-w-xl md:max-w-2xl min-h-[260px] sm:min-h-[300px] md:min-h-[350px] flex flex-col justify-center text-center overflow-hidden">

        {/* Background Decorations */}
        <div className="absolute -top-10 -right-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-blue-300 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 bg-blue-200 rounded-full opacity-30"></div>

        {/* Content */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-gray-700 leading-relaxed mb-5 sm:mb-6 px-2 sm:px-4">
                “{testimonials[activeIndex].quote}”
              </p>

              <div className="author-info">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 inline">
                  {testimonials[activeIndex].name},
                </h3>
                <p className="text-gray-500 text-sm sm:text-base inline ml-2">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-7 md:bottom-8 left-0 right-0 flex justify-center items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "bg-blue-600 w-7 sm:w-8"
                  : "bg-gray-300 w-2.5 sm:w-3 hover:bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;