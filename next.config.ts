/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
