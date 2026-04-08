import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PLAN_DATA = {
  business: {
    title: "Copilot for Business",
    price: "1,800",
    unit: "user/month",
    description: "Empower your team with AI integrated directly into Microsoft 365 apps.",
    features: ["AI in Word, Excel, PowerPoint", "Outlook & Teams integration", "Email & doc generation", "Microsoft Graph data access", "Standard security & support"],
    buttonText: "Start Free Trial",
    popular: false,
  },
  enterprise: {
    title: "Copilot for Enterprise",
    price: "2,500",
    unit: "user/month",
    description: "Unleash full potential with advanced security, compliance, and custom AI.",
    features: ["Everything in Business", "Enterprise-grade security", "Advanced Compliance tools", "Advanced Teams AI features", "Org-wide automation & insights"],
    buttonText: "Contact Sales",
    popular: true,
  },
  studio: [
    {
      title: "Studio (Capacity)",
      price: "16,640",
      unit: "25k credits/mo",
      description: "Scale your custom AI agents with high-volume message capacity.",
      features: ["Build custom AI agents", "25,000 monthly credits", "Advanced workflow automation", "Custom App integrations"],
      buttonText: "Purchase Credits",
    },
    {
      title: "Studio (Flexible)",
      price: "0.80",
      unit: "per message",
      description: "Flexible, usage-based billing for growing organizations.",
      features: ["No monthly fixed costs", "Pay-as-you-go scaling", "Full Studio AI capabilities", "Priority message processing"],
      buttonText: "Get Started",
    }
  ]
};

export default function CopilotPlans() {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Microsoft <span className="text-blue-600">Copilot</span> Pricing
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Streamline your workflow with the industry's leading AI companion.
          </p>
        </div>

        {/* Blue Theme Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-blue-50 border border-blue-100 rounded-2xl">
            {["business", "enterprise", "studio"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab ? "text-white" : "text-blue-700 hover:bg-blue-100"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-200"
                  />
                )}
                <span className="relative z-10 capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {activeTab === "studio" ? (
                PLAN_DATA.studio.map((plan, idx) => (
                  <PricingCard key={idx} plan={plan} />
                ))
              ) : (
                <PricingCard plan={PLAN_DATA[activeTab]} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  return (
    <div className={`relative bg-white border-2 rounded-[2rem] p-10 flex flex-col w-full max-w-[400px] transition-all hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 ${
      plan.popular ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'
    }`}>
      
      {plan.popular && (
        <div className="absolute -top-4 right-10 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{plan.title}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-10">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-slate-900">₹{plan.price}</span>
          <span className="text-slate-400 font-semibold text-lg">/{plan.unit}</span>
        </div>
      </div>

      <div className="space-y-5 mb-12 flex-1">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-blue-600 rounded-full p-1 shadow-md shadow-blue-100">
              <Check className="text-white" size={12} strokeWidth={4} />
            </div>
            <span className="text-slate-700 text-[15px] font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
        plan.popular 
        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200" 
        : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}>
        {plan.buttonText}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}