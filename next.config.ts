import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: ["i.vimeocdn.com"],
  },
  reactStrictMode: false,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Link", value: "<https://player.vimeo.com>; rel=preconnect" },
        { key: "Link", value: "<https://i.vimeocdn.com>; rel=preconnect" },
      ],
    },
  ],
};

const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
export default withNextVideo(nextConfig as NextConfig);
