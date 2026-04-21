import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from "../../Constents";
import IndustryCard from './IndustriesSection/IndustryCard';
import MotionButton from "../Common/MotionButton";

// Icons Import
import { 
  ShieldCheck, Beaker, MonitorPlay, Settings, Zap, 
  ShoppingBag, Car, Landmark 
} from 'lucide-react';

const IndustriesSection = () => {

  const navigate = useNavigate(); // 👈 important

  const industryList = [
    { title: "Insurance", icon: <ShieldCheck size={24} />, image: Img.HomePage.Industry.Insurance },
    { title: "Life Sciences", icon: <Beaker size={24} />, image: Img.HomePage.Industry.LifeSciences },
    { title: "Comms + Media + Tech", icon: <MonitorPlay size={24} />, image: Img.HomePage.Industry.CMT },
    { title: "Manufacturing", icon: <Settings size={24} />, image: Img.HomePage.Industry.Manufacturing },
    { title: "Energy", icon: <Zap size={24} />, image: Img.HomePage.Industry.EnergyUtilities },
    { title: "Retail", icon: <ShoppingBag size={24} />, image: Img.HomePage.Industry.RetailDistribution },
    { title: "Automotive", icon: <Car size={24} />, image: Img.HomePage.Industry.Automotive }, 
    { title: "Financial Services", icon: <Landmark size={24} />, image: Img.HomePage.Industry.FinancialService },
  ];

  const displayedIndustries = industryList.slice(0, 4);

  return (
    <section className="mb-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 uppercase tracking-widest mb-4">
            Industry Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedIndustries.map((item, index) => (
            <div key={index} className="transition-transform duration-300 hover:-translate-y-2">
              <IndustryCard {...item} />
            </div>
          ))}
        </div>

        {/* 🔥 FIX HERE */}
        <div className="flex justify-center mt-20">
          <MotionButton
            B_Name="View more industries"
            ActionToClick={() => navigate('/industries')} // 👈 route change
          />
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;