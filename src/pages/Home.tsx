import { useState, useEffect } from 'react';
import {
  ArrowRight, Phone, Check, Star, Sparkles, Globe, Cpu, Smartphone,
  ShoppingBag, Figma, TrendingUp, Zap, HelpCircle, Layers, Hammer, ShieldCheck, RefreshCw, MessageCircle,
  ChevronLeft, ChevronRight, Calendar, GraduationCap
} from 'lucide-react';
import { PageId } from '../types';
import { PORTFOLIO_LIST, TESTIMONIALS_LIST } from '../data/portfolioData';
import { SERVICES_LIST, PRICING_PLANS, WHATSAPP_LINK_BASE } from '../data/servicesData';
import { SplineScene } from '../components/ui/splite';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll services slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveServiceSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInquiry = (projectName: string, customMessage: string) => {
    const parsedText = encodeURIComponent(customMessage);
    window.open(`${WHATSAPP_LINK_BASE}?text=${parsedText}`, '_blank');
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-pink-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Figma': return <Figma className="w-6 h-6 text-orange-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-yellow-400" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-red-400" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const whyChooseUsData = [
    { title: 'Fast Delivery', desc: 'Sprints mapped with extreme precision, delivering complete bespoke items in under 20-30 business days.' },
    { title: 'SEO Optimized', desc: 'Strategic metadata schemas, semantic structural weights, and keyword density mapping for instant Google rankings.' },
    { title: 'Mobile First', desc: 'Fluid layout ratios structured specifically for portable viewports, retaining flawless pixel balance.' },
    { title: 'Premium Design', desc: 'Abandoning boilerplate grids to craft authentic, brand-aligned sensory glass layouts and custom cards.' },
    { title: 'Ongoing Support', desc: 'Full-scale post-release protection, ensuring hosting containers remain high-speed, secure, and current.' },
    { title: 'Conversion Focused', desc: 'Intense mapping of buyer behaviors, deploying micro-animations, clear tags, and WhatsApp dispatch loops.' }
  ];

  return (
    <div id="home-page-container" className="pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 md:py-20 lg:py-24">
        {/* Dynamic mesh spheres */}
        <div className="gradient-mesh -top-20 -left-20 bg-blue-600/20" />
        <div className="gradient-mesh bottom-10 right-10 bg-purple-600/20" />
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Texts Content */}
            <div className="lg:col-span-7 space-y-6 text-left">

              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                We Build Websites <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
                  That Help Businesses Grow
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                We build modern, light-speed bespoke websites, web applications, and digital layouts that transform random visitors into trusted clients. Maximize your digital dominance.
              </p>

              {/* Call-To-Actions button rows */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Small social metrics check */}
              <div className="pt-4 flex items-center gap-6 text-gray-500 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-[#3B82F6]">100%</span> Satisfaction Guaranteed
                </div>
              </div>
            </div>

            {/* Right: Immersive Interactive 3D scene of the site */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[350px] lg:min-h-[450px]">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[350px] lg:min-h-[450px]"
              />
            </div>

          </div>


        </div>
      </section>

      {/* 2. TOP SERVICES SLIDER */}
      <section className="py-16 border-y border-slate-950/10 bg-[#F4EFE2] relative overflow-hidden">
        {/* Semi-transparent background decorations */}
        <div className="absolute inset-0 bg-noise-overlay opacity-5 pointer-events-none" />
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-600/10 px-3 py-1 rounded-full inline-block">
              Primary Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-[#1A1D24]">
              Our Core Pillars of Digital Growth
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore our top-tier web solutions engineered to turn visitors into high-paying customer leads.
            </p>
          </div>

          {/* Slider Container Row */}
          <div className="relative flex items-center">
            
            {/* Desktop Left navigation buttons */}
            <button
              onClick={() => setActiveServiceSlide((prev) => (prev - 1 + 3) % 3)}
              className="absolute -left-4 lg:-left-6 p-2 rounded-full border border-slate-950/10 bg-white/80 text-slate-700 hover:text-blue-600 hover:bg-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all z-20 hidden sm:flex items-center justify-center cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Main active slide card */}
            <div className="w-full glass-card border border-slate-950/10 rounded-2xl bg-white/70 backdrop-blur-xl p-6 sm:p-10 shadow-xl relative overflow-hidden transition-all duration-500">
              {/* Massive ambient decorative number */}
              <div className="absolute right-4 top-2 text-[120px] font-sans font-black tracking-tighter text-slate-900/5 select-none pointer-events-none leading-none">
                0{activeServiceSlide + 1}
              </div>

              {(() => {
                const activeService = SERVICES_LIST[activeServiceSlide];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[280px]">
                    
                    {/* Left block (Detailed Service context) */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
                      <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                          {getServiceIcon(activeService.icon)}
                        </div>
                        <div>
                          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">
                            Service 0{activeServiceSlide + 1} of 03
                          </p>
                          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1A1D24] tracking-tight">
                            {activeService.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                        {activeService.description}
                      </p>

                      {/* Displaying some of key features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {activeService.features && activeService.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium font-sans">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <button
                          type="button"
                          onClick={() => onNavigate(activeService.id === 'book' ? 'book' : activeService.id === 'web-apps' ? 'software' : activeService.id === 'tech-courses' ? 'tech-courses' : 'services')}
                          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-md hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Explore Tech Stack</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        
                        <a
                          href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(`Hi CodeManaic Studio, I would like to get quotes and details on your ${activeService.title} specialized solutions!`)}`}
                          target="_blank"
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="px-5 py-2.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 font-bold text-xs tracking-wider uppercase shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Get Free Quote</span>
                        </a>
                      </div>
                    </div>

                    {/* Right block (Mockup details/Benefits) */}
                    <div className="lg:col-span-5 relative self-stretch flex flex-col justify-center bg-slate-50/50 rounded-xl p-5 border border-slate-900/5">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 border-b border-slate-900/5 pb-2">
                        Key Value Benefits
                      </h4>
                      <ul className="space-y-3">
                        {activeService.benefits && activeService.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Accent Tech Badges stack */}
                      <div className="mt-5 pt-4 border-t border-slate-900/5">
                        <div className="flex flex-wrap gap-1.5 font-sans">
                          {activeService.technologies && activeService.technologies.slice(0, 3).map((tech, tIdx) => (
                            <span key={tIdx} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-white border border-slate-900/5 text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>

            {/* Desktop Right navigation buttons */}
            <button
              onClick={() => setActiveServiceSlide((prev) => (prev + 1) % 3)}
              className="absolute -right-4 lg:-right-6 p-2 rounded-full border border-slate-950/10 bg-white/80 text-slate-700 hover:text-blue-600 hover:bg-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all z-20 hidden sm:flex items-center justify-center cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Swipe UI controls indicators / Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setActiveServiceSlide((prev) => (prev - 1 + 3) % 3)}
              className="p-1 px-2 text-xs font-bold text-slate-600 hover:text-blue-600 sm:hidden flex items-center gap-0.5 cursor-pointer"
            >
              &larr; Prev
            </button>
            
            <div className="flex justify-center gap-1.5">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveServiceSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeServiceSlide === idx ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveServiceSlide((prev) => (prev + 1) % 3)}
              className="p-1 px-2 text-xs font-bold text-slate-600 hover:text-blue-600 sm:hidden flex items-center gap-0.5 cursor-pointer"
            >
              Next &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 3. CAPABILITIES / SERVICES PREVIEW */}
      <section className="py-20 md:py-28 relative">
        <div className="gradient-mesh -top-10 -right-20 bg-blue-600/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Premium Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
              Slick capabilities to scale your business
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We deploy absolute full-stack capabilities meticulously planned to attract high-intent leads and preserve perfect operational flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate(service.id === 'book' ? 'book' : service.id === 'web-apps' ? 'software' : service.id === 'tech-courses' ? 'tech-courses' : 'services')}
                className="group p-6 rounded-3xl glass-card border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-[4/3] bg-gradient-to-b from-white/[0.01] to-transparent"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-blue-600/15 border border-white/10 group-hover:border-blue-500/30 transition-colors flex items-center justify-center mb-5">
                    {getServiceIcon(service.icon)}
                  </div>
                  
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:translate-x-1.5 transition-transform mt-4">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold tracking-wider uppercase border border-white/10 cursor-pointer transition-all"
            >
              <span>Explore All Our 9 Specialized Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (PORTFOLIO SHOWCASE) */}
      <section id="featured-projects-section" className="py-20 md:py-28 bg-[#04060B] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-4 mb-20">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block">
                Recent Showcases
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                Bespoke creations built for highest conversions
              </h2>
            </div>
            
            <a
              href={`${WHATSAPP_LINK_BASE}?text=Hi!%20I%20would%20like%20to%20see%20more%20design%20samples%20from%20CodeManaic%20Studio.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 px-4 h-10 rounded-full border border-white/10 hover:border-white/20 text-xs text-gray-300 transition-all font-semibold"
            >
              <span>Request Custom Samples</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_LIST.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden glass-card border border-white/5 bg-slate-950/20 flex flex-col justify-between"
              >
                
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D18]">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 text-[9px] font-mono uppercase bg-blue-600 text-white font-bold px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Info Text Frame */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pills info */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Inquiry button block */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <button
                        onClick={() => handleInquiry(project.title, project.customWhatsAppText)}
                        className="flex-1 py-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 transition-all text-[11px] font-extrabold flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTIONS */}
      <section className="py-20 md:py-28 relative">
        <div className="gradient-mesh bottom-0 left-0 bg-purple-600/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Sticky info left column */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
                Our Promise
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
                No Boilerplates. Just Elite Engineering.
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Standard templates look generic and load slow. We code every digital framework with clean stylesheets and optimized modules, giving your business an immediate organic advantage.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  <span>Learn more about our methods</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Layout grid cards right column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUsData.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeatureIndex(index)}
                  onMouseLeave={() => setHoveredFeatureIndex(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    hoveredFeatureIndex === index
                      ? 'bg-white/5 border-blue-500/30 -translate-y-1'
                      : 'bg-white/[0.01] border-white/5'
                  }`}
                >
                  <div className="p-2 w-9 h-9 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400 font-bold mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. GLASSMORPHIC TESTIMONIALS SLIDER */}
      <section className="py-20 md:py-28 bg-[#05070C] border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
            Client Feedbacks
          </span>
          
          {/* Testimonial slider node */}
          <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative bg-slate-900/15 backdrop-blur-xl">
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 text-yellow-400">
              {[...Array(TESTIMONIALS_LIST[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-sans tracking-wide leading-relaxed italic">
              "{TESTIMONIALS_LIST[activeTestimonial].text}"
            </p>

            <div className="mt-8 flex flex-col items-center">
              <img
                src={TESTIMONIALS_LIST[activeTestimonial].avatarUrl}
                alt={TESTIMONIALS_LIST[activeTestimonial].name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-blue-500/30 mb-2"
              />
              <h4 className="text-xs font-bold text-white">
                {TESTIMONIALS_LIST[activeTestimonial].name}
              </h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                {TESTIMONIALS_LIST[activeTestimonial].role} &middot; <strong className="text-blue-400 font-bold">{TESTIMONIALS_LIST[activeTestimonial].company}</strong>
              </p>
            </div>

            {/* Manual Bullet dots selectors */}
            <div className="flex justify-center gap-1.5 mt-8">
              {TESTIMONIALS_LIST.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    activeTestimonial === index ? 'bg-blue-500 w-5' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. PRICING PREVIEW PLAN CARDS */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Quotation Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white animate-fade">
              Affordable plans to jumpstart your launch
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Transparent, competitive price lists focused entirely on business delivery. Discuss customized requests on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-950/20 to-purple-950/20 border-blue-500 hover:shadow-blue-500/10 shadow-2xl scale-[1.02] lg:scale-[1.04]'
                    : 'bg-white/[0.01] border-white/5 hover:border-white/15'
                }`}
              >
                {/* Popular highlight pill */}
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase bg-blue-500 text-white font-extrabold px-3 py-1 rounded-full tracking-wider shadow-lg">
                    most popular plan
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                    <div>
                      <h3 className="text-base font-bold text-white">{plan.name}</h3>
                      <p className="text-[10px] text-gray-500 mt-0.5">{plan.idealFor}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-extrabold text-blue-400">{plan.price}</span>
                      <span className="text-[10px] text-gray-600 block">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-1 ${
                      plan.isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Get Started</span>
                  </button>
                  
                  <a
                    href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(`Hello CodeManaic Studio, I would like to discuss details regarding your ${plan.name} Price tier plan listed for ${plan.price}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-[11px] font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#07090F] border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Ready To Build Something Amazing?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
            Speak directly with our technical design leads. We map custom milestones, estimate correct timelines, and deliver high-converting products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl hover:scale-[1.03] transition-all"
            >
              Start Your Project Today
            </button>
            
            <a
              href={`${WHATSAPP_LINK_BASE}?text=Hello%20CodeManaic%20Studio%2C%20I%20would%20like%20to%20discuss%20commercial%20options.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg hover:bg-emerald-400 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
