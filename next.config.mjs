/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.56',
        port: '3000',
        pathname: '/uploads/**',
      },
       {
         protocol: 'http',
         hostname: '192.168.1.60',
         port: '3000',
         pathname: '/uploads/**',
       },
       {
         protocol: 'http',
         hostname: '192.168.1.47',
         port: '3000',
         pathname: '/uploads/**',
       },
       {
         protocol: 'https',
         hostname: 'picsum.photos',
         pathname: '/**',
       },
    ],
  },
};

export default nextConfig;
