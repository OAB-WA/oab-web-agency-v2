import Icon from "../ui/Icon";
import styles from "./Features.module.scss";

interface FeaturesProps {
  showHeader?: boolean;
}

export default function Features({ showHeader = true }: FeaturesProps) {
  return (
    <section className={styles.fluenceSection}>
      {showHeader && (
        <div className={styles.fluenceHeader}>
          <span className={styles.badge}>
            <Icon name="users" size={14} /> CONVERSION FEATURES
          </span>
          <h2 className={styles.heroTitle}>
            Built to Convert Visitors Into Customers
          </h2>
          <p className={styles.heroDesc}>
            Every feature is designed with one goal in mind: turning website visitors 
            into leads and customers. We focus on what drives real results for service businesses.
          </p>
        </div>
      )}
      <div className={styles.featureCard}>
        <div className={styles.cardContent}>
          <h2>Conversion-Optimized Features That Drive Results</h2>
          <p className={styles.cardDesc}>
            Our websites are built with conversion-focused features that help service businesses 
            capture more leads, book more appointments, and grow their revenue. Every element 
            is designed to turn visitors into customers.
          </p>

          <ul className={styles.featureList}>
            <li>
              <div className={styles.iconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <span>Lead Capture Forms & Booking Systems</span>
            </li>
            <li>
              <div className={styles.iconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <span>Mobile-First Design (70% of searches are mobile)</span>
            </li>
            <li>
              <div className={styles.iconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <span>Fast Loading Times (affects conversions & SEO)</span>
            </li>
          </ul>
        </div>

        <div className={styles.cardVisual}>
          <div className={styles.glowBlob}></div>
          <div className={styles.glassMockup}>
            <div className={styles.mockupHeader}>
              <span>Leads</span>
              <strong>Monthly Growth</strong>
            </div>
            <div className={styles.mockupChart}>
              <div className={styles.bar} style={{ height: "40%" }}></div>
              <div className={styles.bar} style={{ height: "70%" }}></div>
              <div className={styles.bar} style={{ height: "85%" }}></div>
              <div className={styles.bar} style={{ height: "95%" }}></div>
            </div>
            <div className={styles.mockupFooter}>
              <span>Current Status: 3x Lead Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

