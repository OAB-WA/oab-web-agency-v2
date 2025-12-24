import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import styles from "./Portfolio.module.scss";
import portfolioData from "@/lib/data/portfolio.json";
import type { PortfolioProject } from "@/lib/types/data";

const projects = portfolioData.projects as PortfolioProject[];

interface PortfolioProps {
  showHeader?: boolean;
}

export default function Portfolio({ showHeader = true }: PortfolioProps) {
  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        {showHeader && (
          <div className={styles.devHeader}>
            <span className={styles.label}>
              <Icon name="file" size={14} /> Our Work
            </span>
            <h2>Real Results for Service Businesses</h2>
            <p className={styles.desc}>
              See how we've helped service businesses across the USA increase their leads, 
              bookings, and revenue. These are real numbers from real businesses.
            </p>
          </div>
        )}
        <div className={styles.portfolioGrid}>
          {projects.map((project) => (
            <Link key={project.id} href="/case-studies" className={styles.portfolioCard}>
              <div className={styles.imageBox}>
                <Image
                  src={project.image}
                  width={600}
                  height={320}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.overlayTag}>{project.year}</div>
              </div>
              <div className={styles.contentBox}>
                <div className={styles.textGroup}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className={styles.portfolioLinkBtn}>
                  <Icon name="arrow-right" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

