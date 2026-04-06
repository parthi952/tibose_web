import Img from "../../Constents"
import Certifiedpartner from "../Microsoft Solution/MSecurity/Certifiedpartner"
import Securepartner from "../Microsoft Solution/MSecurity/Securepartner"
import Values from "../Microsoft Solution/MSecurity/Values"
import Helmet from "helmet";

const Secureban=Img.Microsoft_Solution.Security.Secureban
const Security = () => {
  return (
    <div>
      <Helmet>
  <title>Microsoft Security Solutions | Cybersecurity Services Chennai</title>

  <meta
    name="description"
    content="Protect your business with Microsoft Security solutions including endpoint protection, identity management, and zero trust security."
  />

  <meta
    name="keywords"
    content="Microsoft security Chennai, cybersecurity solutions India, endpoint security, zero trust security"
  />

  <link rel="canonical" href="https://tibos.co.in/security" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Microsoft Security Solutions | Tibos" />
</Helmet>
        <img src={Secureban} alt="microsoft seurity" className="mt-20 mb-20" />
        <Values/>
        <Certifiedpartner/>
        <Securepartner/>

    </div>
  )
}

export default Security