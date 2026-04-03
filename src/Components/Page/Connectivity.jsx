import React from 'react'
import Connectivitybanner from '../Our Solution/Connectivity/Connectivitybanner'
import ConnectivityServices from '../Our Solution/Connectivity/ConnectivityServices'
import ConnectivityServices2 from '../Our Solution/Connectivity/ConnectivityServices2'
import WhyChoose from '../AboutPage/whychoose'
import WEare from '../AboutPage/WEare'
import Helmet from "helmet";

const Connectivity = () => {
  return (
    <div>
      <Helmet>
  <title>Business Internet & Connectivity Solutions | Tibos</title>

  <meta
    name="description"
    content="High-speed business internet and connectivity solutions including leased lines, VPN, and enterprise voice services."
  />

  <meta
    name="keywords"
    content="business internet Chennai, leased line services India, enterprise connectivity solutions"
  />

  <link rel="canonical" href="https://tibos.co.in/cloud" />

  <meta name="robots" content="index, follow" />
</Helmet>
        <Connectivitybanner/>
        <ConnectivityServices/>
        <ConnectivityServices2/>
        <WhyChoose/>
        <WEare/>
        
    </div>
  )
}

export default Connectivity