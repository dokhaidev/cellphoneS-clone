"use client";

import { useState } from "react";
import { ProductCard } from "@/src/components/common/ProductCard/product-card";
import { BrandTabs } from "@/src/components/common/BrandTab/brand-tab";
import { tvBrands, sampleTVs } from "@/src/data/sampleTVs";
import { Product } from "@/src/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedTV() {
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
      ? sampleTVs
      : sampleTVs.filter((product) => product.brand === selectedBrand);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex < filteredProducts.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get current visible products (5 products at a time)
  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + 5);

  return (
    <main className="h-auto">
      <div className="max-w-[1250px] mx-auto px-4 pt-4">
        <div className="mb-6 flex items-center flex-row-reverse sm:flex-row justify-between">
          <h1 className="text-2xl font-bold text-gray-700">
            TIVI
          </h1>
          
          {/* Brand Tabs Component */}
          <BrandTabs
            brands={tvBrands}
            selectedBrand={selectedBrand}
            onBrandSelect={(brand) => {
              setSelectedBrand(brand);  
              setCurrentIndex(0);
            }}
          />
        </div>

        {/* Product Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {currentIndex < filteredProducts.length - 5 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.has(product.id)}
                onFavoriteClick={handleFavoriteClick}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}