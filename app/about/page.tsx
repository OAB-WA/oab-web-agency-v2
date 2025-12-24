import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./about.module.scss";

export const metadata: Metadata = {
  title: "About Us - OAB Web Agency",
  description:
    "We're a remote-first web agency specializing in high-converting websites for service businesses across the United States. Learn about our mission and why we focus on service businesses.",
  openGraph: {
    title: "About Us | OAB Web Agency",
    description:
      "We're a remote-first web agency specializing in high-converting websites for service businesses across the United States.",
  },
};

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "About", url: `${siteConfig.site.url}/about` },
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
                <Icon name="users" size={14} /> About OAB Web Agency
              </span>
              <h1>We Build Websites That Get Results</h1>
              <p className={styles.subtitle}>
                We're a remote-first web agency that specializes in helping service businesses 
                across the United States get more leads, more bookings, and more revenue online.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className="container">
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <h2>Our Mission</h2>
                <p>
                  Service businesses are the backbone of local communities, but many struggle 
                  to compete online. We believe every service business deserves a website 
                  that actually works - one that turns visitors into customers, not just 
                  looks pretty.
                </p>
                <p>
                  That's why we focus exclusively on service businesses. We understand your 
                  unique needs: local customers, online bookings, lead generation, and 
                  building trust. We don't build generic websites - we build conversion 
                  machines designed to grow your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whySection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Choose OAB Web Agency?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="chart-line" size={32} />
                </div>
                <h3>Results-Focused</h3>
                <p>
                  We measure success by the leads and revenue we help generate, not just 
                  how the website looks. Every element is designed to convert visitors 
                  into customers.
                </p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="users" size={32} />
                </div>
                <h3>Service Business Experts</h3>
                <p>
                  We only work with service businesses, so we understand your unique needs: 
                  local SEO, online bookings, lead capture, and building trust with local customers.
                </p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="phone" size={32} />
                </div>
                <h3>USA Business Hours</h3>
                <p>
                  Even though we're remote, we're available during USA business hours 
                  (9 AM - 5 PM EST). All communication is in English, and we respond 
                  within 24 hours.
                </p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="shield-halved" size={32} />
                </div>
                <h3>Proven Track Record</h3>
                <p>
                  We help service businesses across the USA increase their 
                  leads and revenue. Our websites are designed to attract more qualified 
                  leads and drive measurable growth for your business.
                </p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="gear" size={32} />
                </div>
                <h3>Simple Process</h3>
                <p>
                  No confusing tech jargon. We explain everything in plain English and 
                  keep you updated throughout the process. You'll always know what's 
                  happening and when.
                </p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.iconWrapper}>
                  <Icon name="bolt" size={32} />
                </div>
                <h3>Fast Turnaround</h3>
                <p>
                  Most websites are completed in 4-6 weeks. We work efficiently without 
                  cutting corners, so you can start getting leads sooner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.remoteSection}>
          <div className="container">
            <div className={styles.remoteContent}>
              <div className={styles.remoteText}>
                <h2>Remote-First, USA-Focused</h2>
                <p>
                  Being a remote agency allows us to offer competitive pricing while 
                  maintaining high quality. But don't let "remote" worry you - we're 
                  specifically set up to work with USA service businesses.
                </p>
                <ul className={styles.remoteList}>
                  <li>
                    <Icon name="check" size={16} />
                    <span>Available during USA business hours (9 AM - 5 PM EST)</span>
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    <span>Native English-speaking team</span>
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    <span>Deep understanding of USA service business needs</span>
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    <span>Expertise in local SEO and Google My Business</span>
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    <span>24-hour response time guarantee</span>
                  </li>
                </ul>
                <p>
                  We've worked with service businesses in Texas, Florida, California, 
                  New York, and everywhere in between. Location doesn't matter - 
                  results do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
