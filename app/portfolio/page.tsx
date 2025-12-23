import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our recent case studies in FinTech, Healthcare, and E-commerce. Digital Products that Scale.",
  openGraph: {
    title: "Portfolio | AnuTech",
    description:
      "Explore our recent case studies in FinTech, Healthcare, and E-commerce.",
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

