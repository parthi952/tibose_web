import { Trophy, Users, Rocket, ShieldCheck } from 'lucide-react';
import React, { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      value: 900,
      suffix: "+",
      label: "Happy clients",
    },
    {
      id: 2,
      icon: <Rocket className="w-10 h-10 text-blue-600" />,
      value: 100,
      suffix: "+",
      label: "Project Deployed",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      value: 99.9,
      suffix: "%",
      label: "Uptime Guarantee",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // 1. Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Animation logic (only starts when hasStarted is true)
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) => {
          if (count < stats[i].value) {
            // Logic for decimals (like 99.9) and integers
            const increment = stats[i].value / 40;
            const nextValue = count + increment;
            return nextValue >= stats[i].value ? stats[i].value : nextValue;
          }
          return stats[i].value;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] md:min-h-[80vh] bg-slate-900 flex items-center justify-center overflow-hidden py-24 px-6 border-y border-slate-800">
      
      {/* Cinematic background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-sm md:text-base font-bold tracking-[0.4em] text-blue-400 uppercase mb-4">
            Tibos Impact
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span>
          </h3>
        </div>

        {/* Massive Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 w-full mt-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="relative flex flex-col items-center justify-center text-center group p-8 rounded-3xl transition-all duration-500 hover:bg-slate-800/30 ring-1 ring-transparent hover:ring-white/10">
              
              {/* Icon Container */}
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 mb-8 shadow-lg group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-110">
                {React.cloneElement(stat.icon, { className: "w-10 h-10 text-blue-400 group-hover:text-blue-300" })}
              </div>
              
              {/* Number Animation */}
              <div className="flex items-start justify-center gap-1 mb-4">
                <span className="text-7xl lg:text-[8rem] leading-none font-black text-white tracking-tighter tabular-nums drop-shadow-2xl">
                  {Number.isInteger(stat.value)
                    ? Math.floor(counts[index])
                    : counts[index].toFixed(1)}
                </span>
                <span className="text-4xl lg:text-5xl font-bold text-blue-500 mt-2 lg:mt-4 drop-shadow-lg">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <span className="text-slate-400 text-lg md:text-xl font-semibold tracking-widest uppercase mt-2">
                {stat.label}
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
