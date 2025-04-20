import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: false,
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};
export default nextConfig;
