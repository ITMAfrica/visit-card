/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.itmafrica.com', 'itmafrica.blob.core.windows.net'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: 'http://localhost:3000'
            }
        ]
    }
};

export default nextConfig;
