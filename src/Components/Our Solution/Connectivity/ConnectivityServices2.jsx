import { Server, Radio, Shield, Globe, Wifi, Zap, Network, Cloud } from "lucide-react";

const services = [
  {
    title: "ILL (Internet Leased Line)",
    desc: "Dedicated, high-speed internet connectivity with guaranteed bandwidth and uptime for mission-critical operations.",
    icon: <Server className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Smart ILL",
    desc: "Intelligent leased line solution with advanced monitoring, auto-failover, and optimized performance management.",
    icon: <Radio className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Smart ILL",
    desc: "Intelligent leased line solution with advanced monitoring, auto-failover, and optimized performance management.",
    icon: <Radio className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "SD-WAN IFLX-Edge",
    desc: "Software-defined WAN solution for flexible, cost-effective network management with dynamic path selection.",
    icon: <Network className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Smart VPN-MPLS",
    desc: "Secure virtual private network over MPLS infrastructure for encrypted multi-site connectivity.",
    icon: <Shield className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "EZ Cloud Connect",
    desc: "Simplified cloud connectivity solution for seamless access to cloud applications and services.",
    icon: <Cloud className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Leased Line – P2P",
    desc: "Point-to-point dedicated connectivity for secure, private communication between two locations.",
    icon: <Globe className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Tele Wi-Fi",
    desc: "Enterprise-grade wireless connectivity solutions with centralized management and enhanced security.",
    icon: <Wifi className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Ultra-LOLA",
    desc: "Ultra-low latency connectivity for applications requiring real-time data transmission and instant responses.",
    icon: <Zap className="text-blue-600 w-6 h-6" />,
  },
];

const ConnectivityServices2 = () => {
  return (
    <section className="py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Title */}
        <p className="text-blue-600 font-semibold">
          Seamless, Scalable, and Secure
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          Our Connectivity Services
        </h2>

        {/* Blue Banner */}
        <div className="bg-blue-600 text-white rounded-xl mt-6 py-5 px-4">
          <h3 className="text-lg md:text-xl font-semibold">
            Data & Internet Services
          </h3>
          <p className="text-sm md:text-base mt-1 opacity-90">
            High-speed connectivity solutions for seamless business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-lg p-6 text-left hover:scale-105 duration-300 transition"
            >
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-md mb-4">
                {item.icon}
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">
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

export default ConnectivityServices2;