import { useState } from "react";
import {
Settings,
Link,
ShieldCheck,
Monitor,
Database,
Upload,
Clock,
Users,
Video,
FileText,
AtSign,
Shield,
Lock,
AlertTriangle
} from "lucide-react";

export default function TeamsServices() {

const [activeTab, setActiveTab] = useState("setup");

return (

<section className="py-10 mb-20 px-6">

<div className="max-w-5xl mx-auto text-center">

<h2 className="text-2xl font-bold text-gray-900 mb-8">
Why Choose Our Microsoft Teams Services
</h2>


{/* Tabs */}

<div className="flex flex-wrap justify-center gap-3 mb-10">

<button
onClick={() => setActiveTab("setup")}
className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "setup"
? "bg-blue-600 text-white"
: "bg-gray-200 text-gray-600"}
`}
>
Implementation & Setup
</button>

<button
onClick={() => setActiveTab("migration")}
className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "migration"
? "bg-blue-600 text-white"
: "bg-gray-200 text-gray-600"}
`}
>
Data Migration
</button>

<button
onClick={() => setActiveTab("training")}
className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "training"
? "bg-blue-600 text-white"
: "bg-gray-200 text-gray-600"}
`}
>
Training & Support
</button>

<button
onClick={() => setActiveTab("security")}
className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
${activeTab === "security"
? "bg-blue-600 text-white"
: "bg-gray-200 text-gray-600"}
`}
>
Security & Compliance
</button>

</div>


{/* Card */}

<div className="bg-white rounded-2xl shadow-xl p-10 text-left">


{/* Implementation */}

{activeTab === "setup" && (

<>

<h3 className="text-xl font-bold text-blue-600 mb-2">
Implementation & Setup
</h3>

<p className="text-gray-500 mb-6">
Our comprehensive Microsoft Teams implementation service ensures your organization gets up and running with a fully configured, secure, and optimized collaboration environment tailored to your business needs.
</p>


<div className="grid md:grid-cols-2 gap-4 mb-6">

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
<Settings size={18}/>
</div>
<p className="text-sm">Custom Teams environment configuration based on your organizational structure</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
<Link size={18}/>
</div>
<p className="text-sm">Integration with existing Microsoft 365 and third-party apps</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
<ShieldCheck size={18}/>
</div>
<p className="text-sm">Policy configuration for governance, compliance, and security</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
<Monitor size={18}/>
</div>
<p className="text-sm">Multi-platform deployment (desktop, mobile, and web)</p>
</div>

</div>

<div className="border border-blue-400 bg-blue-50 rounded-lg p-4 mb-6">

<p className="text-blue-600 font-semibold text-sm">
Quick Start Package
</p>

<p className="text-sm text-gray-600">
Get your Microsoft Teams environment ready in just 2–3 days with our accelerated implementation service.
</p>

</div>

<button className="bg-blue-600 text-white px-6 py-2 cursor-pointer hover:bg-blue-400  rounded-full text-sm">
Talk To Our Experts
</button>

</>
)}



{/* Data Migration */}

{activeTab === "migration" && (

<>

<h3 className="text-xl font-bold text-blue-600 mb-2">
Data Migration
</h3>

<p className="text-gray-500 mb-6">
Seamlessly migrate from your existing collaboration platform to Microsoft Teams without data loss or disruption.
</p>

<div className="grid md:grid-cols-2 gap-4 mb-6">

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
<Database size={18}/>
</div>
<p className="text-sm">Complete data assessment and migration planning</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
<Upload size={18}/>
</div>
<p className="text-sm">Automated migration tools for Slack, Discord and other platforms</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
<ShieldCheck size={18}/>
</div>
<p className="text-sm">Zero data loss guarantee with complete backup and rollback</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
<Clock size={18}/>
</div>
<p className="text-sm">Minimal downtime migration with after-hours execution</p>
</div>

</div>

<div className="border border-blue-400 bg-blue-50 rounded-lg p-4 mb-6">

<p className="text-blue-600 font-semibold text-sm">
Migration Success Rate
</p>

<p className="text-sm text-gray-600">
We deliver 99.8% successful migrations across enterprise environments.
</p>

</div>

<button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-400 cursor-pointer rounded-full text-sm">
Talk To Our Experts
</button>

</>
)}



{/* Training */}

{activeTab === "training" && (

<>

<h3 className="text-xl font-bold text-blue-600 mb-2">
Training & Support
</h3>

<p className="text-gray-500 mb-6">
Comprehensive training programs designed to maximize user adoption and productivity.
</p>

<div className="grid md:grid-cols-2 gap-4 mb-6">

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
<Users size={18}/>
</div>
<p className="text-sm">Role-based training sessions for different user groups</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
<Video size={18}/>
</div>
<p className="text-sm">Interactive webinars and hands-on workshops</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center">
<FileText size={18}/>
</div>
<p className="text-sm">Comprehensive documentation and quick reference guides</p>
</div>

<div className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg">
  <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center shrink-0">
    <AtSign size={18}/>
  </div>

  <p className="text-sm text-gray-700">
    Full support during the first 90 days
  </p>
</div>

</div>

<div className="border border-blue-400 bg-blue-50 rounded-lg p-4 mb-6">

<p className="text-blue-600 font-semibold text-sm">
Adoption Guarantee
</p>

<p className="text-sm text-gray-600">
We guarantee 85%+ user adoption within 60 days.
</p>

</div>

<button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-400 cursor-pointer  text-sm">
Talk To Our Experts
</button>

</>
)}



{/* Security */}

{activeTab === "security" && (

<>

<h3 className="text-xl font-bold text-blue-600 mb-2">
Security & Compliance
</h3>

<p className="text-gray-500 mb-6">
Enterprise-grade security configuration and compliance management.
</p>

<div className="grid md:grid-cols-2 gap-4 mb-6">

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
<Shield size={18}/>
</div>
<p className="text-sm">Multi-factor authentication & conditional access</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
<Lock size={18}/>
</div>
<p className="text-sm">Compliance for GDPR, HIPAA, SOX & more</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center">
<FileText size={18}/>
</div>
<p className="text-sm">Data Loss Prevention (DLP) & risk management</p>
</div>

<div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
<AlertTriangle size={18}/>
</div>
<p className="text-sm">Security monitoring & threat detection</p>
</div>

</div>

<div className="border border-blue-400 bg-blue-50 rounded-lg p-4 mb-6">

<p className="text-blue-600 font-semibold text-sm">
Security Certification
</p>

<p className="text-sm text-gray-600">
Compliant with ISO 27001, SOC 2 Type II, and major industry regulations.
</p>

</div>

<button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-400 cursor-pointer text-sm">
Talk To Our Experts
</button>

</>
)}

</div>

</div>

</section>

);
}