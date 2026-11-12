export interface SyllabusModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  category: string;
  level: string;
  suitableFor: string;
  duration: string;
  classesPerWeek: string;
  shortDesc: string;
  fullOverview: string;
  whatYouWillLearn: string[];
  learningOutcomes: string[];
  courseBenefits?: string[];
  teachingMethodology?: string | string[];
  classFormat?: string;
  image?: string;
  badge?: string;
  prerequisites?: string;
  curriculumModules?: SyllabusModule[];
  faqs?: { question: string; answer: string }[];
}

export interface Teacher {
  id: string;
  name: string;
  arabicName: string;
  gender: 'male' | 'female';
  title: string;
  qualifications: string;
  specialization: string[];
  experience: string;
  studentsTaught: number;
  languages: string[];
  bio: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  basePriceUSD: number;
  classesPerWeek: number;
  classesPerMonth: number;
  classDuration: string;
  isPopular?: boolean;
  highlightText?: string;
  recommendedFor: string;
  features: string[];
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rateToUSD: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  course: string;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export type PageRoute =
  | 'home'
  | 'about'
  | 'courses'
  | 'course-detail'
  | 'teachers'
  | 'how-it-works'
  | 'pricing'
  | 'admissions'
  | 'blog'
  | 'faq'
  | 'testimonials'
  | 'contact'
  | 'privacy'
  | 'terms';
