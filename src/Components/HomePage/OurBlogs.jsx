import React from "react";
import BlogCard from "./OurBlogs/BlogCard";
import Img from "../../Constents";
import { motion } from "framer-motion";

const ConnectivityImg = Img.HomePage.Connectivity;
const SecurityImg = Img.HomePage.Cybersecurity;
const Business_Communi = Img.HomePage.Business_communication;

const OurBlogs = () => {
  const blogs = [
    {
      title: "How Enterprise Connectivity Improves Business Productivity",
      description: "Reliable connectivity drives productivity, improves collaboration, and strengthens every aspect of business communication.",
      imageUrl: ConnectivityImg,
      date: "Oct 24, 2025",
      category: "Connectivity"
    },
    {
      title: "Why Cybersecurity Is Critical for Modern Businesses",
      description: "Cybersecurity protects businesses from data breaches, ransomware attacks, and network vulnerabilities.",
      imageUrl: SecurityImg,
      date: "Nov 12, 2025",
      category: "Security"
    },
    {
      title: "The Future of Enterprise Communication Technology",
      description: "Modern communication tools such as cloud collaboration platforms and smart office solutions help businesses improve teamwork.",
      imageUrl: Business_Communi,
      date: "Dec 05, 2025",
      category: "Technology"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
              Latest Insights
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
              Our Blogs
            </h3>
          </div>
          <a href="/blogs" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View all articles <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Blog (Spans 7 columns) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BlogCard {...blogs[0]} variant="featured" />
          </motion.div>

          {/* List Blogs (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {blogs.slice(1).map((blog, index) => (
              <motion.div
                key={index}
                className="flex-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              >
                <BlogCard {...blog} variant="list" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <a href="/blogs" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View all articles <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
