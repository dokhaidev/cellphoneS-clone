import { LeftSidebar } from "@/src/components/Homepage/left-sidebar"
import { RightSidebar } from "@/src/components/Homepage/right-sidebar"
import { PromoBanner } from "@/src/components/Homepage/promo-banner"
import { PromoBannerSlider } from "@/src/components/Homepage/product-tabs"
import FeaturedPhones from "@/src/components/Homepage/featured-phones"
import FeaturedLaptops from "../components/Homepage/featured-laptops"
import FeaturedMonitorsPCs from "../components/Homepage/monitor-pc"
import FeaturedTablets from "../components/Homepage/featured-tablets"
import FeaturedAudio from "../components/Homepage/featured-audio"
import FeaturedSmartWatch from "../components/Homepage/featured-smart-watch"
import FeaturedHomeAppliances from "../components/Homepage/featured-home-appliances"
import FeaturedTV from "../components/Homepage/featured-tv"
import AccessoriesPage from "../components/Homepage/accessories"
import FeaturedProducts from "../components/Homepage/featured-product-phone-tablet"

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
      <FeaturedProducts />
      {/* <FeaturedPhones /> */}
      <FeaturedLaptops />
      <FeaturedMonitorsPCs />
      {/* <FeaturedTablets /> */}
      <FeaturedAudio />
      <FeaturedSmartWatch />
      <FeaturedHomeAppliances />
      <FeaturedTV />
      <AccessoriesPage />
    </div>
  )
}
