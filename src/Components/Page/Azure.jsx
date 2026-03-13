import React from 'react'
import AzureBan from '../Microsoft Solution/Azuree/AzureBan'
import Whatiscloud from '../Microsoft Solution/Azuree/Whatiscloud'
import AzureInfrastructure from '../Microsoft Solution/Azuree/AzureInfrastructure'
import AzureFAQ from '../Microsoft Solution/Azuree/AzureFAQ'

const Azure = () => {
  return (
    <div>
        <AzureBan/>
        <Whatiscloud/>
        <AzureInfrastructure/>
        <AzureFAQ/>
    </div>
  )
}

export default Azure