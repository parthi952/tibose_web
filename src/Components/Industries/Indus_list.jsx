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
  },
  {
    title: "Automotive",
    img: Automotive,
  },
  {
    title: "Financial Services",
    img: FinancialService,
  },
  {
    title: "Healthcare",
    img: Healthcare,
  },
  {
    title: "Insurance",
    img: Insurance,
  },
  {
    title: "Life Science",
    img: LifeSciences,
  },
  {
    title: "Consumer Goods",
    img: CMT,
  },
  {
    title: "Manufacturing",
    img: Manufacturing,
  },
  {
    title: "Travel + Hospitality",
    img: TravelHospitality,
  },
  {
    title: "Professional Services",
    img: ProfessionalServices,
  },
  {
    title: "Retail + Distribution",
    img: RetailDistribution,
  },
  {
    title: "Transportation",
    img: TransportationLogistics,
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