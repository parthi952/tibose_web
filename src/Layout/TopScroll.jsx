import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            bg-blue-600 text-white
            p-4 rounded-full shadow-lg
            transition-all duration-300 ease-in-out
            hover:bg-blue-900 hover:scale-110
            cursor-pointer
            active:scale-95
          "
        >
        <img src="arrow-up-337-svgrepo-com.svg" alt="" className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;