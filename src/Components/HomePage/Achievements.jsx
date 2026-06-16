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
    <section ref={sectionRef} className="relative bg-slate-900 overflow-hidden py-6 md:py-8 px-4 sm:px-8 border-y border-slate-800">

      {/* Cinematic background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[10%] w-[40%] h-full bg-blue-500 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-[10%] w-[30%] h-full bg-purple-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

        {/* Title */}
        <div className="text-center lg:text-left shrink-0">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.35em] text-cyan-400 uppercase mb-1">
            Tibos Impact
          </h2>
          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span>
          </h3>
        </div>

        {/* Compact stats row — all in one wide line */}
        <div className="grid grid-cols-3 w-full lg:w-auto lg:flex-1 lg:max-w-3xl divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center text-center px-2 sm:px-4">

              {/* Number + icon inline */}
              <div className="flex items-center justify-center gap-2">
                {React.cloneElement(stat.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" })}
                <div className="flex items-start gap-0.5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl leading-none font-black text-white tracking-tight tabular-nums">
                    {Number.isInteger(stat.value)
                      ? Math.floor(counts[index])
                      : counts[index].toFixed(1)}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-cyan-400">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              {/* Label */}
              <span className="mt-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-200">
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
