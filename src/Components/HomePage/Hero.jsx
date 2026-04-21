import React, { useState, useEffect } from "react";
import Img from "../../Constents";
import Helmet from "helmet";

// Microsoft 365 Slide Icons
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

// Slide 5 Badges (Now Slide 4)
const Tata_logo = Img.Slide_5.Tatalogo;
const Tata_tale_business = Img.Slide_5.Tata_tele_business;
const Slide5banner = Img.Slide_5.Slide5_banner;

// Slide 3 Badges (Now Slide 2)
const modern = Img.Hero_solution.modern_logo;
const infrastructure = Img.Hero_solution.infrastructure;
const Security = Img.Hero_solution.Security;
const Autherized_reseller = Img.Hero_solution.Autherized_reseller;
const solution_partner = Img.Hero_solution.Solution_partner;
const bussiness_application = Img.Hero_solution.Bussiness_Application;

// Slide 4 Badges (Now Slide 3)
const Azure = Img.Slide_4.Azure;
const AWS = Img.Slide_4.AWS;
const Google_Workspace = Img.Slide_4.GoogleWorkspace;
const Zoom = Img.Slide_4.Zoom;

// Slide 2 Center Logo (Now Slide 1)
const center_logo = Img.SLide_2.center_logo;

// Technology Stack Icons
const partnerLogos = [
  { img: AWS, name: "AWS", scale: "w-16 h-16" },
  { img: Google_Workspace, name: "Google Workspace", scale: "w-20 h-20" },
  { img: Azure, name: "Azure", scale: "w-16 h-16" },
  { img: Zoom, name: "Zoom", scale: "w-16 h-16" },
];

const leftBadges = [
  { img: modern, customWidth: "w-29 sm:w-39", offset: "translate-x-4" },
  { img: infrastructure, customWidth: "w-28 sm:w-45", offset: "-translate-x-2" },
];

const rightBadges = [
  { img: Security, customWidth: "w-32 sm:w-48", offset: "translate-x-2" },
  { img: Autherized_reseller, customWidth: "w-39 sm:w-45", offset: "-translate-x-4" }
];

