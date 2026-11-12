import React, { useState } from 'react';
import { Sparkles, Award, Globe, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { teachers, ACADEMY_CONFIG } from '../data/academyData';

interface TeachersPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');

  const filteredTeachers =
    filterGender === 'all'
      ? teachers
      : teachers.filter((t) => t.gender === filterGender);

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Al-Azhar & Madinah Certified Scholars</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Meet Our Distinguished Faculty
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our male and female scholars hold authentic Sanad and degrees from world-renowned Islamic universities, dedicated to teaching with patience, warmth, and pedagogical mastery.
          </p>

          {/* Filter */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilterGender('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterGender === 'all'
                  ? 'bg-[#0A3826] text-white shadow-md scale-102'
                  : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200 hover:text-[#0A3826]'
              }`}
            >
              All Faculty ({teachers.length})
            </button>
            <button
              onClick={() => setFilterGender('female')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterGender === 'female'
                  ? 'bg-[#0A3826] text-white shadow-md scale-102'
                  : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200 hover:text-[#0A3826]'
              }`}
            >
              Female Scholars (For Sisters & Kids)
            </button>
            <button
              onClick={() => setFilterGender('male')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterGender === 'male'
                  ? 'bg-[#0A3826] text-white shadow-md scale-102'
                  : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200 hover:text-[#0A3826]'
              }`}
            >
              Male Scholars & Qaris
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Teachers Grid */}
      <AnimatedSection variant="fadeUp" className="relative py-20 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredTeachers.map((teacher, idx) => (
              <AnimatedItem
                key={teacher.id}
                delay={(idx % 3) * 0.08}
                className="bg-white/92 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs lq-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-slate-100 lq-img-zoom">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#072C1E] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {teacher.experience}
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <div>
                      <div className="font-arabic text-sm text-[#FCB205] font-semibold group-hover:scale-102 transition-transform duration-300 origin-left">
                        {teacher.arabicName}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#072C1E] mt-0.5 group-hover:text-emerald-950 transition-colors">
                        {teacher.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-800 mt-1">
                        {teacher.title}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-200">
                        <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700">
                          {teacher.qualifications}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                        <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Languages: {teacher.languages.join(', ')}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {teacher.bio}
                    </p>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Specialization:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.specialization.map((spec, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 group-hover:border-emerald-300 transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-slate-200/60 mt-2">
                  <span className="text-xs font-bold text-emerald-900">
                    {teacher.studentsTaught}+ Students Taught
                  </span>

                  <button
                    onClick={() => onOpenEnroll()}
                    className="px-4 py-2 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow-xs inline-block border border-emerald-900/40 lq-btn lq-shimmer-btn"
                  >
                    Book Trial
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
