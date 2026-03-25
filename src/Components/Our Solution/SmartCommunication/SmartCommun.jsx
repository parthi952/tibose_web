function SmartCommunication() {
  return (
    <div className=" py-16 px-6 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Smart Communication
      </h2>

      <p className="text-lg text-gray-500 text-center max-w-4x1 mb-12 leading-relaxed">
        In today's digital era, seamless and secure communication is key to business success. 
        TIBOS delivers intelligent communication solutions that keep your teams connected, 
        data protected, and operations running smoothly.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            🔒
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Secure Messaging
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Protect sensitive conversations with end-to-end encryption, ensuring only authorized participants can access your messages.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            🔗
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Unified Collaboration
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Streamline team communication across chat, calls, and video meetings, all while maintaining enterprise-grade security.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            📈
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Intelligent Call Routing
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Ensure your clients and teams are always connected to the right person with AI-driven call routing and analytics.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            📧
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Email Security
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Protect your organization from phishing, spam, and malware with advanced email security solutions.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            🎥
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            VoIP & Video Security
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Enable crystal-clear voice and video communications with encryption and secure network protocols.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white w-[260px] p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-10 h-10 flex items-center justify-center rounded-md mb-4">
            📁
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Secure File Sharing
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Share documents and files safely across teams with encrypted channels and access controls.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

      </div>
    </div>
  );
};
export default SmartCommunication