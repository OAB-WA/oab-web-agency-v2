import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Case Studies for Service Businesses",
  description:
    "See real results from service businesses we've helped. Case studies showing increased leads, bookings, and revenue for plumbers, electricians, lawyers, and more.",
  openGraph: {
    title: "Portfolio | OAB Web Agency",
    description:
      "See real results from service businesses we've helped across the USA.",
  },
};

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Portfolio", url: `${siteConfig.site.url}/portfolio` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <Portfolio showHeader={true} />
      </main>
      <Footer />
    </>
  );
}

