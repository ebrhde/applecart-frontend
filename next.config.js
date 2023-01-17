/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    console.log('rewrite')
    return [
      {
        source: '/next-api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  reactStrictMode: true
}