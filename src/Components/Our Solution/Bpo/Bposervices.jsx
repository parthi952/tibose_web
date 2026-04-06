import {
  CreditCard,
  FileText,
  Headphones,
  PhoneCall,
  Shield,
  Star,
} from "lucide-react";

const services = [
  {
    icon: <CreditCard className="w-6 h-6 text-blue-500" />,
    title: "Accounts Receivable Management Services",
    desc: "Improve cash flow with professional accounts receivable management, invoice tracking, and payment follow-ups for businesses.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    title: "Debt Collection Services for Businesses",
    desc: "Ethical and compliant debt recovery solutions designed to reduce outstanding payments and improve financial stability.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    title: "Back Office Support Services",
    desc: "Streamline operations with efficient back office support including data management, documentation, and administrative services.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
    title: "Outbound Calling and Telemarketing Services",
    desc: "Expand your reach with outbound calling solutions for lead generation, customer engagement, and market expansion.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Customer Retention and Engagement Solutions",
    desc: "Boost customer loyalty with strategic retention programs designed to reduce churn and improve lifetime value.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-500" />,
    title: "High-Value Customer Management Services",
    desc: "Dedicated account management solutions for high-priority clients to ensure long-term business relationships.",
  },
];

const Bposervices = () => {
  return (
    <div className=" py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Business Process Outsourcing (BPO) Services for Enterprises
        </h2>
        <br />
        <p className="text-gray-500 text-lg">
          We provide scalable BPO services to help businesses streamline operations, improve cash flow, and enhance customer engagement.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 hover:scale-105 duration-300 transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bposervices;