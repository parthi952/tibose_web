import Img from "../../../Constents";

const Defender = Img.Microsoft_Solution.Sericeslogo.Defender;
const Sentinel = Img.Microsoft_Solution.Sericeslogo.Sentinel;
const Entra = Img.Microsoft_Solution.Sericeslogo.EntraId;
const Purview = Img.Microsoft_Solution.Sericeslogo.Eye;
const Intune = Img.Microsoft_Solution.Sericeslogo.Intune

export default function Securepartner() {
  return (
    <section className="mb-20 px-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
            <img src={Defender} alt="Defender" className="w-10 h-10"/>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Microsoft Defender
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Microsoft Defender protects against evolving cyber threats with real-time detection, automation, and seamless integration across cloud and endpoints.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
            <img src={Sentinel} alt="Sentinel" className="w-10 h-10"/>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Microsoft Sentinel
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Microsoft Sentinel offers proactive defence with AI analytics, reducing risks and enabling swift incident response through automated security operations.
              </p>
            </div>
          </div>

        </div>


        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
            <img src={Entra} alt="Entra" className="w-10 h-10"/>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Microsoft Entra
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Microsoft Entra simplifies identity and access management across cloud environments, offering unified control for users, workloads, and permissions.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4">
            <img src={Purview} alt="Purview" className="w-15 h-8"/>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Microsoft Purview
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Microsoft Purview delivers unified data governance with intelligent classification, policy automation, and cross-organisation compliance insights.
              </p>
            </div>
          </div>

        </div>


        {/* Row 3 (Centered Card) */}
        <div className="flex justify-center">

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 max-w-md">
            <img src={Intune} alt="Intune" className="w-10 h-10"/>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Microsoft Intune
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Microsoft Intune provides advanced device, app, and OS management from the cloud, centralising endpoints and strengthening organisation-wide security.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}