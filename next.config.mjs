/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore during development
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore during development
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Environment variables for build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  // Optimize for Vercel deployment
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
