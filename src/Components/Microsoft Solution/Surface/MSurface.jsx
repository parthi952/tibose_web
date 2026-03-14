import Img from "../../../Constents";
import { motion } from "framer-motion";

const SurfaceLogo = Img.Microsoft_Solution.Surface.Surfacepartner;

const MSurface = () => {
  return (
    <div className="flex items-center justify-center gap-10 pb-20">

      {/* Left Logo Box */}
      <motion.div
        className="rounded-2xl flex items-center justify-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={SurfaceLogo}
          alt="Microsoft Surface Authorized Reseller"
          className="w-[320px] object-contain"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="max-w-md"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
          We are Authorized <br />
          Microsoft Surface Reseller
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed">
          Your trusted partner for enterprise-grade Surface devices,
          accessories, and deployment support.
        </p>
      </motion.div>

    </div>
  );
};

export default MSurface;