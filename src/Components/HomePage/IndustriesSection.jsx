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
    <section className="mb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 uppercase tracking-widest mb-4">
            Industry Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* GRID LOGIC:
           - grid-cols-1: Mobile-la cards stack aagum (One by one).
           - lg:grid-cols-4: Laptop-la unga default 4 columns side-by-side.
           - items-center justify-items-center: Content exact center-la irukka help pannum.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-items-center">
          {displayedIndustries.map((item, index) => (
            /* CARD WRAPPER:
               - max-w-[320px]: Mobile-la card romba perusa screen full-ah varaama, 
                 neat-ah scale down aana madhiri center-la irukkum.
               - lg:max-w-full: Laptop-la normal size-ku maaridum.
            */
            <div 
              key={index} 
              className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-full transition-transform duration-300 hover:-translate-y-2"
            >
              <IndustryCard {...item} />
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-16 md:mt-20">
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