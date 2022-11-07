/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/ScheduLIT",
  assetPrefix:"/ScheduLIT"
}

module.exports = nextConfig
