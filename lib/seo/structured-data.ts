import siteConfig from "@/lib/data/site-config.json";

export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export function getOrganizationSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.site.company.name,
    url: siteConfig.site.url,
    logo: `${siteConfig.site.url}/images/icons/favicon.png`,
    description: siteConfig.site.description,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [
      siteConfig.site.social.twitter,
      siteConfig.site.social.instagram,
      `https://linkedin.com/company/${siteConfig.site.social.linkedin}`,
      `https://github.com/${siteConfig.site.social.github}`,
    ],
  };
}

export function getWebSiteSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.site.name,
    url: siteConfig.site.url,
    description: siteConfig.site.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.site.company.name,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  provider: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function getPersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image && { image: person.image }),
  };
}

