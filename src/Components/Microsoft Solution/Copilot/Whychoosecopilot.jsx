import { Zap, Pencil, Sun, Settings } from "lucide-react";

export default function Whychoosecopilot() {
  return (
    <section className=" py-5 px-6">

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
        Why Choose Microsoft 365 Copilot for your Business?
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Zap size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Spark Innovation
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Microsoft 365 Copilot accelerates content creation across your
            essential applications. In Word, it generates initial drafts that
            you can refine and customize, dramatically reducing writing and
            editing time. In PowerPoint, it builds compelling presentations by
            intelligently pulling relevant content from your existing documents
            and data, transforming simple prompts into professional slide decks
            with contextual information.
          </p>

        </div>


        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Pencil size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Boosted Output
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Microsoft 365 Copilot operates natively within your daily
            applications like Word, Excel, PowerPoint, Outlook, and Teams,
            enhancing your analytical capabilities, communication effectiveness,
            and collaborative workflows. Through Business Chat functionality,
            Copilot connects across your entire digital workspace, leveraging
            information from calendars, emails, documents, and meetings to
            provide intelligent insights.
          </p>

        </div>


        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Sun size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            AI-driven Solutions
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Microsoft 365 Copilot harnesses advanced language models combined
            with your Microsoft Graph data to transform simple prompts into
            powerful productivity outcomes. You maintain complete editorial
            control, choosing what to retain, refine, or remove. Copilot
            amplifies your distinctive ideas and preserves your creative
            ownership throughout the collaborative process.
          </p>

        </div>


        {/* Card 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Settings size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Operational Excellence
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Microsoft 365 Copilot serves as an intelligent coding companion
            for IT professionals, delivering contextual guidance, smart
            recommendations, and ready-to-use code solutions during software
            development. Drawing from extensive technical knowledge, it
            minimizes routine programming tasks and streamlines development
            workflows, enabling faster project delivery and enhanced code
            quality.
          </p>

        </div>

      </div>

    </section>
  );
}