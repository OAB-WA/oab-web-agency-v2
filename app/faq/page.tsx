"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import faqData from "@/lib/data/faq.json";
import styles from "./faq.module.scss";

// Note: Metadata must be in a separate file for client components
// This is handled via layout or a wrapper component in production

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const faqs = faqData.faqs;

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([
          { name: "Home", url: siteConfig.site.url },
          { name: "FAQ", url: `${siteConfig.site.url}/faq` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                <Icon name="comment-dots" size={14} /> Frequently Asked Questions
              </span>
              <h1>Common Questions About Our Services</h1>
              <p className={styles.subtitle}>
                Everything you need to know about working with us. Can't find what you're looking for? 
                <a href="/contact"> Contact us</a> and we'll be happy to help.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.id} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${openFaq === faq.id ? styles.active : ""}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span>{faq.question}</span>
                    <Icon 
                      name="arrow-right" 
                      size={18} 
                      className={`${styles.arrowIcon} ${openFaq === faq.id ? styles.rotated : ""}`}
                    />
                  </button>
                  {openFaq === faq.id && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Still Have Questions?</h2>
              <p>We're here to help. Get in touch and we'll answer any questions you have about your website project.</p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className="btn-primary button">
                  Contact Us
                </a>
                <a href="/case-studies" className="btn-glass button">
                  See Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

