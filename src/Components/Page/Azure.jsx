import React from 'react'
import AzureBan from '../Microsoft Solution/Azuree/AzureBan'
import Whatiscloud from '../Microsoft Solution/Azuree/Whatiscloud'
import AzureInfrastructure from '../Microsoft Solution/Azuree/AzureInfrastructure'
import AzureFAQ from '../Microsoft Solution/Azuree/AzureFAQ'
import Helmet from "helmet";

const Azure = () => {
  return (
    <div>
      <Helmet>
  <title>Microsoft Azure Cloud Solutions | Tibos Chennai</title>

  <meta
    name="description"
    content="Scale your business with Microsoft Azure cloud solutions. Tibos provides Azure migration, cloud infrastructure, and security services."
  />

  <meta
    name="keywords"
    content="Azure cloud solutions Chennai, Azure migration services India, Microsoft Azure partner"
  />

  <link rel="canonical" href="https://tibos.co.in/azure" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Azure Cloud Solutions | Tibos" />
</Helmet>
        <AzureBan/>
        <Whatiscloud/>
        <AzureInfrastructure/>
        <AzureFAQ/>
    </div>
  )
}

export default Azure