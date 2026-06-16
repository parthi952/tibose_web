import Wave from 'react-wavify';
import Card from './OurSolution/Card'
import Img from "../../Constents"

const SC = Img.HomePage.OurSolution.SC;
const BPO = Img.HomePage.OurSolution.BPO;
const HS = Img.HomePage.OurSolution.HS;
const cyber = Img.HomePage.OurSolution.cyber;
const Conn = Img.HomePage.OurSolution.Conn;

const ItermList = [
  {
    CardImg: Conn,
    CardImgName: "CONNECTIVITY",
    Title: "Network Connectivity",
    Description: "Reliable high-speed connectivity ensuring smooth communication and consistent performance for all business operations.",
    Path: "/connectivity"
  },
  {
    CardImg: cyber,
    CardImgName: "CYBERSECURITY",
    Title: "Cybersecurity Solutions",
    Description: "Advanced security solutions protecting critical data, sensitive networks, digital platforms, and essential business assets.",
    Path: "/cybersecurity"
  },
  {
    CardImg: HS,
    CardImgName: "HARDWARE SOLUTION",
    Title: "Enterprise Hardware Solutions",
    Description: "High-performance hardware systems delivering reliable speed, smooth operations, and efficient daily business performance.",
    Path: "/hardware-solution"
  },
  {
    CardImg: SC,
    CardImgName: "SMART COMMUNICATION",
    Title: "Smart Communication Systems",
    Description: "Cloud-based communication tools improving team engagement, workplace collaboration, and daily operational efficiency.",
    Path: "/smart-communication"
  },
  {
    CardImg: BPO,
    CardImgName: "BUSINESS PROCESS OUTSOURCING",
    Title: "Business Process Outsourcing",
    Description: "End-to-end outsourcing services enhancing productivity, reducing overall costs, and optimizing essential business workflows.",
    Path: "/business-process-outsourcing"
  }
]

const OurSolution = () => {

  return (
    <div className="relative w-full rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100">

      {/* Subtle Wave Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute bottom-0 w-full h-1/2">
          <Wave
            fill="rgba(59, 130, 246, 0.15)"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 4
            }}
            className="absolute bottom-0 w-full"
            style={{ display: 'flex', transform: 'translateY(10px)' }}
          />
          <Wave
            fill="rgba(59, 130, 246, 0.08)"
            paused={false}
            options={{
              height: 40,
              amplitude: 40,
              speed: 0.2,
              points: 3
            }}
            className="absolute bottom-0 w-full"
            style={{ display: 'flex', transform: 'scaleX(-1)' }}
          />
        </div>
      </div>

      <div className="relative z-10 pt-10">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-600 uppercase tracking-widest drop-shadow-sm mb-4">
          Technology Solution
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="relative z-10 px-3 sm:px-5 md:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7 py-8 sm:py-10">

          {ItermList.map((item, index) => (
            <Card
              key={index}
              index={index}
              CardImg={item.CardImg}
              CardImgName={item.CardImgName}
              Title={item.Title}
              Description={item.Description}
              Path={item.Path}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default OurSolution;
