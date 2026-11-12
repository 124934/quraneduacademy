import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface AdmissionsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: 'noorani-qaida',
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Auto-scroll directly to the form container on mount
  useEffect(() => {
    const el = document.getElementById('enrollment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const generateWhatsAppMessage = () => {
    const text =
      `*Assalamu Alaykum! New Enrollment Application - Quran Education*\n\n` +
      `*Student Name:* ${formData.studentName}\n` +
      (formData.parentName ? `*Parent/Guardian:* ${formData.parentName}\n` : '') +
      `*Student Age:* ${formData.age}\n` +
      `*Location/Country:* ${formData.country}\n` +
      `*WhatsApp/Contact Number:* ${formData.whatsappNumber}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Course Enrolled:* ${getCourseTitle()}\n` +
      `*Preferred Timing:* ${formData.preferredTime}\n` +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `\n_Sent directly from Quran Education Online Enrollment Form._`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const waUrl = `https://wa.me/923187779954?text=${generateWhatsAppMessage()}`;
    setTimeout(() => {
      setSubmissionId(`QE-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Automatically send form data to WhatsApp in same tab
      window.location.href = waUrl;
    }, 400);
  };

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Compact Top Header Bar */}
      <section className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>Open Enrollment • 3-Day Free Trial • Worldwide Admissions</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#072C1E]">
            Admissions & Student Registration
          </h1>
        </div>
      </section>

      {/* Main Form Section - Exactly positioned right in view */}
      <section className="relative py-6 sm:py-12 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Online Enrollment Form (Matches User Reference Image) */}
            <AnimatedSection
              animation="fadeUp"
              id="enrollment-form"
              className="lg:col-span-8 bg-white/95 backdrop-blur-sm p-6 sm:p-9 rounded-3xl border border-slate-200/90 shadow-lg relative overflow-hidden"
            >
              <IslamicPattern variant="light" opacity={0.25} className="rounded-3xl pointer-events-none" />

              <div className="relative z-10 mb-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#072C1E] mb-2 tracking-tight">
                  Online Enrollment Form
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Fill in the details below and click Submit. Your application is sent directly to our admissions WhatsApp (+92 318 7779954).
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-6 text-left space-y-6">
                  {/* Automated Welcome Message Card from +92 318 7779954 */}
                  <div className="rounded-2xl bg-white border-2 border-emerald-600 p-6 shadow-lg relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#072C1E]">
                              Quran Education Admissions
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                              Verified Academy
                            </span>
                          </div>
                          <span className="font-mono text-xs text-emerald-700 font-semibold">
                            +92 318 7779954
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {submissionId}
                      </span>
                    </div>

                    <div className="space-y-3 text-slate-700 text-xs leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-slate-200">
                      <p className="font-semibold text-emerald-900 text-sm">
                        Assalamu Alaykum {formData.studentName || 'Student'}!
                      </p>
                      <p>
                        <strong className="text-[#072C1E]">Welcome to Quran Education Academy!</strong> Your 3-Day Free Trial enrollment application for <strong className="text-emerald-800">{getCourseTitle()}</strong> has been directly received and registered in our system.
                      </p>
                      <p>
                        Our academic coordination team has automatically received your application details at <span className="font-mono font-bold text-emerald-700">+92 318 7779954</span>. An assigned scholar matching your preferred schedule (<span className="font-medium text-slate-800">{formData.preferredTime}</span>) is being designated for you.
                      </p>
                      <p className="text-slate-600 border-t border-slate-200/80 pt-2 text-[11px]">
                        We will reach out to you directly at <span className="font-mono font-bold text-slate-800">{formData.whatsappNumber}</span> to confirm your class timings and provide your private classroom link.
                      </p>
                    </div>

                    {/* Enrollment Details Summary */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 text-[11px]">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Student Name</span>
                        <span className="font-semibold text-slate-800">{formData.studentName}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Course</span>
                        <span className="font-semibold text-slate-800">{getCourseTitle()}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Trial Status</span>
                        <span className="font-semibold text-emerald-700">3-Day Free Trial Confirmed</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => {
                        setFormData({
                          studentName: '',
                          parentName: '',
                          age: '',
                          country: '',
                          whatsappNumber: '',
                          email: '',
                          courseId: 'noorani-qaida',
                          preferredTime: 'Evening (5:00 PM - 9:00 PM)',
                          message: '',
                        });
                        setIsSubmitted(false);
                      }}
                      className="px-6 py-3 bg-[#032918] text-white rounded-xl font-bold text-xs hover:bg-[#072C1E] transition-colors cursor-pointer shadow-md"
                    >
                      Submit Another Student Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maryam Fatima"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                    />
                  </div>

                  {/* Parent / Guardian Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Asif Raza"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                    />
                  </div>

                  {/* Student Age */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 7 years"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                    />
                  </div>

                  {/* Country & City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country & City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. London, United Kingdom / Lahore, Pakistan"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7911 123456"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all font-mono"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                    />
                  </div>

                  {/* Target Course */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] font-medium"
                    >
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title} ({course.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918]"
                    >
                      <option>Morning (8:00 AM - 12:00 PM)</option>
                      <option>Afternoon (1:00 PM - 5:00 PM)</option>
                      <option>Evening (5:00 PM - 9:00 PM)</option>
                      <option>Night (9:00 PM - Midnight)</option>
                      <option>Weekend Only</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Notes or Prior Experience
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Has completed Noorani Qaida, wants to start Para 1 Nazra..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918]"
                    />
                  </div>

                  {/* Single Submit Button in Footer Green (#032918) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-[#032918] hover:bg-[#072C1E] active:bg-[#021a0f] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-emerald-900/40 lq-btn lq-shimmer-btn group"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit</span>
                          <Send className="w-3.5 h-3.5 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Confidential • Verified Certified Faculty • Free Rescheduling</span>
                  </div>
                </form>
              )}
            </AnimatedSection>

            {/* Right Information Box */}
            <AnimatedSection animation="fadeUp" delay={0.15} className="lg:col-span-4 space-y-6">
              <div className="p-7 rounded-3xl bg-[#072C1E] text-white space-y-4 shadow-xl lq-card-hover">
                <span className="text-xs font-bold text-[#FCB205] uppercase tracking-wider">
                  Direct Counseling Line
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  Speak Directly with an Academic Counselor
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Have questions regarding fee structure, scheduling, or curriculum for multiple children? Our advisors are active on WhatsApp 24/7.
                </p>

                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BD5A] transition-colors w-full justify-center shadow-md cursor-pointer lq-btn"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>Chat: {ACADEMY_CONFIG.whatsapp}</span>
                </a>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200 space-y-3 lq-card-hover">
                <h4 className="text-sm font-serif font-bold text-[#072C1E]">
                  The 3-Day Free Trial Guarantee:
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>3 complimentary 1-on-1 private lessons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>No credit card or upfront payment needed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Test your assigned scholar’s teaching style</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Receive detailed assessment of student level</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
};
