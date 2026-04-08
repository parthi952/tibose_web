import React, { useState, useEffect } from "react";
import Img from "../../Constents";
import Helmet from "helmet";

// Existing Imports
const PPT = Img.Microsoft_Solution.Sericeslogo.PPT;
const Excell = Img.Microsoft_Solution.Sericeslogo.Excel;
const intune = Img.Microsoft_Solution.Sericeslogo.Intune;
const powerbi = Img.Microsoft_Solution.Sericeslogo.powerbi;
const Onenote = Img.Microsoft_Solution.Sericeslogo.OneNote;
const Onedrive = Img.Microsoft_Solution.Sericeslogo.OneDrive;
const entraid = Img.Microsoft_Solution.Sericeslogo.EntraId;
const loop = Img.Microsoft_Solution.Sericeslogo.Loop;
const outlook = Img.Microsoft_Solution.Sericeslogo.Outlook;
const teams = Img.Microsoft_Solution.Sericeslogo.Teams;

// Slide 3 Badges - Left & Right Arc Alignment
const leftBadges = [
  { img: "2.png", customWidth: "w-24 sm:w-32", offset: "translate-x-4" }, 
  { img: "1.png", customWidth: "w-28 sm:w-36", offset: "-translate-x-2" },
];

const rightBadges = [
  { img: "3.png", customWidth: "w-32 sm:w-40", offset: "translate-x-2" },
  { img: "4.png", customWidth: "w-24 sm:w-32", offset: "-translate-x-4" }
];

const centerIcon = "solution.png";

// --- UPDATED ICON ORDER FOR SLIDE 1 ---
// Slide 1 first 4 icons-ai mattum dhaan display pannum (slice(0,4))
// Adhanaala PPT, Excel, Intune, PowerBI-ah modhala vachurukaen
const appIcons = [
  { img: PPT },      // 1st icon
  { img: Excell },   // 2nd icon
  { img: intune },   // 3rd icon (Loop-ku badhila)
  { img: powerbi },  // 4th icon (OneDrive-ku badhila)
  { img: Onenote }, 
  { img: entraid }, 
  { img: loop }, 
  { img: Onedrive },
  { img: outlook }, 
  { img: teams }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? 2 : prev - 1));

  const ActionButton = ({ text }) => (
    <button
      onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
      className="px-5 sm:px-6 py-2.5 cursor-pointer bg-blue-600 text-white rounded-xl font-semibold transition-all hover:bg-blue-800 hover:shadow-xl border border-blue-600 active:scale-95 mt-4"
    >
      {text}
    </button>
  );

  return (
    <section className="w-full h-135 mt-20 flex flex-col justify-between overflow-hidden relative">
      <style>
        {`
          @keyframes subtle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-subtle { animation: subtle-float 4s ease-in-out infinite; }
          
          @keyframes icon-sequence {
            0%, 100% { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1); opacity: 0.8; }
            50% { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1.1); opacity: 1; }
          }
          .animate-sequence { animation: icon-sequence 4s infinite ease-in-out; }
        `}
      </style>

      <Helmet>
        <title>Microsoft 365 Solutions for Business | Tibos Chennai</title>
      </Helmet>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10">
        
        {/* ---------------- SLIDE 1 ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          index === 0 ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-8 pointer-events-none z-0"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-2 md:gap-10">
            <div className="max-w-lg text-center mb-2 lg:text-left text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Microsoft 365 Solutions for Businesses</h1>
              <p className="text-gray-100 text-sm sm:text-base mt-3">Empowering your modern workplace with secure, scalable, and integrated Microsoft 365 solutions.</p>
              <ActionButton text="Contact Our Experts" />
            </div>
            <div className="relative mb-20">
               <div className="w-[350px] h-[290px] rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-6">
                    {/* slice(0, 4) ippo array-la irukka first 4 icons (PPT, Excel, Intune, PowerBI)-ah edukum */}
                    {appIcons.slice(0, 4).map((icon, i) => (
                       <div key={i} className="glass-icon"><img src={icon.img} className="w-10 h-10" alt="app" /></div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* ---------------- SLIDE 2 ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          index === 1 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a2540] to-[#0f766e]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10 md:gap-20">
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center mb-10 lg:mb-0">
              <div className="z-20 p-5 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl">
                 <img src="powerbi 2.png" alt="MS Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
              </div>
              {appIcons.map((item, i) => {
                const angle = (i * 36) * (Math.PI / 180);
                const radius = window.innerWidth < 640 ? 110 : 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div key={i} className="absolute bg-white/20 backdrop-blur-lg p-2.5 sm:p-3.5 rounded-2xl border border-white/40 shadow-xl animate-sequence"
                    style={{ "--tw-translate-x": `${x}px`, "--tw-translate-y": `${y}px`, transform: `translate(${x}px, ${y}px)`, animationDelay: `${i * 0.3}s` }}>
                    <img src={item.img} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" alt="app" />
                  </div>
                );
              })}
            </div>
            <div className="max-w-lg mb-15 text-center lg:text-left text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Authorized Microsoft Partner in Chennai</h1>
              <p className="text-gray-300 mt-3 text-sm sm:text-base">Helping businesses deploy Microsoft 365, Azure cloud services, and cybersecurity solutions across India.</p>
              <ActionButton text="Contact Our Experts" />
            </div>
          </div>
        </div>

        {/* ---------------- SLIDE 3 ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          index === 2 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4c00ff] via-[#2a0099] to-[#020617]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4">
            
            {/* Left Arc Badges */}
            <div className="hidden lg:flex flex-col gap-14 items-center">
              {leftBadges.map((badge, i) => (
                <div key={i} className={`animate-subtle ${badge.offset}`}>
                  <img src={badge.img} className={`${badge.customWidth} h-auto rounded-2xl shadow-xl border border-white/10`} alt="partner" />
                </div>
              ))}
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
              <img src={centerIcon} className="w-30 sm:w-35 rounded-[9px] h-auto mb-6 animate-subtle" alt="Partner Logo" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Microsoft Solution Partners
              </h1>
              <p className="text-gray-300 text-sm sm:text-base mt-4 max-w-md">
                Helping businesses deploy Microsoft 365, Azure cloud services, and cybersecurity solutions across India.
              </p>
              <ActionButton text="Contact Our Expert" />
               <img src="image 73.png"className="w-30 sm:w-35 rounded-[9px] h-auto mt-10 animate-subtle" alt="Partner Logo" />
              
              {/* Mobile View Badges */}
              <div className="flex lg:hidden flex-wrap justify-center gap-4 mt-8">
                 {[...leftBadges, ...rightBadges].map((b, i) => (
                   <img key={i} src={b.img} className="w-16 h-auto rounded-lg" alt="partner" />
                 ))}
              </div>
            </div>

            {/* Right Arc Badges */}
            <div className="hidden lg:flex flex-col gap-14 items-center">
              {rightBadges.map((badge, i) => (
                <div key={i} className={`animate-subtle ${badge.offset}`}>
                  <img src={badge.img} className={`${badge.customWidth} h-auto rounded-2xl shadow-xl border border-white/10`} alt="partner" />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* --- Controls --- */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 p-3 rounded-full text-white hover:bg-blue-600 transition-all cursor-pointer">❮</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 p-3 rounded-full text-white hover:bg-blue-600 transition-all cursor-pointer">❯</button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-blue-600" : "w-4 bg-gray-400"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;