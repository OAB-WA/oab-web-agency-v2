import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-End Technology Solutions. From initial concept to final deployment, we provide a full spectrum of IT services tailored to scale your business infrastructure.",
  openGraph: {
    title: "Services | AnuTech",
    description:
      "End-to-End Technology Solutions. From initial concept to final deployment, we provide a full spectrum of IT services.",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Services", url: `${siteConfig.site.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <Services showHeader={true} />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

