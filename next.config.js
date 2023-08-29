/** @type {import('next').NextConfig} */
const nextConfig = {
    /** We already do linting and typechecking as separate tasks in CI */
    reactStrictMode: true,
    swcMinify: true,
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    output: "standalone",
};

module.exports = nextConfig;
