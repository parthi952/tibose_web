import React from "react";
import Img from "../../Constents";

const L = Img.Microsoft_Solution.Sericeslogo;

// SVG recreation of the Microsoft Dynamics 365 logo (vector, no image file
// needed). Swap for the official PNG later if you add one to the project.
const DynamicsLogo = (
  <svg viewBox="0 0 120 120" className="w-[64%] h-[64%]" aria-hidden="true">
    <defs>
      <linearGradient id="d365grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2B5FE3" />
        <stop offset="1" stopColor="#8257E6" />
      </linearGradient>
    </defs>
    {/* Top ribbon */}
    <path
      d="M36 20 L86 32 Q96 34 96 44 L96 52 Q96 60 86 58 L66 53 L66 41 Q66 39 64 38 L36 31 Z"
      fill="url(#d365grad)"
    />
    {/* Bottom rounded panel */}
    <rect x="40" y="56" width="44" height="48" rx="12" fill="url(#d365grad)" opacity="0.92" />
    {/* Glass highlight */}
    <rect x="52" y="64" width="18" height="34" rx="7" fill="#ffffff" opacity="0.28" />
  </svg>
);

// SVG recreation of the Microsoft Copilot logo (rainbow ribbon swirl).
// Vector, no image file needed — swap for the official PNG later if you add one.
const CopilotLogo = (
  <svg viewBox="0 0 100 100" className="w-[72%] h-[72%]" aria-hidden="true">
    <defs>
      <linearGradient id="cpCool" gradientUnits="userSpaceOnUse" x1="8" y1="74" x2="82" y2="14">
        <stop offset="0" stopColor="#FFC400" />
        <stop offset="0.4" stopColor="#36B34A" />
        <stop offset="0.7" stopColor="#1FA8E0" />
        <stop offset="1" stopColor="#1B4FE3" />
      </linearGradient>
      <linearGradient id="cpWarm" gradientUnits="userSpaceOnUse" x1="60" y1="18" x2="58" y2="90">
        <stop offset="0" stopColor="#8A50D6" />
        <stop offset="0.5" stopColor="#E8438C" />
        <stop offset="1" stopColor="#F6822E" />
      </linearGradient>
    </defs>
    <path
      d="M14 54 C14 28 31 15 52 15 C71 15 81 26 81 42"
      fill="none"
      stroke="url(#cpCool)"
      strokeWidth="21"
      strokeLinecap="round"
    />
    <path
      d="M45 21 C72 23 85 35 85 56 C85 79 70 87 49 87"
      fill="none"
      stroke="url(#cpWarm)"
      strokeWidth="21"
      strokeLinecap="round"
    />
  </svg>
);

// Microsoft 365 / security products shown in the floating cluster.
// Positions are computed from this list, so adding a logo is just appending
// one line below — no manual coordinates.
const icons = [
  { src: L.Exchange, name: "Exchange" },
  { src: L.EntraId, name: "Entra ID" },
  { src: L.Intune, name: "Intune" },
  { src: L.Defender, name: "Defender" },
  { src: Img.Slide_4.Azure, name: "Azure Cloud" },
  { svg: DynamicsLogo, name: "Dynamics 365" },
  { svg: CopilotLogo, name: "Copilot" },
  // Add when you provide the logo (save to public/logos/ or give a blob URL):
  // { src: "/logos/purview.png", name: "Purview" },
];

// Spread a set of icons evenly around a circle of the given radius (% of box).
const place = (list, radius, startDeg) =>
  list.map((icon, i) => {
    const angle = ((startDeg + (360 / list.length) * i) * Math.PI) / 180;
    return {
      ...icon,
      left: `${50 + radius * Math.cos(angle)}%`,
      top: `${50 + radius * Math.sin(angle)}%`,
    };
  });

// One ring for small sets, two rings once it gets crowded.
const tiles =
  icons.length <= 8
    ? place(icons, 38, -90)
    : [
        ...place(icons.slice(0, Math.ceil(icons.length / 2)), 23, -90),
        ...place(icons.slice(Math.ceil(icons.length / 2)), 42, -90 + 22),
      ];

const M365Showcase = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <style>
        {`
          @keyframes m365-float {
            0%, 100% { transform: translate(-50%, -50%); }
            50% { transform: translate(-50%, calc(-50% - 8px)); }
          }
          .m365-tile { animation: m365-float 5s ease-in-out infinite; }
        `}
      </style>

      {/* Soft backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/60 shadow-inner" />

      {/* Product logo tiles */}
      {tiles.map((icon, i) => (
        <div
          key={icon.name}
          className="m365-tile absolute flex w-[16%] aspect-square items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-gray-100"
          style={{ top: icon.top, left: icon.left, animationDelay: `${(i % 6) * 0.4}s` }}
          title={icon.name}
        >
          {icon.svg ? (
            icon.svg
          ) : (
            <img
              src={icon.src}
              alt={`Microsoft ${icon.name}`}
              loading="lazy"
              className="w-[62%] h-[62%] object-contain"
            />
          )}
        </div>
      ))}

      {/* Center: Microsoft 365 mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-1 w-12 h-12 sm:w-14 sm:h-14">
          <span className="rounded-[2px]" style={{ background: "#F25022" }} />
          <span className="rounded-[2px]" style={{ background: "#7FBA00" }} />
          <span className="rounded-[2px]" style={{ background: "#00A4EF" }} />
          <span className="rounded-[2px]" style={{ background: "#FFB900" }} />
        </div>
        <span className="mt-2 font-semibold text-slate-700 text-sm sm:text-base">
          Microsoft 365
        </span>
      </div>
    </div>
  );
};

export default M365Showcase;
