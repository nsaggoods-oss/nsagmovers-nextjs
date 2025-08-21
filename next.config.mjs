/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', // 👈 static export mode
  images: {
    unoptimized: true, // 🚀 disable optimization globally
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ don’t block builds on lint errors
  },
};

export default nextConfig;
