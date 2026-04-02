const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dentals-clinic.netlify.app',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

module.exports = nextConfig;
