import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/en',
				permanent: true, // Use true for a permanent 308 redirect, false for a temporary 307
			},
		];
	},
};

export default nextConfig;
