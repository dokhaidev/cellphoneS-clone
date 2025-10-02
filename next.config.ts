import type { NextConfig } from "next";

// Image domains and routing redirects
const nextConfig: NextConfig = {
  // Image configuration
  images: {
    domains: [
      "cdn2.cellphones.com.vn",
      "yt3.googleusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  reactStrictMode: true,

  // Routing redirects
  async redirects() {
    return [
      {
        source: "/tin-cong-nghe",
        destination: "/techNews",
        permanent: true,
      },
      {
        source: "/gioi-thieu",
        destination: "/aboutUs",
        permanent: true,
      },
      {
        source: "/lien-he",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/chinh-sach-bao-mat",
        destination: "/privacyPolicy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
