import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── www → non-www 301 redirect ─────────────────────
  async redirects() {
    return [
      {
        source: "/nova-protect-insurance",
        destination: "/nova-protect-france",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novaprotect.site" }],
        destination: "https://novaprotect.site/:path*",
        permanent: true, // 301
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
