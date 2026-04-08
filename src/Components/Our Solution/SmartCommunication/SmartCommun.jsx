function SmartCommunication() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 text-center">
        Secure Business Communication Solutions for Enterprises
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-xl sm:max-w-2xl md:max-w-3xl mb-10 md:mb-12 leading-relaxed">
        In today’s digital workplace, secure and efficient communication is critical for business success. 
        TIBOS Solutions provides enterprise communication solutions including Microsoft Teams, VoIP, and secure
         collaboration tools to keep your teams connected and protected.
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
            Secure Messaging Solutions for Businesses
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Protect business communications with encrypted messaging solutions that ensure data privacy and secure collaboration.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            🔗
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Unified Communication and Collaboration Solutions
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Enable seamless communication across chat, video, and calls using Microsoft Teams and enterprise collaboration tools.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📈
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            AI-Powered Call Routing Solutions
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Improve customer experience with intelligent call routing systems that connect users to the right teams efficiently.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📧
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Enterprise Email Security Solutions
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Protect your organization from phishing, malware, and spam with advanced email security powered by Microsoft solutions.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            🎥
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Secure VoIP and Video Communication Solutions
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Enable secure voice and video communication with enterprise-grade encryption and network security.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white w-full p-5 sm:p-6 rounded-xl shadow-sm border hover:scale-105 duration-300 transition border-gray-200">
          <div className="bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md mb-4">
            📁
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            Secure File Sharing and Collaboration Tools
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">
            Share business documents safely with encrypted file sharing and access control systems for teams.
          </p>
          <p className="text-xs text-blue-600 cursor-pointer">Learn More →</p>
        </div>

      </div>
    </section>
  );
};

export default SmartCommunication;