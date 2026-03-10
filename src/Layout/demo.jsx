
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {

const usefulLinks = [
    "Company Culture",
    "Tata Tele Business",
    "Industries",
    "Blog",
    "Downloads",
    "Careers",
    "Contact Us",
  ];

  return (
    <footer className="bg-[#1a1a4a] text-gray-300 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info Section */}
        <div>
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              <span className="text-blue-400">T</span>
              <span className="text-red-500">I</span>
              <span className="text-green-500">B</span>
              <span className="text-orange-500">O</span>
              <span className="text-pink-500">S</span>
            </h2>
            <p className="text-sm font-semibold italic text-purple-400">Win Together</p>
          </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-all duration-200 inline-block"
                    style={{ paddingLeft: hoveredLink === link ? "8px" : "0" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>TIBOS Solutions and Services Pvt Ltd,<br/>G1, No 138 Ameen Manor, Nungambakkam High Road, Chennai - 600034</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+91 9043099940</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>support@tibos.in</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>Monday - Friday: 9.30 am - 6.30 pm<br/>Saturday - Sunday: Closed</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-6">
          <h3 className="text-white font-bold tracking-wider uppercase text-sm">Follow Us</h3>
          <p className="text-sm text-gray-400">Connect with us on social media for daily updates and insights.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:opacity-80"><Facebook size={20} fill="currentColor" /></a>
            <a href="#" className="bg-black p-2 rounded-full text-white hover:opacity-80"><Twitter size={20} fill="currentColor" /></a>
            <a href="#" className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-2 rounded-full text-white hover:opacity-80"><Instagram size={20} /></a>
            <a href="#" className="bg-blue-700 p-2 rounded-full text-white hover:opacity-80"><Linkedin size={20} fill="currentColor" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>Copyright © 2026 TIBOS Solutions. All Rights Reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
