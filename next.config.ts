import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // allow any Unsplash path
      },
      // { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
    ],
  }
};

export default nextConfig;
