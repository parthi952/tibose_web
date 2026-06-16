import React from 'react';

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Per-card accent palette. Full class strings are kept literal so Tailwind
// keeps them in the build (no dynamic class purging).
const accents = [
  {
    border: 'border-blue-500',
    ring: 'bg-blue-50',
    num: 'text-blue-100',
    title: 'text-blue-700',
    overlay: 'from-blue-600 to-blue-700',
  },
  {
    border: 'border-teal-500',
    ring: 'bg-teal-50',
    num: 'text-teal-100',
    title: 'text-teal-700',
    overlay: 'from-teal-500 to-teal-600',
  },
  {
    border: 'border-purple-500',
    ring: 'bg-purple-50',
    num: 'text-purple-100',
    title: 'text-purple-700',
    overlay: 'from-purple-600 to-purple-700',
  },
  {
    border: 'border-amber-500',
    ring: 'bg-amber-50',
    num: 'text-amber-100',
    title: 'text-amber-700',
    overlay: 'from-amber-500 to-amber-600',
  },
  {
    border: 'border-pink-500',
    ring: 'bg-pink-50',
    num: 'text-pink-100',
    title: 'text-pink-700',
    overlay: 'from-pink-600 to-pink-700',
  },
];

const Card = ({ CardImg, CardImgName, Title, Description, Path, index = 0 }) => {
  const accent = accents[index % accents.length];
  const number = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`group relative w-full h-full overflow-hidden rounded-2xl border-t-4 ${accent.border} bg-white shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
    >
      {/* Big watermark number */}
      <span
        className={`pointer-events-none absolute top-2 right-4 text-6xl font-black leading-none select-none ${accent.num}`}
      >
        {number}
      </span>

      {/* Default content */}
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 mb-4 rounded-2xl ${accent.ring} flex items-center justify-center`}>
          <img src={CardImg} alt={CardImgName} className="w-9 h-9 object-contain" />
        </div>

        <h3 className={`font-bold text-base tracking-wide mb-2 uppercase ${accent.title}`}>
          {Title}
        </h3>

        <p className="text-gray-500 leading-snug text-sm mb-6">
          {Description}
        </p>
      </div>

      <div className="mt-auto">
        <Link to={Path} aria-label={`Open ${Title}`}>
          <ArrowRight className="inline-block w-6 h-6 text-gray-400" />
        </Link>
      </div>

      {/* Hover-reveal colored overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br ${accent.overlay} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`}
      >
        <span className="absolute top-2 right-4 text-6xl font-black leading-none text-white/15 select-none">
          {number}
        </span>
        <h3 className="font-bold text-base tracking-wide mb-3 uppercase">
          {Title}
        </h3>
        <p className="text-white/90 leading-snug text-sm mb-6">
          {Description}
        </p>
        <Link
          to={Path}
          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 font-semibold text-sm backdrop-blur-sm transition hover:bg-white/25"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
