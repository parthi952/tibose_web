import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ title, description, imageUrl, date, category, variant = "list" }) => {
  const navigate = useNavigate();

  if (variant === "featured") {
    return (
      <div 
        onClick={() => navigate("/blog-details")}
        className="group cursor-pointer flex flex-col w-full h-full bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] max-h-[280px] shrink-0 overflow-hidden bg-slate-200 border-b border-slate-100">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase shadow-sm">
            {category}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex items-center gap-3 text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>5 min read</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
          <div className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wide group-hover:gap-3 transition-all">
            Read Article <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  // Horizontal List Variant
  return (
    <div 
      onClick={() => navigate("/blog-details")}
      className="group cursor-pointer flex flex-col sm:flex-row w-full bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 sm:h-[180px] xl:h-[200px]"
    >
      <div className="relative w-full sm:w-[180px] lg:w-[160px] xl:w-[220px] aspect-[16/10] sm:aspect-auto h-full shrink-0 overflow-hidden bg-slate-200 border-b sm:border-b-0 sm:border-r border-slate-100">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute top-3 left-3 sm:hidden bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-blue-600 uppercase">
          {category}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="hidden sm:inline-block mb-2">
          <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2 sm:line-clamp-1 xl:line-clamp-2">
          {description}
        </p>
        <div className="mt-auto flex items-center gap-3 text-xs text-slate-400 font-medium">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
