// Type definitions for the application
export interface Service {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  benefits?: string[];
  pricing?: string;
  duration?: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  site: {
    name: string;
    description: string;
    url: string;
    email: string;
  };
  navigation: NavItem[];
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}
