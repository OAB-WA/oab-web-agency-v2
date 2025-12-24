import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQPreview from "@/components/sections/FAQPreview";
import Guarantee from "@/components/sections/Guarantee";
import CTA from "@/components/sections/CTA";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Websites that turn visitors into customers. We build high-converting websites for service businesses across the United States. Get more leads, more bookings, and more revenue.",
  openGraph: {
    title: "OAB Web Agency - High-Converting Websites for Service Businesses",
    description:
      "Websites that turn visitors into customers. We build high-converting websites for service businesses across the United States.",
    url: siteConfig.site.url,
  },
};

export default function Home() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features showHeader={true} />
        <Services showHeader={true} />
        <Process />
        <Stats />
        <Testimonials />
        <FAQPreview />
        <Guarantee />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
