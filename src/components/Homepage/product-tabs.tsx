"use client"

import { Card } from "@/src/components/ui/card"
import { useState } from "react"
import { Smartphone, Headphones, Zap, Gift, Star } from "lucide-react"

const promoData = [
  {
    id: 1,
    title: "IPHONE 17",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_iPhone_17_Pro_Opensale_v3.png",
    description: "Mua ngay",
    icon: Smartphone,
    badge: "NEW"
  },
  {
    id: 2,
    title: "GALAXY S25",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/s25-home-1025.png",
    description: "Giá tốt",
    icon: Smartphone,
    badge: "HOT",
    active: true
  },
  {
    id: 3,
    title: "XIAOMI 15T",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/xiaomi-15t-5g-home-0925.png",
    description: "Ưu đãi 5tr++",
    icon: Smartphone,
    badge: "SALE"
  },
  {
    id: 4,
    title: "AIRPODS PRO 3",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/home-app3-opensale.jpg",
    description: "Nhanh tay",
    icon: Headphones,
    badge: "NEW"
  },
  {
    id: 5,
    title: "HONOR MAGIC",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/honor-magic-v5-home.png",
    description: "Quà 12 triệu",
    icon: Smartphone,
    badge: "GIFT"
  }
]

export function PromoBannerSlider() {
  const [activePromo, setActivePromo] = useState(2)

  const currentPromo = promoData.find(promo => promo.id === activePromo) || promoData[1]

  return (
    <div className="w-full mx-auto">
      {/* Banner chính */}
      <Card className="relative overflow-hidden border-0 p-0 h-[400px] rounded-xl">
        <img
          src={currentPromo.image}
          alt={currentPromo.title}
          className="w-full h-full object-cover"
        />
      </Card>

      {/* Product Tabs - Clean design */}
      <div className="mt-6">
        <div className="grid grid-cols-5 gap-3">
          {promoData.map((product) => {
            const IconComponent = product.icon
            const isActive = product.id === activePromo
            
            return (
              <Card
                key={product.id}
                className={`
                  relative p-3 cursor-pointer transition-all duration-300 text-center
                  border border-gray-200 min-h-[80px] flex items-center justify-center
                  bg-gray-50/80 hover:bg-gray-100/80
                  ${isActive ? "border-b-4 border-b-[#DC2637] bg-white shadow-sm" : ""}
                `}
                onClick={() => setActivePromo(product.id)}
              >
                {/* Badge */}
                {product.badge && (
                  <div className={`
                    absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold
                    bg-[#DC2637] text-white
                  `}>
                    {product.badge}
                  </div>
                )}

                <div className="flex flex-col items-center gap-2 w-full">
                  {/* Icon */}
                  <div className={`
                    p-2 rounded-lg transition-colors
                    ${isActive ? "bg-[#DC2637]/10" : "bg-white"}
                  `}>
                    <IconComponent className={`
                      w-5 h-5 transition-colors
                      ${isActive ? "text-[#DC2637]" : "text-gray-600"}
                    `} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center flex-1">
                    <p className={`
                      font-bold text-sm whitespace-nowrap transition-colors
                      ${isActive ? "text-[#DC2637]" : "text-gray-900"}
                    `}>
                      {product.title}
                    </p>
                    <p className={`
                      text-xs transition-colors mt-1
                      ${isActive ? "text-[#DC2637]/80" : "text-gray-600"}
                    `}>
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}