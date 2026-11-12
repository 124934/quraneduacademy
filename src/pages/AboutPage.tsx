import { Sparkles, Award, ShieldCheck, Heart, BookOpen } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const pillars = [
    {
      icon: Award,
      title: 'Precision in Tajweed',
      desc: 'Recitation that honors every letter’s Makhraj and Sifah, maintaining the divine cadence as revealed to Prophet Muhammad (PBUH).',
    },
    {
      icon: BookOpen,
      title: 'Deep Comprehension',
      desc: 'Moving beyond mere pronunciation to understanding the meaning, context, and message of the verses through word-for-word Tafseer.',
    },
    {
      icon: Heart,
      title: 'Lasting Memorization',
      desc: 'Systematic Hifz methodology based on traditional 3-tier revision (Sabaq, Sabqi, and Manzil) ensuring verses are permanently retained.',
    },
    {
      icon: ShieldCheck,
      title: 'Islamic Character (Akhlaq)',
      desc: 'Instilling adab, reverence, humbleness, and moral character in every student through the mentorship of upright practicing scholars.',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Hero Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Preserving Sacred Knowledge</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            About Quran Education
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A premier international institution dedicated to illuminating lives through authentic Quranic recitation, Tajweed, Translation, and comprehensive Islamic studies.
          </p>

          {/* Academy Statistics Banner: Students: 1000+, Teachers: 150+ */}
          <div className="pt-8 max-w-xl mx-auto grid grid-cols-2 gap-4 sm:gap-6">
            <AnimatedItem delay={0.05} className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-xs text-center lq-card-hover">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0A3826]">
                1000+
              </div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Students
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.12} className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-xs text-center lq-card-hover">
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0A3826]">
                150+
              </div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Teachers
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision Section */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold text-[#FCB205] uppercase tracking-widest font-serif">
                Our Sacred Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
                Empowering Muslim Families Worldwide with Sacred Quranic Tradition
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quran Education Academy was founded with a singular conviction: every Muslim, regardless of geographic location or age, deserves access to certified scholars who recite the Book of Allah with unbroken chains of transmission (Sanad).
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine centuries-old Al-Azhar and Madinah pedagogical rigor with modern interactive video classrooms, making Quranic learning effortless, engaging, and spiritually uplifting for kids, youth, and adults.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <div className="p-4 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs lq-card-hover">
                  <h4 className="font-serif font-bold text-sm text-[#072C1E] mb-1">Our Mission</h4>
                  <p className="text-xs text-slate-600">
                    To make certified 1-on-1 Quran education accessible, affordable, and flexible for every household worldwide.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs lq-card-hover">
                  <h4 className="font-serif font-bold text-sm text-[#072C1E] mb-1">Our Vision</h4>
                  <p className="text-xs text-slate-600">
                    To nurture a generation that recites with flawless Tajweed, understands the Quranic message, and lives its values with Ihsan.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-emerald-900/15 shadow-xl lq-img-zoom lq-card-hover">
                <img
                  src="/assets/images/islamic_academy_learning_1790269898921.jpg"
                  alt="Islamic Academy Learning"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4 Pillars Section */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/30">
        <IslamicPattern variant="light" opacity={0.035} patternType="star8" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#FCB205] uppercase tracking-widest font-serif">
              Educational Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#072C1E]">
              Our Four Educational Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The foundational cornerstones that govern every course and interaction at Quran Education Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <AnimatedItem
                  key={pillar.title}
                  delay={idx * 0.08}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/80 shadow-xs lq-card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A3826] flex items-center justify-center mb-5 group-hover:bg-[#0A3826] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#072C1E] mb-2 group-hover:text-emerald-950 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
