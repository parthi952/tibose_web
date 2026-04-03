import Img from '../../Constents'
import Boost from '../Microsoft Solution/Business/Boost'
import Businessplans from '../Microsoft Solution/Business/Businessplans'
import Helmet from "helmet";

const BH=Img.Microsoft_Solution.Bussiness.MBH
const Business = () => {
  return (
    <div>
      <Helmet>
  <title>Microsoft 365 Solutions for Business | Tibos Chennai</title>

  <meta
    name="description"
    content="Boost productivity with Microsoft 365 solutions for business. Tibos provides licensing, deployment, Teams integration, and security services in Chennai."
  />

  <meta
    name="keywords"
    content="Microsoft 365 business Chennai, Microsoft 365 solutions India, Office 365 services, Microsoft Teams integration"
  />

  <link rel="canonical" href="https://tibos.co.in/business" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Microsoft 365 Solutions for Business | Tibos" />
  <meta property="og:description" content="Improve productivity with Microsoft 365 deployment and support services." />
</Helmet>
      <img src={BH} alt="Microsoft Business" className='mt-20' />
        <Boost/>
        <Businessplans/>
    </div>
  )
}

export default Business