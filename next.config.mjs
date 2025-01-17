import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  },
};

export default nextConfig;
