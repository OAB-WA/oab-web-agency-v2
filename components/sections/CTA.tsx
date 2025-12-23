import Link from "next/link";
import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2>Ready to Get More Leads?</h2>
          <p>Join 150+ service businesses growing with OAB Web Agency. Get your free website audit today.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn-primary button">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="btn-glass button">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

