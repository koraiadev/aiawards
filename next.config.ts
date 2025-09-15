import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/aiawards',
    assetPrefix: '/aiawards',
};

export default nextConfig;
