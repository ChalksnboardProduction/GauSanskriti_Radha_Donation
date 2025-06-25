/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/donate-radha',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig