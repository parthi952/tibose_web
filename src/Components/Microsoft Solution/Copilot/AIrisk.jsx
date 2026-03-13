import { TrendingUp, Lock, Shield } from "lucide-react";

export default function AIrisk() {
  return (
    <section className="bg-[#ffff] py-20 px-6">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          The Risks of Uncontrolled AI Adoption
        </h2>

        <p className="text-gray-600 leading-relaxed">
          As businesses explore the potential of AI, many face critical challenges around
          security, compliance, and responsible usage. While employees are eager to leverage
          AI for productivity, the lack of clear safeguards can put organizations at serious risk.
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
            Unmanaged Growth
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            With nearly all professionals experimenting with AI tools, usage is spreading
            faster than most companies can regulate.
          </p>

        </div>


        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 duration-300 transition">

          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Lock className="text-white" size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Data Exposure Risks
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Employees using public AI chat services may unintentionally share sensitive
            corporate information, leading to data leaks.
          </p>

        </div>


        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 duration-300 transition">

          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Shield className="text-white" size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Enterprise Concerns
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Leading organizations have restricted AI usage internally to prevent data
            leakage and ensure strict compliance breaches are avoided.
          </p>

        </div>

      </div>

    </section>
  );
}