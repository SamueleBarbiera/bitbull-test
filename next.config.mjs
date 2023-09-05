import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    //remove console.log from production build
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    /** We already do linting and typechecking as separate tasks in CI */
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },

    // for the deployment with docker
    output: "standalone",

    images: {
        domains: ["https://cdn.shopify.com/", "cdn.shopify.com", "cdn.shopify.com/"],
    },
};

export default nextConfig;
