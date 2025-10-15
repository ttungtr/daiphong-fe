import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force include PDF files in build output
  outputFileTracingIncludes: {
    "/**": ["./public/pdfs/**/*"],
  },

  // Ensure static files are served correctly
  async headers() {
    return [
      {
        source: "/pdfs/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
