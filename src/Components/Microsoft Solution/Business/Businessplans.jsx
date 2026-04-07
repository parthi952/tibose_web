import Img from "../../../Constents";
import { Check } from "lucide-react";

/* Logos Mapping with Names for Tooltips */
const services = Img.Microsoft_Solution.Sericeslogo;

const iconData = (img, name) => ({ img, name });

const basicIcons = [
  iconData(services.Word, "Word"),
  iconData(services.Excel, "Excel"),
  iconData(services.PPT, "PowerPoint"),
  iconData(services.Outlook, "Outlook"),
  iconData(services.Teams, "Teams"),
  iconData(services.OneDrive, "OneDrive"),
  iconData(services.SharePoint, "SharePoint"),
  iconData(services.Exchange, "Exchange"),
  iconData(services.OneNote, "OneNote"),
];

const standardIcons = [
  ...basicIcons,
  iconData(services.Clip, "Clipchamp"),
  iconData(services.Loop, "Loop"),
  iconData(services.Tool, "Admin Tool"),
];

const premiumIcons = [
  ...standardIcons,
  iconData(services.EntraId, "Entra ID"),
  iconData(services.Windows, "Windows"),
  iconData(services.Intune, "Intune"),
  iconData(services.Defender, "Defender"),
  iconData(services.Eye, "Priva"),
];

const appIcons = [
  iconData(services.Word, "Word"),
  iconData(services.Excel, "Excel"),
  iconData(services.PPT, "PowerPoint"),
  iconData(services.Outlook, "Outlook"),
  iconData(services.OneDrive, "OneDrive"),
];

export default function MicrosoftPlans() {
  // Reusable Icon Component with Tooltip
  const ServiceIcon = ({ icon }) => (
    <div className="group relative flex items-center justify-center">
      <div className="w-7 h-7 bg-white drop-shadow-sm rounded-md flex items-center justify-center border border-gray-100">
        <img src={icon.img} alt={icon.name} className="w-4 h-4 object-contain" />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-800 shadow-lg rounded-md">
          {icon.name}
        </span>
        <div className="w-2 h-2 -mt-1 rotate-45 bg-gray-800"></div>
      </div>
    </div>
  );

  return (
    <section className="mt-20">
      <h1 className="text-center text-3xl font-bold mb-16 uppercase tracking-tight text-gray-800">
        MICROSOFT 365 BUSINESS PLANS
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">
        
        {/* CARD 1 - BASIC */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-lg font-bold mb-8 text-gray-800 h-12">Microsoft 365 Business Basic</h2>
            <h3 className="text-4xl font-bold">₹125.00</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="font-semibold mb-4 text-sm">Features:</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Web & mobile Office apps</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Chat & meetings (300 users)</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />1 TB cloud storage</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Business-class email</li>
            </ul>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Services included:</p>
            <div className="grid grid-cols-4 gap-3">
              {basicIcons.map((icon, i) => <ServiceIcon key={i} icon={icon} />)}
            </div>
          </div>
          <button 
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="mt-10 bg-blue-600 cursor-pointer text-white font-semibold hover:bg-blue-700 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* CARD 2 - STANDARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-lg font-bold mb-8 text-gray-800 h-12">Microsoft 365 Business Standard</h2>
            <h3 className="text-4xl font-bold">₹654.00</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="font-semibold mb-4 text-sm">Features:</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Desktop Office apps</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Host webinars easily</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Attendee reporting</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Customer bookings</li>
            </ul>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Services included:</p>
            <div className="grid grid-cols-4 gap-3">
              {standardIcons.map((icon, i) => <ServiceIcon key={i} icon={icon} />)}
            </div>
          </div>
          <button 
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="mt-10 bg-blue-600 cursor-pointer text-white font-semibold hover:bg-blue-700 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* CARD 3 - PREMIUM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-lg font-bold mb-8 text-gray-800 h-12">Microsoft 365 Business Premium</h2>
            <h3 className="text-4xl font-bold">₹1,555.00</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="font-semibold mb-4 text-sm">Features:</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Advanced Security</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Access & data control</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Cyberthreat protection</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Intune & Defender</li>
            </ul>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Services included:</p>
            <div className="grid grid-cols-4 gap-3">
              {premiumIcons.map((icon, i) => <ServiceIcon key={i} icon={icon} />)}
            </div>
          </div>
          <button 
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="mt-10 bg-blue-600 cursor-pointer text-white font-semibold hover:bg-blue-700 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* CARD 4 - APPS */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-lg font-bold mb-8 text-gray-800 h-12">Microsoft 365 Apps For Business</h2>
            <h3 className="text-4xl font-bold">₹582.00</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="font-semibold mb-4 text-sm">Features:</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Premium Desktop apps</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />1 TB cloud storage</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Always up to date</li>
              <li className="flex gap-2"><Check size={16} className="text-blue-600" />Standard Security</li>
            </ul>
            <div className="border-t border-gray-300 my-6"></div>
            <p className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Services included:</p>
            <div className="grid grid-cols-4 gap-3">
              {appIcons.map((icon, i) => <ServiceIcon key={i} icon={icon} />)}
            </div>
          </div>
          <button
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
           className="mt-10 bg-blue-600 cursor-pointer text-white font-semibold hover:bg-blue-700 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}