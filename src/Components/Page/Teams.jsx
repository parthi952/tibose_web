import Teamsbanner from '../Microsoft Solution/Teams/Teamsbanner'
import Teams1st from '../Microsoft Solution/Teams/Teams1st'
import Microsoftteams from '../Microsoft Solution/Teams/Microsoftteams'
import Teamspricing from '../Microsoft Solution/Teams/Teamspricing'
import TeamsServices from '../Microsoft Solution/Teams/TeamsServices'
import Helmet from "helmet";

const Teams = () => {
  return (
    <div>
        <Helmet>
  <title>Microsoft Teams Solutions for Business | Tibos Chennai</title>

  <meta
    name="description"
    content="Enhance collaboration with Microsoft Teams solutions. Tibos offers Teams setup, integration, and enterprise communication solutions."
  />

  <meta
    name="keywords"
    content="Microsoft Teams setup Chennai, Teams collaboration tools, unified communication solutions, Teams deployment"
  />

  <link rel="canonical" href="https://tibos.co.in/teams" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Microsoft Teams Solutions | Tibos" />
</Helmet>
<Teamsbanner/>
        <Teams1st/>
        <Microsoftteams/>
        <Teamspricing/>
        <TeamsServices/>
    </div>
  )
}

export default Teams