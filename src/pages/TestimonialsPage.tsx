import React from 'react';
import { Sparkles, Star, CheckCircle, Quote, ArrowRight } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { testimonials, ACADEMY_CONFIG } from '../data/academyData';

interface TestimonialsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenEnroll,
}) => {
  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Verified Student & Parent Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Student & Parent Reviews
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Read firsthand accounts from families in the United Kingdom, United States, Canada, Australia, and the Middle East studying with Quran Education Academy.
          </p>
        </div>
      </AnimatedSection>

      {/* Reviews Grid */}
      <AnimatedSection
        disableAnimation={true}
        className="relative py-20 bg-white/40 testimonials-section no-trans"
        data-no-trans="true"
      >
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {testimonials.map((review) => (
              <AnimatedItem
                key={review.id}
                disableAnimation={true}
                className="bg-white/92 backdrop-blur-sm p-7 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between group no-trans"
                data-no-trans="true"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#FCB205]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FCB205] hover:scale-115 transition-transform duration-200" />
                      ))}
                    </div>

                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                        <CheckCircle className="w-3 h-3 text-emerald-700" />
                        Verified Student
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-serif italic leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="text-sm font-bold text-[#072C1E] group-hover:text-emerald-950 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {review.role} • {review.location}
                  </p>
                  {review.course && (
                    <span className="inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-[#0A3826]">
                      Course: {review.course}
                    </span>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Bottom Trial Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#072C1E] text-white text-center space-y-4 relative overflow-hidden lq-card-hover">
            <IslamicPattern variant="dark" opacity={0.08} />

            <h3 className="text-2xl font-serif font-bold text-white">
              Join Over 1,000 Satisfied Families Today
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-lg mx-auto leading-relaxed">
              Experience the difference of dedicated 1-on-1 tutoring. No credit card required.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnroll}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FCB205] to-[#E5BE1D] hover:from-[#FCE253] hover:to-[#FCB205] text-slate-900 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer lq-btn lq-shimmer-btn"
              >
                Book 3-Day Free Trial
              </button>
              <a
                href={ACADEMY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#20BD5A] transition-all cursor-pointer lq-btn"
              >
                WhatsApp Inquiry: {ACADEMY_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
