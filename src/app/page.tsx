import { LeftSidebar } from "@/src/components/Homepage/left-sidebar"
import { RightSidebar } from "@/src/components/Homepage/right-sidebar"
import { PromoBanner } from "@/src/components/Homepage/promo-banner"
import { PromoBannerSlider } from "@/src/components/Homepage/product-tabs"
import FeaturedPhones from "@/src/components/Homepage/featured-phones"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Layout Container */}
      <div className="flex gap-4 p-4 max-w-[1250px] mx-auto">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0">
          <LeftSidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <PromoBannerSlider />
        </main>

        {/* Right Sidebar Promotions */}
        <aside className="w-70 flex-shrink-0">
          <RightSidebar />
        </aside>
      </div>

      {/* Bottom Full-Width Promo Banner */}
      <PromoBanner />
      <FeaturedPhones />
    </div>
  )
}
