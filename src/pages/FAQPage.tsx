import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { faqs, ACADEMY_CONFIG } from '../data/academyData';

interface FAQPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Classes', 'Teachers', 'Payments & Scheduling'];

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-8 pb-12 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Clear Answers to Common Questions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Frequently Asked Questions
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our 1-on-1 online Quran classes, certified tutors, rescheduling policies, free trial, and parent progress tracking.
          </p>

          {/* Search Input */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any question (e.g. trial, rescheduling, teachers)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/95 backdrop-blur-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A3826] text-white shadow-xs scale-102'
                    : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200 hover:text-[#0A3826]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Accordion FAQ List */}
      <section className="relative py-10 sm:py-14 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-left">
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <AnimatedItem
                  key={faq.id}
                  delay={Math.min(idx * 0.04, 0.3)}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#0A3826]/40 bg-white/95 backdrop-blur-sm shadow-md'
                      : 'border-slate-200/90 bg-white/85 backdrop-blur-sm hover:bg-white/95 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#072C1E] focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-sans text-xs shrink-0 font-bold transition-colors duration-300 ${
                        isOpen ? 'bg-[#0A3826] text-white' : 'bg-emerald-100/70 text-[#0A3826]'
                      }`}>
                        ?
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0A3826]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AnimatedItem>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#072C1E] text-white text-center space-y-4 relative overflow-hidden">
            <IslamicPattern variant="dark" opacity={0.08} />

            <h3 className="text-xl font-serif font-bold text-white">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-md mx-auto">
              Our academic advisors are ready to assist you on WhatsApp or via direct phone call.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/923187779954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-xs whitespace-nowrap cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="whitespace-nowrap">Chat on WhatsApp: +92 318 7779954</span>
              </a>

              <button
                onClick={() => onOpenEnroll()}
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer whitespace-nowrap text-center"
              >
                Book 3-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
