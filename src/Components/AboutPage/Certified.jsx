import { motion } from "framer-motion";
import IMG from "../../Constents"
const ABCareer= IMG.AboutPage.ABCareer
const Mirosoft= IMG.AboutPage.Microsoft

const Certified = () => {
  return (
    <div>
        <img src={ABCareer} className="mt-20" />
      <div className="p-5 mt-5 rounded-xl max-w-5xl mx-auto flex items-center gap-20">

    
       <motion.img
        src={Mirosoft}
        alt="Microsoft"
        className="w-96 rounded-xl"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
     <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">
          TIBOS – The Certified Microsoft Security Services Partner
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          TIBOS has partnered with Microsoft to offer security services
          consisting of Azure Sentinel, Azure Information Protection, and
          Microsoft Defender Advanced Threat Protection.
        </p>
      </motion.div>



    </div>
    </div>
  )
}

export default Certified