
import IndustryCard from './IndustriesSection/IndustryCard';

// You can use icons from 'lucide-react' or 'react-icons'
import { ShieldCheck, Beaker, MonitorPlay, Settings } from 'lucide-react';
const IndustriesSection = () => {
  const industries = [
    { title: "Insurance", icon: <ShieldCheck size={28} />, image: "insurance-bg.jpg" },
    { title: "Life Sciences", icon: <Beaker size={28} />, image: "life-sciences-bg.jpg" },
    { title: "Comms + Media + Tech", icon: <MonitorPlay size={28} />, image: "tech-bg.jpg" },
    { title: "Manufacturing", icon: <Settings size={28} />, image: "manufacturing-bg.jpg" },
    { title: "Energy", icon: <Settings size={28} />, image: "energy.jpg" },
    { title: "Retail", icon: <Settings size={28} />, image: "retail.jpg" },
  ];

  return (
    <section className="bg-slate-50 py-7 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-15 uppercase">
          Our Industries
        </h2>
        
        {/* Scroll Container */}
        <div className="scrollbar-hide flex flex-nowrap overflow-x-auto gap-4 pb-10 pt-10 px-4">
          {industries.map((item, index) => (
            <IndustryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default IndustriesSection;