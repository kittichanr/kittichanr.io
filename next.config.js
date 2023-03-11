const { get } = require('@vercel/edge-config')
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	experimental: {
		appDir: true,
	},
	redirects() {
		try {
			return get('redirects')
		} catch {
			return []
		}
	},
}

module.exports = withContentlayer(nextConfig)
