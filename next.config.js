/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
