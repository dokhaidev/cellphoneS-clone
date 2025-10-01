interface BrandTabsProps {
  brands: string[];
  selectedBrand: string;
  onBrandSelect: (brand: string) => void;
}

export const BrandTabs = ({ brands, selectedBrand, onBrandSelect }: BrandTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onBrandSelect(brand)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedBrand === brand
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};