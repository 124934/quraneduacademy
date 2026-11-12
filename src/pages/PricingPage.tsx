import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { pricingPlans, currencies, ACADEMY_CONFIG } from '../data/academyData';

interface PricingPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnroll: (planId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const curr = currencies[selectedCurrency] || currencies.USD;

  const formatPrice = (priceInUSD: number) => {
    const converted = priceInUSD * curr.rateToUSD;
    if (selectedCurrency === 'PKR') {
      return `${curr.symbol} ${Math.round(converted).toLocaleString()}`;
    }
    return `${curr.symbol}${Math.round(converted)}`;
  };

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <AnimatedSection variant="fadeUp" className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Affordable & Transparent Tuition</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Monthly Packages & Tuition
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All plans include a 3-Day Free Trial, 1-on-1 private classes, certified scholars, and free class rescheduling. No hidden fees or registration charges.
          </p>

          {/* Currency Switcher */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              Select Currency:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xs">
              {Object.keys(currencies).map((code) => {
                const c = currencies[code];
                const isSelected = selectedCurrency === code;
                return (
                  <button
                    key={code}
                    onClick={() => setSelectedCurrency(code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A3826] text-white shadow-xs scale-102'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#0A3826]'
                    }`}
                  >
                    {c.symbol} {c.code}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Cards Grid */}
      <AnimatedSection
        disableAnimation={true}
        className="relative py-20 bg-white/40 packages-section no-trans"
        data-no-trans="true"
      >
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch text-left">
            {pricingPlans.map((plan, idx) => {
              const isPopular = plan.isPopular;
              return (
                <AnimatedItem
                  key={plan.id}
                  disableAnimation={true}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between no-trans ${
                    isPopular
                      ? 'bg-[#072C1E] text-white shadow-2xl border-2 border-[#FCB205]'
                      : 'bg-white/92 backdrop-blur-sm text-slate-800 border border-slate-200/90 shadow-xs'
                  }`}
                  data-no-trans="true"
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FCB205] to-[#E5BE1D] text-slate-900 font-extrabold text-[10px] tracking-widest uppercase shadow-md whitespace-nowrap animate-lq-pulse">
                      {plan.highlightText || 'Most Popular Choice'}
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3
                        className={`text-xl font-serif font-bold ${
                          isPopular ? 'text-white' : 'text-[#072C1E]'
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          isPopular ? 'text-emerald-200/80' : 'text-slate-500'
                        }`}
                      >
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-slate-200/60">
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={`text-3xl sm:text-4xl font-serif font-extrabold tracking-tight ${
                            isPopular ? 'text-white' : 'text-[#0A3826]'
                          }`}
                        >
                          {formatPrice(plan.basePriceUSD)}
                        </span>
                        <span
                          className={`text-xs ${
                            isPopular ? 'text-emerald-200/80' : 'text-slate-500'
                          }`}
                        >
                          / month
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-semibold mt-1 block ${
                          isPopular ? 'text-[#FCB205]' : 'text-emerald-800'
                        }`}
                      >
                        {plan.classesPerWeek} Classes / Week ({plan.classesPerMonth} Classes Monthly)
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <h5
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isPopular ? 'text-[#FCB205]' : 'text-[#072C1E]'
                        }`}
                      >
                        What’s Included:
                      </h5>
                      <ul className="space-y-2.5 text-xs">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 hover:translate-x-1 transition-transform duration-200">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isPopular
                                  ? 'bg-[#FCB205] text-slate-900 font-bold'
                                  : 'bg-emerald-100 text-[#0A3826]'
                              }`}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span
                              className={`leading-relaxed ${
                                isPopular ? 'text-emerald-100/90' : 'text-slate-600'
                              }`}
                            >
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => onOpenEnroll(plan.id)}
                      className={`w-full block text-center py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#FCB205] to-[#E5BE1D] text-slate-900 font-extrabold'
                          : 'bg-[#032918] text-white border border-emerald-900/40'
                      }`}
                    >
                      Book 3-Day Free Trial
                    </button>
                    <p
                      className={`text-[10px] text-center mt-2.5 ${
                        isPopular ? 'text-emerald-300/60' : 'text-slate-400'
                      }`}
                    >
                      No credit card required upfront
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>

          {/* Family Discount & Guarantee */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <AnimatedItem delay={0.1} className="p-7 rounded-3xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs flex items-start gap-5 lq-card-hover">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#072C1E] mb-1">
                  15% Sibling & Family Discount
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We believe in nurturing entire households. Enroll two or more children or family members and automatically receive a 15% discount on second and third enrollments.
                </p>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.2} className="p-7 rounded-3xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs flex items-start gap-5 lq-card-hover">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0A3826] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#072C1E] mb-1">
                  100% Satisfaction Guarantee
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If you are not thoroughly delighted with your teacher or learning experience after your free trial, you may request a change of scholar or full refund with zero questions asked.
                </p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
