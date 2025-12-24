import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";
import styles from "./terms.module.scss";

export const metadata: Metadata = {
  title: "Terms of Service - OAB Web Agency",
  description: "Terms of Service for OAB Web Agency. Please read these terms before using our services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Terms of Service", url: `${siteConfig.site.url}/terms` },
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
              <h1>Terms of Service</h1>
              <p className={styles.lastUpdated}>Last updated: January 2025</p>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.content}>
              <p>
                By using OAB Web Agency's services, you agree to these Terms of Service. 
                Please read them carefully before engaging our services.
              </p>

              <h2>Services</h2>
              <p>
                OAB Web Agency provides web design, development, and related services for 
                service-based businesses. We will provide services as described in our 
                written proposals and agreements.
              </p>

              <h2>Payment Terms</h2>
              <p>Our standard payment terms are:</p>
              <ul>
                <li>50% deposit required to begin work</li>
                <li>50% balance due upon project completion and client approval</li>
                <li>Payment is due within 7 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
              </ul>

              <h2>Project Timeline</h2>
              <p>
                Project timelines are estimates and may vary based on client responsiveness, 
                scope changes, and other factors. We will keep you informed of any delays 
                and work to complete projects as efficiently as possible.
              </p>

              <h2>Revisions</h2>
              <p>
                Each package includes a specified number of revision rounds. Additional 
                revisions beyond the included amount may incur additional fees. We will 
                discuss any additional work and costs before proceeding.
              </p>

              <h2>Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing content, images, and materials in a timely manner</li>
                <li>Reviewing and approving work within agreed timeframes</li>
                <li>Providing accurate information about their business</li>
                <li>Obtaining necessary licenses or permissions for content</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                Upon final payment, you own the website and its content. We retain the 
                right to use your project in our portfolio and marketing materials unless 
                otherwise agreed in writing.
              </p>

              <h2>Warranties and Guarantees</h2>
              <p>
                We guarantee that our work will be professional and meet the specifications 
                agreed upon. We cannot guarantee specific results such as search engine 
                rankings or lead numbers, as these depend on many factors beyond our control.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable 
                for indirect, incidental, or consequential damages.
              </p>

              <h2>Cancellation</h2>
              <p>
                Either party may cancel a project with written notice. If cancelled by the 
                client, payment is due for work completed up to that point. If cancelled by 
                us, a refund will be provided for uncompleted work.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of 
                our services after changes constitutes acceptance of the new terms.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about these terms, please contact us at{" "}
                <a href={`mailto:${siteConfig.site.social.email || "hello@oabwebagency.com"}`}>
                  hello@oabwebagency.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

