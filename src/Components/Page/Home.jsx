import React from "react";
import Hero from "../HomePage/Hero";
import About from "../HomePage/About";
import Achievements from "../HomePage/Achievements";
import Services from "../HomePage/Services";
import OurSolution from "../HomePage/OurSolution";
import TestimonialSlider from "../HomePage/TestimonialSlider";
import OurPartners from "../HomePage/OurPartners";
import IndustriesSection from "../HomePage/IndustriesSection";
import OurBlogs from "../HomePage/OurBlogs";
import ContactForm from "../HomePage/ContactUs";
import { Helmet } from "react-helmet";
import ScrollReveal from "../Common/ScrollReveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Microsoft Solutions Partner in Chennai | Tibos Solutions</title>
        <meta
          name="description"
          content="Tibos Solutions is a trusted Microsoft partner providing Microsoft 365, Azure, cybersecurity, and enterprise IT solutions in Chennai."
        />
        <meta
          name="keywords"
          content="Microsoft partner Chennai, Microsoft solutions India, Azure, Microsoft 365, cybersecurity services"
        />
        <link rel="canonical" href="https://tibos.co.in/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tibos Solutions | Microsoft Partner Chennai" />
      </Helmet>

      <div className="relative min-h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">

        {/* Soft, beautiful modern tech mesh gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] 'bg-gradient-to-tr' from-blue-200/40 to-indigo-200/30 rounded-full blur-[100px]" />
          <div className="absolute top-[35%] right-[-10%] w-[50%] h-[50%] 'bg-gradient-to-bl' from-cyan-200/30 to-sky-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[60%] 'bg-gradient-to-tr' from-indigo-200/20 to-blue-200/40 rounded-full blur-[130px]" />

          {/* Subtle elegant tech grid coordinates */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(59,130,246,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px'
          }} />
        </div>

        {/* Main Content Container */}
        <div className="relative z-1 bg-white pb-16">
          <div className="w-full">

            {/* Normal Hero Carousel */}

            <Hero />


            {/* About section placed right after Hero without any gap */}

            <About />

            {/* Other sections have the standard vertical spacing */}
            <div>

              <Achievements />



              <Services />



              <OurSolution />



              <TestimonialSlider />



              <OurPartners />



              <IndustriesSection />



              <OurBlogs />


              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
