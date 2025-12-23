import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import styles from "./Portfolio.module.scss";
import portfolioData from "@/lib/data/portfolio.json";
import type { PortfolioProject } from "@/lib/types/data";

const projects = portfolioData.projects as PortfolioProject[];

export default function Portfolio() {
  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.portfolioGrid}>
          {projects.map((project) => (
            <Link key={project.id} href={project.url} className={styles.portfolioCard}>
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

