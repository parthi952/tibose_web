import {
  Users,
  BarChart3,
  ShieldCheck,
  LayoutDashboard,
  Handshake,
  Settings
} from "lucide-react";
const features = [
  {
    title: "Unified Management",
    desc: "Manage apps, email, and schedules seamlessly in one platform for maximum efficiency.",
    icon: LayoutDashboard,
  },
  {
    title: "Stronger Customer base",
    desc: "Reach more clients with smart tools that simplify engagement and business growth.",
    icon: Users,
  },
  {
    title: "Professional Brand Presence",
    desc: "Create professional documents and presentations with Word, Excel, and PowerPoint.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Growth",
    desc: "Scale confidently with enterprise-grade protection for your data and operations.",
    icon: BarChart3,
  },
  {
    title: "Seamless Collaboration",
    desc: "Enhance teamwork and customer communication with Microsoft Teams.",
    icon: Handshake,
  },
  {
    title: "Future-Ready Tools",
    desc: "Stay ahead using AI-powered features and cloud-based solutions.",
    icon: Settings,
  },
];


const Boost = () => {
  return (
    <div>
         <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 mt-20  w-full">

      {/* Top Header Section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-10">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Boost Business Productivity with{" "}
            <span className="text-blue-600">Microsoft 365</span>
          </h2>

          <p className="text-gray-600 max-w-3xl text-[15px] leading-relaxed">
            Microsoft 365 helps businesses improve productivity with cloud-based tools like Outlook, 
            Teams, Word, Excel, and OneDrive. Organizations can manage email, meetings, collaboration,
             and security from a single platform.

          </p>

        </div>
      </div>

      {/* Features Section */}
      <div className=" pb-20">
        <div className="max-w-7xl mx-auto px-10">

          <div className="grid md:grid-cols-2 gap-x-40 gap-y-16">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-6">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl hover:scale-110 duration-300 transition bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={30} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-[14px] mt-2 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

    </div>
    </div>
  )
}

export default Boost