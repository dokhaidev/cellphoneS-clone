import { Card } from "@/src/components/ui/card"

export function PromoBanner() {
  return (
    <div className="px-4 pb-4 max-w-[1250px] mx-auto">
      <Card className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500 border-0 p-0">
        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/special-b2s-dday3-d.gif" alt="" />
      </Card>
    </div>
  )
}
