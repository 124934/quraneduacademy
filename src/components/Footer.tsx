import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';
import { Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
// Transition-free static components for Footer (transitions completely removed for mobile & desktop views)
const AnimatedItem: React.FC<{ children: React.ReactNode; className?: string; delay?: number; animation?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const AnimatedWords: React.FC<{ text: string; className?: string; wordClassName?: string; delay?: number }> = ({ text, className = '' }) => (
  <span className={className}>{text}</span>
);

const AnimatedText: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface FooterProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

interface StudentGalleryItem {
  id: number;
  src: string;
  alt: string;
  name: string;
  course: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedStudent, setSelectedStudent] = useState<StudentGalleryItem | null>(null);

  const handleNav = (page: PageRoute, slug?: string) => {
    onNavigate(page, slug);
  };

  // 11 Students matching the reference banner gallery
  const students: StudentGalleryItem[] = [
    {
      id: 1,
      src: '/assets/images/boy_quran_student_1792430316665.jpg',
      alt: 'Young boy in prayer cap reading Quran on rehal',
      name: 'Muhammad Rayyan',
      course: 'Noorani Qaida & Tajweed',
    },
    {
      id: 2,
      src: '/assets/images/student_quran_online.jpg',
      alt: 'Student learning Quran online',
      name: 'Maryam Fatima',
      course: 'Quran Recitation & Hifz',
    },
    {
      id: 3,
      src: '/assets/images/girl_online_laptop_1792430342816.jpg',
      alt: 'Girl attending online Quran class on laptop',
      name: 'Aisha Siddiqa',
      course: 'Quranic Arabic & Translation',
    },
    {
      id: 4,
      src: '/assets/images/girl_white_hijab_1792430342115.jpg',
      alt: 'Girl in white hijab smiling with Holy Quran',
      name: 'Zainab Noor',
      course: 'Tajweed Mastery',
    },
    {
      id: 5,
      src: '/assets/images/quran_tajweed_reading_1790269867429.jpg',
      alt: 'Student reading Quran with Tajweed',
      name: 'Abdullah Omar',
      course: 'Quran Reading (Nazra)',
    },
    {
      id: 6,
      src: '/assets/images/islamic_academy_learning_1790269898921.jpg',
      alt: 'Student studying Quran at academy',
      name: 'Fatima Zahra',
      course: 'Islamic Studies & Daily Duas',
    },
    {
      id: 7,
      src: '/assets/images/girl_teal_hijab_1792430343468.jpg',
      alt: 'Young girl in teal hijab reading Quran',
      name: 'Khadijah Bilal',
      course: 'Basic Arabic Language',
    },
    {
      id: 8,
      src: '/assets/images/girl_black_hijab_quran_1792432274793.jpg',
      alt: 'Young girl in black hijab reciting Quran on rehal',
      name: 'Amina Binte Ali',
      course: 'Hifz ul Quran',
    },
    {
      id: 9,
      src: '/assets/images/quran_hifz_study_1792049866584.jpg',
      alt: 'Student engaged in Quran memorization',
      name: 'Hafsa Tariq',
      course: 'Tajweed & Memorization',
    },
    {
      id: 10,
      src: '/assets/images/student_quran_online_1792049844560.jpg',
      alt: 'Student studying Quran lessons',
      name: 'Ibrahim Khalil',
      course: 'Quranic Arabic',
    },
    {
      id: 11,
      src: '/assets/images/boy_holding_quran_1792430342987.jpg',
      alt: 'Boy holding Holy Quran with golden calligraphy',
      name: 'Hamza Farooq',
      course: 'Quran Memorization',
    },
  ];

  // Quick Links in the exact requested order
  const quickLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Packages', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
    { label: 'Enroll', page: 'admissions' },
  ];

  const handlePrevStudent = () => {
    if (!selectedStudent) return;
    const currentIndex = students.findIndex((s) => s.id === selectedStudent.id);
    const prevIndex = (currentIndex - 1 + students.length) % students.length;
    setSelectedStudent(students[prevIndex]);
  };

  const handleNextStudent = () => {
    if (!selectedStudent) return;
    const currentIndex = students.findIndex((s) => s.id === selectedStudent.id);
    const nextIndex = (currentIndex + 1) % students.length;
    setSelectedStudent(students[nextIndex]);
  };

  return (
    <footer
      className="w-full relative mt-6 text-white selection:bg-[#0A3826] selection:text-white bg-transparent no-trans"
      data-no-trans="true"
    >
      {/* ======================================================== */}
      {/* DESKTOP FOOTER (Unchanged, exactly as originally styled) */}
      {/* ======================================================== */}
      <div className="hidden lg:block relative w-full">
        {/* Background Layer: Asymmetrical Arched Canopy matching user's reference image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 440"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Secondary Layer: Faint Warm Silver-Gray Wave */}
          <path
            d="M0,120 C180,60 260,10 380,12 C640,16 1020,95 1440,70 L1440,440 L0,440 Z"
            fill="#D5D2C9"
            fillOpacity="0.55"
          />

          {/* Primary Layer: Dark Forest Green Canopy Shape */}
          <path
            d="M0,170 C140,95 230,0 330,0 C460,0 860,70 1440,135 L1440,440 L0,440 Z"
            fill="#032918"
          />

          {/* Top Yellow Boundary / Islamic Architectural Arch Trim Line (matching mobile view) */}
          <path
            d="M0,172 C140,97 230,2 330,2 C460,2 860,72 1440,137"
            stroke="#FCB205"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Bottom Islamic Architectural Arch Trim Line */}
          <path
            d="M0,422 L650,422 C670,422 682,430 695,430 C705,430 712,402 720,402 C728,402 735,430 745,430 C758,430 770,422 790,422 L1440,422"
            stroke="#FCB205"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Foreground Content: Compact layout exactly matching reference image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-7 sm:pb-8">
        
        {/* Brand Header Section: Logo Centered Directly Above Quran Education & Description */}
        <div className="pt-2 sm:pt-3 pb-3 sm:pb-4 pl-2 sm:pl-6 lg:pl-10 max-w-2xl">
          <a
            href="#/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center w-full group cursor-pointer"
          >
            {/* Logo centered directly above Quran Education - enlarged & clean transparent */}
            <AnimatedItem delay={0.02}>
              <img
                src="/logo.png"
                alt="Quran Education Logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-md mb-2 group-hover:scale-105 transition-transform"
              />
            </AnimatedItem>

            <AnimatedItem delay={0.05} className="flex items-baseline justify-center gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FCB205] font-bold leading-none drop-shadow-xs">
                Quran
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#FCB205] font-black leading-none drop-shadow-xs">
                Education
              </span>
            </AnimatedItem>

            <AnimatedItem delay={0.08}>
              <span className="text-xs sm:text-sm md:text-[15px] text-[#FCB205] font-semibold lowercase tracking-wider mt-1.5 font-serif text-center block">
                online islamic academy
              </span>
            </AnimatedItem>
          </a>

          {/* User Required Description directly below logo with word-by-word transition */}
          <div className="mt-3.5 text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal text-left sm:text-center">
            <AnimatedWords
              text="Quran Education is a non-partisan organization, we are not part of any group, Islamic organization or mosques. We welcome all students interested in learning Quran."
              delay={0.04}
            />
          </div>
        </div>

        {/* 3 Main Columns Layout with 2 golden vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start pt-4 border-t border-emerald-900/60 pl-2 sm:pl-6 lg:pl-10">
          
          {/* Column 1: Contact & Socialize */}
          <div className="md:col-span-4 lg:col-span-3 text-left space-y-4">
            
            {/* FEEL FREE TO CONTACT US */}
            <div>
              <AnimatedWords
                text="FEEL FREE TO CONTACT US"
                className="text-sm sm:text-[15px] font-bold text-[#FCB205] uppercase tracking-wider mb-3 block"
              />

              <div className="space-y-2.5">
                {/* Phone 1: WhatsApp +92 318 7779954 */}
                <AnimatedItem delay={0.04}>
                  <a
                    href="https://wa.me/923187779954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group cursor-pointer"
                    title="Chat with +92 318 7779954 on WhatsApp"
                  >
                    <div className="w-8 h-8 rounded-full bg-white text-[#032918] group-hover:scale-105 flex items-center justify-center shrink-0 shadow-sm transition-transform">
                      <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                    </div>
                    <span className="text-white group-hover:text-[#FCB205] transition-colors font-mono text-sm sm:text-[15px] font-medium">
                      +92 318 7779954
                    </span>
                  </a>
                </AnimatedItem>

                {/* Phone 2: WhatsApp +92 309 6000449 */}
                <AnimatedItem delay={0.08}>
                  <a
                    href="https://wa.me/923096000449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group cursor-pointer"
                    title="Chat with +92 309 6000449 on WhatsApp"
                  >
                    <div className="w-8 h-8 rounded-full bg-white text-[#032918] group-hover:scale-105 flex items-center justify-center shrink-0 shadow-sm transition-transform">
                      <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                      </svg>
                    </div>
                    <span className="text-white group-hover:text-[#FCB205] transition-colors font-mono text-sm sm:text-[15px] font-medium">
                      +92 309 6000449
                    </span>
                  </a>
                </AnimatedItem>

                {/* Email */}
                <AnimatedItem delay={0.12}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-4 h-4 text-[#032918]" />
                    </div>
                    <a
                      href="mailto:info@quraneducation.uk"
                      className="text-white hover:text-[#FCB205] transition-colors text-sm sm:text-[15px] font-medium break-all"
                    >
                      info@quraneducation.uk
                    </a>
                  </div>
                </AnimatedItem>
              </div>
            </div>

            {/* SOCIALIZE WITH US: 5 Exact accounts (No Messenger, No WhatsApp here) */}
            <div className="pt-2">
              <AnimatedWords
                text="SOCIALIZE WITH US"
                className="text-sm sm:text-[15px] font-bold text-[#FCB205] uppercase tracking-wider mb-3 block"
              />

              <div className="flex flex-wrap items-center gap-2.5">
                {/* 1. YouTube */}
                <AnimatedItem delay={0.04}>
                  <a
                    href="https://www.youtube.com/@quraan_education"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    title="YouTube"
                    className="w-8 h-8 rounded-full bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </AnimatedItem>

                {/* 2. Twitter / X */}
                <AnimatedItem delay={0.07}>
                  <a
                    href="https://twitter.com/QuranAcadmi?t=sX209JpBDAqc4_R8IPPd-w&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    title="Twitter / X"
                    className="w-8 h-8 rounded-full bg-white text-slate-900 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </AnimatedItem>

                {/* 3. Instagram */}
                <AnimatedItem delay={0.1}>
                  <a
                    href="https://www.instagram.com/quraanedu?vrfl=cnYzYmxwemV3ZTAx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-8 h-8 rounded-full bg-white text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </AnimatedItem>

                {/* 4. Facebook */}
                <AnimatedItem delay={0.13}>
                  <a
                    href="https://www.facebook.com/share/1HU5RwzueL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="w-8 h-8 rounded-full bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                </AnimatedItem>

                {/* 5. TikTok */}
                <AnimatedItem delay={0.16}>
                  <a
                    href="https://www.tiktok.com/@quran.education08?_t=8n1wB3K3UD5&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    title="TikTok"
                    className="w-8 h-8 rounded-full bg-white text-slate-900 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </AnimatedItem>
              </div>
            </div>
          </div>

          {/* First Golden Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 self-stretch justify-center">
            <div className="w-[1.5px] bg-[#FCB205] h-full min-h-[190px] mx-auto opacity-75" />
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 text-left">
            <AnimatedWords
              text="QUICK LINKS"
              className="text-sm sm:text-[15px] font-bold text-[#FCB205] uppercase tracking-wider mb-3 block"
            />

            <ul className="space-y-1.5">
              {quickLinks.map((item, idx) => {
                if (item.page === 'admissions') {
                  return (
                    <li key={item.label}>
                      <AnimatedItem delay={0.03 * idx}>
                        <button
                          onClick={() => onOpenEnroll()}
                          className="flex items-center gap-2 text-white/95 hover:text-[#FCB205] transition-colors text-sm sm:text-[15px] font-normal cursor-pointer text-left py-0.5"
                        >
                          <span className="text-[#FCB205] font-bold text-sm select-none">›</span>
                          <span>{item.label}</span>
                        </button>
                      </AnimatedItem>
                    </li>
                  );
                }
                const targetHash = item.page === 'pricing' ? 'packages' : item.page;
                return (
                  <li key={item.label}>
                    <AnimatedItem delay={0.03 * idx}>
                      <a
                        href={`#/${targetHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/95 hover:text-[#FCB205] transition-colors text-sm sm:text-[15px] font-normal cursor-pointer text-left py-0.5"
                      >
                        <span className="text-[#FCB205] font-bold text-sm select-none">›</span>
                        <span>{item.label}</span>
                      </a>
                    </AnimatedItem>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Second Golden Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 self-stretch justify-center">
            <div className="w-[1.5px] bg-[#FCB205] h-full min-h-[190px] mx-auto opacity-75" />
          </div>

          {/* Column 3: Students Gallery */}
          <div className="md:col-span-5 lg:col-span-5 text-left">
            <AnimatedWords
              text="STUDENTS GALLERY"
              className="text-sm sm:text-[15px] font-bold text-[#FCB205] uppercase tracking-wider mb-3 block"
            />

            {/* 6x2 Responsive Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {/* 11 Student Thumbnails */}
              {students.map((student, sIdx) => (
                <AnimatedItem key={student.id} delay={0.02 * sIdx}>
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="relative rounded-xl overflow-hidden aspect-square min-w-[50px] min-h-[50px] sm:min-w-[58px] sm:min-h-[58px] md:min-w-[64px] md:min-h-[64px] border border-white/20 shadow-sm group bg-emerald-950/40 cursor-pointer focus:outline-hidden hover:scale-105 transition-transform duration-200"
                    title={`${student.name} - ${student.course}`}
                  >
                    <img
                      src={student.src}
                      alt={student.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                </AnimatedItem>
              ))}

              {/* 12th Tile: Golden VIEW MORE */}
              <AnimatedItem delay={0.24}>
                <button
                  onClick={() => setSelectedStudent(students[0])}
                  className="rounded-xl aspect-square min-w-[50px] min-h-[50px] sm:min-w-[58px] sm:min-h-[58px] md:min-w-[64px] md:min-h-[64px] bg-[#FCB205] text-[#072C1E] border border-[#FCB205] shadow-sm flex flex-col items-center justify-center p-1 cursor-pointer hover:brightness-105 active:scale-95 transition-all text-center group"
                  title="View Student Gallery"
                >
                  {/* Top Islamic Filigree Flourish */}
                  <svg
                    className="w-4 h-1.5 text-[#072C1E] mb-0.5 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 8"
                    fill="currentColor"
                  >
                    <path d="M12 0 C14 3 18 4 24 4 C18 4 14 5 12 8 C10 5 6 4 0 4 C6 4 10 3 12 0 Z" />
                  </svg>

                  <span className="text-[10px] sm:text-[11px] font-black text-[#072C1E] tracking-widest leading-none drop-shadow-xs">
                    VIEW
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-black text-[#072C1E] tracking-widest leading-none mt-0.5 drop-shadow-xs">
                    MORE
                  </span>

                  {/* Bottom Islamic Filigree Flourish */}
                  <svg
                    className="w-4 h-1.5 text-[#072C1E] mt-0.5 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 8"
                    fill="currentColor"
                  >
                    <path d="M12 0 C14 3 18 4 24 4 C18 4 14 5 12 8 C10 5 6 4 0 4 C6 4 10 3 12 0 Z" />
                  </svg>
                </button>
              </AnimatedItem>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-200/70 border-t border-emerald-900/40">
          <div className="text-center sm:text-left">
            <AnimatedWords text={`© ${new Date().getFullYear()} Quran Education. All rights reserved.`} />
          </div>

          <AnimatedItem delay={0.08} className="flex items-center gap-3">
            <a
              href="#/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCB205] transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="#/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCB205] transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </AnimatedItem>
        </div>

      </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE FOOTER (With Reference Arched Canopy & Styling)   */}
      {/* ======================================================== */}
      <div className="block lg:hidden relative w-full text-white bg-transparent pt-14 pb-10 overflow-hidden">
        {/* Background Layer: Asymmetrical Arched Canopy for Mobile (matching reference image) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 450 1150"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Secondary Layer: Faint Warm Silver-Gray Wave */}
            <path
              d="M0,48 C75,24 140,8 215,12 C315,16 385,42 450,30 L450,1150 L0,1150 Z"
              fill="#D5D2C9"
              fillOpacity="0.55"
            />
            {/* Primary Layer: Dark Forest Green Canopy Shape */}
            <path
              d="M0,68 C65,36 130,0 215,0 C285,0 380,36 450,50 L450,1150 L0,1150 Z"
              fill="#032918"
            />
            {/* Islamic Architectural Arch Trim Line */}
            <path
              d="M0,72 C65,40 130,4 215,4 C285,4 380,40 450,54"
              stroke="#FCB205"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-md mx-auto px-5 flex flex-col items-center text-center space-y-6">
          
          {/* 1. Brand Header: Centered Logo + Title + Disclaimer */}
          <div className="flex flex-col items-center text-center w-full">
            <AnimatedItem animation="scale" className="flex flex-col items-center">
              <a
                href="#/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="Quran Education Logo"
                  className="h-20 w-auto object-contain drop-shadow-md mb-2 group-hover:scale-105 transition-transform"
                />
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-serif text-[#FCB205] font-bold leading-none">
                    Quran
                  </span>
                  <span className="text-2xl font-sans text-[#FCB205] font-black leading-none">
                    Education
                  </span>
                </div>
                <span className="text-xs text-[#FCB205] font-semibold lowercase tracking-wider mt-1 font-serif">
                  online islamic academy
                </span>
              </a>
            </AnimatedItem>

            <AnimatedWords
              text="Quran Education is a non-partisan organization, we are not part of any group, Islamic organization or mosques. We welcome all students interested in learning Quran."
              className="mt-3.5 text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm justify-center"
            />
          </div>

          {/* Golden Divider */}
          <div className="w-24 h-[1px] bg-[#FCB205]/60 mx-auto" />

          {/* 2. Contact Details: Stacked Cards with Icons */}
          <div className="w-full flex flex-col items-center space-y-3">
            <h3 className="text-xs font-bold text-[#FCB205] uppercase tracking-wider">
              <AnimatedWords text="FEEL FREE TO CONTACT US" className="justify-center" />
            </h3>

            <div className="w-full max-w-xs space-y-2.5">
              {/* Phone 1: WhatsApp +92 318 7779954 */}
              <AnimatedItem animation="slideUp" delay={0.05}>
                <a
                  href="https://wa.me/923187779954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-950/40 hover:bg-emerald-900/50 transition-colors"
                  title="Chat with +92 318 7779954 on WhatsApp"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold tracking-wide font-mono">
                    +92 318 7779954
                  </span>
                </a>
              </AnimatedItem>

              {/* Phone 2: WhatsApp +92 309 6000449 */}
              <AnimatedItem animation="slideUp" delay={0.1}>
                <a
                  href="https://wa.me/923096000449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-950/40 hover:bg-emerald-900/50 transition-colors"
                  title="Chat with +92 309 6000449 on WhatsApp"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold tracking-wide font-mono">
                    +92 309 6000449
                  </span>
                </a>
              </AnimatedItem>

              {/* Email with Green Border */}
              <AnimatedItem animation="slideUp" delay={0.15}>
                <a
                  href="mailto:info@quraneducation.uk"
                  className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-950/40 hover:bg-emerald-900/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-[#032918]" />
                  </div>
                  <span className="text-white text-sm font-medium break-all">
                    info@quraneducation.uk
                  </span>
                </a>
              </AnimatedItem>
            </div>
          </div>

          {/* Golden Divider */}
          <div className="w-24 h-[1px] bg-[#FCB205]/60 mx-auto" />

          {/* 3. Socialize With Us */}
          <div className="w-full flex flex-col items-center space-y-3">
            <h3 className="text-xs font-bold text-[#FCB205] uppercase tracking-wider">
              <AnimatedWords text="SOCIALIZE WITH US" className="justify-center" />
            </h3>

            <div className="flex items-center justify-center gap-3">
              {/* YouTube */}
              <AnimatedItem animation="scale" delay={0.05}>
                <a
                  href="https://www.youtube.com/@quraan_education"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-9 h-9 rounded-full bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </AnimatedItem>

              {/* Twitter / X */}
              <AnimatedItem animation="scale" delay={0.1}>
                <a
                  href="https://twitter.com/QuranAcadmi?t=sX209JpBDAqc4_R8IPPd-w&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                  className="w-9 h-9 rounded-full bg-white text-slate-900 hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </AnimatedItem>

              {/* Instagram */}
              <AnimatedItem animation="scale" delay={0.15}>
                <a
                  href="https://www.instagram.com/quraanedu?vrfl=cnYzYmxwemV3ZTAx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-9 h-9 rounded-full bg-white text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </AnimatedItem>

              {/* Facebook */}
              <AnimatedItem animation="scale" delay={0.2}>
                <a
                  href="https://www.facebook.com/share/1HU5RwzueL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-9 h-9 rounded-full bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </AnimatedItem>

              {/* TikTok */}
              <AnimatedItem animation="scale" delay={0.25}>
                <a
                  href="https://www.tiktok.com/@quran.education08?_t=8n1wB3K3UD5&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-9 h-9 rounded-full bg-white text-slate-900 hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </AnimatedItem>
            </div>
          </div>

          {/* Golden Divider */}
          <div className="w-24 h-[1px] bg-[#FCB205]/60 mx-auto" />

          {/* 4. Quick Links: Centered Heading directly above the 2 Columns */}
          <div className="w-fit mx-auto flex flex-col items-center">
            {/* Centered Heading above both columns */}
            <h3 className="text-xs font-bold text-[#FCB205] uppercase tracking-wider text-center w-full mb-3 select-none">
              <AnimatedWords text="QUICK LINKS" className="justify-center" />
            </h3>

            {/* 2 Columns container - Quick link page names increased by 0.5 number: text-[13.5px] */}
            <div className="grid grid-cols-2 gap-x-8 text-left">
              {/* Column 1: Home, Courses, Packages, FAQ, Enroll */}
              <div className="flex flex-col space-y-2">
                <AnimatedItem animation="slideUp" delay={0.03}>
                  <a
                    href="#/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Home</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.06}>
                  <a
                    href="#/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Courses</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.09}>
                  <a
                    href="#/packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Packages</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.12}>
                  <a
                    href="#/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">FAQ</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.15}>
                  <button
                    onClick={() => onOpenEnroll()}
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap text-left group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Enroll</span>
                  </button>
                </AnimatedItem>
              </div>

              {/* Column 2: About, How It Works, Blog, Contact */}
              <div className="flex flex-col space-y-2">
                <AnimatedItem animation="slideUp" delay={0.04}>
                  <a
                    href="#/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">About</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.08}>
                  <a
                    href="#/how-it-works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">How It Works</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.12}>
                  <a
                    href="#/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Blog</span>
                  </a>
                </AnimatedItem>
                <AnimatedItem animation="slideUp" delay={0.16}>
                  <a
                    href="#/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/95 hover:text-[#FCB205] cursor-pointer whitespace-nowrap group"
                  >
                    <span className="text-[#FCB205] font-bold select-none group-hover:translate-x-0.5 transition-transform">›</span>
                    <span className="text-[13.5px] font-medium leading-none">Contact</span>
                  </a>
                </AnimatedItem>
              </div>
            </div>
          </div>

          {/* Golden Divider */}
          <div className="w-24 h-[1px] bg-[#FCB205]/60 mx-auto" />

          {/* 5. Students Gallery: Compact Grid */}
          <div className="w-full">
            <h3 className="text-xs font-bold text-[#FCB205] uppercase tracking-wider mb-3">
              <AnimatedWords text="STUDENTS GALLERY" className="justify-center" />
            </h3>

            <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
              {students.map((student, idx) => (
                <AnimatedItem key={student.id} animation="scale" delay={idx * 0.03}>
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="relative w-full rounded-xl overflow-hidden aspect-square border border-white/20 shadow-xs bg-emerald-950/40 cursor-pointer active:scale-95 transition-transform block"
                    title={`${student.name} - ${student.course}`}
                  >
                    <img
                      src={student.src}
                      alt={student.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </AnimatedItem>
              ))}

              {/* 12th Tile: Golden VIEW MORE */}
              <AnimatedItem animation="scale" delay={0.36}>
                <button
                  onClick={() => setSelectedStudent(students[0])}
                  className="w-full rounded-xl aspect-square bg-[#FCB205] text-[#072C1E] border border-[#FCB205] shadow-xs flex flex-col items-center justify-center p-1 cursor-pointer active:scale-95 transition-all text-center"
                  title="View Student Gallery"
                >
                  <span className="text-[10px] font-black text-[#072C1E] tracking-widest leading-none">
                    VIEW
                  </span>
                  <span className="text-[10px] font-black text-[#072C1E] tracking-widest leading-none mt-0.5">
                    MORE
                  </span>
                </button>
              </AnimatedItem>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="w-full pt-4 border-t border-emerald-900/60 text-[11px] text-emerald-200/70 space-y-2">
            <AnimatedWords
              text={`© ${new Date().getFullYear()} Quran Education. All rights reserved.`}
              className="justify-center"
            />
            <div className="flex items-center justify-center gap-3">
              <a
                href="#/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCB205] transition-colors"
              >
                Privacy Policy
              </a>
              <span>·</span>
              <a
                href="#/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCB205] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Lightbox Modal for Student Gallery & Enrollment Portaled to Body */}
      {createPortal(
        <AnimatePresence>
          {selectedStudent && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedStudent(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 14 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#072C1E] border border-[#FCB205]/70 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl overflow-hidden z-10"
              >
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#FCB205] shadow-lg mb-4">
                    <img
                      src={selectedStudent.src}
                      alt={selectedStudent.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between w-full px-6 mb-2">
                    <button
                      onClick={handlePrevStudent}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-90"
                      aria-label="Previous student"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="text-center">
                      <h4 className="text-lg font-serif font-bold text-[#FCB205]">
                        {selectedStudent.name}
                      </h4>
                      <p className="text-sm text-emerald-200/90 font-medium">
                        {selectedStudent.course}
                      </p>
                    </div>
                    <button
                      onClick={handleNextStudent}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-90"
                      aria-label="Next student"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-100/80 mb-5 max-w-sm">
                    Enrolled in interactive one-on-one live Quran classes with our certified scholars.
                  </p>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setSelectedStudent(null);
                        onOpenEnroll();
                      }}
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#FCB205] hover:bg-[#ebd523] text-[#072C1E] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer lq-btn"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
};
