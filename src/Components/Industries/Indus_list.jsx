import Img from "../../Constents";

const Automotive = Img.HomePage.Industry.Automotive;
const CMT = Img.HomePage.Industry.CMT;
const EnergyUtilities = Img.HomePage.Industry.EnergyUtilities;
const FinancialService = Img.HomePage.Industry.FinancialService;
const Healthcare = Img.HomePage.Industry.Healthcare;
const Insurance = Img.HomePage.Industry.Insurance;
const LifeSciences = Img.HomePage.Industry.LifeSciences;
const Manufacturing = Img.HomePage.Industry.Manufacturing;
const ProfessionalServices = Img.HomePage.Industry.ProfessionalServices;
const RetailDistribution = Img.HomePage.Industry.RetailDistribution;
const TransportationLogistics = Img.HomePage.Industry.TransportationLogistics;
const TravelHospitality = Img.HomePage.Industry.TravelHospitality;

const industries = [
  {
    title: "Energy + utilities",
    img: EnergyUtilities,
    alt:"Renewable energy power grid with solar panels and wind turbines at sunset",
  },
  {
    title: "Automotive",
    img: Automotive,
    alt:"Automotive manufacturing robotic assembly line in a modern factory",
  },
  {
    title: "Financial Services",
    img: FinancialService,
    alt:"Financial services investment growth chart with coins and analytics data",
  },
  {
    title: "Healthcare",
    img: Healthcare,
    alt:"Healthcare professionals team in hospital providing medical services",
  },
  {
    title: "Insurance",
    img: Insurance,
    aly:"Digital insurance protection concept with security icons and shield interface",
  },
  {
    title: "Life Science",
    img: LifeSciences,
    alt:"Life science laboratory research with glass equipment and biotechnology experiments",
  },
  {
    title: "Consumer Goods",
    img: CMT,
    alt:"Consumer goods digital shopping experience with online cart interface",
  },
  {
    title: "Manufacturing",
    img: Manufacturing,
    alt:"Industrial manufacturing with robotic automation in production line",
  },
  {
    title: "Travel + Hospitality",
    img: TravelHospitality,
    alt:"Business travelers at airport terminal with luggage in travel and hospitality industry",
  },
  {
    title: "Professional Services",
    img: ProfessionalServices,
    alt:"Professional business consulting team working together on laptop",
  },
  {
    title: "Retail + Distribution",
    img: RetailDistribution,
    alt:"Retail distribution warehouse logistics with workers managing inventory",
  },
  {
    title: "Transportation",
    img: TransportationLogistics,
    alt:"Transportation and logistics container shipping at port with cranes",
  },
];

const Indus_list = () => {
  return (
    <div className="bg-[#f2f2f2] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">

          {industries.map((item, index) => (
            <div key={index} className="text-center">

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[210px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Indus_list;