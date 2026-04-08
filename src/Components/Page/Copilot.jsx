import Img from "../../Constents"
import AIrisk from "../Microsoft Solution/Copilot/AIrisk";
import Copilotpricing from "../Microsoft Solution/Copilot/Copilotpricing";
import Empowering from "../Microsoft Solution/Copilot/Empowering";
import FAQ from "../Microsoft Solution/Copilot/FAQ";
import Whychoosecopilot from "../Microsoft Solution/Copilot/Whychoosecopilot";
import Helmet from "helmet";
const CBanner=Img.Microsoft_Solution.Copilot.CB
const Copilot = () => {
  return (
    <div>
      <Helmet>
  {/* Title */}
  <title>Microsoft 365 Copilot Solutions | AI Productivity for Business | TIBOS</title>

  {/* Meta Description */}
  <meta 
    name="description" 
    content="Boost productivity with Microsoft 365 Copilot. TIBOS helps businesses securely adopt AI with compliance, governance, and seamless integration across Microsoft tools." 
  />

  {/* Keywords (not very powerful, but okay to include) */}
  <meta 
    name="keywords" 
    content="Microsoft 365 Copilot, AI productivity tools, business AI solutions, Microsoft AI integration, Copilot security, AI compliance, TIBOS" 
  />

  {/* Author */}
  <meta name="author" content="TIBOS" />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link rel="canonical" href="https://tibos.co.in/copilot" />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta property="og:title" content="Microsoft 365 Copilot Solutions | TIBOS" />
  <meta 
    property="og:description" 
    content="Adopt Microsoft 365 Copilot securely with TIBOS. Enhance productivity while maintaining compliance and enterprise-grade security." 
  />
  <meta property="og:url" content="https://tibos.co.in/copilot" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://tibos.co.in/images/copilot-banner.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Microsoft 365 Copilot Solutions | TIBOS" />
  <meta 
    name="twitter:description" 
    content="Securely implement Microsoft 365 Copilot with TIBOS and transform your business productivity using AI." 
  />
  <meta name="twitter:image" content="https://tibos.co.in/images/copilot-banner.jpg" />

  {/* Robots */}
  <meta name="robots" content="index, follow" />
</Helmet>
        <img src={CBanner} alt="Microsoft 365 Copilot AI productivity tools for enterprise businesses" className="mt-20"/>
        
        <AIrisk/>
        <Empowering/>
          <Copilotpricing/>
        <Whychoosecopilot/>
        <FAQ/>
    </div>
  )
}

export default Copilot;