/** @type {import('next').Config} */
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos'],
    unoptimized: true,
  },
  // 移除 standalone 输出，与 Vercel 兼容
}

module.exports = nextConfig
