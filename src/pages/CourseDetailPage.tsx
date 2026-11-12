import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  Users,
  Award,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface CourseDetailPageProps {
  courseSlug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseSlug,
  onNavigate,
  onOpenEnroll,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const course =
    courses.find((c) => c.slug === courseSlug || c.id === courseSlug) || courses[0];

  const isAdvanced =
    course.id === 'advanced-islamic-studies' || course.slug === 'advanced-islamic-studies';

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div
      data-course={course.id}
      className={`w-full relative overflow-hidden text-slate-800 ${
        isAdvanced ? 'no-trans-advanced' : ''
      }`}
    >
      {/* Course Header Banner */}
      <section className="relative pt-8 pb-16 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.04} patternType="star8" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-left">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#0A3826] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('courses')}
              className="hover:text-[#0A3826] transition-colors cursor-pointer"
            >
              Courses
            </button>
            <span>/</span>
            <span className="font-semibold text-slate-700">{course.title}</span>
          </div>

          <AnimatedSection animation="fadeUp" disableAnimation={isAdvanced} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-[#0A3826]">
                  {course.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#C5A059]/15 text-[#8F7029]">
                  {course.level}
                </span>
                {course.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">
                    {course.badge}
                  </span>
                )}
              </div>

              <div className="font-arabic text-2xl sm:text-3xl text-[#0A3826] font-bold">
                {course.arabicTitle}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
                {course.title}
              </h1>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                {course.fullOverview || course.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span><strong>Class Type:</strong> 1-on-1 Private Interactive Lessons</span>
                </div>
              </div>
            </div>

            {/* Quick Enroll Card */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4 lq-card-hover">
              <div className="text-center pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-[#FCB205] uppercase tracking-wider">
                  Zero Financial Risk
                </span>
                <h4 className="text-xl font-serif font-bold text-[#072C1E] mt-0.5">
                  3-Day Free Trial
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Test our classroom and scholar before committing.
                </p>
              </div>

              <button
                onClick={() => onOpenEnroll(course.id || course.slug)}
                className="w-full py-3.5 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 border border-emerald-900/40 lq-btn lq-shimmer-btn group"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <a
                href={`https://wa.me/923187779954?text=${encodeURIComponent(
                  `As-salamu alaykum! I would like to enroll in the ${course.title} at Quran Education Academy.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer lq-btn"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span>Ask on WhatsApp: +92 318 7779954</span>
              </a>

              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Male or Female Scholar Choice</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Reschedule Anytime with Notice</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Course Content */}
      <section className="relative py-16 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 space-y-16 text-left">
          {/* Target Audience */}
          <AnimatedSection animation="fadeUp" disableAnimation={isAdvanced}>
            <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-sm border border-slate-200 lq-card-hover">
              <h3 className="text-base font-serif font-bold text-[#072C1E] mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C5A059]" />
                Who is this course for?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {course.suitableFor}
              </p>
            </div>
          </AnimatedSection>

          {/* What You Will Learn */}
          <AnimatedSection animation="fadeUp" disableAnimation={isAdvanced}>
            <h3 className="text-2xl font-serif font-bold text-[#072C1E] mb-6">
              What You Will Learn in This Course
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map((item, idx) => (
                <AnimatedItem
                  key={idx}
                  index={idx}
                  disableAnimation={isAdvanced}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs lq-card-hover"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          {/* Expected Outcomes */}
          <AnimatedSection animation="fadeUp" disableAnimation={isAdvanced}>
            <h3 className="text-2xl font-serif font-bold text-[#072C1E] mb-6">
              Measurable Learning Outcomes
            </h3>
            <div className="space-y-3">
              {course.learningOutcomes.map((outcome, idx) => (
                <AnimatedItem
                  key={idx}
                  index={idx}
                  disableAnimation={isAdvanced}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/85 backdrop-blur-sm border border-emerald-100/90 shadow-xs lq-card-hover group"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-200/70 text-[#0A3826] flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#0A3826] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {outcome}
                  </span>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          {/* Course FAQs if any */}
          {course.faqs && course.faqs.length > 0 && (
            <AnimatedSection animation="fadeUp" disableAnimation={isAdvanced}>
              <h3 className="text-2xl font-serif font-bold text-[#072C1E] mb-6">
                Course Specific Questions
              </h3>
              <div className="space-y-3">
                {course.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-xs sm:text-sm text-[#072C1E] cursor-pointer hover:bg-slate-50/70 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="shrink-0 text-slate-500"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          )}

          {/* Bottom CTA Box */}
          <AnimatedSection animation="scaleUp" disableAnimation={isAdvanced}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#072C1E] text-white text-center space-y-4 relative overflow-hidden lq-card-hover">
              <IslamicPattern variant="dark" opacity={0.08} />
              <h3 className="text-2xl font-serif font-bold text-white">
                Ready to Begin {course.title}?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-lg mx-auto">
                Book your 3-day complimentary assessment today. Connect with an accredited scholar suited to your preferred schedule.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenEnroll(course.id || course.slug)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-slate-900 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer lq-btn"
                >
                  Book 3-Day Free Trial
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer lq-btn"
                >
                  Browse Other Courses
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
