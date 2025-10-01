import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Heart, Star } from "lucide-react";
import { Product } from "@/src/types/product";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteClick: (productId: number | string) => void;
}

export const ProductCard = ({
  product,
  isFavorite,
  onFavoriteClick,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-visible hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
      {/* Discount Badge - Using background image */}
      {product.discount && (
        <div className="absolute top-[-4] left-3 z-10 transform -translate-y-1 -translate-x-1">
          <div
            className="text-white text-[11px] font-bold px-3 py-[3px] min-w-[60px] text-center"
            style={{
              backgroundImage: `url("https://cdn2.cellphones.com.vn/x/media/wysiwyg/discount-badge-ui-2025.png")`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {product.discount}
          </div>
        </div>
      )}

      {/* Installment Badge - Using background image */}
      {product.installment && (
        <div className="absolute top-1 right-[-1] z-10 transform -translate-y-1 translate-x-1">
          <div
            className="text-blue-600 text-[11px] font-bold px-3 py-2 min-w-[70px] text-center"
            style={{
              backgroundImage: `url("https://cdn2.cellphones.com.vn/x/media/wysiwyg/zero-ins-badge-ui-2025.png")`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {product.installment}
          </div>
        </div>
      )}

      <div className="p-2">
        {/* Product Image */}
        <div className="flex justify-center mb-3 h-40">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-red-600">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Promotional Badges */}
        <div className="space-y-1 mb-2">
          {product.smemberDiscount && (
            <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded border border-blue-100">
              {product.smemberDiscount}
            </div>
          )}
          {product.studentDiscount && (
            <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded border border-blue-100">
              {product.studentDiscount}
            </div>
          )}
        </div>

        {/* Promo Text - Fixed overflow */}
        <div className="mb-2">
          <p className="text-xs font-medium text-gray-600 line-clamp-3 leading-tight bg-gray-100 px-2 py-1.5 rounded">
            {product.promoText}
          </p>
        </div>

        {/* Footer - Rating & Favorite */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-900">
              {product.rating}
            </span>
          </div>
          <button
            className={`flex items-center gap-1 transition-colors ${
              isFavorite
                ? "text-red-600 hover:text-red-700"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => onFavoriteClick(product.id)}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-600" : ""}`} />
            <span className="text-sm font-medium">
              {isFavorite ? "Đã thích" : "Yêu thích"}
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};