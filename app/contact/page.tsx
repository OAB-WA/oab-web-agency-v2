import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import Partners from "@/components/sections/Partners";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import styles from "./contact.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's start a project together. Have an idea? We have the team to build it. Send us a message and we'll reply within 24 hours.",
  openGraph: {
    title: "Contact | AnuTech",
    description:
      "Let's start a project together. Have an idea? We have the team to build it.",
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
        <PageHero
          badge={{ icon: "envelope", text: "Get In Touch" }}
          title="Let's start a project together."
          description="Have an idea? We have the team to build it. Send us a message and we'll reply within 24 hours."
        />
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

