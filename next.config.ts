import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/siddartha-portfolio",
  assetPrefix: "/siddartha-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
