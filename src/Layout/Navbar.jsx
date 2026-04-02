import React, { useState } from "react";
import { 
  ChevronDown, Menu, X, ArrowRight, 
  Briefcase, Building2, Rocket, Users, 
  ShieldCheck, Cloud, MessageSquare, Cpu, 
  HardDrive, Monitor, Globe, Settings, 
  Zap, Headphones, Layout 
} from "lucide-react";
import IMG from "../Constents";
import { useNavigate } from "react-router-dom";

const TibosLogo = IMG.HomePage.TibosLogo;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  // Updated List with Icons
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
  };

  const navLinks = [
    { name: "Home", path: "/", hasDropdown: false },
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
          
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={TibosLogo} alt="Tibos Logo" className="w-28 sm:w-32 hover:scale-105 transition-transform" />
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-20">
                <div
                  onClick={() => !link.hasDropdown && handleNavigation(link)}
                  className="cursor-pointer flex items-center font-poppins text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                </div>

                {/* Dropdown with Icons */}
                {link.hasDropdown && ListOfContant[link.path] && (
                  <div className="absolute top-full left-0 pt-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white shadow-2xl rounded-xl border border-gray-100 w-72 py-3 ring-1 ring-black/5">
                      {ListOfContant[link.path].map((item) => (
                        <div
                          key={item.Cont}
                          onClick={() => { navigate(item.path); setIsOpen(false); }}
                          className="flex items-center gap-3 px-5 py-2.5 cursor-pointer hover:bg-blue-50 transition-colors group/item"
                        >
                          <span className="text-gray-400 group-hover/item:text-blue-600 transition-colors">
                            {item.icon}
                          </span>
                          <span className="font-poppins text-sm text-gray-600 group-hover/item:text-blue-600 transition-colors">
                            {item.Cont}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-700'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: isOpen ? 'calc(100vh - 80px)' : '0px', overflowY: 'auto' }}
      >
        <div className="px-5 py-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-gray-50 last:border-none">
              
              {!link.hasDropdown ? (
                <div
                  onClick={() => handleNavigation(link)}
                  className="flex items-center justify-between py-4 text-base font-bold text-gray-800 active:bg-blue-50 px-2 rounded-lg"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
              ) : (
                <div className="flex flex-col">
                  <div
                    onClick={() => toggleAccordion(link.path)}
                    className={`flex items-center justify-between py-4 px-2 text-base font-bold transition-colors rounded-lg ${
                      activeAccordion === link.path ? "text-blue-600 bg-blue-50" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === link.path ? "rotate-180" : ""}`} />
                  </div>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeAccordion === link.path ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="pl-2 mt-2 space-y-1 border-l-2 border-blue-100 ml-3">
                      {ListOfContant[link.path]?.map((item) => (
                        <div
                          key={item.Cont}
                          onClick={() => { navigate(item.path); setIsOpen(false); }}
                          className="flex items-center gap-3 py-3 px-4 text-sm font-semibold text-gray-600 active:text-blue-600 active:bg-gray-50 rounded-lg"
                        >
                          <span className="text-blue-500/70">{item.icon}</span>
                          {item.Cont}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 pb-10">
            <button
              onClick={() => { navigate("/contact"); setIsOpen(false); }}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-extrabold text-base shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Get Expert Advice
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;