export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  feature: string;
  hasButton?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  social: Array<{
    name: string;
    label: string;
    url: string;
  }>;
  isLeader?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  url: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface Stat {
  number: string;
  label: string;
  text: string;
}

export interface Partner {
  name: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  items: Array<{
    icon: string;
    text: string;
  }>;
}

export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
    url: string;
    social: {
      twitter: string;
      linkedin: string;
      github: string;
      discord: string;
    };
    company: {
      name: string;
      founded: string;
      location: string;
    };
  };
}

