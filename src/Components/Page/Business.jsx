import Img from '../../Constents'
import Boost from '../Microsoft Solution/Business/Boost'
import Businessplans from '../Microsoft Solution/Business/Businessplans'

const BH=Img.Microsoft_Solution.Bussiness.MBH
const Business = () => {
  return (
    <div>
      <img src={BH} alt="Microsoft Business" className='mt-20' />
        <Boost/>
        <Businessplans/>
    </div>
  )
}

export default Business