import Link from "next/link";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import styles from "./Footer.module.scss";
import Image from "next/image";
import siteConfig from "@/lib/data/site-config.json";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCard}>
        <div className={styles.footerLinks}>
          <div className={styles.col}>
          <Link href="/">
          <Image
            src="/images/logo_dark.webp"
            alt="OAB Web Agency"
            width={160}
            height={80}
            priority
          />
        </Link>
            <p>
              We build high-converting websites for service businesses across the United States. 
              Our focus is on helping you get more leads, more bookings, and more revenue.
            </p>
          </div>
          <div className={styles.footerLinksA}>
            <div className={styles.col}>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/services">High-Converting Website Design</Link>
                </li>
                <li>
                  <Link href="/services">Lead Generation Systems</Link>
                </li>
                <li>
                  <Link href="/services">Local SEO Optimization</Link>
                </li>
                <li>
                  <Link href="/services">Conversion Rate Optimization</Link>
                </li>
                <li>
                  <Link href="/services">Website Maintenance</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; 2025 OAB Web Agency. All rights reserved. Serving service businesses across the United States.
          </div>
          <div className={styles.socialIcons}>
            <a href={siteConfig.site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon name="x-twitter" size={20} />
            </a>
            <a href={siteConfig.site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            {/* <a href={`https://linkedin.com/company/${siteConfig.site.social.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={20} />
            </a>
            <a href={`https://github.com/${siteConfig.site.social.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" size={20} />
            </a>
            <a href={`https://discord.com/users/${siteConfig.site.social.discord}`} target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <Icon name="discord" size={20} />
            </a> */}

            <div className={styles.langRight}>
              <button className={styles.btnLang}>
                <Icon name="globe" size={16} /> English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


