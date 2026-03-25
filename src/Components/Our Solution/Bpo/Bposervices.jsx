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
    title: "Account Receivable Management",
    desc: "Optimizing your cash flow through professional and systematic tracking of outstanding invoices.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    title: "Debt Collections",
    desc: "Ethical and effective recovery strategies to minimize bad debt and improve financial health.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    title: "Back Office Support",
    desc: "Comprehensive administrative assistance to streamline your core business operations efficiently.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
    title: "Outbound Calling Facilities",
    desc: "Scalable telemarketing and outreach solutions to expand your global market presence.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Customer Retention Programs",
    desc: "Strategic engagement initiatives designed to increase loyalty and reduce customer churn.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-500" />,
    title: "High Value Customer Base Management",
    desc: "Dedicated account management for your most significant and high-priority clients.",
  },
];

const Bposervices = () => {
  return (
    <div className=" py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-lg">
          Tailored Teams and Workflows
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our Core BPO Services
        </h2>
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