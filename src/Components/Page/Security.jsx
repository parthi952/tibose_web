import Img from "../../Constents"
import Certifiedpartner from "../Microsoft Solution/MSecurity/Certifiedpartner"
import Securepartner from "../Microsoft Solution/MSecurity/Securepartner"
import Values from "../Microsoft Solution/MSecurity/Values"

const Secureban=Img.Microsoft_Solution.Security.Secureban
const Security = () => {
  return (
    <div>
        <img src={Secureban} alt="microsoft seurity" className="mt-20 mb-20" />
        <Values/>
        <Certifiedpartner/>
        <Securepartner/>

    </div>
  )
}

export default Security