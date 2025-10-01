"use client";

import { useState } from "react";
import { ProductCard } from "@/src/components/common/ProductCard/product-card";
import { BrandTabs } from "@/src/components/common/BrandTab/brand-tab";
import { laptopBrands, sampleLaptops } from "@/src/data/sampleLaptops";
import { Product } from "@/src/types/product";

export default function FeaturedLaptops() {
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
      ? sampleLaptops
      : sampleLaptops.filter((product) => product.brand === selectedBrand);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1250px] mx-auto px-4 pt-4">
        <div className="mb-6 flex items-center flex-row-reverse sm:flex-row justify-between">
          <h1 className="text-2xl font-bold text-gray-700">
            LAPTOP
          </h1>
          
          {/* Brand Tabs Component */}
          <BrandTabs
            brands={laptopBrands}
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
        </div>
      </div>
    </main>
  );
}