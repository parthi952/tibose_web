import { useState } from "react";
import Img from "../../../Constents";

const FAQA=Img.Microsoft_Solution.Copilot.FAQ
const faqs = [
{
question: "Is investing in enterprise cybersecurity solutions necessary for my business?",
answer:
"Microsoft 365 Copilot is your AI-powered assistant integrated into apps like Word, Excel, PowerPoint, Outlook, and Teams. It automates routine work such as summarizing emails, analyzing data, and generating presentations so your team can focus on strategic priorities."
},
{
question: "We already have an antivirus. Why would we need managed cybersecurity solutions?",
answer:
"Microsoft 365 Copilot is built with enterprise-grade security inside Microsoft 365. Data remains within your tenant and sensitive information is protected using Microsoft Purview and compliance policies."
},
{
question: "How do I know if TIBOS is the right cybersecurity partner for my industry?",
answer:
"Copilot summarizes meetings, extracts action items, and generates intelligent insights from chats and shared documents."
},
{
question: "What is included in TIBOS's cybersecurity solutions for businesses?",
answer:
"Copilot integrates seamlessly with Microsoft 365 apps and can extend to third-party systems with custom integrations."
},
{
question: "How quickly can I get started with TIBOS's cybersecurity services?",
answer:
"Deployment timelines depend on your environment but most implementations can begin immediately with proper planning."
}
];

export default function FAQ() {

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