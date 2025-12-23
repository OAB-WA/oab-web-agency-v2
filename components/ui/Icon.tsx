import {
  FaPhone,
  FaUsers,
  FaGear,
  FaHouse,
  FaChartLine,
  FaMagnifyingGlass,
  FaCheck,
  FaBolt,
  FaLaptopCode,
  FaMobileScreenButton,
  FaCloudArrowUp,
  FaPenNib,
  FaBrain,
  FaChess,
  FaGraduationCap,
  FaFile,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaArrowTrendUp,
  FaShieldHalved,
  FaGlobe,
  FaGem,
  FaBell,
  FaCommentDots,
  FaAws,
  FaGoogle,
  FaStripe,
  FaSpotify,
  FaSlack,
  FaAirbnb,
  FaMicrosoft,
  FaFigma,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaDribbble,
  FaStackOverflow,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

type IconName =
  | "phone"
  | "users"
  | "gear"
  | "house"
  | "chart-line"
  | "magnifying-glass"
  | "check"
  | "bolt"
  | "laptop-code"
  | "mobile-screen-button"
  | "cloud-arrow-up"
  | "pen-nib"
  | "brain"
  | "chess"
  | "graduation-cap"
  | "file"
  | "envelope"
  | "location-dot"
  | "arrow-right"
  | "arrow-trend-up"
  | "shield-halved"
  | "globe"
  | "gem"
  | "bell"
  | "aws"
  | "google"
  | "stripe"
  | "spotify"
  | "slack"
  | "airbnb"
  | "microsoft"
  | "figma"
  | "linkedin-in"
  | "x-twitter"
  | "github"
  | "dribbble"
  | "stack-overflow"
  | "linkedin"
  | "discord"
  | "comment-dots";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
}

const iconMap: Record<IconName, React.ComponentType<{ className?: string; size?: number | string }>> = {
  phone: FaPhone,
  users: FaUsers,
  gear: FaGear,
  house: FaHouse,
  "chart-line": FaChartLine,
  "magnifying-glass": FaMagnifyingGlass,
  check: FaCheck,
  bolt: FaBolt,
  "laptop-code": FaLaptopCode,
  "mobile-screen-button": FaMobileScreenButton,
  "cloud-arrow-up": FaCloudArrowUp,
  "pen-nib": FaPenNib,
  brain: FaBrain,
  chess: FaChess,
  "graduation-cap": FaGraduationCap,
  file: FaFile,
  envelope: FaEnvelope,
  "location-dot": FaLocationDot,
  "arrow-right": FaArrowRight,
  "arrow-trend-up": FaArrowTrendUp,
  "shield-halved": FaShieldHalved,
  globe: FaGlobe,
  gem: FaGem,
  bell: FaBell,
  aws: FaAws,
  google: FaGoogle,
  stripe: FaStripe,
  spotify: FaSpotify,
  slack: FaSlack,
  airbnb: FaAirbnb,
  microsoft: FaMicrosoft,
  figma: FaFigma,
  "linkedin-in": FaLinkedinIn,
  "x-twitter": FaXTwitter,
  github: FaGithub,
  dribbble: FaDribbble,
  "stack-overflow": FaStackOverflow,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  "comment-dots": FaCommentDots,
};

export default function Icon({ name, className = "", size }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent className={className} size={size} />;
}

