/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['firebasestorage.googleapis.com'],

        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
        },
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
      },
      ],
    },
  }

export default nextConfig;

