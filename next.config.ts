import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true
  // },
  experimental: {
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c327107.parspack.net',
        port: '',
        pathname: '**',
      },
    ]
  }
};

export default nextConfig;
