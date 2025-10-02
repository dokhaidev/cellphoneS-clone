import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import FloatingButtons from "../components/common/ButtonContact/button-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CellphoneS - Chuyên bán lẻ điện thoại, máy tính bảng, laptop, phụ kiện chính hãng",
  icons: {
    icon: "https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj",
    shortcut: "https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj",
    apple: "https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj",
  },
  openGraph: {
    title: "CellphoneS - Chuyên bán lẻ điện thoại, máy tính bảng, laptop, phụ kiện chính hãng",
    description: "CellphoneS - Địa chỉ uy tín chuyên bán lẻ điện thoại, máy tính bảng, laptop, phụ kiện chính hãng",
    images: [
      {
        url: "https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj",
        width: 900,
        height: 900,
        alt: "CellphoneS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CellphoneS - Chuyên bán lẻ điện thoại, máy tính bảng, laptop, phụ kiện chính hãng",
    description: "CellphoneS - Địa chỉ uy tín chuyên bán lẻ điện thoại, máy tính bảng, laptop, phụ kiện chính hãng",
    images: ["https://yt3.googleusercontent.com/rK8cTvkOXk2t-f1xlBTsyx4VtHjrKWdBPKHaMTUdxTuQBY3oZ8Gok-H2NZPwp3aJAYO_cRLO=s900-c-k-c0x00ffffff-no-rj"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}