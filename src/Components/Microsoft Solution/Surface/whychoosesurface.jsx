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
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Whychoosesurface = () => {
  return (
    <section className="mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        className="text-center mb-10 md:mb-14 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Why Choose TIBOS for Microsoft Surface Products?
        </h2>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          Genuine devices, expert support, and tailored Surface solutions designed
          to empower your business productivity.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-5 sm:gap-6 md:gap-8 
          max-w-7xl mx-auto
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Card 1 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4">
            <FaCertificate />
          </div>

          <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
            Authorised Seller
          </h3>

          <p className="text-gray-500 text-sm sm:text-base">
            Genuine Surface devices with full warranties and official Microsoft support.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4">
            <FaUserTie />
          </div>

          <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
            Expert Guidance
          </h3>

          <p className="text-gray-500 text-sm sm:text-base">
            Personalized recommendations tailored to your business needs and budget.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4">
            <FaMoneyBillWave />
          </div>

          <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
            Competitive Pricing
          </h3>

          <p className="text-gray-500 text-sm sm:text-base">
            Best value pricing with flexible payment options and volume discounts.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={card}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="bg-blue-100 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4">
            <FaSlidersH />
          </div>

          <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
            Custom Solutions
          </h3>

          <p className="text-gray-500 text-sm sm:text-base">
            Seamless integration with your existing systems for maximum productivity.
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Whychoosesurface;