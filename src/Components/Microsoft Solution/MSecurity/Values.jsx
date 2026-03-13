export default function Values() {
  return (
    <section className="mb-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Stat 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition">

          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            90%
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Percentage of all successful cyberattacks that start with a phishing attack
          </p>

        </div>


        {/* Stat 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition">

          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            64%
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Percentage of financial institutions that reported cybersecurity incidents in the past 12 months
          </p>

        </div>


        {/* Stat 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition">

          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            64%
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            DDoS attacks mitigated in Q1 2025, representing a 358% year-over-year increase
          </p>

        </div>

      </div>

    </section>
  );
}