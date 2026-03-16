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
    title: "Identity and Access Management",
    desc: "Secure user identities and enforce granular access controls across your entire infrastructure.",
    icon: <Fingerprint className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Cloud Security",
    desc: "End-to-end protection for hybrid and multi-cloud environments including CSPM and CWPP.",
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Network Security",
    desc: "Intelligent threat detection and zero-trust architecture for perimeter-less organizations.",
    icon: <Network className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "End Point Security",
    desc: "Advanced EDR and XDR solutions to protect every device connected to your corporate network.",
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Application / API Security",
    desc: "Integrate security into the DevOps lifecycle with robust application and API shielding.",
    icon: <Code className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Data Protection",
    desc: "Advanced encryption, DLP, and data sovereignty controls for your most critical assets.",
    icon: <Lock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Security Consulting",
    desc: "Strategic guidance to align security investments with your core business objectives.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Managed Security Services",
    desc: "24/7 proactive SOC monitoring and expert incident response orchestration.",
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
  },
];

const CyberSecuritySolutions = () => {
  return (
    <section className=" py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Cybersecurity Solutions
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm md:text-base">
          In a rapidly evolving digital landscape, safeguarding your business
          has never been more critical. TIBOS unites advanced technology and
          deep expertise to keep your enterprise secure and resilient.
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