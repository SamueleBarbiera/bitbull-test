import "./src/env.mjs";
import million from "million/compiler";

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

const millionConfig = {
    auto: true,
    // if you're using RSC:
    // auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
