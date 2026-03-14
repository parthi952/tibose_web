import Dynamicpartner from '../Microsoft Solution/Dynamics/Dynamicpartner'
import Dynamics365 from '../Microsoft Solution/Dynamics/Dynamics365'
import Dynamicsbanner from '../Microsoft Solution/Dynamics/Dynamicsbanner'
import Microsoftteams from '../Microsoft Solution/Teams/Microsoftteams'

const Dynamics = () => {
  return (
    <div>
        <Dynamicsbanner/>
        <Dynamics365/>
        <Dynamicpartner/>
        <Microsoftteams/>
    </div>
  )
}

export default Dynamics