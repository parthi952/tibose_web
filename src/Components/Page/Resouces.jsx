import React from "react";
import Img from "../../Constents";

const blogbanner = Img.Resouces.blogbanner;

// Optimized image URLs with Unsplash CDN query parameters (auto format, fit crop, width 500px, quality 75)
// This serves small compressed WebP images (approx 35KB each) instead of massive raw 10MB images.
const blogs = [
  {
    title: "How Smart Connectivity Transforms Modern Business",
    desc: "Reliable connectivity drives productivity, improves collaboration, and strengthens every aspect of business communication.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Why Cybersecurity Matters More Than Ever Today",
    desc: "Strong cybersecurity protects business data, prevents threats, and ensures uninterrupted operations with confidence.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "The Future of Business Communication Technology",
    desc: "Smart communication tools simplify workflows, enhance teamwork, and create faster, smarter customer interactions.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Leveraging Cloud Solutions for Scalable Growth",
    desc: "Cloud technologies enable flexibility, reduce costs, and help businesses scale quickly without infrastructure limitations.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Digital Workplace Transformation: What Businesses Must Know",
    desc: "Modern digital tools empower teams, automate tasks, and create efficient, hybrid-ready working environments.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Data-Driven Decision Making in the Modern Enterprise",
    desc: "Analytics and AI give leaders real-time insights that improve strategy, enhance performance, and drive smarter business outcomes.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=75",
  },
];

const Resources = () => {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Responsive Header Banner */}
      <div className="w-full overflow-hidden">
        <img
          src={blogbanner}
          alt="Blog banner"
          className="pt-20 w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-auto object-cover"
        />
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">



        {/* Fluid Responsive Grid: stacks on mobile, 2 cols on tablets, 3 cols on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[340px] sm:max-w-full bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="overflow-hidden rounded-2xl mb-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Resources;
