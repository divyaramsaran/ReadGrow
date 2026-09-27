/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 10000,
    host: "0.0.0.0",
  },
};

export default nextConfig;
