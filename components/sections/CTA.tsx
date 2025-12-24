import Link from "next/link";
import TrackedLink from "../ui/TrackedLink";
import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2>Ready to Get More Leads?</h2>
          <p>Join 150+ service businesses growing with OAB Web Agency. Get your free website audit today.</p>
          <div className={styles.ctaButtons}>
            <TrackedLink 
              href="/contact" 
              className="btn-primary button"
              eventName="cta_click"
              eventParams={{ 
                cta_location: "cta_section", 
                cta_text: "Get Free Consultation",
                cta_type: "primary"
              }}
            >
              Get Free Consultation
            </TrackedLink>
            <TrackedLink 
              href="/portfolio" 
              className="btn-glass button"
              eventName="cta_click"
              eventParams={{ 
                cta_location: "cta_section", 
                cta_text: "View Case Studies",
                cta_type: "secondary"
              }}
            >
              View Case Studies
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

