import React from "react";
import MotionButton from "../../Common/MotionButton";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, description, imageUrl, reverse }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center max-w-7xl mx-auto pb-10 gap-10 md:gap-26 font-sans`}
    >
      {/* Text Content */}
      <div className="flex-1 md:px-0">
        <h3 className="text-4xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 text-xl leading-relaxed mb-6">
          {description}
        </p>

        <MotionButton
          B_Name="Read More"
          ActionToClick={() => navigate("/blog-details")}
        />
      </div>

      {/* Image Content */}
      <div className="flex-1 overflow-hidden rounded-3xl shadow-xl">
        <img
          src={imageUrl}
          alt={title}
          height={500}
          className="w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default BlogCard;
