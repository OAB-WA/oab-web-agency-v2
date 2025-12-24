import Icon from "../ui/Icon";
import styles from "./TrustBadges.module.scss";

/**
 * TrustBadges Component
 * 
 * Displays trust signals and credibility indicators to build confidence
 * with potential clients. These badges help overcome objections and
 * demonstrate reliability.
 * 
 * Trust signals included:
 * - Response time guarantee
 * - Satisfaction guarantee
 * - Client count
 * - Years in business
 * - Security/Privacy badges
 */
export default function TrustBadges() {
  const badges = [
    {
      icon: "phone",
      text: "24-Hour Response",
      subtext: "We respond fast",
    },
    {
      icon: "shield-halved",
      text: "100% Satisfaction",
      subtext: "Guaranteed",
    },
    {
      icon: "users",
      text: "150+ Clients",
      subtext: "Across the USA",
    },
    {
      icon: "check",
      text: "No Hidden Fees",
      subtext: "Transparent pricing",
    },
  ];

  return (
    <div className={styles.trustBadges}>
      {badges.map((badge, idx) => (
        <div key={idx} className={styles.badge}>
          <div className={styles.iconWrapper}>
            <Icon name={badge.icon as any} size={20} />
          </div>
          <div className={styles.text}>
            <strong>{badge.text}</strong>
            <span>{badge.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

