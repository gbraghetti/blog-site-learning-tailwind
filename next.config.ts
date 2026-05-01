import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
if (!process.env.VELITE_STARTED) {
  process.env.VELITE_STARTED = "1";
  import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }));
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  webpack(config) {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules/**", "**/.git/**"],
    };
    return config;
  },
};

export default nextConfig;
