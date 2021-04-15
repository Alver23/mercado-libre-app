// Dependencies
const bundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const nextConfig = {
	basePath: baseUrl,
	reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
