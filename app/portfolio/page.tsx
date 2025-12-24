import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./portfolio.module.scss";

export const metadata: Metadata = {
  title: "Portfolio - Coming Soon | OAB Web Agency",
  description:
    "We're currently working with service businesses across the USA to deliver exceptional results. Portfolio coming soon.",
  openGraph: {
    title: "Portfolio | OAB Web Agency",
    description:
      "We're currently working with service businesses across the USA. Portfolio coming soon.",
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
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                <Icon name="file" size={14} /> Our Work
              </span>
              <h1>Portfolio Coming Soon</h1>
              <p className={styles.subtitle}>
                We're currently working with service businesses across the USA to deliver 
                exceptional results. Our portfolio will be available here soon.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.portfolioSection}>
          <div className="container">
            <div className={styles.comingSoonContent}>
              <div className={styles.iconWrapper}>
                <Icon name="file" size={64} />
              </div>
              <h2>Portfolio Coming Soon</h2>
              <p className={styles.comingSoonText}>
                We're currently working with service businesses across the USA to deliver 
                exceptional results. Our portfolio will be available here soon, showcasing 
                examples of our work and the impact we've made for our clients.
              </p>
              <p className={styles.comingSoonSubtext}>
                In the meantime, we'd love to discuss how we can help your business grow. 
                Get in touch to learn more about our approach and see examples of our work.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary button">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="btn-glass button">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how we can help your service business get more leads and grow your revenue.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary button">
                  Get Free Consultation
                </Link>
                <Link href="/services" className="btn-glass button">
                  View Services
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

