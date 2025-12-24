"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import TrackedLink from "../ui/TrackedLink";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBgGrid}></div>
      <div className={styles.heroSpotlight}></div>
      
      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <span className={styles.sparkle}>
            <Icon name="gem" size={14} />
          </span>{" "}
          Your Partner in Digital Excellence
        </div>
        <h1>
          Websites That Turn <br /> Visitors Into{" "}
          <span className={styles.typingText}>Customers</span>
        </h1>
        <p className={styles.subtext}>
          We build high-converting websites for service businesses across the United States. 
          Get more leads, more bookings, and more revenue with a website designed to convert.
        </p>
        <div className={styles.ctaGroup}>
          <TrackedLink 
            href="/contact" 
            className="btn-primary button"
            eventName="cta_click"
            eventParams={{ 
              cta_location: "hero", 
              cta_text: "Get Free Website Audit",
              cta_type: "primary"
            }}
          >
            Get Free Website Audit
          </TrackedLink>
          <TrackedLink 
            href="/portfolio" 
            className="btn-glass button"
            eventName="cta_click"
            eventParams={{ 
              cta_location: "hero", 
              cta_text: "See Our Work",
              cta_type: "secondary"
            }}
          >
            See Our Work
          </TrackedLink>
        </div>
        <div className={styles.trustSignal}>
          <Icon name="users" size={20} />
          <span>Trusted by service businesses across the USA</span>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.dashboard3dWrapper}>
          {/* MAIN DASHBOARD SCREEN */}
          <div className={styles.dashboardInterface}>
            {/* Sidebar */}
            <div className={styles.dashSidebar}>
              <div className={styles.logoMark}>
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4L26 9L16 14L6 9L16 4Z"
                    fill="#FF6B00"
                  />
                  <path
                    d="M16 12L26 17L16 22L6 17L16 12Z"
                    fill="#FF9E40"
                  />
                </svg>
              </div>
              <div className={styles.navIcons}>
                <div className={`${styles.icon} ${styles.active}`}>
                  <Icon name="house" size={18} />
                </div>
                <div className={styles.icon}>
                  <Icon name="chart-line" size={18} />
                </div>
                <div className={styles.icon}>
                  <Icon name="users" size={18} />
                </div>
                <div className={styles.icon}>
                  <Icon name="gear" size={18} />
                </div>
              </div>
              <div className={styles.userAvatarSmall}></div>
            </div>

            {/* Main Content Area */}
            <div className={styles.dashMain}>
              {/* Top Header */}
              <div className={styles.dashHeader}>
                <div className={styles.headerSearch}>
                  <Icon name="magnifying-glass" size={16} />
                  <span>Search analytics...</span>
                </div>
                <div className={styles.headerActions}>
                  <span className={styles.bellIcon}>
                    <Icon name="bell" size={18} />
                    <span className={styles.dot}></span>
                  </span>
                  <div className={styles.btnUpgrade}>Upgrade Pro</div>
                </div>
              </div>

              {/* Stats Row */}
              <div className={styles.dashStatsGrid}>
                <div className={styles.statBox}>
                  <span className={styles.label}>Monthly Leads</span>
                  <h3>245</h3>
                  <span className={`${styles.trend} ${styles.up}`}>
                    <Icon name="arrow-trend-up" size={14} /> +180%
                  </span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.label}>Conversion Rate</span>
                  <h3>8.2%</h3>
                  <span className={`${styles.trend} ${styles.up}`}>
                    <Icon name="arrow-trend-up" size={14} /> +3.5%
                  </span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.label}>Page Speed</span>
                  <h3>98</h3>
                  <span className={`${styles.trend} ${styles.down}`}>
                    <Icon name="check" size={14} /> Excellent
                  </span>
                </div>
              </div>

              {/* Big Chart Section */}
              <div className={styles.dashChartSection}>
                <div className={styles.chartHeader}>
                  <h4>Lead Generation Growth</h4>
                  <div className={styles.chartTabs}>
                    <span className={styles.active}>Monthly</span>
                    <span>Quarterly</span>
                  </div>
                </div>
                <div className={styles.cssBarChart}>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "40%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "70%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "50%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "85%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "60%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "90%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "45%" }}></div>
                  </div>
                  <div className={styles.barCol}>
                    <div className={styles.fill} style={{ height: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 1 (Left) */}
          <div className={`${styles.floatWidget} ${styles.widgetGrowth}`}>
            <div className={styles.iconCircle}>
              <Icon name="bolt" size={20} />
            </div>
            <div className={styles.text}>
              <span className={styles.caption}>Lead Increase</span>
              <strong>+300% Growth</strong>
            </div>
          </div>

          {/* FLOATING WIDGET 2 (Right) */}
          <div className={`${styles.floatWidget} ${styles.widgetUsers}`}>
            {/* <div className={styles.userStack}>
              <Image
                src="/images/avatar.jpg"
                width={30}
                height={30}
                alt="U1"
                className={styles.userImg}
              />
              <Image
                src="/images/avatar.jpg"
                width={30}
                height={30}
                alt="U2"
                className={styles.userImg}
              />
              <Image
                src="/images/avatar.jpg"
                width={30}
                height={30}
                alt="U3"
                className={styles.userImg}
              />
            </div> */}
            <Icon name="users" size={20} />
            <div className={styles.text}>
              <strong>New Clients</strong>
              <span className={styles.caption}>Just joined</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

