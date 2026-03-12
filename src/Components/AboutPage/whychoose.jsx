import { useState } from "react";
import { ChevronDown } from "lucide-react";
import IMG from "../../Constents"
const Building=IMG.AboutPage.Whychoose

export default function WhyChoose() {

  const [open, setOpen] = useState(null);

  const items = [
    {
      title: "Deep-rooted Expertise",
      text: "With over 9 years of industry experience, TIBOS delivers top-notch IT solutions tailored to each client’s unique needs."
    },
    {
      title: "Customer-Centric Approach",
      text: "With a strong base of 900+ customers, TIBOS focuses on long-lasting relationships built on trust and mutual growth."
    },
    {
      title: "Pan-India Presence",
      text: "Based in Chennai, TIBOS supports clients nationwide with fast, efficient and reliable service."
    },
    {
      title: "Project Excellence",
      text: "Over 1000+ on-time, on-budget project implementations showcase TIBOS’ commitment to quality and precision."
    },
    {
      title: "Digital Transformation Leader",
      text: "TIBOS empowers businesses with expertise in Cloud, Data, and Apps— helping them stay ahead in the digital era."
    }
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-10 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-600">TIBOS?</span>
          </h2>

          <p className="text-gray-600 mb-10 max-w-lg leading-relaxed">
            For over nine years, TIBOS has been a trusted name in IT excellence—
            empowering businesses with innovative, reliable, and scalable
            technology solutions. Here's what makes TIBOS the preferred partner
            across industries:
          </p>

          <div className="space-y-6">

            {items.map((item, index) => {

              const active = open === index;

              return (
                <div
                  key={index}
                  className={`bg-white shadow-xl transition-all duration-300 ${
                    active ? "rounded-3xl p-6" : "rounded-full px-8 py-5"
                  }`}
                >

                  <div
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center cursor-pointer"
                  >

                    <h3 className="font-medium text-gray-900">
                      {item.title}
                    </h3>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        active ? "rotate-180" : ""
                      }`}
                    />

                  </div>

                  {active && (
                    <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="flex justify-end">

          <img
            src={Building}
            alt="building"
            className="rounded-3xl w-[500px] h-[700px] object-cover shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}