/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/slgc_trans',
  assetPrefix: '/slgc_trans/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

module.exports = nextConfig;
