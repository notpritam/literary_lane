/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["www.counter-print.co.uk", "www.icons8.com"],
  },
};

module.exports = nextConfig;
