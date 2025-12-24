import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./services.module.scss";

export const metadata: Metadata = {
  title: "Services - Conversion-Focused Website Services",
  description:
    "We offer high-converting website design, lead generation systems, local SEO, conversion optimization, and maintenance for service businesses across the USA.",
  openGraph: {
    title: "Services | OAB Web Agency",
    description:
      "Conversion-focused website services for service businesses. Get more leads, more bookings, and more revenue.",
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
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                <Icon name="graduation-cap" size={14} /> Our Services
              </span>
              <h1>Conversion-Focused Services for Service Businesses</h1>
              <p className={styles.subtitle}>
                Everything we do is designed to help service businesses get more leads,
                more bookings, and more revenue. We specialize in what drives real results.
              </p>
            </div>
          </div>
        </section>
        <Services showHeader={false} />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

