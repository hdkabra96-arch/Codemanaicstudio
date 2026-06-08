import { ServiceItem, PricingPlan } from '../types';

export const WHATSAPP_NUMBER = '918866851826';
export const WHATSAPP_LINK_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Bespoke, lightning-fast commercial websites crafted to establish trust, express your brand, and turn readers into loyal leads.',
    detailedDescription: 'In today s digital economy, your website is your digital business card and headquarters. We build ultra-high performance modern websites utilizing React, Tailwind, and Vite. Every layout is desktop-first designed, mobile-responsive, SEO optimized from the ground up, and visually jaw-dropping.',
    icon: 'Globe',
    features: [
      'Corporate & Institutional Portals',
      'High-converting Landing Pages',
      'Dynamic Portfolios and Brochure Sites',
      'Dental Clinic & Medical Practice Websites',
      'Real Estate Listing Portals with Filters'
    ],
    benefits: [
      'Average load times under 1.2 seconds for superior retention.',
      'Designed with accessibility WCAG AA compliance built-in.',
      'Clean schema.org structures for instant Google search indexing.',
      'Highly custom bespoke visual language matching your actual brand identity.'
    ],
    process: [
      'Brand & Audience Exploration Workshop',
      'Wireframing & Collaborative High-Fidelity UI Design',
      'Fast Development with Clean CSS & React Frameworks',
      'Performance Auditing & Visual QA across 5+ device families',
      'One-click launch and configuration'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'TypeScript'],
    faqs: [
      {
        question: 'How long does a standard business website take to build?',
        answer: 'Typically between 2 to 4 weeks depending on the number of unique layouts, interactive components, and depth of copywriting required.'
      },
      {
        question: 'Will I be able to update my own content after launch?',
        answer: 'Yes! We configure a user-friendly custom dashboard or connect a headless CMS so you can edit text and post blogs without writing code.'
      }
    ]
  },
  {
    id: 'web-apps',
    title: 'Software',
    description: 'Enterprise custom software, bespoke databases, multi-tenant subscription networks, and automated client CRM systems built to scale.',
    detailedDescription: 'Go beyond static structures. We engineer robust, comprehensive software-as-a-service (SaaS) and custom backend layouts built for speed, isolated security, automated operational pipelines, and secure database pathways.',
    icon: 'Cpu',
    features: [
      'Custom ERP & Commercial CRM systems',
      'Sub-second multi-tenant SaaS architectures',
      'Relational Database (PostgreSQL/Sync) integration',
      'Automated Inventory & Telemetry dashboards',
      'Secure transaction gateways & Stripe subscription hubs'
    ],
    benefits: [
      'Isolated database-schemas with top-tier permission level configurations.',
      'Lag-free responsive data dashboards leveraging Zustand client-state engines.',
      'Automated webhook servers to relay invoices, emails, and alerts seamlessly.'
    ],
    process: [
      'Interactive Discovery & Database Schema modeling',
      'Component-Driven user interface layouts design in Figma',
      'Active development runs under strict TypeScript validations',
      'Sandbox traffic testing and lightweight container deployments'
    ],
    technologies: ['ReactJS', 'NodeJS/Express', 'PostgreSQL', 'Drizzle ORM', 'Vite', 'Zustand State'],
    faqs: [
      {
        question: 'Are custom subscription systems secure from breach?',
        answer: 'Completely. Following strict security protocols, secret credential tokens and transactional parameters are always kept inside closed servers, never leaking to frontend inspections.'
      }
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Immersive iOS and Android applications developed with native-grade speed, animations, and clean store deployment.',
    detailedDescription: 'Launch your application directly in users hands. We engineer cross-platform fluid mobile applications utilizing modern frameworks that ensure a single code-base renders perfectly at native speeds on both iPhone and Android platforms.',
    icon: 'Smartphone',
    features: [
      'Native iOS App Engineering',
      'Native Android App Engineering',
      'Cross-platform React Native deployment',
      'Push notification automation and engagement triggers',
      'Offline-first synchronization'
    ],
    benefits: [
      'Optimized lightweight asset bundles for fast store downloads.',
      'Native look and touch response matching iOS/Android standard guidelines.',
      'Hassle-free deployment, guiding your app safely through strict Apple/Google store reviews.'
    ],
    process: [
      'Mobile UX & Touch Target mapping',
      'Module integration & local state engineering',
      'Internal Testflight & Beta deployment',
      'App Store & Play Store publishing representation'
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Android SDK', 'Tailwind Native'],
    faqs: [
      {
        question: 'Do you assist with publishing to Apple App Store and Google Play?',
        answer: 'Yes, we handle the entire listing lifecycle, including app store screenshots, metadata preparation, privacy questions, and guideline review response.'
      }
    ]
  },
  {
    id: 'book',
    title: 'Book',
    description: 'Automated appointment reservation flows, custom calendar schedules, and high-converting bookings engines built to capture leads.',
    detailedDescription: 'Take control of your time. We design bespoke, lightning-fast reservation workflows, dental or professional appointment reserving systems, automated WhatsApp/SMS notifications, and verified calendar synchronization (Google, Outlook) to eliminate scheduling drop-offs.',
    icon: 'Calendar',
    features: [
      'Bespoke Appointment Booking Engines',
      'Verified Google & Outlook Calendar Sync Protocols',
      'Automated SMS & WhatsApp Confirmation Reminders',
      'Secure Initial Booking Deposit & Multi-currency Payments',
      'Custom Intake Forms & Multi-staff Allocation Systems'
    ],
    benefits: [
      'Eliminates booking friction leading to up to 40% more confirmed sales calls.',
      'Prevents double-bookings and scheduling overlapping with live real-time visual feedback.',
      'Reduces appointment no-shows to less than 2% via smart automated reminder triggers.'
    ],
    process: [
      'Interactive Discovery & Staff Allocation Mapping',
      'Calendar Token Integration & Intake Form Design',
      'Highly custom secure visual calendar rendering',
      'Integrations testing (WhatsApp, SMS, Stripe gateway)'
    ],
    technologies: ['ReactJS', 'NodeJS/Express', 'Google Calendar API', 'Stripe Payments', 'Twilio SMS Server', 'TailwindCSS'],
    faqs: [
      {
        question: 'Does this directly sync with my existing personal calendar?',
        answer: 'Yes! We configure authenticated Google Calendar and Outlook API layers, meaning your slot availability dynamically changes based on your actual availability.'
      }
    ]
  },
  {
    id: 'tech-courses',
    title: 'Tech Courses',
    description: 'Expert-led technical bootcamps, custom framework training, and hands-on professional curricula designed to upskill developer teams.',
    detailedDescription: 'Empower your development team. We design bespoke, code-first educational courses and technical deep-dives on React, Node.js, TypeScript, cloud deployments, and DBMS architectures. Complete with interactive quizzes, real-world sandboxes, and expert mentor evaluation.',
    icon: 'GraduationCap',
    features: [
      'Bespoke Engineering Bootcamps',
      'Custom React, Node.js & TypeScript Curriculum',
      'Advanced API Design & System Architecture Masterclasses',
      'Hands-on Live Coding & Dedicated Mentor Sessions',
      'Enterprise Team Upskilling & Custom Learning Portals'
    ],
    benefits: [
      'Boost team productivity and code quality with unified patterns.',
      'Reduce developer onboarding time by up to 60% with curated tracks.',
      'Deploy cutting-edge practices (Typesafe APIs, database migrations) directly into your workspace.'
    ],
    process: [
      'Skills Gap Analysis & Custom Curriculum Design',
      'Interactive Course Content & Sample Repo Preparation',
      'Live Masterclasses & Guided Lab Work sessions',
      'Final Project Review & Certification'
    ],
    technologies: ['ReactJS', 'NodeJS/Express', 'TypeScript', 'PostgreSQL', 'Vite', 'Docker'],
    faqs: [
      {
        question: 'Are classes custom-tailored for our enterprise stack?',
        answer: 'Yes! We construct the course projects and syllabus to directly utilize your corporate technologies, frameworks, and coding style guidelines.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Technical page audits, semantic keywords, page speed maximization, metadata alignment, and local maps dominance.',
    detailedDescription: 'Having a beautiful website is meaningless if no one finds it. We inject extreme technical SEO, keyword density optimization, semantic headers, canonical systems, and detailed XML sitemaps to ensure search engines rank you dominant.',
    icon: 'TrendingUp',
    features: [
      'Technical SEO Auditing and Speed optimization',
      'Competitor Keyword Gap Identification',
      'Custom rich snippets and structured JSON-LD schemas',
      'Local Business Google Maps setup'
    ],
    benefits: [
      'Sustained organic traffic and premium client leads without high ad spend.',
      'Significant increase in Google Core Web Vitals scores.',
      'Accurate conversion tracking on search traffic.'
    ],
    process: [
      'In-depth search landscape analysis',
      'On-page technical structure audit & layout fix',
      'Content architecture and meta keyword alignment',
      'Google Search Console setup and indexing'
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Schema JSON-LD', 'PageSpeed Insights'],
    faqs: [
      {
        question: 'How long until I see results from search optimization?',
        answer: 'Technical fixes often yield improvements within 2-4 weeks, while organic keyword positioning crawls steadily upwards over 3-6 months.'
      }
    ]
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    description: 'End-to-end multi-tenant subscription software engineering with clean modular dashboards and secure checkout structures.',
    detailedDescription: 'Transform your software ideas into high-earning recurring commercial models. We construct comprehensive software-as-a-service structures featuring tiered dashboards, billing portals, subscription tier restrictions, and usage telemetry.',
    icon: 'Layers',
    features: [
      'Tiered subscription plan controls',
      'Complex multi-tenant security architecture',
      'Stripe Billing / Customer checkout hubs',
      'Custom analytics charts and exportable CSV details'
    ],
    benefits: [
      'Fast-to-market architecture allowing minimal viable product launching.',
      'Clean developer coding patterns standard for modern investment pitch demos.',
      'Secure data isolating schemas.'
    ],
    process: [
      'SaaS workflow wireframes and tier definition',
      'Secure infrastructure and session planning',
      'Subscriber flow and checkout configurations',
      'Unit-tested deployment'
    ],
    technologies: ['ReactJS', 'Tailwind', 'Stripe Node', 'Zustand State', 'Firebase / Database'],
    faqs: [
      {
        question: 'Can you integrate custom enterprise single-sign-on (SSO)?',
        answer: 'Yes! We configure secure federated identity systems, Google Auth, GitHub Auth, and SAML integrations.'
      }
    ]
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description: 'Integrating advanced LLMs (such as Gemini 1.5 Pro/Flash), custom visual generators, and semantic text matching structures.',
    detailedDescription: 'Gain an unstoppable edge in automation. We design tailored AI pipeline endpoints interfacing securely with Gemini SDK models to execute custom summarizations, sentiment classifiers, digital asset builders, and voice interpreters.',
    icon: 'Sparkles',
    features: [
      'Gemini API server-controlled middleware',
      'Intelligent context matching structures',
      'Custom neural processing loops',
      'Automated digital asset classification tags'
    ],
    benefits: [
      'Huge labor cost reduction by automating complex cognitive data reading.',
      'Unique, cutting-edge intelligence features that fascinate users.',
      'Instant, server-scale context interpretation.'
    ],
    process: [
      'AI feasibility mapping & token usage estimation',
      'Prompt engineering design & system tuning in secure server routes',
      'Fallback rules configuration to prevent hallucinations',
      'API rate-limit load balancing loops'
    ],
    technologies: ['@google/genai SDK', 'Express Server Middleware', 'Vector Embeddings', 'Node.js'],
    faqs: [
      {
        question: 'Are our API keys safe?',
        answer: 'Completely. Following strict security protocols, Gemini keys are always secured inside server-side environments, never leaking to front-end inspection tools.'
      }
    ]
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Custom background scripts, Zapier configurations, API pipelines, and auto-reply managers that save hours of human labor.',
    detailedDescription: 'Stop repeating simple digital routines manually. We connect your calendars, sheets, messaging channels, email campaigns, CRM entries, and invoicing programs to interact automatically with minimal error.',
    icon: 'Hammer',
    features: [
      'CRM contact syncing and auto-tag triggers',
      'Custom Webhook relays and secure Webhook servers',
      'Automated email workflows and transactional notifications',
      'PDF template generators and automated report builders'
    ],
    benefits: [
      'Recovery of 10+ hours per week of manual data entries.',
      'Instant response speed to incoming customer leads.',
      'Elimination of human copy-paste errors across systems.'
    ],
    process: [
      'Operational bottleneck mapping workshop',
      'Workflow diagrams and node triggers connection',
      'Edge condition testing',
      'Detailed alert checks'
    ],
    technologies: ['Zapier', 'Make.com', 'Express Webhooks', 'Google Sheets API', 'Sendgrid CRM'],
    faqs: [
      {
        question: 'Can you work with legacy systems that do not have API documentation?',
        answer: 'We evaluate capabilities and can build custom visual scraping routines or automated browser automation tasks.'
      }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₹15,000+',
    period: 'one-time',
    description: 'Perfect for local shops, individuals, and seed startups looking to establish a crisp, modern presence.',
    features: [
      'Premium Custom Responsive Design',
      'Up to 5 Fully Optimised Pages',
      'Professional Logo Selection & Palette',
      'Comprehensive Technical SEO Structure',
      'Floating Interactive WhatsApp button',
      'Standard Lead Contact Form',
      'Complete Domain & Hosting setup assistance',
      '1 Month of Dedicated Support'
    ],
    isPopular: false,
    idealFor: 'Small/Local Businesses, Dental Clinics, Portfolio'
  },
  {
    name: 'Growth',
    price: '₹35,000+',
    period: 'one-time',
    description: 'The ultra-popular agency tier. Ideal for scale startups, growing practices, and active service providers seeking conversions.',
    features: [
      'Everything in the Starter Plan',
      'Up to 12 Beautiful Custom Sections',
      'Dynamic Services Mega Menu config',
      'Featured Portfolio & Project Case Studies',
      'Interactive Custom Pricing Widgets',
      'E-commerce setup or Advanced Lead pipelines',
      'Interactive Client Testimonials slider',
      'Google Maps & Google Search Console validation',
      'Speed Optimisations (Targeting 95+ score)',
      '3 Months of Premium Support'
    ],
    isPopular: true,
    idealFor: 'Startups, Real Estate, E-commerce, Corporate'
  },
  {
    name: 'Premium',
    price: '₹75,000+',
    period: 'one-time',
    description: 'An premium, custom full-stack and automated web software designed for market-dominating brands.',
    features: [
      'Everything in the Growth Plan',
      'Unlimited Pages / Sections',
      'Custom React Web Application & state management',
      'Subscription Tier dashboard / Client Portal',
      'Gemini AI prompt integration & Server proxy backend',
      'Advanced Business Automation (CRM sync, auto invoice)',
      'Custom database syncing & analytics charts',
      'Full Multi-language translation setup',
      '1 Year of Premier 24/7 Support & Maintenance'
    ],
    isPopular: false,
    idealFor: 'Enterprise, SaaS Platforms, Tech Brands, Elite Practice'
  }
];

export const EDUCATION_SYLLABUS = {
  cbse: [
    { title: 'Class 9th', items: ['Mathematics', 'Science', 'Social Science', 'English'] },
    { title: 'Class 10th', items: ['Mathematics', 'Science', 'Social Science', 'English'] },
    { title: 'Class 11th Commerce', items: ['Accountancy', 'Business Studies', 'Economics', 'Applied Maths'] },
    { title: 'Class 12th Commerce', items: ['Accountancy', 'Business Studies', 'Economics', 'Applied Maths'] },
    { title: 'Class 11th Science', items: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
    { title: 'Class 12th Science', items: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
  ],
  gseb: [
    { title: 'Class 9th', items: ['Gujarati/English', 'Mathematics', 'Science', 'Social Science'] },
    { title: 'Class 10th', items: ['Gujarati/English', 'Mathematics', 'Science', 'Social Science'] },
    { title: 'Class 11th Commerce', items: ['Elements of Accounts', 'Business Administration', 'Economics', 'Statistics'] },
    { title: 'Class 12th Commerce', items: ['Elements of Accounts', 'Business Administration', 'Economics', 'Statistics'] },
    { title: 'Class 11th Science', items: ['Physics', 'Chemistry', 'Mathematics/Biology'] },
    { title: 'Class 12th Science', items: ['Physics', 'Chemistry', 'Mathematics/Biology'] },
  ],
  bcom: [
    { title: 'SEM-1', items: ['Financial Accounting-1', 'Business Economics', 'Business Communication'] },
    { title: 'SEM-2', items: ['Financial Accounting-2', 'Macro Economics', 'Corporate Laws'] },
    { title: 'SEM-3', items: ['Corporate Accounting-1', 'Cost Accounting-1', 'Business Statistics'] },
    { title: 'SEM-4', items: ['Corporate Accounting-2', 'Cost Accounting-2', 'Indirect Taxes'] },
    { title: 'SEM-5', items: ['Management Accounting-1', 'Auditing-1', 'Financial Management-1'] },
    { title: 'SEM-6', items: ['Management Accounting-2', 'Auditing-2', 'Financial Management-2'] },
  ],
  bba: [
    { title: 'SEM-1', items: ['Principles of Management', 'Financial Accounting', 'Micro Economics'] },
    { title: 'SEM-2', items: ['Organizational Behavior', 'Cost Accounting', 'Macro Economics'] },
    { title: 'SEM-3', items: ['Marketing Management', 'Human Resource Management', 'Business Statistics'] },
    { title: 'SEM-4', items: ['Financial Management', 'Business Research Methods', 'Production Management'] },
    { title: 'SEM-5', items: ['Strategic Management', 'Service Operations', 'Consumer Behavior'] },
    { title: 'SEM-6', items: ['Entrepreneurship', 'Business Ethics', 'Global Business Environment'] },
  ],
  bca: [
    { title: 'SEM-1', items: ['Computer Fundamentals', 'C Programming', 'Mathematical Foundations'] },
    { title: 'SEM-2', items: ['Advanced C', 'Data Structures', 'DBMS Overview'] },
    { title: 'SEM-3', items: ['Object-Oriented Programming (C++)', 'Operating Systems', 'System Analysis'] },
    { title: 'SEM-4', items: ['Java Programming', 'Web Technologies (HTML/JS)', 'Software Engineering'] },
    { title: 'SEM-5', items: ['Web App Development (.NET/PHP)', 'Python & AI Intro', 'Computer Networks'] },
    { title: 'SEM-6', items: ['Cloud Computing', 'Mobile App Development', 'Major Capstone Project'] },
  ]
};

export const FREE_RESOURCES = [
  { name: 'Free PDF Editor', desc: 'Merge, split, compress, and edit PDF documents instantaneously.' },
  { name: 'Free Image Editor', desc: 'Crop, resize, apply modern filters, and export web-optimised image formats.' },
  { name: 'Free Video Editor', desc: 'Trim clips, overlay soundtracks, and compile social media cuts directly inside the client browser.' }
];
