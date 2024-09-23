/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer') // eslint-disable-line
const debug = process.env.NODE_ENV == 'development';

const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap'); // eslint-disable-line
      require('./scripts/generate-rss'); // eslint-disable-line
    }

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/], // Safeguard if not exists
          },
          use: ['@svgr/webpack'],
        },
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
});

module.exports = nextConfig
