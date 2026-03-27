function SmartCommunication() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 text-center">
        Smart Communication
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-xl sm:max-w-2xl md:max-w-3xl mb-10 md:mb-12 leading-relaxed">
        In today's digital era, seamless and secure communication is key to business success. 
        TIBOS delivers intelligent communication solutions that keep your teams connected, 
        data protected, and operations running smoothly.
      </p>

      {/* Grid */}
      <div className="
        grid 
        gap-5 sm:gap-6 md:gap-8 
        w-full max-w-7xl
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3
      ">
        
        {/* Card 1 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            🔒
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Secure Messaging
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Protect sensitive conversations with end-to-end encryption, ensuring only authorized participants can access your messages.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            🔗
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Unified Collaboration
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Streamline team communication across chat, calls, and video meetings, all while maintaining enterprise-grade security.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📈
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Intelligent Call Routing
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Ensure your clients and teams are always connected to the right person with AI-driven call routing and analytics.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📧
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Email Security
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Protect your organization from phishing, spam, and malware with advanced email security solutions.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            🎥
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            VoIP & Video Security
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Enable crystal-clear voice and video communications with encryption and secure network protocols.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📁
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Secure File Sharing
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Share documents and files safely across teams with encrypted channels and access controls.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

      </div>
    </section>
  );
};

export default SmartCommunication;