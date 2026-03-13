import Img from "../../../Constents";

const AiImage = Img.Microsoft_Solution.Copilot.AIimage;

export default function Empowering() {
  return (
    <section className="bg-[#98CBFF] py-20 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image Card */}
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src={AiImage}
            alt="AI"
            className="w-full h-full object-cover"
          />

        </div>


        {/* Right Content Card */}
        <div className="bg-white/50 border border-white/100 rounded-2xl p-10 backdrop-blur-sm">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Empowering Your Workforce
            <br />
            with Microsoft 365 Copilot
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            TIBOS delivers Microsoft 365 Copilot, an AI assistant that integrates
            seamlessly into Teams, Word, Outlook, PowerPoint, and Excel to
            revolutionize workplace productivity. This intelligent solution
            streamlines administrative tasks, accelerates workflows, and enables
            your team to focus on strategic initiatives and innovation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            With TIBOS's expert support, Microsoft 365 Copilot transforms routine
            operations while unlocking human potential for meaningful business
            growth.
          </p>


          {/* Button */}
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-600 cursor-pointer text-white px-6 py-3 rounded-xl shadow-md transition duration-300">
             Talk To Our Experts
           </button>
        </div>

      </div>

    </section>
  );
}