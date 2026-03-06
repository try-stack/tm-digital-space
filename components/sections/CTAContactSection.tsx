'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData, ContactTab } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MessageSquare, CheckCircle, XCircle,
  ArrowRight, Loader2, Clock, MapPin, CalendarCheck, Send
} from 'lucide-react';

const CTAContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading]   = useState(false);
  const [hasError, setHasError]     = useState(false);
  const [msgLen, setMsgLen]         = useState(0);
  const [tab, setTab]               = useState<ContactTab>('call');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
    const templateId = tab === 'call'
      ? (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CALL    ?? '')
      : (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_MESSAGE ?? '');
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      phone:      formData.phone,
      service:    formData.service,
      message:    formData.message,
      form_type:  tab === 'call' ? 'Book a Call' : 'Send a Message',
      reply_to:   formData.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setMsgLen(0);
      }, 5000);
    } catch {
      setIsLoading(false);
      setHasError(true);
      setTimeout(() => setHasError(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setMsgLen(value.length);
  };

  const contactMethods = [
    { icon: Phone,        label: 'Phone',     value: '+27 62 529 952',       sub: 'Mon–Fri · 8am–6pm SAST',    link: 'tel:+2762529952' },
    { icon: Mail,         label: 'Email',     value: 'admin@tm-digital.co.za', sub: 'Reply within 2 hours',     link: 'mailto:admin@tm-digital.co.za' },
    { icon: MessageSquare,label: 'WhatsApp',  value: 'Chat with us now',     sub: 'Fastest response channel',   link: 'https://wa.me/2762529952' },
  ];

  const INPUT = 'w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 focus:border-[#006eff] focus:outline-none focus:ring-2 focus:ring-[#006eff]/20 transition-all placeholder:text-slate-500 text-white text-sm';
  const LABEL = 'block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5';

  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="section-padding bg-[#05081a] text-white relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#006eff]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#006eff] mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Worth Talking About.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Tell us about your project and we&apos;ll get back to you within 2 hours.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ── LEFT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8">

              {/* Tab switcher */}
              <div className="flex rounded-xl bg-slate-800/50 border border-white/[0.06] p-1 mb-7">
                {([
                  { id: 'call'    as const, icon: CalendarCheck, label: 'Book a Call'     },
                  { id: 'message' as const, icon: Send,          label: 'Send a Message'  },
                ] as { id: 'call' | 'message'; icon: React.ElementType; label: string }[]).map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTab(id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      tab === id
                        ? 'bg-[#006eff] text-white shadow-lg shadow-[#006eff]/25'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="text-center py-14"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Message sent!</h4>
                    <p className="text-slate-400 text-sm">We&apos;ll be in touch within 2 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={LABEL}>Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className={INPUT} placeholder="Jane Smith" />
                      </div>
                      <div>
                        <label className={LABEL}>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className={INPUT} placeholder="you@company.co.za" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={LABEL}>Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={INPUT} placeholder="+27 62 529 952" />
                      </div>
                      <div>
                        <label className={LABEL} htmlFor="service-select">Service *</label>
                        <select id="service-select" name="service" value={formData.service} onChange={handleChange} required className={`${INPUT} appearance-none`}>
                          <option value="" className="bg-slate-900">Select a service…</option>
                          <option value="website"  className="bg-slate-900">Website Development</option>
                          <option value="branding" className="bg-slate-900">Logo & Brand Identity</option>
                          <option value="email"    className="bg-slate-900">Business Email Setup</option>
                          <option value="google"   className="bg-slate-900">Google Business Profile</option>
                          <option value="all"      className="bg-slate-900">Complete Digital Package</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1.5">
                        <label className={LABEL}>Message *</label>
                        <span className={`text-[11px] ${msgLen > 400 ? 'text-orange-400' : 'text-slate-500'}`}>{msgLen}/500</span>
                      </div>
                      <textarea
                        name="message" value={formData.message} onChange={handleChange} required
                        rows={4} maxLength={500}
                        className={`${INPUT} resize-none`}
                        placeholder="Briefly describe your project — goals, budget, timeline…"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-[#006eff] hover:bg-[#0058cc] transition-colors"
                      style={{ boxShadow: '0 4px 24px rgba(0,110,255,0.35)' }}
                      whileHover={isLoading ? {} : { scale: 1.02 }}
                      whileTap={isLoading ? {} : { scale: 0.98 }}
                    >
                      {isLoading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      ) : tab === 'call' ? (
                        <><CalendarCheck className="w-4 h-4" /> Book My Free Strategy Call</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message <ArrowRight className="w-4 h-4" /></>
                      )}
                    </motion.button>

                    {hasError && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                      >
                        <XCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try WhatsApp or email us directly.
                      </motion.div>
                    )}
                    <p className="text-center text-[11px] text-slate-600">
                      🔒 Your details are secure and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── RIGHT: Info panel ── */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Intro text */}
            <div>
              <h3 className="text-xl font-bold mb-2">Prefer a direct conversation?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach us on any channel below. We typically respond within 2 hours on business days.
              </p>
            </div>

            {/* Contact channels — clean list */}
            <div className="space-y-3">
              {contactMethods.map(({ icon: Icon, label, value, sub, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#006eff]/10 border border-[#006eff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#006eff]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#006eff]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{label}</div>
                    <div className="text-white text-sm font-semibold group-hover:text-[#00d4ff] transition-colors truncate">{value}</div>
                    <div className="text-slate-500 text-xs">{sub}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#006eff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06]" />

            {/* Hours + location */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-300">Office Hours</div>
                  <div className="text-xs text-slate-500">Mon–Fri · 8am–6pm SAST</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-300">Location</div>
                  <div className="text-xs text-slate-500">Cape Town, South Africa</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06]" />

            {/* What happens next */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">What happens next</p>
              <ol className="space-y-4">
                {[
                  { n: '01', title: 'Submit the form',            detail: 'Takes under 60 seconds.' },
                  { n: '02', title: 'We respond within 2 hours',  detail: 'Mon–Fri, business hours.' },
                  { n: '03', title: 'Free strategy call',         detail: 'No pressure, fully tailored.' },
                  { n: '04', title: 'Proposal & clear pricing',   detail: 'Scope, timeline, exact cost.' },
                ].map(({ n, title, detail }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#006eff]/15 border border-[#006eff]/25 flex items-center justify-center text-[10px] font-black text-[#006eff] flex-shrink-0 mt-0.5">{n}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="text-xs text-slate-500">{detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTAContactSection;
