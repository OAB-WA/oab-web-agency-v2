import Link from "next/link";
import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Join 500+ companies scaling with AnuTech's digital solutions.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn-primary button">
              Schedule Consultation
            </Link>
            <Link href="/contact" className="btn-glass button">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

