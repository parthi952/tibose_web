import React from 'react';

import {  ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ CardImg, CardImgName, Title, Description , Path }) => {
  return (
    <div className="max-w-xs rounded-2xl bg-transparent backdrop-blur-sm shadow-xl p-5 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className='flex flex-col items-center text-center'>
  
 
  <div className="w-16 h-16 mb-4">
    <img 
      src={CardImg} 
      alt={CardImgName} 
      className="w-full h-full object-contain"
    />
  </div>


  <h3 className="text-blue-600 font-bold text-lg tracking-wide mb-2 uppercase">
    {Title}
  </h3>
  
  <p className="text-gray-500 leading-snug text-sm mb-6">
    {Description}
  </p>
    </div>
    <div className="mt-auto">
  <Link to={Path}>
    <ArrowRight className="inline-block w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors" />
  </Link>
  </div>
  
</div>
  );
};

export default Card;