import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    ...(isDev ? { unoptimized: true } : {}),
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
