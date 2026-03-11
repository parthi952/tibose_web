
import Card from './OurSolution/Card'
import FiberOpticBackground from './OurSolution/FiberOpticBackground';
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
    Title: "CONNECTIVITY",
    Description: "Reliable high-speed connectivity ensuring smooth communication and consistent performance for all business operations.",
    Path: "/connectivity"
  },
  {
    CardImg: cyber,
    CardImgName: "CYBERSECURITY",
    Title: "CYBERSECURITY",
    Description: "Advanced security solutions protecting critical data, sensitive networks, digital platforms, and essential business assets.",
    Path: "/cybersecurity"
  },
  {
    CardImg: HS,
    CardImgName: "HARDWARE SOLUTION",
    Title: "HARDWARE SOLUTION",
    Description: "High-performance hardware systems delivering reliable speed, smooth operations, and efficient daily business performance.",
    Path: "/hardware-solution"
  },
  {
    CardImg: SC,
    CardImgName: "SMART COMMUNICATION",
    Title: "SMART COMMUNICATION",
    Description: "Cloud-based communication tools improving team engagement, workplace collaboration, and daily operational efficiency.",
    Path: "/smart-communication"
  },
  {
    CardImg: BPO,
    CardImgName: "BUSINESS PROCESS OUTSOURCING",
    Title: "BUSINESS PROCESS OUTSOURCING",
    Description: "End-to-end outsourcing services enhancing productivity, reducing overall costs, and optimizing essential business workflows.",
    Path: "/business-process-outsourcing"
  }
]

const OurSolution = () => {


  return (
    <div className="relative w-full rounded-xl shadow-lg overflow-hidden">
       <FiberOpticBackground/>

    
        <div 
          className="absolute  bg-linear-to-r from-blue-200 to-blue-300 inset-0 pointer-events-none opacity-30"
        />
        
      
        <div className="relative z-10 p-10">
          <div className="flex flex-row space-x-8 overflow-x-auto py-10 px-6 scrollbar-hide">
            {ItermList.map((item, index) => (
              <Card 
                key={index}
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