/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.cnn.com",
      },
    ],
  },
};

export default nextConfig;
