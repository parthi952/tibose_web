import React from "react";
import BlogCard from "./OurBlogs/BlogCard";
// import ConnectivityImg from "../../assets/OurBlog/connectivity.png";
// import SecurityImg from "../../assets/OurBlog/security.png";
import { img } from "motion/react-client";
import { motion } from "framer-motion";
import Img from "../../Constents";

const ConnectivityImg = Img.HomePage.Connectivity;
const SecurityImg = Img.HomePage.Cybersecurity;
const Business_Communi= Img.HomePage.Business_communication;

const OurBlogs = () => {
  const blogs = [
    {
      title: "How Enterprise Connectivity Improves Business Productivity",
      description: "Reliable connectivity drives productivity, improves collaboration, and strengthens every aspect of business communication.",
      imageUrl: ConnectivityImg,
      reverse: false // Image on right (Image 1 style)
    },
    {
      title: "Why Cybersecurity Is Critical for Modern Businesses",
      description: "Cybersecurity protects businesses from data breaches, ransomware attacks, and network vulnerabilities. Learn how advanced security solutions help organizations safeguard data and maintain uninterrupted operations.",
      imageUrl: SecurityImg,
      reverse: true // Image on left
    },
    {
        title: "The Future of Enterprise Communication Technology",
        description:"Modern communication tools such as cloud collaboration platforms and smart office solutions help businesses improve teamwork, streamline workflows, and deliver better customer experiences.",
        imageUrl: Business_Communi,
        reverse: false
    }
  ];

  return (
    <section className="bg-blue-100 py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-blue-500  font-bold text-4xl uppercase tracking-wider mb-12"
>
  Our Blogs
</motion.h2>
        <div className="space-y-16 ">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      </div>
    </section>
  );
};
export default OurBlogs;