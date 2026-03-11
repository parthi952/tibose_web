import { motion } from "framer-motion";
const AboutSection2 = () => {
  return (
    <div>
      <img src="AB.png" className="mt-20" />
      <div className="p-5 mt-5 rounded-xl max-w-5xl mx-auto flex items-center gap-20">

    
       <motion.img
        src="/Microsoft.png"
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
    <div className="p-15 rounded-xl max-w-300 mx-auto flex gap-20">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration:1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose <span className="text-blue-600">TIBOS?</span>
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          For over nine years, TIBOS has been a trusted name in IT excellence—empowering
          businesses with innovative, reliable, and scalable technology solutions.
          Here’s what makes TIBOS the preferred partner across industries:
        </p>
        </motion.div>
        <motion.img
        src="whychoose.png"
        alt="Whychoose"
        className="w-[400px]"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

    </div>
<div>
     
      <h3 className=" text-3xl font-bold text-blue-600 text-center">
        Where Vision Meets Execution
      </h3>
      <h2 className="font-bold ml-35 mt-15 text-3xl">
        Our Growth Story
      </h2>
      <p className="ml-35 max-w-150 text-gray-600 mt-5">
        In today’s fast-moving world of technology, business leaders have an incredible opportunity to redefine efficiency and deliver greater value to their customers in bold, innovative ways. To lead our clients through that journey, continuous transformation and growth are part of who we are.
      </p>
      <div className="mt-5 ml-35 max-w-150">
              <h2 className="text-2xl font-medium">
        Our Growth Dimensions
      </h2>
      <p>
        <span>✔️</span>Transactional to Solution-based Value Creation
        <br />
 
        <span>✔️</span> Strategic Partnerships for Best-of-Breed Technology
        <br />
 
        <span>✔️</span>Expanded Vertical Focus to Drive Revenue Streams
        <br />
 
        <span>✔️</span>Increased Reach to Cater to Clients Across the Country
        <br />
      </p>

      </div>
    </div>
    </div>
    
     
  )
}

export default AboutSection2