// Note: You can use Lucide-React or FontAwesome for the icons
import { Trophy, Users, Rocket, ShieldCheck } from 'lucide-react';
import React, { useState, useEffect } from "react";

const Achievements = () => {

  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      value: 901,
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
      value: 100,
      suffix: "%",
      label: "Uptime Guarantee",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) =>
          count < stats[i].value ? count + Math.ceil(stats[i].value / 40) : stats[i].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-center gap-3 min-w-50">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Trophy className="text-white w-10 h-10" />
          </div>
          <div>
            <h2 className="text-blue-600 text-xl font-bold leading-tight">Achievements</h2>
            <p className="text-blue-600 text-sm">Tibos solution</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-1 flex-wrap justify-around gap-12">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex items-center gap-4">
              <div className="p-2">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-600">
                  {counts[index]}{stat.suffix}
                </span>
                <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;