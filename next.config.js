// Dependencies
const bundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const nextConfig = {
	basePath: baseUrl,
	reactStrictMode: true,
  images: {
	  domains: ['http2.mlstatic.com']
  },
  async rewrites() {
    return [
      {
        source: '/items',
        destination: '/products',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
