/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['ts', 'tsx', 'js'],
}

module.exports = {
    skipMiddlewareUrlNormalize: true,
    nextConfig,
}
