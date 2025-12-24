import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./privacy.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy - OAB Web Agency",
  description: "Privacy Policy for OAB Web Agency. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Privacy Policy", url: `${siteConfig.site.url}/privacy` },
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
              <h1>Privacy Policy</h1>
              <p className={styles.lastUpdated}>Last updated: January 2025</p>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.content}>
              <p>
                At OAB Web Agency, we respect your privacy and are committed to protecting 
                your personal information. This Privacy Policy explains how we collect, 
                use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Business information (business type, location, website URL)</li>
                <li>Information you provide in contact forms or consultations</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about your project or our services</li>
                <li>Process payments and transactions</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With service providers who assist us in operating our business (e.g., email services, payment processors)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure. While we 
                strive to protect your information, we cannot guarantee absolute security.
              </p>

              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve your 
                experience. You can control cookie preferences through your browser settings.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us at{" "}
                <a href={`mailto:${siteConfig.site.social.email || "hello@oabwebagency.com"}`}>
                  hello@oabwebagency.com
                </a>
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

