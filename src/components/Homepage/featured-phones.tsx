"use client";

import { useState } from "react";
import { ChevronRight, ChevronUp, Headphones } from "lucide-react";
import { ProductCard } from "@/src/components/common/ProductCard/product-card";
import { BrandTabs } from "@/src/components/common/BrandTab/brand-tab";
import { brands, sampleProducts } from "@/src/data/sampleProducts";
import { Product } from "@/src/types/product";

export default function FeaturedPhones() {
  const [favorites, setFavorites] = useState<Set<number | string>>(new Set());
  const [selectedBrand, setSelectedBrand] = useState("Xem tất cả");

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
      ? sampleProducts
      : sampleProducts.filter((product) => product.brand === selectedBrand);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="mb-6 flex items-center flex-row-reverse sm:flex-row justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            ĐIỆN THOẠI NỔI BẬT NHẤT
          </h1>
          
          {/* Brand Tabs Component */}
          <BrandTabs
            brands={brands}
            selectedBrand={selectedBrand}
            onBrandSelect={setSelectedBrand}
          />
        </div>

        {/* Product Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.has(product.id)}
                onFavoriteClick={handleFavoriteClick}
              />
            ))}
          </div>

          {/* Navigation Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronUp className="w-4 h-4" />
            <span className="font-medium">Lên đầu</span>
          </button>
        </div>

        {/* Contact Button - Fixed Bottom Right */}
        <button className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold z-50">
          <span>Liên hệ</span>
          <Headphones className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
}