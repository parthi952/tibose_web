import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ icon, image, title, shineDelay = '0s' }) => (
  <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200/70 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

    {/* Background image */}
    {image ? (
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    ) : (
      <div className="absolute inset-0 bg-gray-100" />
    )}

    {/* Readability gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-slate-900/5" />

    {/* Shine sweep */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <span
        className="industry-shine absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ animationDelay: shineDelay }}
      />
    </div>

    {/* Icon badge */}
    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>

    {/* Title + CTA */}
    <div className="absolute inset-x-0 bottom-0 p-5">
      <h3 className="text-lg font-bold uppercase tracking-wide text-white leading-tight">
        {title}
      </h3>
      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Explore <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </div>
);

export default IndustryCard;
