import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn2.cellphones.com.vn", "yt3.googleusercontent.com", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
