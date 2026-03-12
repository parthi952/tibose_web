import About from "../HomePage/About"
import Achievements from "../HomePage/Achievements";
import OurPartners from "../HomePage/OurPartners";
import IMG from "../../Constents";

const Abcc=IMG.AboutPage.Abcc
const AboutSection = () => {
  return (
    <div>
      <img src={Abcc}
       alt="" 
       className="pt-20" 
       />
        <About/>
        <Achievements/>
        <OurPartners/>
    </div>
  )
}
export default AboutSection;

