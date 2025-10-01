"use client";

import { useState } from "react";
import FeaturedPhones from "@/src/components/Homepage/featured-phones";
import FeaturedTablets from "@/src/components/Homepage/featured-tablets";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<"phones" | "tablets">("phones");

  return (
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <div className="max-w-[1250px] mx-auto px-4 mb-6">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("phones")}
            className={`px-6 py-3 font-semibold text-base transition-all relative ${
              activeTab === "phones"
                ? "text-red-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Điện thoại
            {activeTab === "phones" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("tablets")}
            className={`px-6 py-3 font-semibold text-base transition-all relative ${
              activeTab === "tablets"
                ? "text-red-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Máy tính bảng
            {activeTab === "tablets" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></div>
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-opacity duration-300">
        {activeTab === "phones" ? <FeaturedPhones /> : <FeaturedTablets />}
      </div>
    </div>
  );
}