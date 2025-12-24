import Icon from "../ui/Icon";
import styles from "./Process.module.scss";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We discuss your business, goals, and what you need. No pressure, just honest advice about what will work best for you.",
      icon: "phone",
    },
    {
      number: "02",
      title: "Build Your Website",
      description: "We build your website with all the features you need, customized for your business. You'll see progress updates along the way.",
      icon: "laptop-code",
    },
    {
      number: "03",
      title: "Launch & Support",
      description: "We launch your website and make sure everything works perfectly. Then we're here to help whenever you need us.",
      icon: "bolt",
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.processHeader}>
          <span className={styles.badge}>
            <Icon name="gear" size={14} /> How It Works
          </span>
          <h2>Simple Process, Clear Results</h2>
          <p className={styles.subtitle}>
            We make it easy. From our first conversation to launching your website, 
            you'll always know what's happening and when. No surprises, no confusion.
          </p>
        </div>

        <div className={styles.processSteps}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>
                <Icon name={step.icon as any} size={32} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <Icon name="check" size={20} />
            <span>Timeline: 2-4 weeks from start to finish</span>
          </div>
          <div className={styles.timelineItem}>
            <Icon name="check" size={20} />
            <span>Updates: You'll see progress every step of the way</span>
          </div>
          <div className={styles.timelineItem}>
            <Icon name="check" size={20} />
            <span>Support: We're here to help, even after launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}

