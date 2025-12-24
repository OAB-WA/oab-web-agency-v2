import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import caseStudiesData from "@/lib/data/case-studies.json";
import type { Metadata } from "next";
import styles from "./case-studies.module.scss";

export const metadata: Metadata = {
  title: "Case Studies - Real Results for Service Businesses",
  description:
    "See how we've helped service businesses across the USA increase their leads, bookings, and revenue. Real results from real businesses.",
  openGraph: {
    title: "Case Studies | OAB Web Agency",
    description:
      "See how we've helped service businesses across the USA increase their leads, bookings, and revenue.",
  },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Case Studies", url: `${siteConfig.site.url}/case-studies` },
  ]);

  const caseStudies = caseStudiesData.caseStudies;

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
              <h1>Real Results for Service Businesses</h1>
              <p className={styles.subtitle}>
                See how we've helped service businesses across the USA increase their leads, 
                bookings, and revenue. These are real numbers from real businesses.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.caseStudiesSection}>
          <div className="container">
            <div className={styles.caseStudiesGrid}>
              {caseStudies.map((study) => (
                <div key={study.id} className={styles.caseStudyCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={study.image}
                      width={600}
                      height={400}
                      alt={study.title}
                      className={styles.caseImage}
                    />
                    <div className={styles.highlightBadge}>
                      {study.highlight}
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.tags}>
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <h3>{study.title}</h3>
                    <p className={styles.description}>{study.description}</p>
                    
                    <div className={styles.metrics}>
                      <div className={styles.metricItem}>
                        <span className={styles.metricLabel}>Before</span>
                        <span className={styles.metricValue}>{study.metrics.before.leads}</span>
                        <span className={styles.metricSubtext}>leads per month</span>
                      </div>
                      <div className={styles.metricArrow}>
                        <Icon name="arrow-right" size={20} />
                      </div>
                      <div className={styles.metricItem}>
                        <span className={styles.metricLabel}>After</span>
                        <span className={styles.metricValue}>{study.metrics.after.leads}</span>
                        <span className={styles.metricSubtext}>leads per month</span>
                      </div>
                    </div>

                    <Link href={study.url} className={styles.readMoreBtn}>
                      Read Full Case Study <Icon name="arrow-right" size={14} />
                    </Link>
                  </div>
                </div>
              ))}
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

