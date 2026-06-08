export type PageId = 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'software' | 'book' | 'tech-courses';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  icon: string; // lucide icon name
  features: string[];
  benefits?: string[];
  process?: string[];
  technologies?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  customWhatsAppText: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  idealFor: string;
}
