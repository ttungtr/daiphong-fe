import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/dashboard/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/dashboard/"],
      },
    ],
    sitemap: "https://philongcorp.vn/sitemap.xml",
    host: "https://philongcorp.vn",
  };
}
