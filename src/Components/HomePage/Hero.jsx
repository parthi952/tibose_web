import React, { useState, useEffect } from "react";
import Img from "../../Constents";

const Heroimg = Img.HomePage.HeroImg;
const M356 = Img.HomePage.Ms365;

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const ActionButton = ({ text }) => (
    <button className="px-5 sm:px-6 py-2.5 cursor-pointer bg-blue-600 text-white rounded-xl font-semibold transition-all hover:bg-transparent hover:text-blue-600 hover:shadow-xl border border-blue-600 active:scale-95 mt-4">
      {text}
    </button>
  );

  return (
    <section className="bg-blue-50 w-full h-130 mt-20 pt-16 sm:pt-20 lg:pt-24 flex flex-col justify-between overflow-hidden">

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10">

        {/* Slide 1 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            index === 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8 pointer-events-none"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-2 md:gap-10">

            {/* Text */}
            <div className="max-w-lg text-center mb-15 lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                Microsoft 365 Solutions for Businesses
              </h1>

              <p className="text-gray-600  text-sm sm:text-base mt-3">
                Microsoft 365 & Modern Workplace Solutions for Businesses.
              </p>

              <ActionButton text="Contact Our Experts" />
            </div>

            {/* Image */}
            <img
              src={Heroimg}
              alt="Hero"
              className="w-auto mb-20 max-h-[240px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[340px] object-contain"
            />

          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            index === 1
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8 pointer-events-none"
          }`}
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-6xl gap-2 md:gap-10">

            {/* Image */}
            <img
              src={M356}
              alt="Microsoft 365"
              className="w-auto mb-20 max-h-[240px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[340px] object-contain"
            />

            {/* Text */}
            <div className="max-w-lg mb-15 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Microsoft 365 for Business – Authorized Microsoft Partner in Chennai
              </h1>

              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                Helping businesses deploy Microsoft 365, Azure cloud services,
                enterprise connectivity and cybersecurity solutions across India.
              </p>

              <ActionButton  text="Contact Our Experts" />
            </div>

          </div>
        </div>

      </div>

      {/* Slider Indicators */}
      <div className="flex justify-center gap-3 mb-2">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === i ? "w-8 bg-blue-600" : "w-4 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;