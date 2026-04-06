export default function CyberAssessment() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl w-full">
        
        {/* Left Card */}
        <div className="bg-white w-full md:w-1/2 p-5 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            TIBOS's Cybersecurity Assessment
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
            Safeguard your business from evolving cyber threats by uncovering vulnerabilities before they become risks.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
            TIBOS offers a complimentary Cybersecurity Assessment to help you evaluate your IT infrastructure and strengthen your defenses.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            Connect with our experts today to take the first step toward complete digital protection.
          </p>

          <button 
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow text-sm sm:text-base">
            Talk To Our Expects
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white w-full md:w-1/2 p-5 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Secure Your Cloud Journey with TIBOS
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Move to the cloud confidently, with security built in at every step:
          </p>

          <div className="space-y-4">
            
            {/* Item 1 */}
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold text-gray-900">
                  Free Security Consultation
                </p>
                <p>
                  Our cloud experts design and architect solutions that align with your business goals while keeping your data safe.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold text-gray-900">
                  Guided Secure Proof of Concept
                </p>
                <p>
                  Validate your cloud strategy with security best practices in place.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold text-gray-900">
                  One-on-One Azure Security Demos
                </p>
                <p>
                  Learn how to protect your workloads and data from day one.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              <div className="text-sm sm:text-base text-gray-700">
                <p className="font-semibold text-gray-900">
                  Migration & Security Optimization
                </p>
                <p>
                  Safely move applications and infrastructure to the cloud while optimizing performance and maintaining robust protection.
                </p>
              </div>
            </div>

          </div>

          <p className="mt-5 text-sm sm:text-base font-semibold text-gray-800">
            Start your secure cloud journey today with TIBOS.
          </p>
        </div>

      </div>
    </div>
  );
}