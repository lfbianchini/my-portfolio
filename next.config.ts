/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : undefined, // Replace <repository-name> with your GitHub repo name
  trailingSlash: true,
  images: {
    unoptimized: true, // Prevents Next.js from optimizing images
  },
};

module.exports = nextConfig;
