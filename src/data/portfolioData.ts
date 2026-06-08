import { PortfolioItem, Testimonial, TeamMember } from '../types';

export const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: 'proj-dental',
    title: 'Dr. Kabra Smile Studio',
    category: 'Dental Clinic Website',
    description: 'An premium dental clinic portal featuring live patient appointment scheduling, custom services breakdowns, visual before/after smile galleries, and interactive emergency chat triggers.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lottie Animations'],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I would like guidance on building a dental clinic website similar to the Smile Studio project.'
  },
  {
    id: 'proj-realestate',
    title: 'Aura Premium Mansions',
    category: 'Real Estate Platform',
    description: 'An ultra-immersive real estate listing directory engineered with custom visual floor-planners, map geolocation search filters, fluid virtual tour links, and immediate agent routing.',
    techStack: ['React', 'Tailwind v4', 'Google Maps API', 'Zustand State'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I want to create a high-density real estate listing portal with search maps similar to Aura.'
  },
  {
    id: 'proj-restaurant',
    title: 'The Saffron Table',
    category: 'Restaurant Website',
    description: 'A visual-first modern restaurant portal featuring dynamic interactive menu cards with ingredients, smart reservations desk, and pre-checkout integrations.',
    techStack: ['Vite Client', 'Framer Motion', 'SVG Micro-animations'],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I would like a clean, dynamic restaurant catalog and interactive table reservation similar to Saffron Table.'
  },
  {
    id: 'proj-ecommerce',
    title: 'Luxe Apparel Store',
    category: 'E-commerce',
    description: 'A headless high-performing custom fashion storefront with responsive slide-out carts, multi-currency display, dynamic sizing charts, and super-fast checkout routing.',
    techStack: ['Shopify Headless', 'React', 'Tailwind', 'Stripe Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I want to commission a headless e-commerce store with rapid checkouts similar to Luxe Apparel.'
  },
  {
    id: 'proj-saas',
    title: 'AeroSync Metrics Portal',
    category: 'SaaS Dashboard',
    description: 'An advanced data synchronization telemetry portal offering sub-second chart updates, API token managers, live telemetry queues, and custom logs downloads.',
    techStack: ['React', 'D3.js / Recharts', 'WebSockets', 'Express Server Proxy'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I am building a SaaS product and need an premium monitoring dashboard similar to AeroSync.'
  },
  {
    id: 'proj-mobile',
    title: 'GymFlow Tracker Active',
    category: 'Mobile App',
    description: 'A highly responsive fitness planner and tracking mobile app with local database persistence, interactive calendar grids, and clean haptic feedbacks.',
    techStack: ['React Native', 'Expo Core', 'Tailwind Utility', 'SQLite Local'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800&h=500',
    customWhatsAppText: 'Hello CodeManaic Studio, I want to request a high-performance workout tracker mobile app analogous to GymFlow.'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    name: 'Dr. Vivek Sharma',
    role: 'Chief Orthodontist',
    company: 'Sharma Smile Care',
    text: 'CodeManaic Studio single-handedly rebuilt our clinic portal. Within 30 days of deploying the custom layouts, patient conversions from our organic listings increased by over 45%. Their attention to detail was stellar.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Meera Patel',
    role: 'Head of Marketing',
    company: 'Aura Premium Estates',
    text: 'Our previous platform was slow and confusing for high-end home buyers. CodeManaic Studio created an ultra-modern glassmorphic directory with fluid geolocation filtering that completely reset our brand authority.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Rohan Mehta',
    role: 'Co-Founder',
    company: 'Saffron Table Retail',
    text: 'Framer transitions are smooth and professional. Customers constantly praise the layout elegance of our menus. The automated WhatsApp lead dispatcher saves us at least 3-4 hours of manual follow-ups every single day.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ketan K. Kabra',
    role: 'Founder & Principal Architect',
    bio: 'Specialising in full-stack performance optimization, premium animations, and secure cloud system logic. Committed to building experiences that turn simple ideas into enterprise realities.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Tanya Sengupta',
    role: 'Chief UI/UX Designer',
    bio: 'Passionate about custom typography balance, human-centered UX design systems, and elegant bento layouts. Formerly leading interactive aesthetics for major consumer tech startups.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Amit Rajpoot',
    role: 'Lead Full-Stack Developer',
    bio: 'Expert in React, responsive CSS, and Node.js backend pipelines. Amit ensures every database schema we deploy scales smoothly and processes operations under 200ms.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300',
    socials: { github: '#', linkedin: '#' }
  }
];
