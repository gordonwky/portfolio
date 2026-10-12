import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? "/portfolio" : "",
  assetPrefix: isProduction ? "/portfolio" : "",
  output: isProduction ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
