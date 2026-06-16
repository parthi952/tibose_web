import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustryCard = ({ icon, image, title, description, index, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className={`group relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-950 cursor-pointer ring-1 ring-white/10 hover:ring-blue-500/50 transition-all duration-500 shadow-2xl ${className}`}
  >
    {/* Background Image - stays subtle until hover */}
    {image ? (
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700 ease-in-out group-hover:scale-110"
      />
    ) : (
      <div className="absolute inset-0 bg-slate-800" />
    )}

    {/* Dual Gradient Overlay for rich depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent mix-blend-overlay" />

    {/* Top Icon Badge - Always visible, subtle glow on hover */}
    <div className="absolute top-8 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
      {icon}
    </div>

    {/* Content Container - Bottom aligned, Title always visible */}
    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
      
      {/* Title - Always visible, crisp typography */}
      <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-md">
        {title}
      </h3>
      
      {/* Description & Button Wrapper - Expands on hover */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
        <div className="overflow-hidden">
          
          <p className="text-slate-300 text-sm leading-relaxed pt-2 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
            <span className="tracking-wide uppercase text-xs">Explore Solutions</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>

        </div>
      </div>
      
    </div>
  </motion.div>
);

export default IndustryCard;
