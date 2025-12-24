import Icon from "../ui/Icon";
import styles from "./Stats.module.scss";
import statsData from "@/lib/data/stats.json";
import type { Stat } from "@/lib/types/data";

const stats = statsData.stats as Stat[];

// Complex SVG Components
const GrowthChartSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FF9E40" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="growthLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF6B00" />
        <stop offset="100%" stopColor="#FF9E40" />
      </linearGradient>
    </defs>
    {/* Background circle */}
    <circle cx="60" cy="60" r="55" fill="url(#growthGradient)" />
    
    {/* Chart grid lines */}
    <line x1="20" y1="30" x2="20" y2="90" stroke="#E5E7EB" strokeWidth="1.5" />
    <line x1="20" y1="90" x2="100" y2="90" stroke="#E5E7EB" strokeWidth="1.5" />
    <line x1="20" y1="70" x2="100" y2="70" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    <line x1="20" y1="50" x2="100" y2="50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    
    {/* Growing line chart */}
    <polyline
      points="25,85 35,75 45,65 55,55 65,45 75,40 85,35 95,30"
      fill="none"
      stroke="url(#growthLine)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Data points */}
    <circle cx="25" cy="85" r="3" fill="#FF6B00" />
    <circle cx="35" cy="75" r="3" fill="#FF6B00" />
    <circle cx="45" cy="65" r="3" fill="#FF6B00" />
    <circle cx="55" cy="55" r="3" fill="#FF6B00" />
    <circle cx="65" cy="45" r="3" fill="#FF9E40" />
    <circle cx="75" cy="40" r="3" fill="#FF9E40" />
    <circle cx="85" cy="35" r="3" fill="#FF9E40" />
    <circle cx="95" cy="30" r="4" fill="#FF9E40" />
    
    {/* Upward arrow */}
    <path
      d="M95 25 L95 30 L100 30 L90 20 L80 30 L85 30 L85 25 Z"
      fill="#FF6B00"
      opacity="0.8"
    />
  </svg>
);

const ServiceBusinessesSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FF9E40" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="buildingGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" />
        <stop offset="100%" stopColor="#FF9E40" />
      </linearGradient>
      <linearGradient id="buildingGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF9E40" />
        <stop offset="100%" stopColor="#FF6B00" />
      </linearGradient>
      <linearGradient id="buildingGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FF9E40" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    
    {/* Background circle */}
    <circle cx="60" cy="60" r="55" fill="url(#businessGradient)" />
    
    {/* Ground/base line */}
    <line x1="20" y1="85" x2="100" y2="85" stroke="#E5E7EB" strokeWidth="2" />
    
    {/* Building 1 (Left) */}
    <rect x="25" y="50" width="20" height="35" rx="2" fill="url(#buildingGradient1)" stroke="#FF6B00" strokeWidth="1.5" />
    <rect x="28" y="60" width="5" height="5" fill="white" opacity="0.8" />
    <rect x="35" y="60" width="5" height="5" fill="white" opacity="0.8" />
    <rect x="28" y="68" width="5" height="5" fill="white" opacity="0.8" />
    <rect x="35" y="68" width="5" height="5" fill="white" opacity="0.8" />
    <rect x="28" y="76" width="5" height="5" fill="white" opacity="0.8" />
    
    {/* Building 2 (Center - Tallest) */}
    <rect x="45" y="35" width="22" height="50" rx="2" fill="url(#buildingGradient2)" stroke="#FF6B00" strokeWidth="1.5" />
    <rect x="48" y="45" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="56" y="45" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="48" y="54" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="56" y="54" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="48" y="63" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="56" y="63" width="6" height="6" fill="white" opacity="0.8" />
    <rect x="48" y="72" width="6" height="6" fill="white" opacity="0.8" />
    
    {/* Building 3 (Right) */}
    <rect x="72" y="55" width="18" height="30" rx="2" fill="url(#buildingGradient3)" stroke="#FF6B00" strokeWidth="1.5" />
    <rect x="75" y="63" width="4" height="4" fill="white" opacity="0.8" />
    <rect x="81" y="63" width="4" height="4" fill="white" opacity="0.8" />
    <rect x="75" y="70" width="4" height="4" fill="white" opacity="0.8" />
    <rect x="81" y="70" width="4" height="4" fill="white" opacity="0.8" />
    <rect x="75" y="77" width="4" height="4" fill="white" opacity="0.8" />
    
    {/* Connection lines between buildings (network effect) */}
    <line x1="45" y1="60" x2="50" y2="60" stroke="#FF9E40" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
    <line x1="67" y1="70" x2="72" y2="70" stroke="#FF9E40" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
    <line x1="55" y1="50" x2="60" y2="55" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    
    {/* Decorative elements - small business icons */}
    <circle cx="30" cy="30" r="3" fill="#FF9E40" opacity="0.5" />
    <circle cx="90" cy="30" r="3" fill="#FF6B00" opacity="0.5" />
    <circle cx="20" cy="70" r="2" fill="#FF9E40" opacity="0.4" />
    <circle cx="100" cy="75" r="2" fill="#FF6B00" opacity="0.4" />
  </svg>
);

const ClockSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FF9E40" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="clockFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F9FAFB" />
      </linearGradient>
    </defs>
    
    {/* Background circle */}
    <circle cx="60" cy="60" r="55" fill="url(#clockGradient)" />
    
    {/* Clock face */}
    <circle cx="60" cy="60" r="40" fill="url(#clockFace)" stroke="#FF6B00" strokeWidth="2.5" />
    
    {/* Hour markers */}
    {[12, 3, 6, 9].map((hour, idx) => {
      const angle = (hour * 30 - 90) * (Math.PI / 180);
      const x1 = 60 + 32 * Math.cos(angle);
      const y1 = 60 + 32 * Math.sin(angle);
      const x2 = 60 + 36 * Math.cos(angle);
      const y2 = 60 + 36 * Math.sin(angle);
      return (
        <line
          key={idx}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#FF6B00"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    })}
    
    {/* Minute markers */}
    {Array.from({ length: 12 }, (_, i) => {
      if ([12, 3, 6, 9].includes((i + 1) * 5)) return null;
      const angle = ((i + 1) * 30 - 90) * (Math.PI / 180);
      const x1 = 60 + 34 * Math.cos(angle);
      const y1 = 60 + 34 * Math.sin(angle);
      const x2 = 60 + 36 * Math.cos(angle);
      const y2 = 60 + 36 * Math.sin(angle);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#FF9E40"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      );
    })}
    
    {/* Hour hand (pointing to 12) */}
    <line
      x1="60"
      y1="60"
      x2="60"
      y2="50"
      stroke="#FF6B00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    
    {/* Minute hand (pointing to 12) */}
    <line
      x1="60"
      y1="60"
      x2="60"
      y2="45"
      stroke="#FF9E40"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    
    {/* Center dot */}
    <circle cx="60" cy="60" r="4" fill="#FF6B00" />
    
    {/* Decorative elements */}
    <circle cx="30" cy="30" r="2" fill="#FF9E40" opacity="0.4" />
    <circle cx="90" cy="30" r="2" fill="#FF9E40" opacity="0.4" />
    <circle cx="30" cy="90" r="2" fill="#FF6B00" opacity="0.4" />
    <circle cx="90" cy="90" r="2" fill="#FF6B00" opacity="0.4" />
  </svg>
);

export default function Stats() {
  const renderStatIcon = (stat: Stat, index: number) => {
    if (stat.icon === "arrow-trend-up") {
      return <GrowthChartSVG />;
    } else if (stat.icon === "check") {
      return <ServiceBusinessesSVG />;
    } else if (stat.number === "24hrs") {
      return <ClockSVG />;
    }
    return stat.number;
  };

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <div className={styles.pillBadge}>
            <Icon name="shield-halved" size={14} /> Proof In The Numbers
          </div>
          <h2 className={styles.statsTitle}>
            Real Results for Service Businesses
          </h2>
          <p className={styles.statsDesc}>
            These numbers represent real growth for service businesses across the United States. 
            We measure success by the leads and revenue we help generate, not just code quality.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.bigNumber}>
                {renderStatIcon(stat, idx)}
              </div>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statText}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

