import React from 'react';
import MotionButton from '../Common/MotionButton';
import { ArrowBigLeft, ArrowBigRight, ArrowDownRightFromSquare, ArrowRight, CircleArrowRight } from 'lucide-react';

const Card = ({ NameOfButton, Onclick, CardImg, CardImgName, Title, Description }) => {
  return (
    <div className="max-w-xs rounded-4xl backdrob-blur-sm shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 cursor-pointer">
 
      {/* Icon Container */}
      <div className="w-24 h-24 mb-6">
        <img 
          src={CardImg} 
          alt={CardImgName} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <h3 className="text-blue-500 font-bold text-xl tracking-wider mb-4 uppercase">
        {Title }
      </h3>
      
      <p className="text-gray-500 leading-relaxed text-base mb-8">
        {Description }
      </p>
      <ArrowRight className='inline-block w-7 h-7 hover:text-blue-600 ' />
    </div>
  );
};

export default Card;