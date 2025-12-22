import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5210",
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
