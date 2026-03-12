import { motion } from "framer-motion";
import IMG from "../../Constents"


const growth=IMG.AboutPage.Growth

const Growth = () => {
  return (
    <div>
        <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration:1 }}
        viewport={{ once: true }}
      >
     <section className=" py-16 px-6">
      
      {/* Top Title */}
      <h2 className="text-center text-blue-600 font-bold text-3xl mb-10">
        Where Vision Meets Execution
      </h2>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Growth Story
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            In today’s fast-moving world of technology, business leaders have an
            incredible opportunity to redefine efficiency and deliver greater
            value to their customers in bold, innovative ways. To lead our
            clients through that journey, continuous transformation and growth
            are part of who we are.
          </p>

          <h4 className="font-semibold text-gray-800 mb-4">
            Our Growth Dimensions
          </h4>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              Transactional to Solution-based Value Creation
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              Strategic Partnerships for Best-of-Breed Technology
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              Expanded Vertical Focus to Drive Revenue Streams
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              Increased Reach to Cater to Clients Across the Country
            </li>
          </ul>
        </div>

        {/* Right Image Card */}
        <div className=" p-6 items-center">
          <img
            src={growth}
            alt="Growth Illustration"
            className="rounded-lg transition-transform duration-500 hover:scale-105"
            // className="rounded-lg"
          />
        </div>

      </div>
    </section>
    </motion.div>
    </div>
  )
}

export default Growth