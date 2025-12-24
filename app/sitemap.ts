import { MetadataRoute } from "next";
import siteConfig from "@/lib/data/site-config.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.site.url;

  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/case-studies",
    "/faq",
    "/pricing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

