import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const pageIsLong = document.documentElement.scrollHeight > 900;
      const scrolledDown = window.scrollY > 250;
      setVisible(pageIsLong && scrolledDown);
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/9315773460", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 md:gap-2 items-end">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        // animate transform when scroll button appears; remove focus ring
        className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 text-white 
          flex items-center justify-center shadow-xl 
          hover:bg-green-600 hover:scale-110 active:scale-95
          transition-transform transition-all duration-300 cursor-pointer
          focus:outline-none focus:ring-0 active:outline-none
          ${visible ? "-translate-y-4 md:-translate-y-5" : "translate-y-0"}`}
      >
        <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9" />
      </button>

      {/* Scroll-to-Top Button (rendered only when visible) */}
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-indigo-600 text-white 
            flex items-center justify-center shadow-xl 
            hover:bg-indigo-700 hover:scale-110 active:scale-95 
            transition-all duration-300 cursor-pointer
            focus:outline-none focus:ring-0 active:outline-none`}
        >
          <FiChevronUp className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
