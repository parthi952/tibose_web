import React, { useState, useEffect } from "react";
import Img from "../../Constents";
import Helmet from "helmet";

const Heroimg = Img.HomePage.HeroImg;
const M356 = Img.HomePage.Ms365;
const PPT=Img.Microsoft_Solution.Sericeslogo.PPT;
const Excell=Img.Microsoft_Solution.Sericeslogo.Excel
const intune=Img.Microsoft_Solution.Sericeslogo.Intune;
const powerbi=Img.Microsoft_Solution.Sericeslogo.powerbi

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(timer);
  }, [index]); // ✅ small fix (better UX)

  // 🔥 NEW FUNCTIONS
  const nextSlide = () => {
    setIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const ActionButton = ({ text }) => (
    <button
      onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
      className="px-5 sm:px-6 py-2.5 cursor-pointer bg-blue-600 text-white rounded-xl font-semibold transition-all hover:bg-blue-800  hover:shadow-xl border border-blue-600 active:scale-95 mt-4"
    >
      {text}
    </button>
  );

  return (
    <section className="w-full h-135 mt-20 flex flex-col justify-between overflow-hidden relative">
      
      <Helmet>
        <title>Microsoft 365 Solutions for Business | Tibos Chennai</title>
      </Helmet>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10">

        {/* ---------------- Slide 1 ---------------- */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            index === 0
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-2 md:gap-10">

            <div className="max-w-lg text-center mb-15 lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Microsoft 365 Solutions for Businesses
              </h1>

              <p className="text-gray-200 text-sm sm:text-base mt-3">
                Microsoft 365 & Modern Workplace Solutions for Businesses.
              </p>

              <ActionButton text="Contact Our Experts" />
            </div>

            <div className="relative mb-20">
              <div className="w-[350px] h-[290px] rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-icon"><img src={PPT} className="w-10 h-10" /></div>
                  <div className="glass-icon"><img src={Excell} className="w-10 h-10" /></div>
                  <div className="glass-icon"><img src={intune} className="w-10 h-10" /></div>
                  <div className="glass-icon"><img src={powerbi} className="w-10 h-10" /></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ---------------- Slide 2 ---------------- */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            index === 1
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a2540] to-[#0f766e]" />

          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-6xl gap-2 md:gap-10">

            <img
              src={M356}
              alt="Microsoft 365"
              className="w-auto mb-20 max-h-[240px] sm:max-h-[260px] md:max-h-[300px] lg:max-h-[340px]"
            />

            <div className="max-w-lg mb-15 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Microsoft 365 for Business - Authorized Microsoft Partner in Chennai
              </h1>

              <p className="text-gray-300 mt-3 text-sm sm:text-base">
                Helping businesses deploy Microsoft 365, Azure cloud services,
                enterprise connectivity and cybersecurity solutions across India.
              </p>

              <ActionButton text="Contact Our Experts" />
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:scale-110 duration-300 transition cursor-pointer"
      >
        ❮
      </button>

      {/* 🔥 RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:scale-110 duration-300 transition cursor-pointer"
      >
        ❯
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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