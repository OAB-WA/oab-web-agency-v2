import Image from "next/image";
import Icon from "../ui/Icon";
import styles from "./Testimonials.module.scss";
import testimonialsData from "@/lib/data/testimonials.json";
import type { Testimonial } from "@/lib/types/data";

const testimonialsRow1 = testimonialsData.testimonials.row1 as Testimonial[];
const testimonialsRow2 = testimonialsData.testimonials.row2 as Testimonial[];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.testiHeader}>
          <div className={styles.pillBadge}>
            <Icon name="comment-dots" size={14} /> What Teams Are Saying
          </div>
          <h2>See what our users are saying.</h2>
          <p className={styles.subtext}>
            Real stories from teams who streamlined their workflow and delivered
            more with less.
          </p>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        {/* ROW 1: Scrolling Left */}
        <div className={`${styles.marqueeRow} ${styles.scrollLeft}`}>
          {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, idx) => (
            <div key={`row1-${idx}`} className={styles.testiCard}>
              <div className={styles.cardTop}>
                <Image
                  src={testimonial.image}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className={`${styles.marqueeRow} ${styles.scrollRight}`}>
          {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, idx) => (
            <div key={`row2-${idx}`} className={styles.testiCard}>
              <div className={styles.cardTop}>
                <Image
                  src={testimonial.image}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

