import { motion } from "framer-motion";
import IMG from "../../Constents"

const values = [
  {
    title: "Integrity",
    icon: IMG.AboutPage.icons.Integrity,
    desc: "Bring ideas to life faster with scalable, end-to-end services that fuel innovation."
  },
  {
    title: "Innovation",
    icon: IMG.AboutPage.icons.Innovation,
    desc: "We’re pragmatic adventurers and curious explorers. We strive for the new and drive on the proven."
  },
  {
    title: "Clients",
    icon: IMG.AboutPage.icons.Clients,
    desc: "We understand instinctively that we succeed only when our customers do."
  },
  {
    title: "Collaboration",
    icon: IMG.AboutPage.icons.Colloboration,
    desc: "We work cooperatively and confidently. Our commitment to greatness is best achieved together."
  },
  {
    title: "People",
    icon: IMG.AboutPage.icons.People,
    desc: "We treasure talent, embrace effort and reward results. We cultivate a culture that challenges great people."
  },
  {
    title: "Pride",
    icon: IMG.AboutPage.icons.Pride,
    desc: "We’re proud of TIBOS. We pursue excellence on behalf of our clients, our colleagues and community."
  }
];

const ValuesSection = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className=" py-16">
      <div className="text-center text-3xl font-bold mb-10">
        <h1>
          We are
        </h1>
        <h2 className="text-2xl font-medium text-blue-600 mt-2">
          Inspired by Our Values
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {values.map((item, index) => (
          <motion.div
            key={index}
            custom={Math.floor(index / 3)}   // Row by row animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-blue-50 rounded-2xl p-10 text-center hover:shadow-lg transition"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default ValuesSection;