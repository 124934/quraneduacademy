import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { ACADEMY_CONFIG } from '../data/academyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formulate the pre-filled message for WhatsApp
  const generateWhatsAppMessage = () => {
    const text =
      `*Assalamu Alaykum! Contact Inquiry - Quran Education*\n\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not specified'}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Subject:* ${formData.subject}\n` +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\n_Sent from Quran Education Academy contact page. Please reply at your earliest._`;

    return encodeURIComponent(text);
  };

  // Direct trigger to WhatsApp in same tab
  const handleOpenWhatsApp = () => {
    const url = `${ACADEMY_CONFIG.whatsappUrl}?text=${generateWhatsAppMessage()}`;
    window.location.href = url;
  };

  // On form submit, automatically prepare and dispatch data to WhatsApp directly
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url = `${ACADEMY_CONFIG.whatsappUrl}?text=${generateWhatsAppMessage()}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Automatically launch WhatsApp with the submitted details in same tab
      window.location.href = url;
    }, 400);
  };

  /* =========================================================================
     1. SUB-BLOCK: Send Your Inquiry Form (Submit Button in Footer Green #032918)
     ========================================================================= */
  const renderInquiryForm = () => (
    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-9 rounded-3xl border border-slate-200/90 shadow-md space-y-6 text-left">
      <div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#072C1E] mb-1.5">
          Send Your Inquiry
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Enter your Name and WhatsApp number below. Click Submit to immediately connect with our admissions desk on WhatsApp (+92 318 7779954).
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h4 className="text-lg sm:text-xl font-bold font-serif text-[#072C1E]">
            JazakAllah Khair! Form Submitted
          </h4>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your details have been prepared for WhatsApp chat. If WhatsApp did not open automatically, click the button below to complete sending your message.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-xs shadow-md hover:bg-[#20BD5A] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
              </svg>
              <span>Open in WhatsApp</span>
            </button>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full sm:w-auto px-5 py-3 bg-white text-slate-700 rounded-xl font-semibold text-xs border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Fill Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ahmad Tariq"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +92 318 7779954"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] focus:bg-white transition-all font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. family@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Subject (Optional)
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] focus:bg-white transition-all text-slate-700"
              >
                <option>Course Inquiry</option>
                <option>3-Day Free Trial Booking</option>
                <option>Teacher Assignment Question</option>
                <option>Tuition & Monthly Package</option>
                <option>Other Question</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Message or Specific Inquiry
            </label>
            <textarea
              rows={3}
              placeholder="Write your questions, student background, or preferred timing here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#032918] focus:bg-white transition-all text-slate-700"
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
                <span>Sending to WhatsApp...</span>
              ) : (
                <>
                  <span>Submit & Send to WhatsApp</span>
                  <Send className="w-3.5 h-3.5 text-[#FCB205] group-hover:translate-x-1.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  /* =========================================================================
     2. SUB-BLOCK: Instant Communication Channels
     ========================================================================= */
  const renderInstantChannels = () => (
    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-md text-left space-y-3.5">
      <span className="text-xs font-bold text-[#072C1E] uppercase tracking-wider block">
        Instant Communication Channels
      </span>
      <p className="text-xs text-slate-600">
        Connect directly with our counseling desk across social and messaging platforms:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
        {/* 1. WhatsApp */}
        <a
          href={ACADEMY_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-[#25D366] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
          </svg>
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* 2. Instagram */}
        <a
          href={ACADEMY_CONFIG.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-[#E4405F] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-[11px] font-bold">Instagram</span>
        </a>

        {/* 3. YouTube */}
        <a
          href={ACADEMY_CONFIG.socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-[#FF0000] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-[#FF0000] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="text-[11px] font-bold">YouTube</span>
        </a>

        {/* 4. Facebook */}
        <a
          href={ACADEMY_CONFIG.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-[#1877F2] hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-[#1877F2] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          <span className="text-[11px] font-bold">Facebook</span>
        </a>

        {/* 5. TikTok */}
        <a
          href={ACADEMY_CONFIG.socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-black hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-slate-900 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c-.01 2.2-.82 4.39-2.31 5.99-1.58 1.73-3.92 2.65-6.28 2.45-2.58-.2-4.9-1.74-6.07-4.04-1.25-2.43-.99-5.46.65-7.63 1.5-2.01 3.94-3.07 6.42-2.78v4.19c-1.12-.2-2.31.13-3.1.9-.84.8-1.13 2.03-.73 3.09.38 1.05 1.45 1.76 2.58 1.74 1.25-.01 2.36-.88 2.64-2.1.09-.43.12-.87.12-1.31V.02z" />
          </svg>
          <span className="text-[11px] font-bold">TikTok</span>
        </a>

        {/* 6. Twitter / X */}
        <a
          href={ACADEMY_CONFIG.socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white hover:bg-black hover:text-white text-slate-700 rounded-xl border border-slate-200 transition-all flex flex-col items-center justify-center gap-1.5 shadow-2xs group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-slate-900 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[11px] font-bold">Twitter (X)</span>
        </a>
      </div>
    </div>
  );

  /* =========================================================================
     3. SUB-BLOCK: Get in Touch with Us (Official Academy Contact)
     ========================================================================= */
  const renderGetInTouch = () => (
    <div className="bg-[#072C1E] text-white p-6 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden space-y-6 text-left">
      <IslamicPattern variant="dark" opacity={0.08} />

      <div>
        <span className="text-xs font-bold text-[#FCB205] uppercase tracking-wider">
          Official Academy Contact
        </span>
        <h3 className="text-2xl font-serif font-bold text-white mt-1">
          Get in Touch with Us
        </h3>
        <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
          Direct phone lines, email support, and round-the-clock WhatsApp counseling.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {/* WhatsApp Support */}
        <div className="flex items-start gap-4 text-emerald-100/90 pt-1">
          <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
            </svg>
          </div>
          <div className="space-y-1.5 flex-1">
            <span className="text-[11px] text-emerald-300/80 block">WhatsApp Support</span>
            <span className="font-mono text-base font-bold text-[#25D366] block">
              {ACADEMY_CONFIG.whatsapp}
            </span>
            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                'As-salamu alaykum! I am reaching out from the Quran Education contact page.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Click to Chat</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Email */}
        <a
          href={`mailto:${ACADEMY_CONFIG.email}`}
          className="flex items-center gap-4 text-emerald-100/90 hover:text-white transition-colors group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-emerald-900/60 flex items-center justify-center text-[#FCB205] group-hover:bg-[#FCB205] group-hover:text-slate-900 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-emerald-300/80 block">Email Inquiries</span>
            <span className="text-xs font-semibold text-white break-all">
              {ACADEMY_CONFIG.email}
            </span>
          </div>
        </a>

        {/* Working Hours */}
        <div className="flex items-center gap-4 text-emerald-100/90 pt-2 border-t border-emerald-800/60">
          <div className="w-11 h-11 rounded-2xl bg-emerald-900/60 flex items-center justify-center text-[#FCB205]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-emerald-300/80 block">Working Hours</span>
            <span className="text-xs font-semibold text-white">
              {ACADEMY_CONFIG.workingHours}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  /* =========================================================================
     4. SUB-BLOCK: Serving Muslim Families Globally
     ========================================================================= */
  const renderServingGlobally = () => (
    <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-slate-200 space-y-2 text-left">
      <div className="flex items-center gap-2 text-xs font-bold text-[#072C1E]">
        <MapPin className="w-4 h-4 text-[#FCB205]" />
        <span>Serving Muslim Families Globally:</span>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">
        United Kingdom, United States, Canada, Australia, United Arab Emirates, Saudi Arabia, and Pakistan.
      </p>
    </div>
  );

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header: Contact Quran Education */}
      <section className="relative pt-10 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FCB205]" />
            <span>24/7 Global Academic Assistance</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Contact Quran Education
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding courses, tutor assignment, fee packages, or trial scheduling? Our academic support team is active 24/7 across all international time zones.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-8 sm:py-14 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
          
          {/* ========================================================================= */}
          {/* MOBILE VIEW ONLY: Exactly as requested:                                   */}
          {/* 1. Send Your Inquiry                                                      */}
          {/* 2. Instant Communication Channels                                         */}
          {/* 3. Get in Touch with Us                                                   */}
          {/* 4. Serving Muslim Families Globally                                       */}
          {/* ========================================================================= */}
          <div className="flex flex-col lg:hidden space-y-6">
            <AnimatedSection animation="fadeUp">
              {renderInquiryForm()}
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.1}>
              {renderInstantChannels()}
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.15}>
              {renderGetInTouch()}
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              {renderServingGlobally()}
            </AnimatedSection>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP VIEW ONLY: Balanced two-column grid                               */}
          {/* Left: Get in Touch with Us + Serving Globally                             */}
          {/* Right: Send Your Inquiry Form + Instant Communication Channels            */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 items-start text-left">
            {/* Left Column (5 cols) */}
            <AnimatedSection animation="fadeUp" className="lg:col-span-5 space-y-6">
              {renderGetInTouch()}
              {renderServingGlobally()}
            </AnimatedSection>

            {/* Right Column (7 cols) */}
            <AnimatedSection animation="fadeUp" delay={0.1} className="lg:col-span-7 space-y-6">
              {renderInquiryForm()}
              {renderInstantChannels()}
            </AnimatedSection>
          </div>

        </div>
      </section>
    </div>
  );
};
