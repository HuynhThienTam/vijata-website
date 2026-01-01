import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "huynhthientam-001-site1.anytempurl.com",
        pathname: "/**",
      },
    ],
    domains: ["www.ville-saintemarie.re"],
  },
};

export default nextConfig;
