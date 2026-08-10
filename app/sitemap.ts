import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.waseet-shop.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services/corporate-websites", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/ecommerce", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/web-applications", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/landing-pages", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work/fit-moment", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