const appIcons = [
  { img: PPT }, { img: Excell }, { img: intune }, { img: powerbi },
  { img: Onenote }, { img: entraid }, { img: loop }, { img: Onedrive },
  { img: outlook }, { img: teams }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Logic updated for 4 slides total (0, 1, 2, 3)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 3 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev === 3 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? 3 : prev - 1));

  const ActionButton = ({ text }) => (
    <button
      onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
      className="px-5 sm:px-6 py-2.5 cursor-pointer bg-blue-600 text-white rounded-xl font-semibold transition-all hover:bg-blue-800 hover:shadow-xl border border-blue-600 active:scale-105 mt-4"
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

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        `}
      </style>

      <Helmet>
        <title>Solutions for Business | Tibos Chennai</title>
      </Helmet>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10">

        {/* ---------------- SLIDE 1 (Original Slide 2) ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${index === 1 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a2540] to-[#0f766e]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center mt-9 justify-center w-full max-w-6xl gap-5 md:gap-20">
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center mb-10 lg:mb-0">
              <div className="z-20 p-5 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl">
                <img src={center_logo} alt="MS Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
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

        {/* ---------------- SLIDE 2 (Original Slide 3) ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${index === 0 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-br bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4">
            <div className="hidden lg:flex flex-col gap-14 items-center">
              {leftBadges.map((badge, i) => (
                <div key={i} className={`animate-subtle ${badge.offset}`}>
                  <img src={badge.img} className={`${badge.customWidth} h-auto rounded-2xl shadow-xl border border-white/10`} alt="partner" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
              <img src={solution_partner} className="w-30 sm:w-48 rounded-[9px] h-auto mb-6 animate-subtle" alt="Partner Logo" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black/70 leading-tight">Microsoft Solution Partners</h1>
              <p className="text-gray-900 text-sm sm:text-base mt-4 max-w-md">Helping businesses deploy Microsoft 365, Azure cloud services, and cybersecurity solutions across India.</p>
              <ActionButton text="Contact Our Expert" />
              <img src={bussiness_application} className="w-30 sm:w-48 rounded-[9px] h-auto mt-10 animate-subtle" alt="Partner Logo" />
              <div className="flex lg:hidden flex-wrap justify-center gap-4 mt-8">
                {[...leftBadges, ...rightBadges].map((b, i) => (
                  <img key={i} src={b.img} className="w-16 h-auto rounded-lg" alt="partner" />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-14 items-center">
              {rightBadges.map((badge, i) => (
                <div key={i} className={`animate-subtle ${badge.offset}`}>
                  <img src={badge.img} className={`${badge.customWidth} h-auto rounded-2xl shadow-xl border border-white/10`} alt="partner" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- SLIDE 3 (Original Slide 4) ---------------- */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${index === 2 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]" />
          <div className="absolute top-[-20%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-400/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-400/10 rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4 sm:px-6 gap-6 md:gap-10">
            <div className="flex-1 text-center lg:text-left space-y-5">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="text-blue-200 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">Enterprise Excellence</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                Enterprise Cloud & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Connectivity Solutions</span>
              </h1>
              <p className="text-blue-100/80 text-xs sm:text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
                Tibos Solutions provides enterprise cloud infrastructure, multi-cloud integration, and secure connectivity solutions. We help businesses deploy Microsoft Azure, AWS, Google Workspace, and collaboration platforms for scalable digital transformation.
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <ActionButton text="Contact Our Expert" />
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[160px] sm:max-w-[240px] md:max-w-[360px]">
                <div className="absolute inset-0 bg-blue-400/20 blur-xl sm:blur-2xl md:blur-3xl rounded-full" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl md:rounded-[40px] p-3 sm:p-6 md:p-10 shadow-2xl">
                  <p className="text-blue-200/60 text-[7px] sm:text-[10px] font-bold tracking-widest uppercase mb-3 sm:mb-6 text-center">Technology Stack</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-5 md:gap-8">
                    {partnerLogos.map((item, i) => (
                      <div key={i} className="flex items-center justify-center w-full aspect-square bg-white/95 rounded-md sm:rounded-xl md:rounded-2xl shadow-md">
                        <img src={item.img} className="w-6 sm:w-15 md:w-20 object-contain" alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ---------------- SLIDE 4 (Original Slide 5) ---------------- */}
<div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${index === 3 ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-8 pointer-events-none z-0"}`}>
  <div className="absolute inset-0">
    <img src={Slide5banner} className="w-full h-full object-cover" alt="Banner" />
  </div>
  <div className="absolute inset-0 bg-black/40" />
  
  {/* Logos */}
  <div className="absolute top-2 left-5 sm:left-10 z-20">
    <img src={Tata_tale_business} className="w-20 sm:w-32 object-contain" alt="Logo" />
  </div>
  <div className="absolute top-8 right-5 sm:right-10 z-20">
    <img src={Tata_logo} className="w-16 sm:w-28 object-contain" alt="Logo" />
  </div>

  <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl text-white px-4 text-center -mt-6 sm:-mt-10">
    <h1 className="text-2xl sm:text-4xl font-bold mt-20 leading-tight">
      Stay Connected. Stay Ahead. <br />With Reliable Enterprise Solutions
    </h1>
    <p className="mt-8 sm:mt-6 text-xs sm:text-sm text-blue-300 max-w-xl">
      Empower your business with reliable, high-performance connectivity solutions from Tata Tele Business Services, ensuring seamless communication and 24/7 uninterrupted operations.
    </p>

    {/* Indha idathula dhan Button change panniruken */}
    <div className="mt-6 sm:mt-8">
      <ActionButton text="Contact Our Experts" />
    </div>

    <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      {["🌐", "📞", "☁️", "🛡️"].map((icon, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl text-center shadow-lg w-28 sm:w-36">
          <div className="text-xl sm:text-2xl">{icon}</div>
          <p className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            {["Network", "Voice", "Cloud", "Security"][i]}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
      {/* --- Controls --- */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 p-3 rounded-full text-white hover:bg-blue-600 transition-all cursor-pointer">❮</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 p-3 rounded-full text-white hover:bg-blue-600 transition-all cursor-pointer">❯</button>

      {/* --- Slider Indicators --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-white" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;