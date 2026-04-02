import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Logo from "../Constents";

const TibosLogo = Logo.HomePage.TibosLogo;

const TibosFooter = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // ✅ Only change: added external flag for Tata Tele Business
  const usefulLinks = [
    { name: "Company Culture", path: "/company-culture" },
    { name: "Tata Tele Business", path: "http://tibossolutionsandservices.in/services/cloud-saas-1", external: true },
    { name: "Industries", path: "/industries" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const SocialIcon =
    "bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white transition-all duration-300 hover:scale-110 hover:text-blue-600 hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg";

  return (
    <footer className="bg-[#1a1a4a] text-gray-300 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex flex-col gap-3">
            <img src={TibosLogo} alt="TIBOS Logo" className="w-28 h-auto" />

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              We are a team of seasoned experts from various business sectors.
              We partner with top-tier technology companies to offer our clients
              relevant, reliable, and cost-effective solutions based on our
              experience and understanding of markets.
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
            Useful Links
          </h3>

          <ul className="space-y-2.5">
            {usefulLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  target={link.external === true ? "_blank" : undefined} // ✅ FIXED
                  rel={link.external === true ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-all duration-200 inline-block"
                  style={{
                    paddingLeft: hoveredLink === link.name ? "8px" : "0",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>
                TIBOS Solutions and Services Pvt Ltd,
                <br />
                G1, No 138 Ameen Manor,
                <br />
                Nungambakkam High Road,
                <br />
                Chennai - 600034
              </span>
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
              <span>
                Monday - Friday: 9.30 am - 6.30 pm
                <br />
                Saturday - Sunday: Closed
              </span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-6">
          <h3 className="text-white font-bold tracking-wider uppercase text-sm">
            Follow Us
          </h3>

          <p className="text-sm text-gray-400">
            Connect with us on social media for daily updates and insights.
          </p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/TIBOS-Solutions-Services-Private-Limited-61577353675661/" target="_blank" rel="noopener noreferrer" className={SocialIcon}>
              <Facebook size={20} fill="currentColor" />
            </a>

            <a href="https://x.com/TibosSolutions" target="_blank" rel="noopener noreferrer" className={SocialIcon}>
              <Twitter size={20} fill="currentColor" />
            </a>

            <a href="https://www.instagram.com/tibossolutions_official" target="_blank" rel="noopener noreferrer" className={SocialIcon}>
              <Instagram size={20} />
            </a>

            <a href="https://www.linkedin.com/company/tibos-solutions-and-services-private-limited/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className={SocialIcon}>
              <Linkedin size={20} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>Copyright © 2026 TIBOS Solutions. All Rights Reserved</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default TibosFooter;