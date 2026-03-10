import Img from "../../Constents"
import IndustryCard from './IndustriesSection/IndustryCard';

const Automotive = Img.HomePage.Industry.Automotive;
const CMT = Img.HomePage.Industry.CMT;
const EnergyUtilities = Img.HomePage.Industry.EnergyUtilities;
const FinancialService = Img.HomePage.Industry.FinancialService;
const Healthcare = Img.HomePage.Industry.Healthcare;
const Insurance = Img.HomePage.Industry.Insurance;
const LifeSciences = Img.HomePage.Industry.LifeSciences;
const Manufacturing = Img.HomePage.Industry.Manufacturing;
const ProfessionalServices = Img.HomePage.Industry.ProfessionalServices;
const RetailDistribution = Img.HomePage.Industry.RetailDistribution;
const TransportationLogistics = Img.HomePage.Industry.TransportationLogistics;
const TravelHospitality = Img.HomePage.Industry.TravelHospitality;


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
        <div className="flex flex-nowrap animate-scroll">
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