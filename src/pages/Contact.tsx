import React, { useState } from 'react';
import {
  Mail, Phone, MessageSquare, Clock, MapPin, CheckCircle, ArrowRight,
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Send, RefreshCw
} from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE, WHATSAPP_NUMBER } from '../data/servicesData';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Form Fields State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Website Development');
  const [budget, setBudget] = useState('₹35,000 - ₹75,000');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please populate the Name, Email, and Phone fields before submitting.");
      return;
    }
    setFormSubmitted(true);
  };

  const handleContinueWhatsApp = () => {
    const chatText = `Hello CodeManaic Studio, my name is ${name} from ${company || 'my startup'}. I just filled out your quoting form. My budget range is ${budget} for ${service}. Here are details: "${message || 'No additional details specified'}"`;
    window.open(`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(chatText)}`, '_blank');
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const faqsData = [
    {
      q: 'Do you charge for an initial consultation?',
      a: 'Absolutely not. All initial exploration calls, scoping workshops, and project estimates are 100% free with no obligation.'
    },
    {
      q: 'What is your standard production timeline?',
      a: 'Bespoke corporate portals take 15-20 days; custom full-stack web applications or headless e-commerce stores take 30-45 days.'
    },
    {
      q: 'Will you deploy and host the finalized files?',
      a: 'Yes. We assist with domain routing, SSL certificate setup, and deploy files to fast web containers. Ongoing support packages are also available.'
    },
    {
      q: 'Do you offer custom pricing scales for student education products?',
      a: 'Yes! Educational resources under CBSE/GSEB/BCA categories listed in our menu are 100% free of charge.'
    }
  ];

  return (
    <div id="contact-page-container" className="pt-24 pb-20">
      
      {/* 1. CONTACT HERO */}
      <section className="relative py-12 md:py-16 text-left overflow-hidden">
        <div className="gradient-mesh -top-20 -left-10 bg-blue-600/15" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Project Scoping
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Let's Discuss Your Project
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            Ready to convert visitors into clients? Populate the details below to receive a custom proposal and timetable breakdown under 24 hours.
          </p>
        </div>
      </section>

      {/* 2. CORE FORM & CONTACT INFO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Rich Form Cards (OR SUCCESS SCREEN) */}
        <div className="lg:col-span-7">
          {!formSubmitted ? (
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/20 text-left">
              <h2 className="text-lg font-display font-bold text-white mb-6 pb-3 border-b border-white/5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Select Project Scope Parameters
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-name" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="input-name"
                      name="name"
                      placeholder="e.g. Ketan Kabra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-email" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      id="input-email"
                      name="email"
                      placeholder="e.g. ketan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-phone" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      id="input-phone"
                      name="phone"
                      placeholder="e.g. +91 88668 51826"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-company" className="text-[10px] font-mono uppercase text-gray-400 font-block block">
                      Company Name / Startup
                    </label>
                    <input
                      type="text"
                      id="input-company"
                      name="company"
                      placeholder="e.g. Aura Realty Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Service dropdown field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-service" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      Service Required
                    </label>
                    <select
                      id="input-service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#090D18] text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    >
                      <option>Website Development</option>
                      <option>Web Application Development</option>
                      <option>Mobile App Development</option>
                      <option>E-commerce Stores</option>
                      <option>UI/UX Prototyping</option>
                      <option>SEO Strategy</option>
                      <option>AI Integrations</option>
                      <option>Business Automation</option>
                      <option>Custom Projects</option>
                    </select>
                  </div>

                  {/* Budget selector field */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-budget" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      Estimated Budget Range
                    </label>
                    <select
                      id="input-budget"
                      name="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#090D18] text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors"
                    >
                      <option>₹15,000 - ₹35,000 (Starter)</option>
                      <option>₹35,000 - ₹75,000 (Growth)</option>
                      <option>₹75,000+ (Premium Full-Scale)</option>
                      <option>Custom Billing Bracket</option>
                    </select>
                  </div>

                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="input-message" className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                    Your Requirements / Description
                  </label>
                  <textarea
                    id="input-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your digital needs, specific pages, integrations, timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white border border-white/5 focus:border-blue-500/50 focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button block */}
                <div className="pt-4 flex items-center justify-between gap-4">
                  <span className="text-[10px] text-gray-500 font-mono">
                    🛡️ Secure, confidential scoping parameters.
                  </span>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    <span>Send Proposal Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* DYNAMIC FORM SUCCESS SCREEN */
            <div
              id="form-success-alert-card"
              className="glass-card rounded-3xl p-8 md:p-12 border border-emerald-500/30 bg-slate-950/20 text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold text-white">
                  Thank You for Contacting CodeManaic Studio.
                </h2>
                <p className="text-xs text-gray-400 leading-relaxed max-w-lg mx-auto">
                  Our specialists are already evaluating your requirements. We typically response under 15 minutes! For instant priority routing, continue our conversation directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto px-6 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                >
                  Return Home
                </button>

                <button
                  type="button"
                  onClick={handleContinueWhatsApp}
                  className="w-full sm:w-auto px-6 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current" />
                  <span>Continue on WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Contact information blocks */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick WhatsApp contact block */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0c1224] to-[#04060b] border border-white/5 space-y-4 text-left">
            <span className="text-[9px] font-mono tracking-wider text-emerald-400 uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block">
              Priority Routing
            </span>
            <h3 className="text-base font-display font-bold text-white">
              Need A Quick Response?
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Skip static files completely and discuss your custom requirements directly over WhatsApp for an accelerated response.
            </p>
            
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 font-mono">
              <span>⚡ Usually replies within 15 minutes</span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`${WHATSAPP_LINK_BASE}?text=Hi%20CodeManaic%20Studio%2C%20I%20would%20like%20to%20chat%20live%20with%20your%20design%20and%20dev%20leads.`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat On WhatsApp</span>
              </a>

              <a
                href={`${WHATSAPP_LINK_BASE}?text=Hi%20CodeManaic%20Studio%20developers%2C%20I%20would%20like%20to%20schedule%20a%20consultation.`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-full py-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-xl border border-white/5 flex items-center justify-center gap-1 transition-all"
              >
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>

          {/* Quick Parameters Display */}
          <div className="p-6 rounded-3xl glass-card border border-white/5 text-left space-y-4">
            <h3 className="text-sm font-display font-semibold text-white uppercase tracking-wider pb-2 border-b border-white/5">
              Contact Specifics
            </h3>

            <div className="space-y-3">
              <div className="flex gap-3 text-xs leading-snug">
                <Mail className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans font-semibold">Direct Proposal Desk:</strong>
                  <a href="mailto:info@codemanaic.com" className="text-gray-400 hover:text-blue-300">
                    info@codemanaic.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 text-xs leading-snug">
                <Phone className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans font-semibold">Voice Support Desk:</strong>
                  <a href="tel:+918866851826" className="text-gray-400 hover:text-blue-300">
                    +91 88668 51826
                  </a>
                </div>
              </div>

              <div className="flex gap-3 text-xs leading-snug">
                <Clock className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans font-semibold">Operational Hours:</strong>
                  <span className="text-gray-400 block font-mono">
                    Monday - Saturday | 09:00 - 19:30 IST
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAP SECTION (HIGH GLOW VECTOR ILLUSTRATION PLACEHOLDER) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Headquarters
          </span>
          <h2 className="text-2xl font-display font-bold text-white">
            Located in Surat, Gujarat, India
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            Delivering elite digital design and engineering services locally and across global parameters.
          </p>
        </div>

        {/* Dynamic Dark styled vector map frame */}
        <div className="rounded-3xl border border-white/5 relative overflow-hidden aspect-[21/9] bg-[#05060b] shadow-2xl flex items-center justify-center p-6 bg-radial-at-c from-slate-900 via-slate-950 to-slate-950">
          <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none" />
          
          {/* Aesthetic vector geolocation network dots illustration */}
          <div className="relative text-center space-y-4">
            <div className="relative inline-block">
              {/* Ring pulse */}
              <span className="absolute inset-0 bg-blue-500/20 scale-150 rounded-full animate-ping" />
              <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500 text-blue-400 flex items-center justify-center relative">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-wide">
                CodeManaic Studio Main Lab
              </p>
              <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto font-mono">
                D-801, VIP Road, Surat, Gujarat, IN.
              </p>
            </div>
            
            {/* Action directions button details */}
            <a
              href="https://maps.google.com/?q=Surat,Gujarat,India"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-blue-400 hover:text-blue-300 font-bold"
            >
              <span>launch direct google maps view</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTIONS */}
      <section className="py-20 bg-[#05070C] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Client Queries
            </span>
            <h2 className="text-3xl font-display font-black text-white">
              General Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-white focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                  </button>

                  {isExpanded && (
                    <p className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed font-sans border-t border-white/5">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
