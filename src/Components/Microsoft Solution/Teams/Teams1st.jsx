import Img from "../../../Constents";
import { motion } from "framer-motion";

const Teamsrec = Img.Microsoft_Solution.Teams.Teamsrec;

export default function TeamsSection() {
  return (
    <section className="mb-20 px-6">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={Teamsrec}
            alt="Microsoft Teams Meeting"
            className="w-full max-w-2xl rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black leading-tight mb-6">
            Unite Your Team,
            <br />
            Wherever They Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Bring people, conversations, and projects together in one intelligent
            workspace within Microsoft 365 built to help your teams thrive. In
            today’s world of remote and hybrid work, Microsoft Teams bridges the
            gaps, enabling real-time collaboration, faster responses, and safer
            ways to work.
          </p>
        </motion.div>

      </div>

    </section>
  );
}