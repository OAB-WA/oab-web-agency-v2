import Icon from "../ui/Icon";
import styles from "./Partners.module.scss";
import partnersData from "@/lib/data/partners.json";
import type { Partner } from "@/lib/types/data";

const partners = partnersData.partners as Partner[];

export default function Partners() {
  return (
    <div className={styles.partnersSection}>
      <div className="container">
        <div className={styles.logoMarquee}>
          <div className={styles.marqueeTrack}>
            {/* Set 1 */}
            {partners.map((partner, idx) => (
              <div key={`set1-${idx}`} className={styles.partnerItem}>
                <Icon name={partner.icon as any} size={28} />
                <span>{partner.name}</span>
              </div>
            ))}
            {/* Set 2 (Duplicate for seamless loop) */}
            {partners.map((partner, idx) => (
              <div key={`set2-${idx}`} className={styles.partnerItem}>
                <Icon name={partner.icon as any} size={28} />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

