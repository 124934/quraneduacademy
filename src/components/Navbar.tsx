import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Star,
  BookOpen,
  Sparkles,
  Bookmark,
  LayoutGrid,
  HelpCircle,
  Mail,
  Lock,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnroll,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';

  // Navigation Links: Home, Courses, About, How It Works, Packages, Blog, FAQ, Enroll
  const navLinks: {
    label: string;
    page: PageRoute;
    icon: React.ComponentType<{ className?: string }>;
    hasDropdown?: boolean;
    isAction?: boolean;
  }[] = [
    { label: 'HOME', page: 'home', icon: Home },
    { label: 'COURSES', page: 'courses', icon: BookOpen, hasDropdown: true },
    { label: 'ABOUT', page: 'about', icon: Star },
    { label: 'HOW IT WORKS', page: 'how-it-works', icon: Sparkles },
    { label: 'PACKAGES', page: 'pricing', icon: Bookmark },
    { label: 'BLOG', page: 'blog', icon: LayoutGrid },
    { label: 'FAQ', page: 'faq', icon: HelpCircle },
    { label: 'CONTACT', page: 'contact', icon: Mail },
    { label: 'ENROLL', page: 'admissions', icon: Sparkles, isAction: true },
  ];

  // Quick course list for the dropdown
  const featuredCourses = [
    { name: 'Noorani Qaida', slug: 'noorani-qaida' },
    { name: 'Quran Reading (Nazra)', slug: 'quran-reading' },
    { name: 'Quran with Tajweed', slug: 'quran-tajweed' },
    { name: 'Quran Memorization (Hifz)', slug: 'quran-memorization' },
    { name: 'Quran Translation', slug: 'quran-translation' },
    { name: 'Salah and Daily Masnoon Dua', slug: 'salah-and-duas' },
    { name: 'Basic Islamic Studies', slug: 'basic-islamic-studies' },
    { name: 'Comprehensive Islamic Studies', slug: 'comprehensive-islamic-studies' },
    { name: 'Advanced Islamic Studies', slug: 'advanced-islamic-studies' },
  ];

  const handleNavClick = (page: PageRoute, isAction?: boolean) => {
    if (isAction) {
      onOpenEnroll();
      return;
    }
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white">
      {/* Top Green Bar: Contact pills on the right */}
      <div className="bg-[#072C1E] text-white py-1.5 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-emerald-900/60 z-30">
        <div className="w-full max-w-[1560px] mx-auto flex items-center justify-end gap-2 sm:gap-3 text-xs">
          {/* WhatsApp 1 (Desktop only, WITH green border) */}
          <a
            href="https://wa.me/923096000449"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium text-[11px] sm:text-xs shadow-xs border-2 border-emerald-400"
            title="WhatsApp: +92 309 6000449"
          >
            <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
            </svg>
            <span className="font-mono tracking-tight">+92 309 6000449</span>
          </a>

          {/* WhatsApp 2 (Visible on mobile & desktop, WITH green border) */}
          <a
            href="https://wa.me/923187779954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium text-[11px] sm:text-xs shadow-xs border-2 border-emerald-400"
            title="WhatsApp: +92 318 7779954"
          >
            <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
            </svg>
            <span className="font-mono tracking-tight">+92 318 7779954</span>
          </a>

          {/* Email (Visible on mobile & desktop, WITH green border) */}
          <a
            href="mailto:info@quraneducation.uk"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium text-[11px] sm:text-xs shadow-xs border-2 border-emerald-400"
            title="Email: info@quraneducation.uk"
          >
            <Mail className="w-3.5 h-3.5 text-[#FCB205] shrink-0" />
            <span className="font-sans">info@quraneducation.uk</span>
          </a>
        </div>
      </div>

      {/* Main Header Bar: Pure White with Compact Max Width */}
      <div
        className={`w-full relative bg-white ${
          isScrolled ? 'py-1 shadow-md' : 'py-1.5'
        }`}
      >
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
          
          {/* Desktop Branding (Left-aligned, exact setting as before) */}
          <div className="hidden lg:flex items-center gap-2.5 sm:gap-3 shrink-0 py-0.5">
            <a
              href="#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 focus:outline-hidden transition-transform hover:scale-105 cursor-pointer"
              aria-label="Quran Education Home"
            >
              <img
                src="/logo.png"
                alt="Quran Education Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain drop-shadow-xs"
              />
            </a>

            <div className="flex flex-col text-left">
              <a
                href="#/home"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-hidden cursor-pointer"
              >
                <span className="text-lg sm:text-xl md:text-[21px] font-serif font-black text-[#FCB205] tracking-tight leading-none">
                  Quran Education
                </span>
              </a>
              {/* Sits compactly right under 'Education' */}
              <div className="w-full flex justify-end">
                <span className="text-[8px] sm:text-[8.5px] text-black font-extrabold tracking-wider uppercase mt-0.5 font-sans leading-none whitespace-nowrap">
                  Online Quran Academy
                </span>
              </div>
            </div>
          </div>

          {/* Symmetrical Left Spacer for Mobile Only */}
          <div className="w-9 shrink-0 lg:hidden" aria-hidden="true" />

          {/* Mobile Branding ONLY: Quran Education + Online Quran Academy centered directly below (Logo removed for mobile) */}
          <div className="flex lg:hidden flex-1 justify-center items-center py-1">
            <a
              href="#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center focus:outline-hidden cursor-pointer group"
              aria-label="Quran Education Home"
            >
              <span className="text-lg font-serif font-black text-[#FCB205] tracking-tight leading-none text-center">
                Quran Education
              </span>
              <span className="text-[8.5px] text-black font-extrabold tracking-wider uppercase mt-1 font-sans leading-none text-center whitespace-nowrap">
                Online Quran Academy
              </span>
            </a>
          </div>

          {/* Center/Right Navigation: Less bold, reduced width & compact spacing */}
          <div className="flex items-center gap-3">
            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPage === link.page;
                const targetHash = link.page === 'pricing' ? 'packages' : link.page === 'admissions' ? 'enroll' : link.page;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                      onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                    >
                      <a
                        href={`#/${targetHash}`}
                        className={`nav-link-item flex items-center gap-1 text-[12.5px] xl:text-[13.5px] font-medium tracking-normal transition-colors py-1.5 px-2 cursor-pointer ${
                          isActive
                            ? 'text-[#0A3826] font-semibold active-link'
                            : 'text-slate-700 hover:text-[#0A3826]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#FCB205] shrink-0" />
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ml-0.5 ${
                            isCoursesDropdownOpen ? 'rotate-180 text-[#0A3826]' : 'text-slate-400'
                          }`}
                        />
                      </a>

                      {/* Courses Dropdown Menu with silky smooth animation */}
                      <AnimatePresence>
                        {isCoursesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 w-64 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 text-left overflow-hidden"
                          >
                            <div className="px-3.5 py-1.5 text-[11px] font-bold text-[#FCB205] uppercase tracking-wider font-serif border-b border-slate-100 flex items-center justify-between">
                              <span>Available Courses</span>
                              <span className="text-[10px] text-slate-400 font-sans font-normal">1-on-1 Classes</span>
                            </div>
                            <div className="py-1">
                              {featuredCourses.map((c) => (
                                <a
                                  key={c.slug}
                                  href={`#/course/${c.slug}`}
                                  onClick={() => setIsCoursesDropdownOpen(false)}
                                  className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0A3826] hover:translate-x-1 transition-all duration-200 cursor-pointer"
                                >
                                  {c.name}
                                </a>
                              ))}
                            </div>
                            <div className="mt-1 pt-1 border-t border-slate-100 bg-slate-50/60 px-3.5 py-2">
                              <a
                                href="#/courses"
                                onClick={() => setIsCoursesDropdownOpen(false)}
                                className="block text-xs font-bold text-[#0A3826] hover:text-[#FCB205] transition-colors cursor-pointer"
                              >
                                View All Courses →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.isAction) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => onOpenEnroll()}
                      className="flex items-center gap-1.5 text-[12px] xl:text-[13px] font-bold tracking-normal py-1.5 px-3 bg-[#032918] hover:bg-[#072C1E] text-white rounded-xl shadow-xs cursor-pointer ml-1 border border-emerald-900/40 lq-btn lq-shimmer-btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FCB205] shrink-0" />
                      <span>{link.label}</span>
                    </button>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={`#/${targetHash}`}
                    className={`nav-link-item flex items-center gap-1 text-[12.5px] xl:text-[13.5px] font-medium tracking-normal transition-colors py-1.5 px-2 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#0A3826] font-semibold active-link'
                        : 'text-slate-700 hover:text-[#0A3826]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FCB205] shrink-0" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0A3826] focus:outline-hidden rounded-lg cursor-pointer transition-transform duration-200 active:scale-90"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform rotate-0 hover:rotate-90 transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-emerald-950/10 shadow-2xl px-6 py-6 space-y-4 text-left overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPage === link.page;
                const targetHash = link.page === 'pricing' ? 'packages' : link.page === 'admissions' ? 'enroll' : link.page;

                if (link.isAction) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onOpenEnroll();
                      }}
                      className="flex items-center gap-3 text-base font-bold uppercase py-2.5 px-3.5 rounded-xl bg-emerald-50 text-[#072C1E] transition-all cursor-pointer text-left w-full active:scale-98"
                    >
                      <Icon className="w-4 h-4 text-[#FCB205]" />
                      <span>{link.label}</span>
                    </button>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={`#/${targetHash}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 text-base font-bold uppercase py-2.5 px-3.5 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-50 text-[#0A3826]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#FCB205]" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              {/* Direct Email Link on Mobile Menu */}
              <a
                href="mailto:info@quraneducation.uk"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FCB205]" />
                <span>info@quraneducation.uk</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full py-3 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-md text-center block cursor-pointer lq-btn lq-shimmer-btn border border-emerald-900/40"
              >
                Book 3-Day Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
