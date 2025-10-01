import {
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Home,
  Plug,
  Monitor,
  Tv,
  RefreshCw,
  Package,
  Percent,
  Newspaper,
} from "lucide-react"
import { Card } from "@/src/components/ui/card"

const categories = [
  { icon: Smartphone, label: "Điện thoại, Tablet" },
  { icon: Laptop, label: "Laptop" },
  { icon: Headphones, label: "Âm thanh, Mic thu âm" },
  { icon: Camera, label: "Đồng hồ, Camera" },
  { icon: Home, label: "Đồ gia dụng" },
  { icon: Plug, label: "Phụ kiện" },
  { icon: Monitor, label: "PC, Màn hình, Máy in" },
  { icon: Tv, label: "Tivi, Máy lạnh, Tủ lạnh" },
  { icon: RefreshCw, label: "Thu cũ đổi mới" },
  { icon: Package, label: "Hàng cũ" },
  { icon: Percent, label: "Khuyến mãi" },
  { icon: Newspaper, label: "Tin công nghệ" },
]

export function LeftSidebar() {
  return (
    <Card className="p-0 overflow-hidden border-border">
      <nav className="divide-y divide-border">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <button
              key={index}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
                <span className="text-sm font-medium">{category.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
            </button>
          )
        })}
      </nav>
    </Card>
  )
}
