import Icon from "../ui/Icon";
import styles from "./Guarantee.module.scss";

export default function Guarantee() {
  const guarantees = [
    {
      icon: "shield-halved",
      title: "100% Satisfaction Guarantee",
      description: "We work until you're completely happy with your website. If you're not satisfied, we'll keep improving it at no extra cost.",
    },
    {
      icon: "phone",
      title: "24-Hour Response Time",
      description: "We respond to all messages within 24 hours, usually much faster. You'll never be left wondering what's happening.",
    },
    {
      icon: "check",
      title: "No Surprise Fees",
      description: "The price we quote is the price you pay. No hidden fees, no unexpected charges. Everything is clear from the start.",
    },
    {
      icon: "arrow-trend-up",
      title: "Results-Focused Approach",
      description: "We measure success by the leads and revenue you get, not just how the website looks. Your success is our success.",
    },
  ];

  return (
    <section className={styles.guaranteeSection}>
      <div className="container">
        <div className={styles.guaranteeHeader}>
          <span className={styles.badge}>
            <Icon name="shield-halved" size={14} /> Our Guarantees
          </span>
          <h2>We Stand Behind Our Work</h2>
          <p className={styles.subtitle}>
            We know you're taking a risk working with a new agency. That's why we make these 
            promises to give you peace of mind and confidence in your decision.
          </p>
        </div>

        <div className={styles.guaranteeGrid}>
          {guarantees.map((guarantee, idx) => (
            <div key={idx} className={styles.guaranteeCard}>
              <div className={styles.iconWrapper}>
                <Icon name={guarantee.icon as any} size={32} />
              </div>
              <h3>{guarantee.title}</h3>
              <p>{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

