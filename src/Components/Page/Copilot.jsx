import Img from "../../Constents"
import AIrisk from "../Microsoft Solution/Copilot/AIrisk";
import Empowering from "../Microsoft Solution/Copilot/Empowering";
import FAQ from "../Microsoft Solution/Copilot/FAQ";
import Whychoosecopilot from "../Microsoft Solution/Copilot/Whychoosecopilot";

const CBanner=Img.Microsoft_Solution.Copilot.CB
const Copilot = () => {
  return (
    <div>
        <img src={CBanner} alt="Microsoft 365 Copilot AI productivity tools for enterprise businesses" className="mt-20"/>
        <AIrisk/>
        <Empowering/>
        <Whychoosecopilot/>
        <FAQ/>
    </div>
  )
}

export default Copilot;