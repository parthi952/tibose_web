import { MessageSquare, Users, Video, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Microsoftteams() {
  return (
    <section className=" mb-20 px-6">

{/* Heading */}
<motion.div
  className="text-center max-w-4xl mx-auto mb-16"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 20 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-gray-900">
    Create a Collaborative, Highly Productive Work Environment with
  </h2>

  <h3 className="text-3xl font-bold text-blue-600 mt-2">
    Microsoft Teams
  </h3>
</motion.div>


      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition ">

          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <MessageSquare size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Chats
          </h3>

          <ul className="text-gray-600 text-sm space-y-2">
            <li>Hold organized, ongoing conversations in threaded chats</li>
            <li>Switch easily between chat, calls, and video meetings on any device</li>
            <li>Add personality with emojis, GIFs, stickers, and memes</li>
            <li>Share files instantly within chats for seamless teamwork</li>
            <li>Use @mentions to notify specific people directly</li>
          </ul>

        </div>


        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition  ">

          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Users size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Collaboration
          </h3>

          <ul className="text-gray-600 text-sm space-y-2">
            <li>Centralize project chats, notes, files, and meetings in one place</li>
            <li>Use @mentions and tags for direct communication</li>
            <li>Access built-in Microsoft 365 apps like SharePoint, OneNote, Power BI</li>
            <li>Search across chats, files, and people with ease</li>
            <li>Co-author documents in real time with integrated Office apps</li>
          </ul>

        </div>


        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition  ">

          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Video size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Meeting
          </h3>

          <ul className="text-gray-600 text-sm space-y-2">
            <li>Host private or channel meetings with HD audio, web, and video</li>
            <li>Share presentations and applications during meetings</li>
            <li>Record meetings with live transcription and translation</li>
            <li>Share content and access smart tools like background blur</li>
            <li>Scheduling help from mobile</li>
          </ul>

        </div>


        {/* Card 4 */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:scale-105 duration-300 transition  ">

          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6">
            <Phone size={22} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Calling
          </h3>

          <ul className="text-gray-600 text-sm space-y-2">
            <li>Get a dedicated phone number for domestic and international calls</li>
            <li>Use advanced features like voicemail, call transfer, and emergency calling</li>
            <li>Manage calls with routing, auto attendants, and reporting</li>
            <li>Enable hybrid voice with Direct Routing</li>
          </ul>

        </div>

      </div>

    </section>
  );
}