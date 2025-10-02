import { LeftSidebar } from "@/src/components/Homepage/left-sidebar"
import { RightSidebar } from "@/src/components/Homepage/right-sidebar"
import { PromoBanner } from "@/src/components/Homepage/promo-banner"
import { PromoBannerSlider } from "@/src/components/Homepage/product-tabs"
import FeaturedHomeAppliances from "../components/Homepage/featured-home-appliances"
import FeaturedTV from "../components/Homepage/featured-tv"
import AccessoriesPage from "../components/Homepage/accessories"
import FeaturedProductsPhoneTablet from "../components/Homepage/featured-product-phone-tablet"
import FeaturedProductsLaptopMonitor from "../components/Homepage/featured-product-laptop-monitor"
import FeaturedProductsAudioWatch from "../components/Homepage/featured-product-audio-watch"

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

      {/* Featured Sections */}
      <PromoBanner />
      <FeaturedProductsPhoneTablet />
      <FeaturedProductsLaptopMonitor />
      <FeaturedProductsAudioWatch />
      <FeaturedHomeAppliances />
      <FeaturedTV />
      <AccessoriesPage />
    </div>
  )
}
