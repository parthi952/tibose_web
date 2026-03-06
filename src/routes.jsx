import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home";
import RootLayout from "./Layout/RootLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Navbar always visible
    children: [
      
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);