import { useState } from "react";
import { Check } from "lucide-react";

export default function Teamspricing() {

const [activeTab, setActiveTab] = useState("plans");

return (

<section className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-10 mb-20 px-6">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-3xl font-bold text-gray-900">
Our Microsoft Teams Pricing
</h2>

<p className="text-gray-600 mt-2 mb-8">
Choose the perfect plan for your organization with our expert implementation and ongoing support
</p>

{/* Toggle */}
<div className="flex justify-center mb-12">
<div className="bg-white rounded-full p-1 flex gap-2">

<button
onClick={() => setActiveTab("plans")}
className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "plans" ? "bg-blue-600 text-white" : "text-gray-700"}`}
>
Microsoft Teams Plans
</button>

<button
onClick={() => setActiveTab("business")}
className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "business" ? "bg-blue-600 text-white" : "text-gray-700"}`}
>
Microsoft Teams Rooms
</button>

<button
onClick={() => setActiveTab("devices")}
className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "devices" ? "bg-blue-600 text-white" : "text-gray-700"}`}
>
Teams Devices
</button>

</div>
</div>

{/* ================= PLANS ================= */}
{activeTab === "plans" ? (

<div className="grid md:grid-cols-3 gap-8 items-stretch">

{[
  {
    title: "Teams Essentials",
    price: "₹110.00",
    features: [
      "Microsoft Teams Essentials License",
      "Up to 300 participants per meeting",
      "Unlimited meetings (up to 30 hours)",
      "10 GB cloud storage per user",
      "Chat, calls & file sharing",
      "Basic collaboration tools",
      "Complete Setup & Configuration",
      "User Training & Onboarding",
    ],
  },
  {
    title: "Teams Enterprise",
    price: "₹140.00",
    features: [
      "Microsoft Teams (Enterprise-grade)",
      "Large meetings (up to 1000 participants)",
      "Advanced security & data encryption",
      "Meeting recordings & live captions",
      "Admin control & user management",
      "File sharing, tasks & collaboration",
      "10 GB+ cloud storage per user",
      "Complete Setup & Configuration",
      "Priority Support",
    ],
  },
  {
    title: "Teams Premium",
    price: "₹760.00",
    features: [
      "AI-powered meeting recap & notes",
      "Advanced webinars & virtual events",
      "Meeting customization & branding",
      "Intelligent insights & analytics",
      "Enhanced security (watermark, encryption)",
      "Virtual appointments & booking tools",
      "Works as add-on to Teams plans",
      "Complete Setup & Configuration",
    ],
  },
].map((card, index) => (

<div key={index} className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full">

<h3 className="font-bold text-gray-800 mb-6">{card.title}</h3>

<p className="text-3xl font-bold">{card.price}</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm flex-1">
{card.features.map((item, i) => (
<li key={i} className="flex gap-2"><Check size={16}/> {item}</li>
))}
</ul>

<button 
onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
className="mt-10 bg-blue-600 hover:bg-blue-700 cursor-pointer duration-300 transition text-white w-full py-2 rounded-full">
Get Start
</button>

</div>

))}

</div>

) : activeTab === "business" ? (

/* ================= ROOMS ================= */

<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

{/* BASIC CARD */}
<div className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full">

<h3 className="font-medium text-gray-800 mb-6">Microsoft Teams Rooms Basic</h3>

<p className="text-3xl font-bold">FREE</p>
<p className="text-sm text-gray-500 mb-6">room/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm flex-1">
<li className="flex gap-2"><Check size={16}/> Free license (up to 25 rooms)</li>
<li className="flex gap-2"><Check size={16}/> One-touch meeting join</li>
<li className="flex gap-2"><Check size={16}/> Wireless screen sharing</li>
<li className="flex gap-2"><Check size={16}/> Calendar integration</li>
<li className="flex gap-2"><Check size={16}/> Whiteboard collaboration</li>
<li className="flex gap-2"><Check size={16}/> Basic meeting experience</li>
<li className="flex gap-2"><Check size={16}/> Supports Teams Room devices</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
</ul>

<button 
onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
className="mt-auto text-white bg-blue-600 hover:bg-blue-700 duration-300 transition cursor-pointer w-full py-2 rounded-full">
Get Start
</button>

</div>

{/* PRO CARD */}
<div className="relative bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full ">

<h3 className="font-medium text-gray-800 mb-6">Microsoft Teams Rooms Pro</h3>

<p className="text-3xl font-bold">₹3300.00</p>
<p className="text-sm text-gray-500 mb-6">room/month</p>

<hr className="mb-6"/>

<p className="font-medium mb-3">Plans:</p>

<ul className="space-y-3 text-gray-600 text-sm flex-1">
<li className="flex gap-2"><Check size={16}/> Unlimited meeting room support</li>
<li className="flex gap-2"><Check size={16}/> AI-powered speaker tracking</li>
<li className="flex gap-2"><Check size={16}/> Advanced device management</li>
<li className="flex gap-2"><Check size={16}/> Remote monitoring & alerts</li>
<li className="flex gap-2"><Check size={16}/> Advanced security & compliance</li>
<li className="flex gap-2"><Check size={16}/> Detailed analytics & insights</li>
<li className="flex gap-2"><Check size={16}/> Integration with Microsoft 365</li>
<li className="flex gap-2"><Check size={16}/> Complete Setup & Configuration</li>
<li className="flex gap-2"><Check size={16}/> Priority Support</li>
</ul>

<button 
onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
className="mt-10 text-white bg-blue-600 hover:bg-blue-700 duration-300 transition cursor-pointer w-full py-2 rounded-full">
Get Start
</button>

</div>

</div>

) : (

/* ================= DEVICES ================= */

<div className="grid md:grid-cols-3 gap-8 items-stretch">

{/* Card 1 */}
<div className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full">
<h3 className="font-medium text-gray-800 mb-6">Teams Shared Devices</h3>
<p className="text-3xl font-bold">₹700.00</p>
<p className="text-sm text-gray-500 mb-6">device/month</p>
<hr className="mb-6"/>
<ul className="space-y-3 text-gray-600 text-sm flex-1">
<li className="flex gap-2"><Check size={16}/> Used for shared/common devices  </li>
<li className="flex gap-2"><Check size={16}/> Teams phones (desk phones)  </li>
<li className="flex gap-2"><Check size={16}/> Meeting room panels (booking displays)  </li>
<li className="flex gap-2"><Check size={16}/>  Hot-desking support  </li>
<li className="flex gap-2"><Check size={16}/>  Common area usage (reception, lobby)   </li>
<li className="flex gap-2"><Check size={16}/> Basic calling & meeting features  </li>
<li className="flex gap-2"><Check size={16}/>Device-based login (not user-based)   </li>
<li className="flex gap-2"><Check size={16}/>  Calendar & meeting join support  </li>
</ul>
<button className="mt-10 bg-blue-600 text-white py-2 rounded-full">Get Start</button>
</div>

{/* Card 2 */}
<div className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full">
<h3 className="font-medium text-gray-800 mb-6">Teams Phone Standard</h3>
<p className="text-3xl font-bold">₹830.00</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>
<hr className="mb-6"/>
<ul className="space-y-3 text-gray-600 text-sm flex-1">
<li className="flex gap-2"><Check size={16}/> Cloud-based phone system</li>
<li className="flex gap-2"><Check size={16}/>  Make & receive calls (PSTN) </li>
<li className="flex gap-2"><Check size={16}/> Call transfer, hold, voicemail</li>
<li className="flex gap-2"><Check size={16}/>  Works with Teams devices </li>
<li className="flex gap-2"><Check size={16}/>  High reliability (99.999% uptime) </li>
<li className="flex gap-2"><Check size={16}/>Works with Operator Connect / Direct Routing</li>
</ul>
<button className="mt-10 bg-blue-600 text-white py-2 rounded-full">Get Start</button>
</div>

{/* Card 3 */}
<div className="bg-white rounded-xl shadow-md p-8 text-left flex flex-col h-full">
<h3 className="font-medium text-gray-800 mb-6">Teams Calling Plan</h3>
<p className="text-3xl font-bold">₹1080+</p>
<p className="text-sm text-gray-500 mb-6">user/month</p>
<hr className="mb-6"/>
<ul className="space-y-3 text-gray-600 text-sm flex-1">
<li className="flex gap-2"><Check size={16}/> Includes Teams Phone Standard </li>
<li className="flex gap-2"><Check size={16}/> Calling minutes included  </li>
<li className="flex gap-2"><Check size={16}/>  PSTN integration  </li>
<li className="flex gap-2"><Check size={16}/>  Works on mobile + desk phones   </li>
<li className="flex gap-2"><Check size={16}/>  Ideal replacement for traditional PBX systems   </li>
</ul>
<button className="mt-10 bg-blue-600 text-white py-2 rounded-full">Get Start</button>
</div>

</div>

)}

</div>

</section>

);
}