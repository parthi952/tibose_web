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

  const navigate = useNavigate();

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
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          @keyframes industryShine {
            0% { transform: translateX(-120%) skewX(-15deg); }
            18% { transform: translateX(420%) skewX(-15deg); }
            100% { transform: translateX(420%) skewX(-15deg); }
          }
          .industry-shine { animation: industryShine 5s ease-in-out infinite; }
        `}
      </style>

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 uppercase tracking-widest mb-4">
            Industry Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-5 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Tailored Microsoft and cloud solutions built for the unique needs of every industry we serve.
          </p>
        </div>

        {/* Full-width responsive grid — cards stretch to fill each column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedIndustries.map((item, index) => (
            <IndustryCard key={index} {...item} shineDelay={`${index * 0.6}s`} />
          ))}
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-14 md:mt-16">
          <MotionButton
            B_Name="View more industries"
            ActionToClick={() => navigate('/industries')}
          />
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
