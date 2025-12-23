import Icon from "../ui/Icon";
import styles from "./Stats.module.scss";
import statsData from "@/lib/data/stats.json";
import type { Stat } from "@/lib/types/data";

const stats = statsData.stats as Stat[];

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <div className={styles.pillBadge}>
            <Icon name="shield-halved" size={14} /> Proof In The Numbers
          </div>
          <h2 className={styles.statsTitle}>
            Built to scale, proven to perform.
          </h2>
          <p className={styles.statsDesc}>
            Behind every number is a team achieving more — see how
            high-performing code, speed, and client satisfaction come together
            at AnuTech.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.bigNumber}>{stat.number}</div>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statText}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

