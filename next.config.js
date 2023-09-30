/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['flagsapi.com']
  },
}

module.exports = nextConfig
