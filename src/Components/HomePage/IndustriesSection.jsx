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
    { title: "Insurance", icon: <ShieldCheck size={24} />, image: Img.HomePage.Industry.Insurance, description: "Secure core systems and modernize claims processing with cloud solutions." },
    { title: "Life Sciences", icon: <Beaker size={24} />, image: Img.HomePage.Industry.LifeSciences, description: "Accelerate R&D and ensure compliance with secure data environments." },
    { title: "Comms + Media + Tech", icon: <MonitorPlay size={24} />, image: Img.HomePage.Industry.CMT, description: "Deliver exceptional digital experiences with scalable infrastructure." },
    { title: "Manufacturing", icon: <Settings size={24} />, image: Img.HomePage.Industry.Manufacturing, description: "Optimize supply chains and smart factories using IoT and AI." },
    { title: "Energy", icon: <Zap size={24} />, image: Img.HomePage.Industry.EnergyUtilities, description: "Transform grid operations and improve sustainability management." },
    { title: "Retail", icon: <ShoppingBag size={24} />, image: Img.HomePage.Industry.RetailDistribution, description: "Enhance omnichannel commerce and personalized customer journeys." },
    { title: "Automotive", icon: <Car size={24} />, image: Img.HomePage.Industry.Automotive, description: "Innovate connected vehicles and streamline production." },
    { title: "Financial Services", icon: <Landmark size={24} />, image: Img.HomePage.Industry.FinancialService, description: "Enable secure banking and rapid fintech innovations." },
  ];

  const displayedIndustries = industryList.slice(0, 4);

  return (
    <section className="mb-0 px-4 sm:px-6 lg:px-8 bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">
            Industry Insights
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Tailored Cloud Solutions
          </h3>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Built specifically for the unique regulatory, operational, and performance needs of every industry we serve.
          </p>
        </div>

        {/* Structured Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[320px]">
          {displayedIndustries.map((item, index) => {
            // Determine Bento Box layout based on index
            let bentoClass = "";
            if (index === 0) bentoClass = "md:col-span-2 md:row-span-2"; // Large feature block
            else if (index === 1) bentoClass = "md:col-span-2 md:row-span-1"; // Wide block
            else bentoClass = "md:col-span-1 md:row-span-1"; // Small square blocks

            return (
              <IndustryCard 
                key={index} 
                {...item} 
                index={index} 
                className={bentoClass} 
              />
            );
          })}
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
