"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const accessoryCategories = [
  {
    id: 1,
    name: "Phụ kiện Apple",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/pk-apple-tai-nghe.png",
    subcategories: ["Cáp, sạc", "Pin sạc dự phòng", "Ốp lưng - Bao da", "Dán màn hình"]
  },
  {
    id: 2,
    name: "Thẻ nhớ, USB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/the-nho-usb-otg-the-nho-usb.png",
    subcategories: ["Thẻ nhớ MicroSD", "USB Flash Drive", "SSD Portable", "Thẻ nhớ Camera"]
  },
  {
    id: 3,
    name: "Gaming Gear, Playstation",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/gaming-gear-play-staytion.png",
    subcategories: ["Tay cầm chơi game", "Bàn phím cơ", "Chuột gaming", "Playstation"]
  },
  {
    id: 4,
    name: "Sim 4G",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/sim-sim-4g.png",
    subcategories: ["Sim 4G Viettel", "Sim 4G Vinaphone", "Sim 4G Mobifone", "Esim"]
  },
  {
    id: 5,
    name: "Thiết bị mạng",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/thiet-bi-phat-song-wifi-router-wifi.png",
    subcategories: ["Router WiFi", "Repeater WiFi", "Switch", "Modem"]
  },
  {
    id: 6,
    name: "Camera",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/camera-hanh-trinh-trong-nha.png",
    subcategories: ["Camera hành trình", "Camera an ninh", "Action Camera", "Webcam"]
  },
  {
    id: 7,
    name: "Gimbal",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/camera-gimbal.png",
    subcategories: ["Gimbal điện thoại", "Gimbal máy ảnh", "Gimbal Action Cam", "Phụ kiện gimbal"]
  },
  {
    id: 8,
    name: "Flycam",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/camera-flycam.png",
    subcategories: ["DJI Drone", "Flycam giá rẻ", "Phụ kiện flycam", "Pin flycam"]
  },
  {
    id: 9,
    name: "Máy ảnh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/camera-may-anh.png",
    subcategories: ["Máy ảnh DSLR", "Máy ảnh Mirrorless", "Máy ảnh compact", "Lens máy ảnh"]
  },
  {
    id: 10,
    name: "Chuột, bàn phím",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/phu-kien-ban-phim-chuot.png",
    subcategories: ["Chuột không dây", "Bàn phím cơ", "Bàn phím không dây", "Set chuột bàn phím"]
  },
  {
    id: 11,
    name: "Balo, túi xách",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/balo-tui-chong-soc-laptop-17inch.png",
    subcategories: ["Balo laptop", "Túi đeo chéo", "Case máy ảnh", "Túi chống sốc"]
  },
  {
    id: 12,
    name: "Hub chuyển đổi",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/cap-sac-hub.png",
    subcategories: ["Hub USB-C", "Hub HDMI", "Hub đa năng", "Adapter chuyển đổi"]
  },
  {
    id: 13,
    name: "Phụ kiện điện thoại",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/pk-phu-kien-dien-thoai.png",
    subcategories: ["Ốp lưng", "Cáp sạc", "Tai nghe", "Giá đỡ"]
  },
  {
    id: 14,
    name: "Phụ kiện Laptop",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/pk-may-tinh-laptop-camera.png",
    subcategories: ["Túi chống sốc", "Adapter sạc", "Cooling pad", "Docking station"]
  },
  {
    id: 15,
    name: "Pin sạc dự phòng",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/pin-du-phong-20000-mah.png",
    subcategories: ["Sạc dự phòng 10000mAh", "Sạc dự phòng 20000mAh", "Sạc dự phòng siêu nhanh", "Sạc dự phòng mini"]
  },
  {
    id: 16,
    name: "Ốp lưng - Bao da",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/op-bao-da-sam-sung-s24.png",
    subcategories: ["Ốp lưng iPhone", "Ốp lưng Samsung", "Bao da", "Case trong suốt"]
  },
  {
    id: 17,
    name: "Dán màn hình",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/dan-man-hinh-iphone-15.png",
    subcategories: ["Ốp lưng iPhone", "Ốp lưng Samsung", "Bao da", "Case trong suốt"]
  },
  {
    id: 18,
    name: "Cáp, sạc",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/pk-apple-cap-sac.png",
    subcategories: ["Ốp lưng iPhone", "Ốp lưng Samsung", "Bao da", "Case trong suốt"]
  }
];

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1250px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-700">PHỤ KIỆN</h1>
          <Link href="/accessories" className="text-gray-700 hover:underline text-sm">Xem tất cả</Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {accessoryCategories.map((category) => (
            <Link
              key={category.id}
              href={`/accessories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-[#F7F7F7] rounded-2xl p-1 hover:shadow-md transition-shadow duration-200 h-full flex flex-col items-center text-center">
                {/* Category Image */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                {/* Category Name */}
                <h3 className="font-semibold text-gray-800 text-xs leading-tight mb-2 transition-colors">
                  {category.name}
                </h3>
                
                {/* Subcategories (hidden on mobile, show on hover) */}
                <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 p-2">
                  <div className="text-left">
                    {category.subcategories.map((sub, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}