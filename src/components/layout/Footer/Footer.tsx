"use client";

import { Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-[1250px] mx-auto px-4 py-6">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-4 border-b border-gray-300">
          {/* Column 1: Support, Payment & Newsletter */}
          <div className="space-y-6">
            {/* Support */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                Tổng đài hỗ trợ miễn phí
              </h3>
              <div className="space-y-2 text-xs">
                <div className="group">
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Mua hàng - bảo hành </span>
                  <span className="text-red-600 font-bold group-hover:text-red-700 transition-colors duration-200">1800.2097</span>
                  <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-200"> (7h30 - 22h00)</span>
                </div>
                <div className="group">
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Khiếu nại </span>
                  <span className="text-red-600 font-bold group-hover:text-red-700 transition-colors duration-200">1800.2063</span>
                  <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-200"> (8h00 - 21h30)</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                Phương thức thanh toán
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {/* Payment method icons with enhanced hover effects */}
                {[
                  "https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png",
                  "https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png",
                  "https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png",
                  "https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                ].map((src, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded border border-gray-200 flex items-center justify-center h-8 hover:shadow-lg hover:border-red-300 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <img 
                      src={src} 
                      alt="" 
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-1 pt-4">
              <h3 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI
              </h3>
              <div className="space-y-1">
                <p className="text-xs">
                  <span className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 cursor-pointer">
                    Nhận ngay voucher 10%
                  </span>
                </p>
                <p className="text-xs text-gray-500 hover:text-gray-600 transition-colors duration-200">
                  Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
                </p>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-red-500 hover:border-gray-400 transition-all duration-300 focus:shadow-md"
                  />

                  <label className="block text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 mt-3">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại của bạn"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-red-500 hover:border-gray-400 transition-all duration-300 focus:shadow-md"
                  />
                </div>

                <div className="flex items-start gap-2 my-3 group">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200" 
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                    Tôi đồng ý với điều khoản của CellphoneS
                  </label>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-sm font-semibold transition-all duration-300 text-[14px] hover:shadow-lg hover:scale-105 active:scale-95">
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Information & Policies */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
              Thông tin và chính sách
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "Mua hàng và thanh toán Online",
                "Mua hàng trả góp Online",
                "Mua hàng trả góp bằng thẻ tín dụng",
                "Chính sách giao hàng",
                "Chính sách đổi trả",
                "Tra điểm Smember",
                "Xem ưu đãi Smember",
                "Tra thông tin bảo hành",
                "Tra cứu hóa đơn điện tử",
                "Thông tin hóa đơn mua hàng",
                "Trung tâm bảo hành chính hãng",
                "Quy định về việc sao lưu dữ liệu",
                "Chính sách khui hộp sản phẩm Apple",
                "VAT Refund"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-red-600 transition-all duration-300 hover:pl-2 hover:font-medium block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Other Info */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
              Dịch vụ và thông tin khác
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "Khách hàng doanh nghiệp (B2B)",
                "Ưu đãi thanh toán",
                "Quy chế hoạt động",
                "Chính sách bảo mật thông tin cá nhân",
                "Chính sách Bảo hành",
                "Liên hệ hợp tác kinh doanh",
                "Tuyển dụng",
                "Dịch vụ bảo hành mở rộng"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-red-600 transition-all duration-300 hover:pl-2 hover:font-medium block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* App Download Section */}
            <div className="pt-4">
              <h4 className="text-base font-bold text-gray-700 mb-3 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                Mua sắm dễ dàng - Ưu đãi ngập tràn cùng app CellphoneS
              </h4>
              <div className="flex gap-3">
                {/* QR Code */}
                <div className="w-24 h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src="/qrcode-logo.jpg" alt="" className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" />
                </div>
                {/* App Store Buttons */}
                <div className="flex flex-col gap-2">
                  <a href="#" className="hover:scale-105 transition-transform duration-300 block">
                    <img
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                      alt=""
                      width="140"
                      className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    />
                  </a>
                  <a href="#" className="hover:scale-105 transition-transform duration-300 block">
                    <img
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                      alt=""
                      width="140"
                      className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Connect & Partner Websites */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                Kết nối với CellphoneS
              </h4>
              <div className="flex gap-2">
                {/* Social media icons with enhanced hover effects */}
                {[
                  { 
                    bg: "bg-red-600", 
                    hoverBg: "bg-red-700",
                    icon: <Youtube className="w-5 h-5 text-white" />,
                    name: "YouTube"
                  },
                  {
                    bg: "bg-blue-600",
                    hoverBg: "bg-blue-700", 
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    name: "Facebook"
                  },
                  {
                    bg: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
                    hoverBg: "opacity-90",
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    name: "Instagram"
                  },
                  {
                    bg: "bg-black",
                    hoverBg: "bg-gray-800",
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                    name: "TikTok"
                  },
                  {
                    bg: "bg-blue-500",
                    hoverBg: "bg-blue-600",
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                      </svg>
                    ),
                    name: "Zalo"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-8 h-8 ${social.bg} rounded flex items-center justify-center hover:${social.hoverBg} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Partner Websites */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer">
                Website thành viên
              </h4>
              {[
                {
                  desc: "Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính",
                  img: "https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                },
                {
                  desc: "Trung tâm bảo hành ủy quyền Apple", 
                  img: "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                },
                {
                  desc: "Kênh thông tin giải trí công nghệ cho giới trẻ",
                  img: "https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                },
                {
                  desc: "Trang thông tin công nghệ mới nhất",
                  img: "https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                }
              ].map((partner, index) => (
                <div key={index} className="space-y-2 group cursor-pointer">
                  <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                    {partner.desc}
                  </p>
                  <img
                    src={partner.img}
                    alt=""
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="py-3">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2 text-[10px]">
            {[
              "iPhone Air", "Điện thoại", "Laptop", "Đồ gia dụng", "Camera", "iPhone 17",
              "Điện thoại iPhone", "Laptop Acer", "Máy hút bụi gia đình", "Back to school là gì",
              "iPhone 17 Pro", "Xiaomi", "Laptop Dell", "Build PC", "Giá iPhone 17 Pro Max",
              "Điện thoại Samsung Galaxy", "Laptop HP", "Tivi", "iPhone 16", "Điện thoại OPPO",
              "Tivi Samsung", "iPhone 16 Pro Max", "Tivi Sony", "Tivi LG"
            ].map((category, index) => (
              <a 
                key={index}
                href="#" 
                className="hover:text-red-600 transition-all duration-300 hover:font-medium hover:pl-1 block py-1"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Company Info & Copyright */}
        <div className="py-3 text-xs text-gray-500 space-y-3 text-center justify-center">
          <p className="hover:text-gray-700 transition-colors duration-300 cursor-pointer">
            Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật ĐIỆU PHÚC - GPĐKKD:
            0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ
            Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh. Điện
            thoại: 028.7108.9666.
          </p>
          <div className="flex items-center gap-2 text-center justify-center">
            <img
              src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
              alt=""
              width={80}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <img
              src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
              alt=""
              width={80}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}