import React from 'react'
import Hardwarebanner from '../Our Solution/Hardware/Hardwarebanner'
import AIrisk from '../Microsoft Solution/Copilot/AIrisk'
import Empowering from '../Microsoft Solution/Copilot/Empowering'
import Whychoosecopilot from '../Microsoft Solution/Copilot/Whychoosecopilot'
import FAQ from '../Microsoft Solution/Copilot/FAQ'
import Helmet from "helmet";

const HardwareSolution = () => {
  return (
    <div>
      <Helmet>
  <title>AI Security Risks and Solutions for Businesses | Tibos</title>

  <meta
    name="description"
    content="Understand AI security risks and protect your business with secure AI implementation and compliance solutions by Tibos."
  />

  <meta
    name="keywords"
    content="AI security risks, enterprise AI security, AI compliance solutions, AI data protection"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://tibos.co.in/hardware" />

  <meta property="og:title" content="AI Security Risks and Business Protection | Tibos" />
  <meta property="og:description" content="Secure your business from AI risks with enterprise-grade solutions." />
</Helmet>
        <Hardwarebanner/>
        <AIrisk/>
        <Empowering/>
        <Whychoosecopilot/>
        <FAQ/>
    </div>
  )
}

export default HardwareSolution