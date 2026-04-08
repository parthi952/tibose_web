import { useState } from "react";
import Img from "../../../Constents";

const proImg = Img.Microsoft_Solution.Surface.SurfacePro;
const laptopImg = Img.Microsoft_Solution.Surface.SurfaceLaptop;

const accessories = [
  Img.Microsoft_Solution.Surface.Accessories1,
  Img.Microsoft_Solution.Surface.Accessories2,
  Img.Microsoft_Solution.Surface.Accessories3,
  Img.Microsoft_Solution.Surface.Accessories4,
  Img.Microsoft_Solution.Surface.Accessories5,
  Img.Microsoft_Solution.Surface.Accessories6,
];

const SurfaceProducts = () => {
  const [tab, setTab] = useState("pro");

  const btn =
    "px-8 py-3 rounded-full font-medium transition";

  return (
    <div className="bg-[#C6DDF6] mb-20 py-16 text-center">

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#163c8c] mb-8">
        Microsoft Surface Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-14">

        <button
          onClick={() => setTab("pro")}
          className={`${btn} ${
            tab === "pro"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white cursor-pointer hover:text-blue-600 text-gray-600"
          }`}
        >
          Surface Pro
        </button>

        <button
          onClick={() => setTab("laptop")}
          className={`${btn} ${
            tab === "laptop"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-gray-600 hover:text-blue-600 cursor-pointer"
          }`}
        >
          Surface Laptop
        </button>

        <button
          onClick={() => setTab("accessories")}
          className={`${btn} ${
            tab === "accessories"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-gray-600 hover:text-blue-600 cursor-pointer"
          }`}
        >
          Surface Accessories
        </button>

      </div>

      {/* Surface Pro */}
      {tab === "pro" && (
        <div className="flex items-center justify-center gap-14">

          <div className=" rounded-3xl">
            <img src={proImg} className="w-[520px]" />
          </div>

          <div className="text-left max-w-lg">

            <h3 className="text-2xl font-bold mb-4">
              Surface Pro for Business, Copilot+ PC
            </h3>

            <h4 className="text-xl font-semibold mb-4">
              Where Innovation Meets Performance
            </h4>

            <p className="text-gray-600 mb-6">
              Accelerate workflow with Copilot capabilities. Includes
              Intel® Ultra™ Core processor, 5G options, and all-day
              battery for modern professionals.
            </p>

            <button 
            onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            className="bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer hover:from-blue-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow">
              Talk To Our Expects
            </button>

          </div>
        </div>
      )}

      {/* Surface Laptop */}
      {tab === "laptop" && (
        <div className="flex items-center justify-center gap-14">

          <div className="rounded-3xl">
            <img src={laptopImg} className="w-[520px]" />
          </div>

          <div className="text-left max-w-lg">

            <h3 className="text-2xl font-bold mb-4">
              Surface Pro for Business, Copilot+ PC
            </h3>

            <h4 className="text-xl font-semibold mb-4">
              Where Innovation Meets Performance
            </h4>

            <p className="text-gray-600 mb-6">
              Powerful computing, seamless performance, and all-day
              battery designed for professionals.
            </p>

            <button 
            onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            className="bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer hover:from-blue-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow">
              Talk To Our Expects
            </button>

          </div>
        </div>
      )}

      {/* Accessories */}
      {tab === "accessories" && (
        <div>

          <h3 className="text-2xl font-bold text-[#163c8c] mb-10">
            Microsoft Surface Products
          </h3>

          <div className="grid grid-cols-3 gap-10 px-24">

            {accessories.map((img, i) => (
              <div
                key={i}
                className=" rounded-2xl"
              >
                <img src={img} />
              </div>
            ))}

          </div>

          <button 
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer hover:from-blue-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow mt-12">
            Talk To Our Expects
          </button>

        </div>
      )}

    </div>
  );
};

export default SurfaceProducts;