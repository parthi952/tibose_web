import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Img from "../../Constents";

const I = Img.HomePage.Industry;

const industries = [
  { name: "Insurance", image: I.Insurance },
  { name: "Healthcare", image: I.Healthcare },
  { name: "Manufacturing", image: I.Manufacturing },
  { name: "Financial Services", image: I.FinancialService },
  { name: "Life Sciences", image: I.LifeSciences },
  { name: "Automotive", image: I.Automotive },
  { name: "Comms + Media + Tech", image: I.CMT },
  { name: "Energy & Utilities", image: I.EnergyUtilities },
  { name: "Retail & Distribution", image: I.RetailDistribution },
  { name: "Professional Services", image: I.ProfessionalServices },
  { name: "Transportation & Logistics", image: I.TransportationLogistics },
  { name: "Travel & Hospitality", image: I.TravelHospitality },
];

// Varied aspect ratios create the staggered mosaic look.
const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[5/4]", "aspect-[3/4]"];

const IndustriesShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: sentence */}
          <div className="text-center lg:text-left">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400">
              Industry Insights
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Trusted expertise across <span className="text-blue-400">every industry</span> we serve.
            </h2>
            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              From insurance and healthcare to manufacturing and finance, we deliver tailored
              Microsoft and cloud solutions that fit the way your industry works — secure,
              scalable, and built around your business.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate("/industries")}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500 active:scale-95"
              >
                Explore all industries <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-95"
              >
                Talk to an expert
              </button>
            </div>
          </div>

          {/* Right: industry image collage */}
          <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
            {industries.map((item, i) => (
              <figure
                key={item.name}
                className="group relative mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${aspects[i % aspects.length]}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2.5 text-[11px] sm:text-xs font-semibold text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;
