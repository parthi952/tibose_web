import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MailCheck, Smartphone, Laptop, Fingerprint, Cloud, Headset } from "lucide-react";
import MotionButton from "../Common/MotionButton";
import M365Showcase from "./M365Showcase";

// Microsoft 365 security & compliance areas we deliver and support.
const securityAreas = [
  {
    icon: ShieldCheck,
    title: "Purview DLP",
    sub: "Data loss prevention & compliance",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: MailCheck,
    title: "Email Defender",
    sub: "Defender for Office 365",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: Smartphone,
    title: "Microsoft Intune",
    sub: "Device & app management",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Laptop,
    title: "Endpoint Security",
    sub: "Defender for Endpoint",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Fingerprint,
    title: "Entra ID",
    sub: "Identity & access management",
    color: "text-pink-600 bg-pink-50",
  },
  {
    icon: Cloud,
    title: "Azure Cloud",
    sub: "Cloud infrastructure & migration",
    color: "text-sky-600 bg-sky-50",
  },
  {
    icon: Headset,
    title: "Microsoft 365 Managed Service",
    sub: "Fully managed end-to-end support",
    color: "text-green-600 bg-green-50",
  },
];

const About = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 font-sans overflow-hidden">
      {/* Top: text + image */}
      <div className="flex items-center flex-col lg:flex-row gap-10 md:gap-14">

        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-5 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="text-blue-600 font-bold uppercase tracking-wider text-2xl sm:text-3xl lg:text-4xl">
            Overview
          </h4>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
            Experts in Microsoft 365 — Products, Services, Support &amp; Security.
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            TIBOS delivers, implements, and supports the full Microsoft 365 stack — from
            productivity apps to enterprise-grade security and compliance. We help businesses
            stay protected with data loss prevention, email threat defense, device management,
            endpoint protection, and modern identity security.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-3 pt-1">
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Want to know about our managed service details?
            </p>
            <MotionButton
              B_Name="Explore Our Solutions"
              ActionToClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <M365Showcase />
        </motion.div>
      </div>

      {/* Microsoft 365 Security & Compliance expertise */}
      <motion.div
        className="mt-14 md:mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
          Microsoft 365, Azure &amp; Security we manage for you
        </h3>
        <p className="text-center text-gray-500 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          End-to-end protection and management across cloud, data, email, devices, endpoints, and identity.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          {securityAreas.map(({ icon: Icon, title, sub, color }) => (
            <div
              key={title}
              className="group flex w-40 sm:w-48 flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900">{title}</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-snug">{sub}</p>
            </div>
          ))}
        </div>

      </motion.div>
    </section>

    {/* Full-width reassurance band — with gap before the next section */}
    <section className="w-full px-4 sm:px-6 lg:px-10 pt-2 pb-16 md:pb-24">
      <motion.div
        className="mx-auto max-w-[1500px] rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 sm:px-12 sm:py-12 text-center text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ShieldCheck className="mx-auto w-9 h-9 mb-3 opacity-90" />
        <h4 className="text-xl sm:text-3xl font-bold">
          Don&apos;t worry about managing Microsoft 365 — leave it to us.
        </h4>
        <p className="mt-3 text-blue-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Our trained, certified experts handle everything end-to-end — setup, security,
          compliance, and day-to-day management. You relax and focus on your business,
          while we keep your Microsoft 365 environment secure and running smoothly.
        </p>
      </motion.div>
    </section>
    </>
  );
};

export default About;
