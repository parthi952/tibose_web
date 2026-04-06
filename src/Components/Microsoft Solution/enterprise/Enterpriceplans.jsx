import Img from "../../../Constents";
import { useState } from "react";
import { Check } from "lucide-react";

/* Logos extracted from Constants */
const { 
  Word, Excel, PPT, Outlook, Teams, OneDrive, SharePoint, 
  Exchange, OneNote, EntraId, Defender, Windows, Eye, 
  Tool, Loop, Intune, Clip 
} = Img.Microsoft_Solution.Sericeslogo;

/**
 * Mapping Icons to Names for Tooltips
 * We wrap them in objects so the UI knows what text to show on hover
 */
const basicIcons = [
  { img: Word, name: "Word" }, { img: Excel, name: "Excel" }, { img: PPT, name: "PowerPoint" },
  { img: Outlook, name: "Outlook" }, { img: Teams, name: "Teams" }, { img: OneDrive, name: "OneDrive" },
  { img: SharePoint, name: "SharePoint" }, { img: Exchange, name: "Exchange" }, 
  { img: Loop, name: "Loop" }, { img: OneNote, name: "OneNote" }
];

const standardIcons = [
  ...basicIcons, { img: Clip, name: "Clipchamp" }, { img: Tool, name: "MicrosoftEditor" }
];

const premiumIcons = [
  ...standardIcons, { img: EntraId, name: "Entra ID" }, { img: Windows, name: "Windows" },
  { img: Intune, name: "Intune" }, { img: Defender, name: "Defender" }, { img: Eye, name: "Priva" }
];

const appIcons = [
  { img: Word, name: "Word" }, { img: Excel, name: "Excel" }, { img: PPT, name: "PowerPoint" },
  { img: Outlook, name: "Outlook" }, { img: OneDrive, name: "OneDrive" },{img:OneNote, name:"OneNote"},
  {img: Tool, name:"MicrosoftEditor"}
];

export default function Enterpriceplans() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <section className="mt-10 mb-20">
      <h1 className="text-center text-3xl font-bold mb-10">
        MICROSOFT 365 ENTERPRISE PLANS
      </h1>

      {/* Toggle Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-blue-500 h-11 rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab("plans")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "plans" ? "bg-white text-blue-600 shadow-md" : "text-white hover:text-white/80"
            }`}
          >
            Microsoft 365
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "business" ? "bg-white text-blue-600 shadow-md" : "text-white hover:text-white/80"
            }`}
          >
            Office 365
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {activeTab === "plans" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <PlanCard 
              title="Microsoft 365 E3" 
              price="2,995.00" 
              desc="Enhanced productivity apps with stronger security and seamless compliance management"
              features={[
                "Identity and access management designed for unlimited users",
                "Desktop, web, and mobile versions of apps",
                "1 to 5+ TB of cloud storage per user",
                "Chat, call, and video conference with Teams",
                "Windows for Enterprise deployment",
                "Antivirus and antimalware",
                "Unified endpoint management",
                "AI chat experience with web grounding"
              ]}
              icons={basicIcons}
            />
            <PlanCard 
              title="Microsoft 365 E5" 
              price="4,740.00" 
              desc="AI-powered productivity with advanced security, analytics, and compliance"
              features={[
                "Advanced identity and least privileged access",
                "Cloud-based phone system (Teams Phone)",
                "Scalable business analytics with Power BI",
                "Extended detection and response (XDR)",
                "Email and collaboration security",
                "Full SaaS security protection"
              ]}
              icons={premiumIcons}
            />
            <PlanCard 
              title="Microsoft 365 F3" 
              price="665.00" 
              desc="Connected experiences and smart automation for frontline workers"
              features={[
                "Identity management for unlimited users",
                "Web and mobile versions of Office apps",
                "2 GB of cloud storage per user",
                "Microsoft Teams collaboration",
                "Custom apps to automate tasks",
                "Enhanced security for company assets"
              ]}
              icons={standardIcons}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <PlanCard 
              title="Office 365 E1" 
              price="830.00" 
              desc="Optimized web and mobile apps with built-in foundational security"
              features={[
                "Available for unlimited users",
                "Web and mobile versions of Word, Excel, PowerPoint, and Outlook",
                "Chat, call, and video conference with Microsoft Teams",
                "1 TB of cloud storage per user",
                "10+ additional apps (Planner, Forms, To Do, Lists)",
                "AI chat experience with web grounding",
                "Anytime phone and web support"
              ]}
              icons={basicIcons}
            />
            <PlanCard 
              title="Office 365 E3" 
              price="1,915.00" 
              desc="Enterprise-grade productivity with core security and compliance tools"
              features={[
                "Everything in Office 365 E1, plus:",
                "Desktop versions of Word, Excel, PowerPoint, and Outlook",
                "1 to 5+ TB of cloud storage per user",
                "Intelligent detection of sensitive information"
              ]}
              icons={standardIcons}
            />
            <PlanCard 
              title="Office 365 E5" 
              price="3,160.00" 
              desc="AI-powered productivity with core security, compliance, and analytics"
              features={[
                "Everything in Office 365 E3, plus:",
                "Foundational security and identity management",
                "Microsoft Teams Phone system",
                "Scalable business analytics with Power BI",
                "Email phishing and ransomware protection",
                "Advanced data security and compliance"
              ]}
              icons={premiumIcons}
            />
            <PlanCard 
              title="Apps For Enterprise" 
              price="1,000.00" 
              desc="Productivity apps with basic security and identity management"
              features={[
                "Available for unlimited users",
                "Desktop versions of Word, Excel, PowerPoint, and Outlook",
                "1 TB of cloud storage per user",
                "Anytime phone and web support"
              ]}
              icons={appIcons}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function PlanCard({ title, price, desc, features, icons }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4 h-14 flex items-start text-gray-800 leading-tight">{title}</h2>
        <p className="text-gray-500 text-sm h-16 leading-relaxed overflow-hidden">{desc}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">₹ {price}</span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">user / month</p>
      </div>

      <div className="border-t border-gray-100 my-2"></div>

      <div className="flex-grow py-6">
        <p className="font-bold text-sm text-gray-800 mb-4">What's included:</p>
        <ul className="space-y-4">
          {features.map((feat, idx) => (
            <li key={idx} className="flex gap-3 items-start text-xs text-gray-600 leading-normal">
              <Check size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="border-t border-gray-100 pt-6 pb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Services included</p>
          <div className="flex flex-wrap gap-2">
            {icons.slice(0, 15).map((icon, i) => (
              /* Tooltip Container */
              <div key={i} className="group relative flex items-center justify-center">
                {/* Icon Box */}
                <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                  <img src={icon.img} alt={icon.name} className="w-5 h-5 object-contain" />
                </div>
                
                {/* Tooltip Popup */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-20">
                  <div className="bg-gray-800 text-white text-[10px] py-1 px-2 rounded shadow-lg whitespace-nowrap">
                    {icon.name}
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 py-3.5 font-bold text-sm transition-all cursor-pointer rounded-full shadow-blue-100 shadow-lg active:scale-[0.98]">
          Get Started
        </button>
      </div>
    </div>
  );
}