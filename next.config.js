/** @type {import('next').NextConfig} */
// GitHub Pages: set BASE_PATH in Actions to repo name (e.g. /portfolio) for project pages
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
