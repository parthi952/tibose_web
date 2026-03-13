import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import IMG from "../Constents";

const TibosLogo = IMG.HomePage.TibosLogo;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'Microsoft Solution', path: '/microsoft-solution', hasDropdown: true },
    { name: 'Tata Tele Business', path: '/tata-tele-business', hasDropdown: false },
    { name: 'Our Solution', path: '/our-solution', hasDropdown: true },
    { name: 'Industries', path: '/industries', hasDropdown: false },
    { name: 'Resources', path: '/resources', hasDropdown: false },
    { name: 'About Us', path: '/about', hasDropdown: true },
  ];

  const ListOfContant = {
    "/about": [
      { Cont: "Company Culture", path: "/company-culture" },
      { Cont: "Career", path: "/team" },
    ],

    "/microsoft-solution": [
      { Cont: "Microsoft 365 For Business", path: "/business" },
      { Cont: "Microsoft 365 For Enterprise", path: "/enterprise" },
      { Cont: "Microsoft 365 For Copilot", path: "/copilot" },
      { Cont: "Microsoft Teams", path: "/teams" },
      { Cont: "Microsoft Security", path: "/security" },
      { Cont: "Microsoft Azure", path: "/azure" },
      { Cont: "Microsoft Dynamics 356", path: "/dynamics" },
      { Cont: "Microsoft Surface devices", path: "/surface" },
    ],

    "/our-solution": [
      { Cont: "Connectivity", path: "/cloud" },
      { Cont: "Cyber Security", path: "/cyber-security" },
      { Cont: "Smart Communication", path: "/cyber-security" },
      { Cont: "Business Process Unit", path: "/cyber-security" },
      { Cont: "Hardware Solution", path: "/cyber-security" },
    ]
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-blue-900/8 backdrop-blur-xl shadow-xl">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <img src={TibosLogo} alt="Tibos Logo" className="w-32" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">

                <a
                  href={link.path}
                  className="flex items-center font-poppins text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>

                {/* Dropdown */}
                {link.hasDropdown && ListOfContant[link.path] && (
                   <div className="absolute left-0 mt-7 hidden group-hover:block bg-white shadow-lg rounded-md w-50 before:absolute before:-top-7 before:left-0 before:w-full before:h-7 before:content-['']">

                    {ListOfContant[link.path].map((item) => (
                      <a
                        key={item.Cont}
                        href={item.path}
                        className="block px-4 py-2 font-poppins text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {item.Cont}
                      </a>
                    ))}

                  </div>
                )}

              </div>
            ))}

            {/* Contact Button */}
            <button className="bg-[#007bff] text-white px-6 cursor-pointer font-poppins py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t">

          {navLinks.map((link) => (
            <div key={link.name}>

              {!link.hasDropdown && (
                <a
                  href={link.path}
                  className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50 hover:bg-blue-50"
                >
                  {link.name}
                </a>
              )}

              {link.hasDropdown && (
                <div className="px-3 py-4 border-b border-gray-50">

                  <div className="flex items-center  font-poppins justify-between text-gray-700 font-medium">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  <select
                    className="mt-2 w-full border rounded-md p-2 text-sm"
                    onChange={(e) => {
                      window.location.href = e.target.value;
                    }}
                  >
                    <option>Select {link.name}</option>

                    {ListOfContant[link.path]?.map((item) => (
                      <option key={item.Cont} value={item.path}>
                        {item.Cont}
                      </option>
                    ))}

                  </select>

                </div>
              )}

            </div>
          ))}

          {/* Mobile Contact Button */}
          <div className="pt-4">
            <button className="w-full bg-[#007bff] text-white px-6 py-3 rounded-xl font-semibold">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
