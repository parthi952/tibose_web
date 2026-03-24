import { useState } from "react";
import Img from "../../../Constents";

const FAQA=Img.Microsoft_Solution.Copilot.FAQ
const faqs = [
{
question: "Is investing in enterprise cybersecurity solutions necessary for my business?",
answer:
"It’s a common misconception that small or mid-sized businesses aren’t targets. But that’s precisely why cybercriminals see them as easy prey. Today’s threats are sophisticated, and startups and SMBs are just as vulnerable as larger enterprises. TIBOS’s tailored cybersecurity solutions are designed to scale with your business, providing proactive protection and peace of mind before issues arise."
},
{
question: "We already have an antivirus. Why would we need managed cybersecurity solutions?",
answer:
"Antivirus alone is no longer enough. It can’t detect fileless attacks, insider threats, or zero-day exploits. TIBOS Managed Cybersecurity Solutions go beyond traditional antivirus, offering 24/7 threat monitoring, rapid incident response, and continuous system hardening, all managed by our team of certified experts to keep your business secure."
},
{
question: "How do I know if TIBOS is the right cybersecurity partner for my industry?",
answer:
"TIBOS has protected organizations across BFSI, manufacturing, retail, healthcare, and IT, delivering customized, industry-specific cybersecurity strategies backed by years of expertise. No matter your business, we make advanced protection simple, scalable, and effective."
},
{
question: "What is included in TIBOS's cybersecurity solutions for businesses?",
answer:
"Many cybersecurity solutions look good on paper but fall short in practice. TIBOS delivers comprehensive protection with endpoint security, identity & access management, threat intelligence, vulnerability assessments, data protection, and AI-powered threat detection and supported by expert consulting and professional support to keep your business secure.."
},
{
question: "How quickly can I get started with TIBOS's cybersecurity services?",
answer:
"Getting started is fast and straightforward. Once you reach out, our experts will assess your current environment, design a tailored cybersecurity plan, and begin implementation immediately. With TIBOS, you can have enterprise-grade protection up and running in days so your business is secure without delay."
}
];

export default function CyberFAQ() {

const [active, setActive] = useState(null);

const toggle = (i) => {
setActive(active === i ? null : i);
};

return (

<section className="relative bg-[#E7F6FD] p-20 px-6 overflow-hidden">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE FAQ */}

<div>

<h2 className="text-4xl font-bold text-black mb-12">
Frequently Asked Questions
</h2>

<div className="space-y-5">

{faqs.map((faq, i) => (

<div key={i}>

<button
onClick={() => toggle(i)}
className="w-full text-left px-6 py-5 cursor-pointer rounded-4xl flex justify-between items-center bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300"
>

<span className="font-semibold text-lg">
{faq.question}
</span>

<span
className={`w-3 h-3 rounded-full ml-4
${active === i ? "bg-blue-600" : "bg-gray-300"}
`}
/>

</button>

{active === i && (

<div className="bg-white border border-gray-200 rounded-4xl p-6 mt-3 shadow-sm text-gray-600 leading-relaxed">
{faq.answer}
</div>

)}

</div>

))}

</div>

</div>

{/* RIGHT SIDE IMAGE */}

<div className="flex justify-center">

<img
src={FAQA}
alt="FAQ Illustration"
className="w-full max-w-md"
/>

</div>

</div>

</section>

);
}