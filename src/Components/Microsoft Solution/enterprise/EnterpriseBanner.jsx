import Img from "../../../Constents"

const enterprise=Img.Microsoft_Solution.Enterprise

const EnterpriseBanner = () => {
  return (
    <div className="mt-20">
        <img src={enterprise} alt="Microsoft Enterprise" />
    </div>
  )
}
export default EnterpriseBanner;