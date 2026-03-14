import { motion } from "framer-motion";
import { FaCertificate, FaUserTie, FaMoneyBillWave, FaSlidersH } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Whychoosesurface = () => {
  return (
    <div className="mb-20">

      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-3">
          Why Choose TIBOS for Microsoft Surface Products?
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          Genuine devices, expert support, and tailored Surface solutions designed
          to empower your business productivity.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-4 gap-8 px-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Card 1 */}
        <motion.div
          variants={card}
          className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaCertificate />
          </div>

          <h3 className="text-blue-600 font-semibold mb-2">
            Authorised Seller
          </h3>

          <p className="text-gray-500 text-sm">
            Genuine Surface devices with full warranties and official Microsoft support.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaUserTie />
          </div>

          <h3 className="text-blue-600 font-semibold mb-2">
            Expert Guidance
          </h3>

          <p className="text-gray-500 text-sm">
            Personalized recommendations tailored to your business needs and budget.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaMoneyBillWave />
          </div>

          <h3 className="text-blue-600 font-semibold mb-2">
            Competitive Pricing
          </h3>

          <p className="text-gray-500 text-sm">
            Best value pricing with flexible payment options and volume discounts.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={card}
          className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
            <FaSlidersH />
          </div>

          <h3 className="text-blue-600 font-semibold mb-2">
            Custom Solutions
          </h3>

          <p className="text-gray-500 text-sm">
            Seamless integration with your existing systems for maximum productivity.
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default Whychoosesurface;