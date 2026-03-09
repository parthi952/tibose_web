
import IndustryCard from './IndustriesSection/IndustryCard';
import Automotive from "../../assets/Industries/Automotive.png";
import CMT from "../../assets/Industries/CMT.png";
import EnergyUtilities from "../../assets/Industries/EnergyUtilities.png";
import FinancialService from "../../assets/Industries/FinancialService.png";
import Healthcare from "../../assets/Industries/Healthcare.png";
import Insurance from "../../assets/Industries/Insurance.png";
import LifeSciences from "../../assets/Industries/LifeSciences.png";
import Manufacturing from "../../assets/Industries/Manufacturing.png";
import ProfessionalServices from "../../assets/Industries/ProfessionalServices.png";
import RetailDistribution from "../../assets/Industries/RetailDistribution.png";
import TransportationLogistics from "../../assets/Industries/TransportationLogistics.png";
import TravelHospitality from "../../assets/Industries/TH.png";

// Ensure all icons are imported to prevent crashes
import { 
  ShieldCheck, Beaker, MonitorPlay, Settings, Zap, 
  ShoppingBag, Car, Landmark, Stethoscope, Briefcase, 
  Truck, Plane 
} from 'lucide-react';



const IndustriesSection = () => {
  const industryList = [
    { title: "Insurance", icon: <ShieldCheck size={24} />, image: Insurance }, // Replace null with imports
    { title: "Life Sciences", icon: <Beaker size={24} />, image: LifeSciences },
    { title: "Comms + Media + Tech", icon: <MonitorPlay size={24} />, image: CMT },
    { title: "Manufacturing", icon: <Settings size={24} />, image: Manufacturing },
    { title: "Energy", icon: <Zap size={24} />, image: EnergyUtilities },
    { title: "Retail", icon: <ShoppingBag size={24} />, image: RetailDistribution },
    { title: "Automotive", icon: <Car size={24} />, image: Automotive }, 
    { title: "Financial Services", icon: <Landmark size={24} />, image: FinancialService },
    { title: "Healthcare", icon: <Stethoscope size={24} />, image: Healthcare },
    { title: "Professional Services", icon: <Briefcase size={24} />, image: ProfessionalServices },
    { title: "Transportation & Logistics", icon: <Truck size={24} />, image: TransportationLogistics },
    { title: "Travel + Hospitality", icon: <Plane size={24} />, image: TravelHospitality },
  ];
const duplicatedList = [...industryList, ...industryList];
  return (
  <section className="bg-slate-50 py-16 overflow-hidden">
      
      {/* PLACE IT HERE - Inside the return, at the top of the section */}
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: infinite-scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto  mb-8 px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-16 uppercase tracking-widest">
          Our Industries
        </h2>
      </div>

      <div className="flex ">
        {/* Use the 'animate-scroll' class we just defined above */}
        <div className="flex flex-nowrap gap-8 animate-scroll">
          {duplicatedList.map((item, index) => (
            <div key={index} className="flex-none w-75"> 
              <IndustryCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;