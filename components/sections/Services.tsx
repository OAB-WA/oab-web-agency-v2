import Link from "next/link";
import Icon from "../ui/Icon";
import styles from "./Services.module.scss";
import servicesData from "@/lib/data/services.json";
import type { Service } from "@/lib/types/data";

const services = servicesData.services as Service[];

interface ServicesProps {
  showHeader?: boolean;
}

export default function Services({ showHeader = true }: ServicesProps) {
  return (
    <section className={styles.developersSection}>
      <div className="container">
        {showHeader && (
          <div className={styles.devHeader}>
            <span className={styles.label}>
              <Icon name="graduation-cap" size={14} /> Our Services
            </span>
            <h2>Conversion-Focused Services for Service Businesses</h2>
            <p className={styles.desc}>
              Everything we do is designed to help service businesses get more leads, 
              more bookings, and more revenue. We specialize in what drives real results.
            </p>
          </div>
        )}
        <div className={styles.bentoGrid}>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${styles.devCard} ${styles[`card${idx === 0 ? "Ui" : idx === 1 ? "Speed" : idx === 2 ? "Refactor" : idx === 3 ? "Agents" : "Scale"}`]}`}
            >
              {idx === 3 ? (
                <div className={styles.contentSide}>
                  <div className={styles.iconWrapper}>
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                  <div className={styles.modelList}>
                    <div className={styles.modelItem}>
                      <div>
                        <h4>{service.feature}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.iconWrapper}>
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                  <div className={styles.modelList}>
                    <div className={styles.modelItem}>
                      <div>
                        <h4>{service.feature}</h4>
                      </div>
                    </div>
                  </div>
                  {service.hasButton && (
                    <Link href="/services" className={styles.btnWhite}>
                      READ MORE <Icon name="arrow-right" size={12} />
                    </Link>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

