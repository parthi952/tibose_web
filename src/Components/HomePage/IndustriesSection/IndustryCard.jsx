import React from 'react';

const IndustryCard = ({ image, title }) => {
  return (
    <div className="group shrink-0 flex flex-col items-center p-3 rounded-2xl bg-white border border-slate-100/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(59,130,246,0.15)] hover:border-blue-200/50 hover:-translate-y-2 transition-all duration-500 w-64 h-84 mx-2 cursor-pointer relative overflow-hidden">
      {/* Subtle blue accent bar on top of the card that expands on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

      {/* Enhanced Industry Image Container with zoom effect */}
      <div className="w-full h-[70%] overflow-hidden rounded-xl bg-slate-50 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-300 text-xs">
            No Image
          </div>
        )}
        {/* Soft overlay gradient that highlights the image on card hover */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Enhanced Title Area */}
      <div className="flex-1 flex items-center justify-center w-full px-3 py-4">
        <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 text-center uppercase tracking-wider leading-snug transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IndustryCard;
