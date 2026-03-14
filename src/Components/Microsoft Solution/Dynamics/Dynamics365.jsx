import Img from "../../../Constents";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Video = Img.Microsoft_Solution.Dynamics.Dynamicsvideo;

const Dynamics365 = () => {
  return (
    <div className="flex items-center justify-center gap-10 p-10">

      {/* Left Card */}
      <motion.div
        className="relative group"
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
            className="rounded-3xl w-[520px] shadow-xl"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg transition duration-300 group-hover:scale-125 group-hover:bg-blue-400">
              <FaPlay className="text-black text-xl ml-1" />
            </div>
          </div>
        </a>
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="bg-[#e3f3ff] rounded-3xl p-10 w-[620px] shadow-xl"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Microsoft Dynamics 365: A Suite Of Intelligent Business Applications
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          As a Microsoft Dynamics 365 implementation and support partner, we help
          businesses optimize sales, marketing, field operations, finance,
          supply chain, and project management without the complexity of
          navigating the technology themselves.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether you need a Dynamics 365 partner to enhance customer engagement
          or deliver AI-powered ERP and CRM software, our team is dedicated to
          aligning technology with your business goals.
        </p>
      </motion.div>

    </div>
  );
};

export default Dynamics365;