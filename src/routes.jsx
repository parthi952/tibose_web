import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home";
import RootLayout from "./Layout/RootLayout";
// import AboutSection from "./Components/Page/AboutSection"
import AboutSection2 from "./Components/Page/AboutSection2";
import AboutSection from "./Components/Page/AboutSection";

import Business from "./Components/Page/Business";
import Enterprise from "./Components/Page/Enterprise";
import Copilot from "./Components/Page/Copilot";
import Teams from "./Components/Page/Teams";
import Security from "./Components/Page/Security";
import Azure from "./Components/Page/Azure";
import Dynamics from "./Components/Page/Dynamics";
import Surface from "./Components/Page/Surface";
import Contactpage from "./Components/Page/Contactpage";
import Industries from "./Components/Page/Industries";
import Connectivity from "./Components/Page/Connectivity";
import CyberSecurity from "./Components/Page/CyberSecurity";
import SmartCommunication from "./Components/Page/SmartCommunication";
import Bpo from "./Components/Page/Bpo";
import HardwareSolution from "./Components/Page/HardwareSolution";
import Resouces from "./Components/Page/Resouces";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Navbar always visible
    children: [
      
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/company-culture",
        element :<AboutSection/>

      },
      {
        path: "/team",
        element:<AboutSection2/>
      },
      {
        path: "/business",
        element: <Business/>
      },
      {
        path:"/enterprise",
        element:<Enterprise/>
      },
      {
        path:"/copilot",
        element:<Copilot/>
      },
      {
        path:"/teams",
        element:<Teams/>
      },
      {
        path:"/security",
        element:<Security/>
      },
      {
        path:"/azure",
        element:<Azure/>
      },
      {
        path:"/dynamics",
        element:<Dynamics/>
      },
      {
         path:"/surface",
         element:<Surface/>

      },
      {
        path:"/Contact",
        element:<Contactpage/>
      },
      {
        path:"/industries",
        element:<Industries/>
      },
      {
        path:"/cloud",
        element:<Connectivity/>
      },
      {
        path:"/cyber-security",
        element:<CyberSecurity/>
      },
      {
        path:"/smart-communication",
        element:<SmartCommunication/>
      },
      {
        path:"/bpu",
        element:<Bpo/>
      },
      {
        path:"/hardware",
        element:<HardwareSolution/>
      },
      {
        path:"/resources",
        element:<Resouces/>
      }


    ],
  },
]);