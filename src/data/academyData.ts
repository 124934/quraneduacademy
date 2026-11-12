import coursesData from './courses.json';
import teachersData from './teachers.json';
import currenciesData from './currencies.json';
import plansData from './plans.json';
import faqsData from './faqs.json';
import blogsData from './blogs.json';
import testimonialsData from './testimonials.json';
import { Course, Teacher, Currency, PricingPlan, FAQItem, BlogPost, Testimonial } from '../types';

export const courses: Course[] = coursesData as Course[];
export const teachers: Teacher[] = teachersData as Teacher[];
export const currencies: Record<string, Currency> = currenciesData as Record<string, Currency>;
export const pricingPlans: PricingPlan[] = plansData as PricingPlan[];
export const faqs: FAQItem[] = faqsData as FAQItem[];
export const blogPosts: BlogPost[] = blogsData as BlogPost[];
export const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export const ACADEMY_CONFIG = {
  name: 'Quran Education',
  subName: 'Online Islamic Academy',
  fullName: 'Quran Education Academy',
  phone: '+92 318 7779954',
  phoneRaw: '+923187779954',
  whatsapp: '+92 318 7779954',
  whatsappRaw: '923187779954',
  whatsappUrl: 'https://wa.me/923187779954',
  phoneSecondary: '+92 309 6000449',
  phoneSecondaryRaw: '+923096000449',
  whatsappSecondaryUrl: 'https://wa.me/923096000449',
  email: 'info@quraneducation.uk',
  address: 'Global Online Academy & Regional Centers (UK, USA, Canada, Australia, UAE, Pakistan)',
  workingHours: '24 Hours / 7 Days a Week (Worldwide Timezones Supported)',
  socialLinks: {
    youtube: 'https://www.youtube.com/@quraan_education',
    twitter: 'https://twitter.com/QuranAcadmi?t=sX209JpBDAqc4_R8IPPd-w&s=08',
    instagram: 'https://www.instagram.com/quraanedu?vrfl=cnYzYmxwemV3ZTAx',
    facebook: 'https://www.facebook.com/share/1HU5RwzueL/',
    tiktok: 'https://www.tiktok.com/@quran.education08?_t=8n1wB3K3UD5&_r=1',
  },
};
