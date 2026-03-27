import Img from "../../../Constents";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Video = Img.Microsoft_Solution.Dynamics.Dynamicsvideo;

const Dynamics365 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* VIDEO (Top in mobile) */}
        <motion.div
          className="relative group w-full md:w-1/2 order-1 md:order-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://youtu.be/Qb6uo_er6nE?si=KsQzt6UCYPuRUOVX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Video}
              alt="Microsoft"
              className="
                rounded-2xl md:rounded-3xl 
                w-full 
                h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] 
                object-cover 
                shadow-xl
              "
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow-lg transition duration-300 group-hover:scale-125 group-hover:bg-blue-400">
                <FaPlay className="text-black text-base sm:text-lg md:text-xl ml-1" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* TEXT (Below in mobile, right in desktop) */}
        <motion.div
          className="
            bg-[#e3f3ff] 
            rounded-2xl md:rounded-3xl 
            p-6 sm:p-8 md:p-10 
            w-full md:w-1/2 
            shadow-xl 
            order-2 md:order-2
          "
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-snug">
            Microsoft Dynamics 365: A Suite Of Intelligent Business Applications
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            As a Microsoft Dynamics 365 implementation and support partner, we help
            businesses optimize sales, marketing, field operations, finance,
            supply chain, and project management without the complexity of
            navigating the technology themselves.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you need a Dynamics 365 partner to enhance customer engagement
            or deliver AI-powered ERP and CRM software, our team is dedicated to
            aligning technology with your business goals.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Dynamics365;