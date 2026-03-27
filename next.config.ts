import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/siddartha-portfolio",
  assetPrefix: "/siddartha-portfolio",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/siddartha-portfolio",
  },
};

export default nextConfig;
