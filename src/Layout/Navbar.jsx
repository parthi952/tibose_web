import React, { useState } from "react";
import { 
  ChevronDown, Menu, X, ArrowRight, 
  Briefcase, Building2, Rocket, Users, 
  ShieldCheck, Cloud, MessageSquare, Cpu, 
  HardDrive, Monitor, Globe, Settings, 
  Zap, Headphones, Layout,
  Wifi 
} from "lucide-react";
import IMG from "../Constents";
import { useNavigate } from "react-router-dom";

const TibosLogo = IMG.HomePage.TibosLogo;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const ListOfContant = {
    "/about": [
      { Cont: "Company Culture", path: "/company-culture", icon: <Globe className="w-4 h-4" /> },
      { Cont: "Career", path: "/team", icon: <Briefcase className="w-4 h-4" /> },
    ],
    "/microsoft-solution": [
      { Cont: "Microsoft 365 For Business", path: "/business", icon: <Building2 className="w-4 h-4" /> },
      { Cont: "Microsoft 365 For Enterprise", path: "/enterprise", icon: <Rocket className="w-4 h-4" /> },
      { Cont: "Microsoft 365 For Copilot", path: "/copilot", icon: <Zap className="w-4 h-4" /> },
      { Cont: "Microsoft Teams", path: "/teams", icon: <MessageSquare className="w-4 h-4" /> },
      { Cont: "Microsoft Security", path: "/security", icon: <ShieldCheck className="w-4 h-4" /> },
      { Cont: "Microsoft Azure", path: "/azure", icon: <Cloud className="w-4 h-4" /> },
      { Cont: "Microsoft Dynamics 356", path: "/dynamics", icon: <Settings className="w-4 h-4" /> },
      { Cont: "Microsoft Surface devices", path: "/surface", icon: <Monitor className="w-4 h-4" /> },
    ],
    "/our-solution": [
      { Cont: "Connectivity", path: "/cloud", icon: <Zap className="w-4 h-4" /> },
      { Cont: "Cyber Security", path: "/cyber-security", icon: <ShieldCheck className="w-4 h-4" /> },
      { Cont: "Smart Communication", path: "/smart-communication", icon: <Headphones className="w-4 h-4" /> },
      { Cont: "Business Process Unit", path: "/bpu", icon: <Layout className="w-4 h-4" /> },
      { Cont: "Hardware Solution", path: "/hardware", icon: <Cpu className="w-4 h-4" /> },
    ],

    "/tata-tele-bussiness":[
  { 
    Cont: "Smartflo", 
    icon: <Cloud className="w-4 h-4" />,
    subMenu: [
      { Cont: "Smartflo CCaaS", path: "/CCaaS" },
      { Cont: "Smartflo UCaas", path: "/UCaas" },
      { Cont: "Smartflo WhatsApp Business Platform", path: "/SWBP" },
    ]
  },
  { Cont: "SIP Trunk", path:"/Trunk", icon: <HardDrive className="w-4 h-4" /> },
  { Cont: "SD-WAN iFLX", path:"/WAN-iFLX", icon: <Globe className="w-4 h-4" /> },
  { Cont: "Security ILL", path: "/Secured-ILL", icon: <ShieldCheck className="w-4 h-4" /> },
  { Cont: "Managed Wi-Fi", path: "/Manged_WiFi", icon: <Wifi className="w-4 h-4" /> },
  { Cont: "Smart Managed Cloud Services", path: "smart_managed_cs", icon: <Cloud className="w-4 h-4" /> },
  { Cont: "Cybersecrity Solutions", path: "Cybersecurity_solution_TTBS", icon: <ShieldCheck className="w-4 h-4" /> },
  { Cont: "Vaultastic-Backup and Archival Solution", path: "Vaultastic-backup", icon: <HardDrive className="w-4 h-4" /> },
  ],
  };

  const navLinks = [
    { name: "Home", path: "/", hasDropdown: false },
    { name: "Tata Tele Business", path: "/tata-tele-bussiness", hasDropdown: true },
    { name: "Microsoft Solution", path: "/microsoft-solution", hasDropdown: true },
    {
      name: "Tata Tele Business",
      path: "http://tibossolutionsandservices.in/services/cloud-saas-1",
      hasDropdown: false,
      external: true,
    },
    { name: "Our Solution", path: "/our-solution", hasDropdown: true },
    { name: "Industries", path: "/industries", hasDropdown: false },
    { name: "Resources", path: "/resources", hasDropdown: false },
    { name: "About Us", path: "/about", hasDropdown: true },
  ];

  const handleNavigation = (link) => {
    setIsOpen(false);
    if (link.external) {
      window.open(link.path, "_blank");
    } else {
      navigate(link.path);
    }
  };

  const toggleAccordion = (path) => {
    setActiveAccordion(activeAccordion === path ? null : path);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={TibosLogo} alt="Tibos Logo" className="w-28 sm:w-32 hover:scale-105 transition-transform" />
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-20 overflow-visible">
                <div
                  onClick={() => !link.hasDropdown && handleNavigation(link)}
                  className="cursor-pointer flex items-center font-poppins text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                </div>

                {link.hasDropdown && ListOfContant[link.path] && (
                  <div className="absolute top-full left-0 pt-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white shadow-2xl rounded-xl border border-gray-100 w-72 py-3 ring-1 ring-black/5">

                      {ListOfContant[link.path].map((item) => (
                        <div key={item.Cont} className="relative group/item">

                          <div
                            onClick={() => { navigate(item.path); setIsOpen(false); }}
                            className="flex items-center gap-3 px-5 py-2.5 cursor-pointer hover:bg-blue-50 transition-colors group/item"
                          >
                            <span className="text-gray-400 group-hover/item:text-blue-600 transition-colors">
                              {item.icon}
                            </span>

                            <div className="flex items-center justify-between w-full">
                              <span className="font-poppins text-sm text-gray-600 group-hover/item:text-blue-600 transition-colors">
                                {item.Cont}
                              </span>

                              {item.subMenu && (
                                <ChevronDown className="w-4 h-4 rotate-[-90deg] text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                              )}
                            </div>
                          </div>

                          {/* ✅ SIDE DROPDOWN WITH BRIDGE */}
                          {item.subMenu && (
                            <div className="absolute top-0 left-full ml-1 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible z-50">
                              
                              {/* 🔥 invisible bridge */}
                              <div className="absolute left-[-8px] top-0 w-2 h-full"></div>

                              <div className="bg-white shadow-2xl rounded-xl border border-gray-100 w-60 py-2">
                                {item.subMenu.map((sub) => (
                                  <div
                                    key={sub.Cont}
                                    onClick={() => navigate(sub.path)}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm text-gray-600"
                                  >
                                    {sub.Cont}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      ))}

                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-900 cursor-pointer transition-all shadow-md active:scale-95"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;