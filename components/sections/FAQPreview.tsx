import Link from "next/link";
import Icon from "../ui/Icon";
import styles from "./FAQPreview.module.scss";

export default function FAQPreview() {
  const topFAQs = [
    {
      question: "How much does a website cost?",
      answer: "Our packages start at $1,000-$1,250 for a basic website, up to $3,500-$5,000 for a complete conversion-focused solution. The exact price depends on your business size and goals.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically 4-6 weeks from start to finish. We'll keep you updated every step of the way so you always know where things stand.",
    },
    {
      question: "Will I see more leads after launch?",
      answer: "Most clients see an increase in leads within 60-90 days. We focus on conversion optimization and local SEO to help you get found and get more customers.",
    },
  ];

  return (
    <section className={styles.faqPreviewSection}>
      <div className="container">
        <div className={styles.faqPreviewHeader}>
          <span className={styles.badge}>
            <Icon name="comment-dots" size={14} /> Common Questions
          </span>
          <h2>Questions? We've Got Answers</h2>
          <p className={styles.subtitle}>
            Here are the most common questions we get from service business owners. 
            Have more questions? <Link href="/faq">See all FAQs</Link> or <Link href="/contact">contact us</Link>.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {topFAQs.map((faq, idx) => (
            <div key={idx} className={styles.faqCard}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className={styles.faqCta}>
          <Link href="/faq" className={styles.faqLink}>
            See All Questions <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

