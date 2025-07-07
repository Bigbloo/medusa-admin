/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@medusajs/dashboard"]
  },
  env: {
    MEDUSA_BACKEND_URL: process.env.MEDUSA_BACKEND_URL || "https://medusa-backend-r6sm.onrender.com"
  }
}

module.exports = nextConfig
