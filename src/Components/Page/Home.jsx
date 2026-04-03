import Hero from "../HomePage/Hero"
import About from "../HomePage/About"
import Achievements from "../HomePage/Achievements";
import Services from "../HomePage/Services";
import OurSolution from "../HomePage/OurSolution";
import TestimonialSlider from "../HomePage/TestimonialSlider";
import OurPartners from "../HomePage/OurPartners";
import IndustriesSection from "../HomePage/IndustriesSection";
import OurBlogs from "../HomePage/OurBlogs";
import ContactForm from "../HomePage/ContactUs";
import Helmet from "helmet";

const Home = () => {
  return (
    <div>
  <Helmet >
  <title>Microsoft Solutions Partner in Chennai | Tibos Solutions</title>

  <meta
    name="description"
    content="Tibos Solutions is a trusted Microsoft partner providing Microsoft 365, Azure, cybersecurity, and enterprise IT solutions in Chennai."
  />

  <meta
    name="keywords"
    content="Microsoft partner Chennai, Microsoft solutions India, Azure, Microsoft 365, cybersecurity services"
  />

  <link rel="canonical" href="https://tibos.co.in/" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Tibos Solutions | Microsoft Partner Chennai" />
</Helmet>

          
      
        <div >
         
            <Hero/>
            <About/>
            <Achievements/>
            <Services/>
            <OurSolution/>
            <TestimonialSlider/>
            <OurPartners/>
            <IndustriesSection/>
            <OurBlogs/>
            <ContactForm/>


        </div>
    </div>
  )
}
export default Home;
