import { motion } from "framer-motion";
import { FaHeadset, FaGlobe, FaUsers } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Dynamicpartner = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Your Trusted Microsoft Dynamics 365 Partner
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-14">
            TIBOS delivers seamless implementation, system integration, and scalable
            digital transformation solutions backed by real industry experience.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid 
            gap-6 sm:gap-8 md:gap-10 
            grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
          "
        >
          
          {/* Card */}
          {[ 
            {
              icon: <FaHeadset />,
              title: "Complete Support",
              desc: "End-to-end implementation, testing, training, and managed services.",
              color: "red"
            },
            {
              icon: <FaGlobe />,
              title: "Domain Expertise",
              desc: "Proven experience across industries with practical, scalable solutions.",
              color: "blue"
            },
            {
              icon: <FaUsers />,
              title: "Flexible Teams",
              desc: "Scale your team quickly based on project demands and timelines.",
              color: "indigo"
            }
          ].map((item, index) => (
            
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
                group
                bg-white 
                rounded-3xl 
                p-6 sm:p-8 md:p-10 
                shadow-sm 
                hover:shadow-2xl 
                transition-all duration-300
              "
            >
              
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div
                  className={`
                    p-4 rounded-full 
                    transition duration-300
                    ${
                      item.color === "red"
                        ? "bg-red-100 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                        : item.color === "blue"
                        ? "bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"
                        : "bg-indigo-100 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white"
                    }
                  `}
                >
                  <div className="text-lg sm:text-xl md:text-2xl">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Dynamicpartner;