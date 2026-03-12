import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home";
import RootLayout from "./Layout/RootLayout";
// import AboutSection from "./Components/Page/AboutSection"
import AboutSection2 from "./Components/Page/AboutSection2";
import AboutSection from "./Components/Page/AboutSection";
import path from "path";
import Business from "./Components/Page/Business";


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
      }

    ],
  },
]);