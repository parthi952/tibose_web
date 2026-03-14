import { motion } from "framer-motion";
import { FaHeadset, FaGlobe, FaUsers } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Dynamicpartner = () => {
  return (
    <div className="py-20 text-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Your Trusted Microsoft Dynamics 365 Partner
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          TIBOS delivers seamless implementation, system integration, and scalable
          digital transformation solutions backed by real industry experience.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex justify-center gap-10 px-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Card 1 */}
        <motion.div
          variants={card}
          className="bg-white rounded-3xl p-10 w-[340px] shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 text-red-400 p-4 rounded-full">
              <FaHeadset size={24} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Complete Support
          </h3>

          <p className="text-gray-500 text-sm">
            End-to-end implementation, testing, training, and managed services.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          className="bg-white rounded-3xl p-10 w-[340px] shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 text-blue-500 p-4 rounded-full">
              <FaGlobe size={24} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Domain Expertise
          </h3>

          <p className="text-gray-500 text-sm">
            Proven experience across industries with practical, scalable solutions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          className="bg-white rounded-3xl  p-10 w-[340px] shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
              <FaUsers size={24} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Flexible Teams
          </h3>

          <p className="text-gray-500 text-sm">
            Scale your team quickly based on project demands and timelines.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Dynamicpartner;