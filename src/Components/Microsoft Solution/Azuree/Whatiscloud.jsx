import Img from "../../../Constents";

const Productive = Img.Microsoft_Solution.Azure.Productivity;
const Secure = Img.Microsoft_Solution.Azure.Secure;
const Hybrid = Img.Microsoft_Solution.Azure.Hybrid;
const Intelligent = Img.Microsoft_Solution.Azure.Intelligent;
const Scalable = Img.Microsoft_Solution.Azure.Scalable;
const Trusted = Img.Microsoft_Solution.Azure.Trusted;

export default function AzureBenefits() {
  return (
    <section className="mb-20 px-6 bg-white">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          When It's Cloud, It's Always <span className="text-blue-600">Azure</span>
        </h2>

        <p className="text-gray-500 text-sm font-medium mt-3">
          Moving to the cloud but doing it right with Azure – Microsoft's trusted, scalable, and reliable platform transforming businesses worldwide.
        </p>
      </div>


      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2  gap-6">

        {/* Card 1 */}
        <div className="border border-gray-200 rounded-xl  hover:scale-105 duration-300 transition p-8 text-center">
          <img src={Productive} alt="productive" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Productive</h3>
          <p className="text-sm text-gray-600">
            Bring ideas to life faster with scalable, end-to-end services that fuel innovation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition text-center">
          <img src={Secure} alt="secure" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
          <p className="text-sm text-gray-600">
            Stay protected with built-in security controls and compliance across hybrid environments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition text-center">
          <img src={Hybrid} alt="hybrid" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Hybrid</h3>
          <p className="text-sm text-gray-600">
            Build, launch, and manage from anywhere with full flexibility and open-source support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-200 rounded-xl hover:scale-105 duration-300 transition p-8 text-center">
          <img src={Intelligent} alt="intelligent" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Intelligent</h3>
          <p className="text-sm text-gray-600">
            Drive innovation and accelerate time-to-market with AI services and analytics built-in to Azure.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-200 rounded-xl hover:scale-105 duration-300 transition p-8 text-center">
          <img src={Scalable} alt="scalable" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Scalable</h3>
          <p className="text-sm text-gray-600">
            Scale workloads with ease using Azure's globally distributed cloud infrastructure.
          </p>
        </div>

        {/* Card 6 */}
        <div className="border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition text-center">
          <img src={Trusted} alt="trusted" className="w-10 mx-auto mb-4"/>
          <h3 className="font-semibold text-gray-900 mb-2">Trusted</h3>
          <p className="text-sm text-gray-600">
            Trusted by start-ups, government bodies, and multinational enterprises alike.
          </p>
        </div>

      </div>

    </section>
  );
}