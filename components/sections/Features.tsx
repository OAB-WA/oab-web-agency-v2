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
            <Icon name="users" size={14} /> AGENCY CAPABILITIES
          </span>
          <h2 className={styles.heroTitle}>
            Explore the Power of AnuTech Solutions
          </h2>
          <p className={styles.heroDesc}>
            Discover how AnuTech transforms complex challenges into actionable
            results. Our advanced methodologies are designed to optimize business
            workflows.
          </p>
        </div>
      )}
      <div className={styles.featureCard}>
        <div className={styles.cardContent}>
          <h2>Seamless Data Integration Process</h2>
          <p className={styles.cardDesc}>
            Effortlessly connect your business systems with diverse data
            sources, ensuring smooth flow for real-time insights and accurate
            analysis.
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
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5"></path>
                </svg>
              </div>
              <span>Enterprise Architecture</span>
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
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <span>Real-Time Cloud Sync</span>
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
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <span>Custom API Development</span>
            </li>
          </ul>
        </div>

        <div className={styles.cardVisual}>
          <div className={styles.glowBlob}></div>
          <div className={styles.glassMockup}>
            <div className={styles.mockupHeader}>
              <span>Growth</span>
              <strong>Market Analysis</strong>
            </div>
            <div className={styles.mockupChart}>
              <div className={styles.bar} style={{ height: "40%" }}></div>
              <div className={styles.bar} style={{ height: "70%" }}></div>
              <div className={styles.bar} style={{ height: "50%" }}></div>
              <div className={styles.bar} style={{ height: "90%" }}></div>
            </div>
            <div className={styles.mockupFooter}>
              <span>Current Status: Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

