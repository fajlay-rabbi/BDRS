/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    // Add SVG support as React components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });
    return config;
  },
};

module.exports = nextConfig;
