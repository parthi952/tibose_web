import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home";
import RootLayout from "./Layout/RootLayout";
// import AboutSection from "./Components/Page/AboutSection"
import AboutSection2 from "./Components/Page/AboutSection2";
import AboutSection from "./Components/Page/AboutSection";
import path from "path";
import Business from "./Components/Page/Business";
import Enterprise from "./Components/Page/Enterprise";
import Copilot from "./Components/Page/Copilot";
import Teams from "./Components/Page/Teams";
import Security from "./Components/Page/Security";
import Azure from "./Components/Page/Azure";
import Dynamics from "./Components/Page/Dynamics";
import Surface from "./Components/Page/Surface";


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

      }
     

    ],
  },
]);