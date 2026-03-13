import { useState } from "react";
import Img from "../../../Constents";

const FAQA=Img.Microsoft_Solution.Copilot.FAQ
const faqs = [
{
question: "What are Microsoft Azure cloud services?",
answer:
"Microsoft Azure is a cloud computing platform that offers a wide range of services such as virtual machines, databases, AI, storage, and networking to help businesses scale, secure, and innovate quickly in the cloud."
},
{
question: "Why should I choose TIBOS for Azure cloud solutions?",
answer:
"TIBOS is a trusted Microsoft partner offering end-to-end Azure solutions including consulting, migration, deployment, security, and managed services tailored to your business needs."
},
{
question: "How can Azure cloud benefit my business?",
answer:
"Azure provides on-demand scalability, enhanced data security, disaster recovery, cost optimization, and integration with Microsoft tools like Office 365 and Dynamics 365."
},
{
question: "How secure is Microsoft Azure for business-critical data?",
answer:
"Microsoft Azure offers enterprise-grade security, compliance with global standards, and built-in threat detection to safeguard sensitive data against cyber threats."
},
{
question: "Can TIBOS help with Azure migration and deployment?",
answer:
"Yes, TIBOS provides a complete Azure migration strategy including planning, architecture, data transfer, testing, and post-migration support to ensure seamless transition to the cloud."
},
{
question: "What are Azure managed services?",
answer:
"Azure managed services involve outsourcing the management of your Azure infrastructure to experts like TIBOS who handle monitoring, optimization, security, backups, and support, allowing you to focus on your core business."
}
];

export default function AzureFAQ() {

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