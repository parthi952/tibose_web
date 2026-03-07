import React from 'react'
import Card from '../OurSolution/Card'
import Conn from '../../assets/Connectivity.png'
import { p } from 'motion/react-client'

const ItermList =[
    {

        CardImg: Conn,
        CardImgName: "CONNECTIVITY",
        Title: "CONNECTIVITY",
        Description: "Reliable high-speed connectivity ensuring smooth communication and consistent performance for all business operations.",
        Path: "/connectivity"
    },
    {
        CardImg: Conn,
        CardImgName:"CYBERSECURITY",
        Title: "CYBERSECURITY",
        Description:"Advanced security solutions protecting critical data, sensitive networks, digital platforms, and essential business assets.",
        path: "/cybersecurity"
    },
        {
        CardImg: Conn,
        CardImgName:"HARDWARE SOLUTION",
        Title: "HARDWARE SOLUTION",
        Description:"High-performance hardware systems delivering reliable speed, smooth operations, and efficient daily business performance.",
        path: "/hardware-solution"
    },
    {
        CardImg: Conn,
        CardImgName:"SMART COMMUNICATION",
        Title: "SMART COMMUNICATION",
        Description:"Cloud-based communication tools improving team engagement, workplace collaboration, and daily operational efficiency.",
        path: "/smart-communication"
    },
    {
        CardImg: Conn,
        CardImgName:"BUSINESS PROCESS OUTSOURCING",
        Title: "BUSINESS PROCESS OUTSOURCING",
        Description:"End-to-end outsourcing services enhancing productivity, reducing overall costs, and optimizing essential business workflows.",
        path: "/business-process-outsourcing"
    }
]


const OurSolution = () => {
  return (
   <div className="p-10 w-full rounded-xl shadow-lg relative overflow-hidden bg-gray-50">
  {/* Layer 1: Soft Pastel Mesh Gradients */}
  <div 
    className="absolute inset-0 pointer-events-none opacity-40"
    style={{
      background: `
        radial-gradient(at 0% 0%, rgba(186, 230, 253, 0.5) 0, transparent 50%), 
        radial-gradient(at 100% 100%, rgba(251, 207, 232, 0.5) 0, transparent 50%),
        radial-gradient(at 50% 50%, rgba(221, 214, 254, 0.4) 0, transparent 80%)
      `
    }}
  />

  {/* Layer 2: The Wavy Lines Pattern (Lightened Colors) */}
<div 
    className="absolute inset-0 pointer-events-none opacity-60"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,200 C150,100 350,300 500,200 S850,100 1200,200 M0,210 C150,110 350,310 500,210 S850,110 1200,210 M0,190 C150,90 350,290 500,190 S850,90 1200,190' fill='none' stroke='url(%23g1)' stroke-width='0.5' /%3E%3C/svg%3E")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />

  {/* Layer 3: Your Scrollable Content */}
  <div className="flex flex-row space-x-8 overflow-x-auto py-10 px-6 scrollbar-hide relative z-10">
    {ItermList.map((item, index) => (
      <Card 
        key={index}
        CardImg={item.CardImg}
        CardImgName={item.CardImgName}
        Title={item.Title}
        Description={item.Description}
        Path={item.Path}
      />
    ))}
  </div>
</div>
  );
};
export default OurSolution;
