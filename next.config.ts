import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "nc4uvh6pr4lf9jay.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
