import Dynamicpartner from '../Microsoft Solution/Dynamics/Dynamicpartner'
import Dynamics365 from '../Microsoft Solution/Dynamics/Dynamics365'
import Dynamicsbanner from '../Microsoft Solution/Dynamics/Dynamicsbanner'
import Microsoftteams from '../Microsoft Solution/Teams/Microsoftteams'
import Helmet from "helmet";
const Dynamics = () => {
  return (
    <div>
      <Helmet>
  <title>Microsoft Dynamics 365 Implementation | Tibos Solutions</title>

  <meta
    name="description"
    content="Transform business operations with Microsoft Dynamics 365. Tibos provides CRM and ERP implementation for enterprises."
  />

  <meta
    name="keywords"
    content="Dynamics 365 Chennai, CRM ERP solutions India, Microsoft Dynamics implementation"
  />

  <link rel="canonical" href="https://tibos.co.in/dynamics" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Dynamics 365 Solutions | Tibos" />
</Helmet>
        <Dynamicsbanner/>
        <Dynamics365/>
        <Dynamicpartner/>
        <Microsoftteams/>
    </div>
  )
}

export default Dynamics