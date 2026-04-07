import React from 'react'
import { motion } from 'framer-motion';

const MotionButton = ({ B_Name, ActionToClick }) => {
  return (
        <motion.button 
          whileHover={{ scale: 1.05 }}       
          whileTap={{ scale: 0.95 }}        
          className="group flex items-center gap-2 px-8 py-4 cursor-pointer bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-200 transition-all duration-300"
          onClick={ActionToClick}
        >
          {B_Name}
          <span className="text-xl group-hover:translate-x-1 transition-transform">
            »
          </span>
        </motion.button>

  )
}

export default MotionButton
