import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import pricingData from "@/lib/data/pricing.json";
import type { Metadata } from "next";
import styles from "./pricing.module.scss";

export const metadata: Metadata = {
  title: "Pricing - Value-Based Website Packages for Service Businesses",
  description:
    "Outcome-focused pricing for service businesses. Packages designed to get you more leads, calls, and bookings. Starting at $1,000.",
  openGraph: {
    title: "Pricing | OAB Web Agency",
    description:
      "Outcome-focused pricing for service businesses. Packages designed to get you more leads, calls, and bookings.",
  },
};

export default function PricingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Pricing", url: `${siteConfig.site.url}/pricing` },
  ]);

  const packages = pricingData.packages;
  const monthlySupport = pricingData.monthlySupport;
  const disclaimer = pricingData.disclaimer;

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
                <Icon name="file" size={14} /> Transparent Pricing
              </span>
              <h1>Value-Based Pricing That Gets Results</h1>
              <p className={styles.subtitle}>
                We focus on what matters: more leads, more calls, more bookings. Choose the package 
                that matches your growth goals. All pricing is based on outcomes, not hours or pages.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className="container">
            <div className={styles.pricingGrid}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.pricingCard} ${pkg.popular ? styles.popular : ""}`}
                >
                  {pkg.popular && (
                    <div className={styles.popularBadge}>Most Popular</div>
                  )}
                  <div className={styles.cardHeader}>
                    <h3>{pkg.name}</h3>
                    <div className={styles.priceRange}>
                      <span className={styles.priceAmount}>{pkg.priceRange}</span>
                    </div>
                    <p className={styles.packagePositioning}>{pkg.positioning}</p>
                  </div>

                  <div className={styles.featuresList}>
                    <h4>What's Included:</h4>
                    <ul>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>
                          <Icon name="check" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.outcomes && (
                    <div className={styles.outcomesList}>
                      <h4>What You'll Get:</h4>
                      <ul>
                        {pkg.outcomes.map((outcome, idx) => (
                          <li key={idx}>
                            <Icon name="arrow-trend-up" size={16} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className={styles.cardFooter}>
                    <Link
                      href="/contact"
                      className={`${styles.ctaButton} ${pkg.popular ? styles.primary : styles.secondary}`}
                    >
                      Get Started
                    </Link>
                    <p className={styles.note}>
                      {disclaimer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {monthlySupport && (
          <section className={styles.monthlySupportSection}>
            <div className="container">
              <div className={styles.monthlySupportContent}>
                <div className={styles.monthlySupportHeader}>
                  <h2>{monthlySupport.title}</h2>
                  <p className={styles.monthlySupportDesc}>{monthlySupport.description}</p>
                  <div className={styles.monthlySupportPrice}>
                    <span className={styles.priceRange}>{monthlySupport.priceRange}</span>
                  </div>
                </div>
                <div className={styles.monthlySupportBenefits}>
                  <h3>What's Included:</h3>
                  <ul>
                    {monthlySupport.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <Icon name="check" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className={styles.monthlySupportNote}>
                  Optional but highly recommended for ongoing growth and optimization.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqContent}>
              <h2>Common Pricing Questions</h2>
              <div className={styles.faqItems}>
                <div className={styles.faqItem}>
                  <h4>Do I have to pay for monthly maintenance?</h4>
                  <p>
                    No, it's optional. But we highly recommend it because it keeps your website 
                    secure, backed up, and updated. Without it, you'll need to handle updates 
                    yourself or pay per change. Most clients find the monthly fee saves them 
                    time and money in the long run.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What if I want to cancel monthly maintenance later?</h4>
                  <p>
                    No problem! You can cancel anytime. Your website will stay online, but you'll 
                    need to handle updates and security yourself. You can always restart maintenance 
                    if you change your mind.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Do I pay everything upfront?</h4>
                  <p>
                    No. We work with a 50% deposit to start building, and the remaining 50% 
                    when your website is complete and you're happy with it. Monthly maintenance 
                    starts after your website launches.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What if I need changes after launch?</h4>
                  <p>
                    If you have monthly maintenance, small changes are included. Bigger changes 
                    might have a small fee. If you don't have maintenance, we charge per update 
                    or you can make basic changes yourself (we'll show you how).
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Why price ranges instead of exact prices?</h4>
                  <p>
                    Every business is different. The final price depends on your specific needs, 
                    business size, and goals. During our free consultation, we'll discuss your 
                    requirements and provide an exact quote tailored to your business.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Can I upgrade my package later?</h4>
                  <p>
                    Absolutely! As your business grows, you can upgrade to get more features and 
                    better results. We'll work with you to add what you need when you need it.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What if I'm not sure which package I need?</h4>
                  <p>
                    No problem! Schedule a free consultation and we'll discuss your business goals, 
                    current situation, and recommend the package that will get you the best results.
                  </p>
                </div>
              </div>
              <div className={styles.faqCta}>
                <Link href="/faq" className={styles.faqLink}>
                  See All FAQs <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss which package is right for your business. Free consultation, no obligation.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-primary button">
                  Get Free Consultation
                </Link>
                <Link href="/case-studies" className="btn-glass button">
                  See Case Studies
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

