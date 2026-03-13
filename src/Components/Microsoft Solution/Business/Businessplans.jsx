import Img from "../../../Constents";
import { Check, icons } from "lucide-react";

/* Logos */
const Word = Img.Microsoft_Solution.Sericeslogo.Word;
const Excel = Img.Microsoft_Solution.Sericeslogo.Excel;
const PPT = Img.Microsoft_Solution.Sericeslogo.PPT;
const Outlook = Img.Microsoft_Solution.Sericeslogo.Outlook;
const Teams = Img.Microsoft_Solution.Sericeslogo.Teams;
const OneDrive = Img.Microsoft_Solution.Sericeslogo.OneDrive;
const SharePoint = Img.Microsoft_Solution.Sericeslogo.SharePoint;
const Exchange = Img.Microsoft_Solution.Sericeslogo.Exchange;
const OneNote = Img.Microsoft_Solution.Sericeslogo.OneNote;
const EntraID=Img.Microsoft_Solution.Sericeslogo.EntraId;
const Defender=Img.Microsoft_Solution.Sericeslogo.Defender;
const Windows=Img.Microsoft_Solution.Sericeslogo.Windows;
const Eye=Img.Microsoft_Solution.Sericeslogo.Eye;
const Tool=Img.Microsoft_Solution.Sericeslogo.Tool;
const Loop=Img.Microsoft_Solution.Sericeslogo.Loop;
const Intune=Img.Microsoft_Solution.Sericeslogo.Intune;
const Clip=Img.Microsoft_Solution.Sericeslogo.Clip;

/* Icon lists for each card */

const basicIcons = [
  Word, Excel, PPT, Outlook, Teams,
  OneDrive, SharePoint, Exchange, OneNote
];

const standardIcons = [
  Word, Excel, PPT, OneNote, Outlook, Exchange, 
  Teams, Clip, Loop, OneDrive, SharePoint,
  Tool
];

const premiumIcons = [
  Word, Excel, PPT, OneNote, Outlook, Exchange, 
  Teams, Clip, Loop, SharePoint,
  Tool, EntraID, Windows, Intune, Defender, Eye
];

const appIcons = [
  Word, Excel, PPT, Outlook,
  Teams, OneDrive, SharePoint, Exchange,
  OneNote
];

export default function MicrosoftPlans() {
  return (
    <section className="mb-20">

      <h1 className="text-center text-3xl font-bold mb-16">
        MICROSOFT 365 BUSINESS PLANS
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">

        {/* CARD 1 */}
        <div className="bg-[#ffffff] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">

          <div>
            <h2 className="text-lg font-medium mb-8">
              Microsoft 365 Business Basic
            </h2>

            <h3 className="text-4xl font-bold">₹125</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="font-semibold mb-4">Plans:</p>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Check size={16}/>Web & mobile Office apps</li>
              <li className="flex gap-2"><Check size={16}/>Chat & meetings for up to 300</li>
              <li className="flex gap-2"><Check size={16}/>1 TB cloud storage</li>
              <li className="flex gap-2"><Check size={16}/>Business-class email</li>
              <li className="flex gap-2"><Check size={16}/>Anytime phone & web support</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="text-sm font-semibold mb-4">services included:</p>

            <div className="grid grid-cols-4 gap-2">
              {basicIcons.map((icon, i) => (
                <div key={i} className="w-7 h-7 bg-white drop-shadow-sm rounded-md flex items-center justify-center">
                  <img src={icon} alt="logo" className="w-4 h-4 object-contain"/>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-10 bg-blue-600 text-white hover:bg-blue-500 py-3 cursor-pointer rounded-full">
            Get Start
          </button>

        </div>


        {/* CARD 2 */}
        <div className="bg-[#fffff] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">

          <div>
            <h2 className="text-lg font-medium mb-8">
              Microsoft 365 Business Standard
            </h2>

            <h3 className="text-4xl font-bold">₹654</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="font-semibold mb-4">Plans:</p>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Check size={16}/>Desktop Office apps</li>
              <li className="flex gap-2"><Check size={16}/>Host webinars easily</li>
              <li className="flex gap-2"><Check size={16}/>Attendee reporting tools</li>
              <li className="flex gap-2"><Check size={16}/>Manage customer bookings</li>
              <li className="flex gap-2"><Check size={16}/>1 TB secure cloud storage</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="text-sm font-semibold mb-4">services included:</p>

            <div className="grid grid-cols-4 gap-2">
              {standardIcons.map((icon, i) => (
                <div key={i} className="w-7 h-7 bg-white drop-shadow-sm rounded-md flex items-center justify-center">
                  <img src={icon} alt="logo" className="w-4 h-4 object-contain"/>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-10 bg-blue-600 text-white hover:bg-blue-500 py-3 cursor-pointer rounded-full">
            Get Start
          </button>

        </div>


        {/* CARD 3 */}
        <div className="bg-[#ffff] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">

          <div>
            <h2 className="text-lg font-medium mb-8">
              Microsoft 365 Business Premium
            </h2>

            <h3 className="text-4xl font-bold">₹1555</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="font-semibold mb-4">Plans:</p>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Check size={16}/>Desktop Office apps</li>
              <li className="flex gap-2"><Check size={16}/>Host webinars easily</li>
              <li className="flex gap-2"><Check size={16}/>Attendee reporting tools</li>
              <li className="flex gap-2"><Check size={16}/>Manage customer bookings</li>
              <li className="flex gap-2"><Check size={16}/>1 TB secure cloud storage</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="text-sm font-semibold mb-4">services included:</p>

            <div className="grid grid-cols-4 gap-2">
              {premiumIcons.map((icon, i) => (
                <div key={i} className="w-7 h-7 bg-white drop-shadow-sm rounded-md flex items-center justify-center">
                  <img src={icon} alt="logo" className="w-4 h-4 object-contain"/>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-10 bg-blue-600 text-white hover:bg-blue-500 py-3 cursor-pointer rounded-full">
            Get Start
          </button>

        </div>


        {/* CARD 4 */}
        <div className="bg-[#ffff] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">

          <div>
            <h2 className="text-lg font-medium mb-8">
              Microsoft 365 Apps For Business
            </h2>

            <h3 className="text-4xl font-bold">₹582</h3>
            <p className="text-gray-600 text-sm mb-6">user/month</p>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="font-semibold mb-4">Plans:</p>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Check size={16}/>Advanced security</li>
              <li className="flex gap-2"><Check size={16}/>Access & data control</li>
              <li className="flex gap-2"><Check size={16}/>Cyberthreat protection</li>
              <li className="flex gap-2"><Check size={16}/>Desktop Office apps</li>
              <li className="flex gap-2"><Check size={16}/>1 TB cloud storage</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="text-sm font-semibold mb-4">services included:</p>

            <div className="grid grid-cols-4 gap-2">
              {appIcons.map((icon, i) => (
                <div key={i} className="w-7 h-7 bg-white drop-shadow-sm rounded-md flex items-center justify-center">
                  <img src={icon} alt="logo" className="w-4 h-4 object-contain"/>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-10 bg-blue-600 text-white hover:bg-blue-500 py-3 cursor-pointer rounded-full">
            Get Start
          </button>

        </div>

      </div>

    </section>
  );
}