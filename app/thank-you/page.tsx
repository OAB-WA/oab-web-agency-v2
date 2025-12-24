import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { Metadata } from "next";
import styles from "./thank-you.module.scss";

export const metadata: Metadata = {
  title: "Thank You - OAB Web Agency",
  description: "Thank you for contacting OAB Web Agency. We'll get back to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.thankYouSection}>
          <div className="container">
            <div className={styles.thankYouContent}>
              <div className={styles.iconWrapper}>
                <Icon name="check" size={64} />
              </div>
              <h1>Thank You!</h1>
              <p className={styles.message}>
                We've received your message and will get back to you within 24 hours. 
                We're excited to learn more about your business and how we can help you 
                get more leads online.
              </p>

              <div className={styles.nextSteps}>
                <h2>What Happens Next?</h2>
                <div className={styles.stepsList}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h3>We Review Your Information</h3>
                      <p>We'll review your business details and goals to prepare for our conversation.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h3>We Schedule a Call</h3>
                      <p>We'll reach out within 24 hours to schedule a free consultation at a time that works for you.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h3>We Discuss Your Needs</h3>
                      <p>During the call, we'll discuss your business, goals, and how we can help you get more leads.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h3>You Get a Custom Proposal</h3>
                      <p>If we're a good fit, we'll send you a detailed proposal with pricing and timeline.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <Link href="/" className="btn-primary button">
                  Back to Home
                </Link>
                <Link href="/case-studies" className="btn-glass button">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

