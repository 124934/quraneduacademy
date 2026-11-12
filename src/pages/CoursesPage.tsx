import React, { useState } from 'react';
import { Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { courses } from '../data/academyData';

interface CoursesPageProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Foundation',
    'Recitation',
    'Tajweed',
    'Memorization',
    'Understanding',
    'Islamic Studies',
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Structured Academic Programs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Our Quran & Islamic Studies Courses
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover accredited personalized 1-on-1 programs in Quran, Tajweed, Translation, and Islamic Studies taught by certified scholars.
          </p>

          {/* Filter Categories */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A3826] text-white shadow-md scale-102'
                    : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200 hover:text-[#0A3826]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Courses Grid */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredCourses.map((course, idx) => (
              <AnimatedItem
                key={course.id}
                delay={(idx % 3) * 0.08}
                className="bg-white/92 backdrop-blur-sm rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs lq-card-hover flex flex-col justify-between group"
                data-course={course.id}
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-[#0A3826]">
                      {course.category}
                    </span>
                    <span className="text-xs font-bold text-[#FCB205] bg-[#FCB205]/15 px-2.5 py-0.5 rounded-md">
                      {course.level}
                    </span>
                  </div>

                  <div className="font-arabic text-xl text-[#0A3826] mb-1 font-semibold">
                    {course.arabicTitle}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#072C1E] mb-2.5">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {course.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80">
                    <h5 className="text-[11px] font-bold text-[#072C1E] uppercase tracking-wider mb-2">
                      What You'll Master:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {course.whatYouWillLearn.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center gap-3">
                  <a
                    href={`#/course/${course.slug || course.id}`}
                    className="flex-1 py-3 px-3 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-300 text-center cursor-pointer shadow-xs"
                  >
                    Full Syllabus
                  </a>

                  <button
                    onClick={() => onOpenEnroll(course.id)}
                    className="flex-1 py-3 px-3 bg-[#032918] text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center cursor-pointer shadow-md border border-emerald-900/40"
                  >
                    Enroll Now
                  </button>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
