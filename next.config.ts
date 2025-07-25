import type { NextConfig } from "next";
import withPWA from "next-pwa";

const baseConfig: NextConfig = {
	reactStrictMode: true,
};

const nextConfig = withPWA({
	...baseConfig,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
});

export default nextConfig;