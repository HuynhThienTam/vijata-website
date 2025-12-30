import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //     port: "5210",
    //     pathname: "/**",
    //   },
    // ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "huynhthientam-001-site1.anytempurl.com",
        pathname: "/**",
      },
    ],
    domains: [
      "www.ville-saintemarie.re",
      // thêm các domain khác nếu cần
    ],
  },
};

export default nextConfig;
