import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./case-studies.module.scss";

export const metadata: Metadata = {
  title: "Case Studies - Coming Soon | OAB Web Agency",
  description:
    "We're currently working with service businesses across the USA to deliver exceptional results. Case studies coming soon.",
  openGraph: {
    title: "Case Studies | OAB Web Agency",
    description:
      "We're currently working with service businesses across the USA. Case studies coming soon.",
  },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Case Studies", url: `${siteConfig.site.url}/case-studies` },
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
                <Icon name="file" size={14} /> Success Stories
              </span>
              <h1>Case Studies Coming Soon</h1>
              <p className={styles.subtitle}>
                We're currently working with service businesses across the USA to deliver 
                exceptional results. Our case studies will be available here soon.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.caseStudiesSection}>
          <div className="container">
            <div className={styles.comingSoonContent}>
              <div className={styles.iconWrapper}>
                <Icon name="file" size={64} />
              </div>
              <h2>Case Studies Coming Soon</h2>
              <p className={styles.comingSoonText}>
                We're currently working with service businesses across the USA to deliver 
                exceptional results. Our case studies will be available here soon, showcasing 
                real growth and success stories from our clients.
              </p>
              <p className={styles.comingSoonSubtext}>
                In the meantime, we'd love to discuss how we can help your business grow. 
                Get in touch to learn more about our approach and see examples of our work.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary button">
                  Get Free Consultation
                </Link>
                <Link href="/portfolio" className="btn-glass button">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Get Similar Results?</h2>
              <p>Let's discuss how we can help your service business get more leads and grow your revenue.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary button">
                  Get Free Consultation
                </Link>
                <Link href="/portfolio" className="btn-glass button">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

