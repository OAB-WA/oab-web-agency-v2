import Icon from "./Icon";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string;
  description: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className="container">
        {badge && (
          <span className={styles.badge}>
            {badge.icon && <Icon name={badge.icon as any} size={14} />}{" "}
            {badge.text}
          </span>
        )}
        <h2>{title}</h2>
        <p className={styles.subtext}>{description}</p>
      </div>
    </section>
  );
}

