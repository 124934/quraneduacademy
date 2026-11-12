import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, FileText } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageRoute } from '../types';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigate: (page: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.04} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Integrity, Safety & Transparency</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>

          {/* Tab Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer lq-btn ${
                activeTab === 'privacy'
                  ? 'bg-[#0A3826] text-white shadow-md'
                  : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer lq-btn ${
                activeTab === 'terms'
                  ? 'bg-[#0A3826] text-white shadow-md'
                  : 'bg-white/90 text-slate-600 hover:bg-white border border-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms & Conditions</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 text-left">
          <AnimatedSection animation="fadeUp">
            <div className="bg-white/92 backdrop-blur-sm p-7 sm:p-11 rounded-3xl border border-slate-200/90 shadow-sm space-y-8 font-sans lq-card-hover">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeTab === 'privacy' ? (
            <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  1. Information We Collect
                </h2>
                <p>
                  Quran Education Academy collects only the essential personal information required to facilitate student learning: student name, age, parent or guardian contact information (WhatsApp number, phone, email address), and timezone details.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  2. Child Protection & Safety
                </h2>
                <p>
                  As an academy serving children and youth, student safety is our highest priority. All faculty members undergo background verification and sign a rigorous child protection code of conduct. Video lessons may be spot-audited by senior academic coordinators solely for quality assurance.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  3. How We Use Your Data
                </h2>
                <p>
                  Your information is utilized solely to assign appropriate tutors, schedule class slots, send weekly student progress notes, and process invoices. We never sell, rent, or lease your personal information to any third parties.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  4. Secure Communication
                </h2>
                <p>
                  Official academy correspondence occurs through secure encrypted channels including WhatsApp Business and direct email. You can request deletion or amendment of your records at any time by contacting our support team.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  1. 3-Day Free Trial Policy
                </h2>
                <p>
                  Every new student is entitled to 3 complimentary 1-on-1 trial classes with no financial commitment or credit card required. There is no automatic billing at the conclusion of the free trial period.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  2. Rescheduling & Makeup Classes
                </h2>
                <p>
                  We understand that family commitments, travel, or exams arise. To reschedule a scheduled lesson without forfeiture, notice must be provided to the teacher or academic coordinator at least 4 to 6 hours prior to class time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  3. Tutor Replacement Guarantee
                </h2>
                <p>
                  If you feel your assigned teacher is not an optimal stylistic fit for your child or learning preferences, you may request a change of scholar at any time at zero additional charge.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  4. Code of Conduct & Respect
                </h2>
                <p>
                  Both teachers and students are expected to uphold Islamic adab, modest dress, and courteous speech during live video lessons.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif font-bold text-[#072C1E] mb-2">
                  5. Cancellation & Refunds
                </h2>
                <p>
                  Monthly subscriptions can be paused or cancelled at any time before the beginning of the subsequent billing cycle. Unused prepaid lessons are refundable upon request.
                </p>
              </div>
            </div>
          )}
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
