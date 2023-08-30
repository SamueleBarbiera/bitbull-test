import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    /** We already do linting and typechecking as separate tasks in CI */
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    output: "standalone",
    images: {
        domains: ["https://cdn.shopify.com/", "cdn.shopify.com", "cdn.shopify.com/"],
    },
};

export default nextConfig;
