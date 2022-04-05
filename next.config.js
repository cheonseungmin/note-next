const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    switch (process.env.NODE_ENV) {
      case "development":
        return [
          {
            source: "/:path*",
            destination: "https://development/:path*",
          },
        ];
      case "production":
        return [
          {
            source: "/:path*",
            destination: "https://production/:path*",
          },
        ];
      default:
        return [
          {
            source: "/:path*",
            destination: "http://localhost:8080/:path*",
          },
        ];
    }
  },
};

module.exports = withPlugins([nextConfig]);
