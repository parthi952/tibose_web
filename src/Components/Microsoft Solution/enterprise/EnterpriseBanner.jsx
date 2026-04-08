import Img from "../../../Constents"

const enterprise=Img.Microsoft_Solution.Enterprise

const EnterpriseBanner = () => {
  return (
<div>
  <img 
    src={enterprise} 
    alt="Microsoft Enterprise" 
    className="mt-20"
  />
</div>
  )
}
export default EnterpriseBanner;