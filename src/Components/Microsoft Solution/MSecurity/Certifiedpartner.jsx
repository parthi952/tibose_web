import Img from "../../../Constents";

const Securepartner=Img.Microsoft_Solution.Security.Securepartner

export default function Certifiedpartner() {
  return (
    <section className="bg-[#2a7bd6] py-20 mb-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={Securepartner}
            alt="Microsoft Security Partner"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>


        {/* Right Content */}
        <div className="text-white">

          <h2 className="text-4xl font-bold leading-tight mb-6">
            TIBOS – The Certified Microsoft
            <br />
            Security Services Partner
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed">
            TIBOS has partnered with Microsoft to offer security services
            consisting of Azure Sentinel, Azure Information Protection, and
            Microsoft Defender Advanced Threat Protection. TIBOS leverages
            Microsoft’s leading technology platforms to provide robust
            incident response and managed security services.
          </p>

        </div>

      </div>

    </section>
  );
}