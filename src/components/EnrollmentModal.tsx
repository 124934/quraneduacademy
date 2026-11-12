import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId = 'noorani-qaida',
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: initialCourseId,
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (initialCourseId) {
      setFormData((prev) => ({ ...prev, courseId: initialCourseId }));
    }
  }, [initialCourseId]);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const generateWhatsAppMessage = () => {
    const text =
      `*Assalamu Alaykum! 3-Day Free Trial Booking - Quran Education*\n\n` +
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
      setConfirmationCode(`QE-REG-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Directly dispatch to WhatsApp
      window.location.href = waUrl;
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
      />

      {/* Modal Box styled exactly to match the user's reference image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-auto border border-slate-200 text-left"
      >
        {/* Subtle geometric pattern backdrop */}
        <IslamicPattern variant="light" opacity={0.25} />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="relative p-6 sm:p-8 max-h-[88vh] overflow-y-auto">
          {/* Header section matching reference image */}
          <div className="mb-5 pr-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#072C1E] tracking-tight">
              Online Enrollment Form
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
              Fill in the details below and click Submit. Your application is sent directly to our admissions WhatsApp (+92 318 7779954).
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-4 text-left space-y-4">
              <div className="rounded-2xl bg-white border-2 border-emerald-600 p-5 sm:p-6 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#072C1E] block">
                        Quran Education Admissions
                      </span>
                      <span className="font-mono text-xs text-emerald-700 font-semibold">
                        +92 318 7779954
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {confirmationCode}
                  </span>
                </div>

                <div className="space-y-2.5 text-slate-700 text-xs leading-relaxed bg-[#FAF9F5] p-3.5 rounded-xl border border-slate-200">
                  <p className="font-semibold text-emerald-900 text-sm">
                    Assalamu Alaykum {formData.studentName || 'Student'}!
                  </p>
                  <p>
                    <strong className="text-[#072C1E]">Welcome to Quran Education Academy!</strong> Your 3-Day Free Trial registration for <strong className="text-emerald-800">{getCourseTitle()}</strong> has been submitted directly to Admissions (+92 318 7779954).
                  </p>
                  <p>
                    Your details have been confirmed. Our coordinator will contact you on WhatsApp at <span className="font-mono font-bold text-emerald-700">{formData.whatsappNumber}</span> with your teacher’s profile and initial class schedule.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 text-[11px]">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Student</span>
                    <span className="font-semibold text-slate-800">{formData.studentName}</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Course</span>
                    <span className="font-semibold text-slate-800">{getCourseTitle()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#032918] text-white rounded-xl font-bold text-xs hover:bg-[#072C1E] transition-colors cursor-pointer shadow-md"
                >
                  Done & Close
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Enroll Another Student
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
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

              {/* Email Address (Optional) */}
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
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] font-medium text-slate-800"
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
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] text-slate-700"
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
                  placeholder="e.g. Beginner level, knows Arabic alphabet, wants to focus on Tajweed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] transition-all"
                />
              </div>

              {/* Submit Button in Footer Green (#032918) */}
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
        </div>
      </motion.div>
    </div>
  );
};
