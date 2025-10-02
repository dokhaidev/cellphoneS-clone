"use client";

import { useState } from "react";
import { ProductCard } from "@/src/components/common/ProductCard/product-card";
import { BrandTabs } from "@/src/components/common/BrandTab/brand-tab";
import { smartWatchBrands, sampleSmartWatches } from "@/src/data/sampleSmartWatches";
import { Product } from "@/src/types/product";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedSmartWatch() {
  const [favorites, setFavorites] = useState<Set<number | string>>(new Set());
  const [selectedBrand, setSelectedBrand] = useState("Xem tất cả");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFavoriteClick = (productId: number | string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  // Filter products based on selected brand
  const filteredProducts: Product[] =
    selectedBrand === "Xem tất cả"
      ? sampleSmartWatches
      : sampleSmartWatches.filter((product) => product.brand === selectedBrand);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex + 8 < filteredProducts.length) {
      setCurrentIndex(currentIndex + 8);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 8 >= 0) {
      setCurrentIndex(currentIndex - 8);
    }
  };

  // Get current visible products (8 products at a time)
  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + 8);

  // Check navigation states
  const canGoNext = currentIndex + 8 < filteredProducts.length;
  const canGoPrev = currentIndex > 0;

  return (
    <main className="min-h-screen">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="mb-6 flex items-center flex-row-reverse sm:flex-row justify-between">
          <h1 className="text-2xl font-bold text-gray-700">
            ĐỒNG HỒ THÔNG MINH
          </h1>
          
          {/* Brand Tabs Component */}
          <BrandTabs
            brands={smartWatchBrands}
            selectedBrand={selectedBrand}
            onBrandSelect={(brand) => {
              setSelectedBrand(brand);  
              setCurrentIndex(0);
            }}
          />
        </div>

        {/* Main Content with Banner and Products */}
        <div className="flex gap-6">
          {/* Vertical Banner - Left Side */}
          <div className="hidden lg:block w-[20%]">
            <div className="top-4">
              <div className="rounded-lg overflow-hidden h-[600px] relative">
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:214:530/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F050R8WY7PZK75J36ST4CV.png"
                  alt="Banner quảng cáo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="rounded-lg overflow-hidden h-[220px] relative mt-5">
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/gian-hang-samsung-home.png"
                  alt="Banner quảng cáo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Grid - 4 columns with slider */}
          <div className="flex-1 relative">
            {/* Navigation Arrows */}
            {filteredProducts.length > 8 && (
              <>
                {canGoPrev && (
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-[52%] -translate-y-1/2 -translate-x-4 z-1000 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors border border-gray-200"
                    aria-label="Previous products"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}

                {canGoNext && (
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-[52%] -translate-y-1/2 translate-x-4 z-1000 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors border border-gray-200"
                    aria-label="Next products"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                )}
              </>
            )}

            {/* Product Grid - 2 rows of 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.has(product.id)}
                  onFavoriteClick={handleFavoriteClick}
                />
              ))}
              
              {/* Show empty states if less than 8 products in current page */}
              {visibleProducts.length < 8 &&
                Array.from({ length: 8 - visibleProducts.length }).map((_, index) => (
                  <div key={`empty-${index}`} className="invisible">
                    <div className="h-0"></div>
                  </div>
                ))
              }
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center mt-6 text-gray-500 py-8">
                Không có sản phẩm nào thuộc thương hiệu này
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}