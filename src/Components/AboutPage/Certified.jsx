import { motion } from "framer-motion";
import IMG from "../../Constents";

const Mirosoft = IMG.AboutPage.Microsoft;

const Certified = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">

      {/* Content */}
      <div className="mt-8 md:mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 p-4 sm:p-5">

        {/* Left Image */}
        <motion.img
          src={Mirosoft}
          alt="Microsoft"
          className="
            w-full 
            max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]
            rounded-xl
          "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Right Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
           About TIBOS – Microsoft Cloud, Connectivity & Cybersecurity Solutions
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
           TIBOS is a Microsoft security solutions partner helping organizations strengthen their 
           cybersecurity posture using Microsoft technologies such as Azure Sentinel, Microsoft Defender, 
           and Azure Information Protection. 
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Our experts design, implement, and manage security solutions that protect enterprise infrastructure, data, and users from evolving cyber threats.( 
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Certified;