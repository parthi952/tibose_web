import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TibosFooter from "./TibosFooter";
import TopScroll from "./TopScroll";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import ChatBot from "./ChatBot";


export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <TibosFooter/>
      <TopScroll/>
      <ScrollToTopOnRouteChange/>
      <ChatBot/>
    </div>
  );
}
