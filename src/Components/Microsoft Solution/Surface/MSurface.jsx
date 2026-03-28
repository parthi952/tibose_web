import Img from "../../../Constents";
import { motion } from "framer-motion";

const SurfaceLogo = Img.Microsoft_Solution.Surface.Surfacepartner;

const MSurface = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* LOGO (Top in mobile) */}
        <motion.div
          className="flex items-center justify-center w-full md:w-1/2 order-1 md:order-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={SurfaceLogo}
            alt="Microsoft Surface Authorized Reseller"
            className="
              w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px]
              object-contain
            "
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-snug">
            Microsoft Surface Pro & Surface Devices for Business | TIBOS
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Buy Microsoft Surface devices for business including Surface Pro,
             Surface Laptop, and accessories. Trusted Microsoft Surface reseller with expert support.

          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MSurface;