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

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(nextConfig);
