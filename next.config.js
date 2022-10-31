/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc', 'sf-stage-s3.s3.us-west-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
