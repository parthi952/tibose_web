import Img from "../../../Constents";
import MotionButton from "../../Common/MotionButton";

const AzureIaas = Img.Microsoft_Solution.Azure.AzureIaas;

export default function AzureInfrastructure() {
  return (
    <section className="mb-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src={AzureIaas}
            alt="Azure Infrastructure"
            className="rounded-2xl"
          />
        </div>


        {/* Right Content */}
        <div>

          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            Get the Infrastructure You Need to
            <br />
            Grow Your Business With TIBOS IaaS
            Solutions by{" "}
            <span className="text-blue-600">Microsoft Azure</span>
          </h2>


          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Maximize the performance of your applications with best-in-class
            cloud infrastructure. With a flexible pay-as-you-go model, you
            only pay for what you use. Leverage TIBOS expertise to power
            high-performance computing and manage infrastructure, data,
            platform, and application migrations seamlessly.
          </p>


          <MotionButton
          B_Name="Talk To Our Expects"
          ActionToClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          />
        </div>

      </div>

    </section>
  );
}