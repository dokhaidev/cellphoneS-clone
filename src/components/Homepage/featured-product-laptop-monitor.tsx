"use client";

import { useState } from "react";
import FeaturedLaptops from "@/src/components/Homepage/featured-laptops";
import FeaturedMonitorsPCs from "@/src/components/Homepage/monitor-pc";

export default function FeaturedProductsLaptopMonitor() {
  const [activeTab, setActiveTab] = useState<"laptops" | "monitors">("laptops");

  return (
    <main className="min-h-screen">
      <div className="max-w-[1250px] mx-auto px-4 pt-4">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("laptops")}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all duration-300 rounded-lg relative overflow-hidden group ${
                activeTab === "laptops"
                  ? "text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-600/30"
                  : "text-gray-700 hover:text-red-600 hover:bg-white/80"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeTab === "laptops" ? "scale-110" : "group-hover:scale-110"
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                  />
                </svg>
                LAPTOP
              </span>
              {activeTab !== "laptops" && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("monitors")}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all duration-300 rounded-lg relative overflow-hidden group ${
                activeTab === "monitors"
                  ? "text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-600/30"
                  : "text-gray-700 hover:text-red-600 hover:bg-white/80"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeTab === "monitors" ? "scale-110" : "group-hover:scale-110"
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                  />
                </svg>
                MÀN HÌNH, MÁY TÍNH ĐỂ BÀN
              </span>
              {activeTab !== "monitors" && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-opacity duration-300">
          {activeTab === "laptops" ? <FeaturedLaptops /> : <FeaturedMonitorsPCs />}
        </div>
      </div>
    </main>
  );
}