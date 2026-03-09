import Hero from "../HomePage/Hero"
import About from "../HomePage/About"
import Achievements from "../HomePage/Achievements";
import Services from "../HomePage/Services";
import OurSolution from "../HomePage/OurSolution";
import TestimonialSlider from "../HomePage/TestimonialSlider";
import OurPartners from "../HomePage/OurPartners";
import IndustriesSection from "../HomePage/IndustriesSection";

const Home = () => {
  return (
    <div>
        <div >
            <Hero/>
            <About/>
            <Achievements/>
            <Services/>
            <OurSolution/>
            <TestimonialSlider/>
            <OurPartners/>
            <IndustriesSection/>
            
        </div>
    </div>
  )
}
export default Home;
