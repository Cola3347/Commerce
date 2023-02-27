/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'www.ilanga-nature.com',
        hostname: 'http://localhost:1337',
        
      },
    ],
  },
}
