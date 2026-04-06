import { TrendingUp, Lock, Shield } from "lucide-react";

export default function AIrisk() {
  return (
    <section className="bg-[#ffff] py-20 px-6">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          AI Security Risks for Businesses and How to Control Them
        </h2>

        <p className="text-gray-600 leading-relaxed">
          As businesses adopt AI tools for productivity, they face increasing risks related to data security, 
          compliance, and governance. Without proper controls, AI usage can expose sensitive information and create 
          serious enterprise vulnerabilities. TIBOS Solutions helps organizations implement secure and compliant AI strategies.

        </p>
      </div>


      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 duration-300 transition">

          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
            <TrendingUp className="text-white" size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Unmanaged AI Usage in Organizations
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
           Employees using AI tools without IT control can lead to unregulated growth,
          increasing security and compliance risks for businesses.

          </p>

        </div>


        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 duration-300 transition">

          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Lock className="text-white" size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            AI Data Security and Exposure Risks
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Using public AI tools can expose confidential business data, 
            leading to data leaks and cybersecurity threats.

          </p>

        </div>


        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 duration-300 transition">

          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Shield className="text-white" size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Enterprise AI Compliance and Governance Challenges
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Organizations must implement strict AI governance policies to 
            meet compliance standards and prevent security breaches.
          </p>

        </div>

      </div>

    </section>
  );
}