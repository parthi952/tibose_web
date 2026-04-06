import Surfacebanner from "../Microsoft Solution/Surface/Surfacebanner"
import MSurface from "../Microsoft Solution/Surface/MSurface"
import SurfaceProducts from "../Microsoft Solution/Surface/SurfaceProducts"
import Whychoosesurface from "../Microsoft Solution/Surface/whychoosesurface"
import FAQ from "../Microsoft Solution/Copilot/FAQ"
import Helmet from "helmet";

const Surface = () => {
  return (
    <div>
      <Helmet>
  <title>Microsoft Surface Devices for Business | Tibos Chennai</title>

  <meta
    name="description"
    content="Buy Microsoft Surface devices for business including Surface Pro and laptops. Authorized reseller with expert support."
  />

  <meta
    name="keywords"
    content="Microsoft Surface reseller Chennai, Surface Pro business India, Surface devices for companies"
  />

  <link rel="canonical" href="https://tibos.co.in/surface" />

  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Microsoft Surface Devices | Tibos" />
</Helmet>
        <Surfacebanner/>
        <MSurface/>
        <SurfaceProducts/>
        <Whychoosesurface/>
        <FAQ/>
    </div>
  )
}

export default Surface