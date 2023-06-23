/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Islandweb',
    description: 'Islandweb Repo for Custom Images.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/xsnocrashx/kasm-repo/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
