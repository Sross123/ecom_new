const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || "https://api.akkukachasma.com/api/",
    BASE_IMAGE_URL: process.env.NASE_IMAGE_URL || 'https://akkukachasma.s3.amazonaws.com/product_images/'
  },
  images: {
    domains: ['https://akkukachasma.s3.amazonaws.com/product_images/'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
