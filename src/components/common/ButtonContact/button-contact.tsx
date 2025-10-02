"use client";

import { useState, useEffect } from "react";
import { ChevronUp, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    window.open("tel:18002097", "_self");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* Nút Lên đầu với text */}
      <button
        onClick={scrollToTop}
        className={`group flex items-center gap-1 bg-[#000000] text-white px-3 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 min-w-[100px] justify-center ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4 pointer-events-none"
        }`}
        aria-label="Lên đầu trang"
      >
        <span className="text-sm font-medium whitespace-nowrap">Lên đầu</span>
        <ChevronUp className="w-5 h-5 flex-shrink-0" />
      </button>

      {/* Nút Liên hệ với text */}
      <button
        onClick={handleContact}
        className="group flex items-center gap-1 bg-[#D70219] text-white px-3 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700 min-w-[100px] justify-center"
        aria-label="Liên hệ"
      >
        <span className="text-sm font-medium whitespace-nowrap">Liên hệ</span>
        <Phone className="w-5 h-5 flex-shrink-0" />
      </button>
    </div>
  );
}