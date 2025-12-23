import { MetadataRoute } from "next";
import siteConfig from "@/lib/data/site-config.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.site.url}/sitemap.xml`,
  };
}

