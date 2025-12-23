import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import Partners from "@/components/sections/Partners";
import Icon from "@/components/ui/Icon";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import styles from "./contact.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get your free website audit and consultation. We respond within 24 hours with USA business hours availability. Let's discuss how we can help your service business get more leads.",
  openGraph: {
    title: "Contact | OAB Web Agency",
    description:
      "Get your free website audit and consultation. We respond within 24 hours with USA business hours availability.",
  },
};

export default function Contact() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "Contact", url: `${siteConfig.site.url}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <section className={styles.contactHeader}>
          <div className="container">
            <div className={styles.headerContent}>
              <span className={styles.label}>
                <Icon name="envelope" size={14} /> Get In Touch
              </span>
              <h2>Get Your Free Website Audit</h2>
              <p className={styles.desc}>
                Ready to get more leads? Fill out the form below and we'll get back to you within 24 hours 
                with USA business hours availability. Let's discuss how we can help your service business grow.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactWrapper}>
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
        <Partners />
      </main>
      <Footer />
    </>
  );
}

