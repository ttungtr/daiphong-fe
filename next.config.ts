import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force include PDF files in build output
  outputFileTracingIncludes: {
    "/**": ["./public/pdfs/**/*"],
  },

  async headers() {
    return [
      {
        source: "/pdfs/:path*",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },
};

export default nextConfig;
