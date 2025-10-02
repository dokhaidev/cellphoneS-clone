"use client";

import { useState, useEffect } from "react";
import { ChevronUp, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút "Lên đầu" khi scroll xuống
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Liên hệ function (có thể mở popup, modal, hoặc chuyển hướng)
  const handleContact = () => {
    // Tuỳ chỉnh hành động khi click liên hệ
    // Ví dụ: mở modal liên hệ, chuyển đến section liên hệ, hoặc gọi điện
    window.open("tel:18002097", "_self");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* Nút Liên hệ - Luôn hiển thị */}
      <button
        onClick={handleContact}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-green-600 hover:to-green-700"
        aria-label="Liên hệ"
      >
        <Phone className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="relative">
            Liên hệ
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-800"></div>
          </div>
        </div>
      </button>

      {/* Nút Lên đầu - Chỉ hiển thị khi scroll xuống */}
      <button
        onClick={scrollToTop}
        className={`group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:from-red-600 hover:to-red-700 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4 pointer-events-none"
        }`}
        aria-label="Lên đầu trang"
      >
        <ChevronUp className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="relative">
            Lên đầu
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-800"></div>
          </div>
        </div>
      </button>
    </div>
  );
}