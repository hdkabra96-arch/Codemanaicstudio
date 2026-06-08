import { useState } from 'react';
import {
  Globe, Cpu, Smartphone, ShoppingBag, Figma, TrendingUp, Layers, Sparkles,
  Hammer, Check, ChevronDown, ChevronUp, MessageSquare, ArrowRight, HelpCircle, Calendar, GraduationCap
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_LIST, WHATSAPP_LINK_BASE } from '../data/servicesData';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-8 h-8 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-pink-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-emerald-400" />;
      case 'Figma': return <Figma className="w-8 h-8 text-orange-400" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-cyan-400" />;
      case 'Layers': return <Layers className="w-8 h-8 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-yellow-400" />;
      case 'Hammer': return <Hammer className="w-8 h-8 text-red-400" />;
      case 'Calendar': return <Calendar className="w-8 h-8 text-emerald-400" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-indigo-400" />;
      default: return <Sparkles className="w-8 h-8 text-blue-400" />;
    }
  };

  const handleConsultation = (serviceTitle: string) => {
    const message = encodeURIComponent(`Hello CodeManaic Studio, I would like to schedule a free project consultation specifically regarding your: "${serviceTitle}" capabilities.`);
    window.open(`${WHATSAPP_LINK_BASE}?text=${message}`, '_blank');
  };

  const toggleFaq = (key: string) => {
    setExpandedFaq(expandedFaq === key ? null : key);
  };

  return (
    <div id="services-page-container" className="pt-24 pb-20">
      
      {/* 1. SERVICES HERO */}
      <section className="relative py-16 md:py-24 text-left overflow-hidden">
        <div className="gradient-mesh -top-20 right-0 bg-purple-600/15" />
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Digital Core
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight max-w-4xl">
            Slick Capabilities Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
              For Superior Conversion Metrics
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            CodeManaic Studio delivers end-to-end full-stack software, fluid design wires, local maps positioning, and cognitive AI model interfaces. Explore our 9 specialized capabilities below.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC INDIVIDUAL SERVICE SECTIONS */}
      <section className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {SERVICES_LIST.map((service, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div
              key={service.id}
              id={`service-section-${service.id}`}
              className={`p-6 md:p-10 rounded-3xl border border-white/5 bg-slate-950/15 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start transition-all hover:bg-slate-950/20 ${
                isOdd ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Primary service intro column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                      SERVICE CAPABILITY 0{index + 1}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {service.detailedDescription || service.description}
                </p>

                {/* Features checks */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase">
                    Core Focus Offerings:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits checks */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
                      Direct Growth Advantages:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-500 font-extrabold">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technical steps metadata column */}
              <div className="lg:col-span-6 space-y-6 text-left p-4 md:p-6 bg-[#090C15] border border-white/5 rounded-2xl">
                {/* Tech Stamp */}
                {service.technologies && (
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Standard Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Micro process timeline */}
                {service.process && (
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Delivery milestones:
                    </span>
                    <div className="space-y-2.5 pl-3 border-l border-white/5">
                      {service.process.map((step, i) => (
                        <div key={i} className="text-xs text-gray-400">
                          <strong className="text-white block font-sans font-semibold">Stage {i + 1}: {step.split(' Workshop')[0].split(' wireframing')[0].split(' with')[0]}</strong>
                          <span className="text-[11px] text-gray-500 leading-snug block">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Accordion FAQ checklist */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                      Client Frequently Asked:
                    </span>
                    {service.faqs.map((faq, idx) => {
                      const faqKey = `${service.id}-${idx}`;
                      const isExpanded = expandedFaq === faqKey;
                      return (
                        <div key={idx} className="border border-white/5 rounded-xl bg-white/[0.01] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggleFaq(faqKey)}
                            className="w-full px-3 py-2 flex items-center justify-between text-left text-xs font-semibold text-white hover:bg-white/5 transition-colors focus:outline-none"
                          >
                            <span>{faq.question}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-blue-400" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
                          </button>
                          
                          {isExpanded && (
                            <div className="px-3 pb-3 pt-1 text-[11px] text-gray-400 leading-relaxed border-t border-white/5">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Subservice CTA block */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <h4 className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                    ⚡ Interested In This Service?
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Free Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    
                    <button
                      onClick={() => handleConsultation(service.title)}
                      className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Consultation</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. CAPABILITY CTA */}
      <section className="py-20 bg-gradient-to-b from-white/[0.01] to-[#04060B] border-t border-white/5 mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-display font-black text-white leading-tight">
            Ready to design a custom computational framework?
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            Get direct pricing formulas on Starter, Growth, or custom Enterprise services by triggering a chat with Ketan Kabra and Tanya today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Price Breakdown
            </button>
            
            <a
              href={`${WHATSAPP_LINK_BASE}?text=Hello%20CodeManaic%20Studio%20lead%20developers%2C%20I%20have%20custom%20service%20questions.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
