import React from 'react';
import {
  Sparkles,
  CalendarCheck,
  UserCheck,
  Video,
  FileCheck2,
  GraduationCap,
  Monitor,
  Repeat,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';

interface HowItWorksPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const steps = [
    {
      num: '01',
      icon: CalendarCheck,
      title: 'Book Your 3-Day Free Trial',
      desc: 'Submit our simple registration form or WhatsApp message. No credit card is needed. Select your preferred timezone and days.',
    },
    {
      num: '02',
      icon: UserCheck,
      title: 'Complimentary Oral Assessment',
      desc: 'During the first trial session, a senior scholar evaluates the student’s current Arabic letter recognition, Makharij, or recitation fluency.',
    },
    {
      num: '03',
      icon: FileCheck2,
      title: 'Customized Curriculum & Scholar Match',
      desc: 'We match you with the ideal male or female scholar based on language preference, age, and academic objectives.',
    },
    {
      num: '04',
      icon: Video,
      title: 'Interactive 1-on-1 Live Sessions',
      desc: 'Learn inside our intuitive digital classroom with high-definition audio, interactive digital Mushaf, and real-time pronunciation correction.',
    },
    {
      num: '05',
      icon: GraduationCap,
      title: 'Weekly Progress & Milestone Certification',
      desc: 'Parents receive weekly WhatsApp lesson summaries and monthly performance reports. Students earn accredited completion certificates.',
    },
  ];

  const classroomFeatures = [
    {
      icon: Monitor,
      title: 'Interactive Digital Mushaf',
      desc: 'High-resolution Quran text shared directly on screen with color-coded Tajweed highlighting for effortless visual learning.',
    },
    {
      icon: Repeat,
      title: 'Flexible Rescheduling Policy',
      desc: 'We know life gets busy. Reschedule any class with 4-6 hours advance notice without any penalty or lost lesson credit.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Monitored Environment',
      desc: 'Supervised sessions with female teachers for female students and children, ensuring complete peace of mind for parents.',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Effortless Onboarding Process</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            How Learning with Us Works
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From the initial trial assessment to achieving fluent Quranic recitation, our structured 5-step process guarantees steady, inspiring progress.
          </p>
        </div>
      </AnimatedSection>

      {/* Steps Section */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <div className="space-y-6 text-left">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <AnimatedItem
                  key={step.num}
                  delay={idx * 0.08}
                  className="flex flex-col md:flex-row items-start gap-6 p-7 sm:p-8 rounded-3xl bg-white/92 backdrop-blur-sm border border-slate-200/90 shadow-xs lq-card-hover group"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-4xl font-serif font-extrabold text-[#FCB205] group-hover:text-[#0A3826] transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0A3826] shadow-xs group-hover:scale-110 group-hover:bg-[#0A3826] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#072C1E] group-hover:text-emerald-950 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Classroom Tech Features */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/30">
        <IslamicPattern variant="light" opacity={0.035} patternType="star8" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#FCB205] uppercase tracking-widest font-serif">
              Built for Modern Learners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              Our Modern Digital Classroom Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classroomFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <AnimatedItem
                  key={feat.title}
                  delay={idx * 0.1}
                  className="bg-white/90 backdrop-blur-sm p-7 rounded-3xl border border-slate-200/80 shadow-xs lq-card-hover group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0A3826] flex items-center justify-center mb-5 group-hover:bg-[#0A3826] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#072C1E] mb-2 group-hover:text-emerald-950 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </AnimatedItem>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onOpenEnroll()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer border border-emerald-900/40 lq-btn lq-shimmer-btn group"
            >
              <span>Start Your Free 3-Day Trial</span>
              <ArrowRight className="w-4 h-4 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
