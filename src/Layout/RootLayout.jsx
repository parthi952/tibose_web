import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TibosFooter from "./TibosFooter";
import TopScroll from "./TopScroll";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import ChatBot from "./ChatBot";
import Lenis from "lenis";
import "lenis/dist/lenis.css";


export default function RootLayout() {
  useEffect(() => {
    // Initialize premium smooth scroll physics
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing inertia
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <TibosFooter />
      <TopScroll />
      <ScrollToTopOnRouteChange />
      <ChatBot />
    </div>
  );
}
