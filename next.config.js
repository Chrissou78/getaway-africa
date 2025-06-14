/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],

  webpack(config, { isServer }) {
    if (!isServer) {
      // Désactive complètement la minification CSS pendant le build
      config.optimization.minimize = false;
      if (config.optimization.minimizer) {
        config.optimization.minimizer = [];
      }
    }
    return config;
  },
};


module.exports = nextConfig;
