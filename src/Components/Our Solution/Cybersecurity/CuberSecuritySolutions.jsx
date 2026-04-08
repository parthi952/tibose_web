import {
  Fingerprint,
  Cloud,
  Network,
  Monitor,
  Code,
  Lock,
  ShieldCheck,
  BarChart
} from "lucide-react";

const services = [
  {
    title: "Identity and Access Management (IAM) Solutions",
    desc: "Secure user identities with advanced access control, multi-factor authentication, and zero trust security models.",
    icon: <Fingerprint className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Cloud Security Solutions for Enterprises",
    desc: "Protect cloud environments with CSPM, CWPP, and Microsoft cloud security tools across hybrid and multi-cloud systems.",
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Network Security and Zero Trust Architecture",
    desc: "Implement zero trust security frameworks with advanced threat detection and network protection strategies.",
    icon: <Network className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Endpoint Security and EDR/XDR Solutions",
    desc: "Secure devices with endpoint detection and response (EDR) and extended detection (XDR) solutions.",
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Application and API Security Services",
    desc: "Protect applications with secure DevOps practices, API protection, and vulnerability management.",
    icon: <Code className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Data Protection and DLP Solutions",
    desc: "Safeguard sensitive data with encryption, data loss prevention (DLP), and compliance controls.",
    icon: <Lock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Cybersecurity Consulting Services",
    desc: "Align your security strategy with business goals through expert risk assessment and compliance planning.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Managed Security Services (SOC Monitoring)",
    desc: "24/7 security monitoring, threat detection, and incident response through managed SOC services.",
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
  },
];

const CyberSecuritySolutions = () => {
  return (
    <section className=" py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Enterprise Cybersecurity Solutions for Businesses
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm md:text-base">
          In today’s evolving threat landscape, businesses need advanced cybersecurity solutions 
          to protect data, users, and infrastructure. TIBOS Solutions provides enterprise-grade security services 
          including identity protection, cloud security, endpoint protection, and zero trust implementation across organizations in Chennai and India.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:scale-105 duration-300 transition"
            >
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-md mb-4">
                {item.icon}
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySolutions;