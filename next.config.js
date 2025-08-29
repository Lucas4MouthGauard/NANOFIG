/** @type {import('next').Config} */
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos'],
    unoptimized: true,
  },
  output: 'standalone',
}

module.exports = nextConfig
