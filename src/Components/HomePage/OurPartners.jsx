import { motion } from "framer-motion";
import Img from "../../Constents"


const Airtel = Img.HomePage.OurPartners.Airtel;
const Ola = Img.HomePage.OurPartners.Ola;
const Microsoft = Img.HomePage.OurPartners.Microsoft;
const Omega = Img.HomePage.OurPartners.Omega;
const Swiggy = Img.HomePage.OurPartners.Swiggy;
const TC = Img.HomePage.OurPartners.TC;
const TT = Img.HomePage.OurPartners.TT;





const OurPartners = () => {
  const logos = [
    { name: "Airtel", url: Airtel },
    { name: "Ola", url: Ola },
    { name: "Microsoft", url: Microsoft },
    { name: "Omega", url: Omega },
    { name: "Swiggy", url: Swiggy },
    { name: "TC", url: TC },
    { name: "TATA Tele", url: TT },
  ];


  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-5 bg-white-100 overflow-hidden">
      <div className="">
        <h2 className="text-center text-4xl md:text-4xl font-bold text-blue-600">
          Our Partners
        </h2>
      </div>

      {/* Main Wrapper */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Moves from start to halfway (since we doubled it)
          }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust this number to change speed (higher = slower)
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-10 w-40 md:w-60 shrink-0"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-auto md:h-auto w-auto object-contain  hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;