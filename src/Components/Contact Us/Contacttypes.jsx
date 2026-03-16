import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import Img from "../../Constents";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


//  const MapImage = Img.Contac_Us.Navigate
const Contacttypes = () => {
 

  return (
    <div className=" bg-violet-950 mb-10 w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
  <DotLottieReact 
      src="https://lottie.host/7cc705b6-80a8-4304-95ae-69170b1226a0/zgakNUtVrL.lottie"
      loop
      autoplay
    />
        {/* Right Content */}
        <div className="bg-gray-200 rounded-3xl p-10 space-y-8">

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Location:</h3>
              <p className="text-gray-800 mt-1">
                TIBOS Solutions and Services Pvt Ltd, <br />
                G1, No 138 Ameen Manor, Nungambakkam <br />
                High Road, Chennai - 600034
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Call Us:</h3>
              <p className="text-gray-800 mt-1">
                +91 9043099940
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Mail:</h3>
              <p className="text-gray-800 mt-1">
                support@tibos.in
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <Clock className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Hours:</h3>
              <p className="text-gray-800 mt-1">
                Monday – Friday : 9.30 am – 6.30 pm <br />
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacttypes;