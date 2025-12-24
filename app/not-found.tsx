import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className={styles.notFound}>
        <div className="container">
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            The page you're looking for doesn't exist or has been moved. 
            But don't worry - we can still help you get the website your business needs!
          </p>
          <div className={styles.linksGrid}>
            <Link href="/" className={styles.linkCard}>
              <h3>Home</h3>
              <p>Back to homepage</p>
            </Link>
            <Link href="/services" className={styles.linkCard}>
              <h3>Services</h3>
              <p>See what we offer</p>
            </Link>
            <Link href="/case-studies" className={styles.linkCard}>
              <h3>Case Studies</h3>
              <p>See real results</p>
            </Link>
            <Link href="/pricing" className={styles.linkCard}>
              <h3>Pricing</h3>
              <p>View packages</p>
            </Link>
            <Link href="/contact" className={styles.linkCard}>
              <h3>Contact</h3>
              <p>Get in touch</p>
            </Link>
            <Link href="/faq" className={styles.linkCard}>
              <h3>FAQ</h3>
              <p>Common questions</p>
            </Link>
          </div>
          <div className={styles.ctaSection}>
            <Link href="/contact" className="btn-primary button">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

