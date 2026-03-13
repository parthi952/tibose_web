import { useState } from "react";
import { Check } from "lucide-react";

export default function Teamspricing() {

const [activeTab, setActiveTab] = useState("plans");

return (

<section className="bg-blue-100 p-10 mb-20 px-6">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-3xl font-bold text-gray-900">
Our Microsoft Teams Pricing
</h2>

<p className="text-gray-600 mt-2 mb-8">
Choose the perfect plan for your organization with our expert implementation and ongoing support
</p>


{/* Toggle */}

<div className="flex justify-center mb-12">

<div className="bg-white rounded-full p-1 flex ">

<button
onClick={() => setActiveTab("plans")}
className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "plans" ? "bg-blue-600 text-white" : "text-gray-700"}
`}
>
Microsoft Teams Business Plans
</button>

<button
onClick={() => setActiveTab("business")}
className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "business" ? "bg-blue-600 text-white" : "text-gray-700"}
`}
>
Microsoft Teams Business Plans
</button>

</div>

</div>


{/* Pricing Cards */}

{activeTab === "plans" ? (

<div className="grid md:grid-cols-3 gap-8">

{/* Card 1 */}

<div className="bg-white rounded-xl shadow-md p-8 text-left">

<h3 className="font-medium text-gray-800 mb-6">Teams Essentials</h3>

<p className="text-3xl font-bold">₹110</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm">

<li className="flex gap-2"><Check size={16}/> Microsoft Teams Essentials License</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
<li className="flex gap-2"><Check size={16}/> User Training & Onboarding</li>
<li className="flex gap-2"><Check size={16}/> Basic Collaboration Tools</li>
<li className="flex gap-2"><Check size={16}/> *More discount available</li>

</ul>

<button className="mt-8 bg-blue-600 text-white w-full py-2 rounded-full">
Get Start
</button>

</div>


{/* Card 2 */}

<div className="bg-white rounded-xl shadow-md p-8 text-left">

<h3 className="font-medium text-gray-800 mb-6">Business Basic</h3>

<p className="text-3xl font-bold">₹140</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm">

<li className="flex gap-2"><Check size={16}/> Full Microsoft 365 Suite</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
<li className="flex gap-2"><Check size={16}/> Priority Support Cloud Storage Included</li>
<li className="flex gap-2"><Check size={16}/> Manage customer bookings</li>
<li className="flex gap-2"><Check size={16}/> *More discounts available</li>

</ul>

<button className="mt-8 bg-blue-600 text-white w-full py-2 rounded-full">
Get Start
</button>

</div>


{/* Card 3 */}

<div className="bg-white rounded-xl shadow-md p-8 text-left">

<h3 className="font-medium text-gray-800 mb-6">Business Standard</h3>

<p className="text-3xl font-bold">₹760</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm">

<li className="flex gap-2"><Check size={16}/> Advanced Security Features</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
<li className="flex gap-2"><Check size={16}/> Advanced Analytics Device Management</li>
<li className="flex gap-2"><Check size={16}/> *More discounts available</li>

</ul>

<button className="mt-8 bg-blue-600 text-white w-full py-2 rounded-full">
Get Start
</button>

</div>

</div>

) : (

<div className="flex justify-center">

<div className="bg-white rounded-xl shadow-md p-8 text-left w-[340px]">

<h3 className="font-medium text-gray-800 mb-6">Business Basic</h3>

<p className="text-3xl font-bold">₹140</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm">

<li className="flex gap-2"><Check size={16}/> Full Microsoft 365 Suite</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
<li className="flex gap-2"><Check size={16}/> Priority Support Cloud Storage Included</li>
<li className="flex gap-2"><Check size={16}/> Manage customer bookings</li>
<li className="flex gap-2"><Check size={16}/> *More discounts available</li>

</ul>

<button className="mt-8 bg-blue-600 text-white w-full py-2 rounded-full">
Get Start
</button>

</div>

</div>

)}

</div>

</section>

);
}