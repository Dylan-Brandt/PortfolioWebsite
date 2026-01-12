import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "fridge-wizard.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
