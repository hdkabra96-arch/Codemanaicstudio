import { ArrowRight, Check, Cpu, Layers, Database, Shield, Zap, RefreshCw, MessageCircle, BarChart3, Terminal } from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface SoftwareProps {
  onNavigate: (page: PageId) => void;
}

export default function Software({ onNavigate }: SoftwareProps) {
  const capabilities = [
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: "Custom Systems & SaaS",
      desc: "Robust multi-tenant subscription networks built with isolated data-schemas, subscription tiers, Stripe Billing proxies, and telemetry logging."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-600" />,
      title: "Relational Database Sync",
      desc: "Ultra-high performance visual databases structured on advanced query patterns (PostgreSQL, Drizzle ORM) for transactional precision."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Interactive Dashboards",
      desc: "Immersive data visualizations, real-time feedback flows, responsive charting, and custom client spreadsheets designed for ease of use."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Enterprise Grade Security",
      desc: "Strict encryption-at-rest, multi-layered user permissions, secure server microservices, and absolute prevention of client-side key exposure."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Automated Workflows",
      desc: "Internal state optimizations, background webhook relay servers, instant contact-syncing, and email transactional dispatchers."
    },
    {
      icon: <Terminal className="w-6 h-6 text-rose-600" />,
      title: "Custom Service APIs",
      desc: "Bespoke REST/GraphQL APIs and server endpoints tailored meticulously to tie legacy apps, mobile clients, and web platforms together."
    }
  ];

  const systemBenefits = [
    "Sub-second client-side rendering utilizing optimized React state managers (Zustand & context).",
    "Flawless responsive layouts configured strictly for portable viewports, tablets, and wide monitors.",
    "Bespoke data orchestration maps that prevent infinite loops and state flickering.",
    "Integrated 1-Click backup triggers for absolute operational business confidence."
  ];

  const processStages = [
    { num: "01", title: "Logical Schema Mapping", desc: "Modeling transactional tables, entity relationships, and access levels to guarantee optimal query paths." },
    { num: "02", title: "Component-Driven Design", desc: "Rendering customizable dashboard modules, tables, filters, and charts inside clean visual systems." },
    { num: "03", title: "Agile Development Runs", desc: "Writing completely typed React-Express systems under strict TypeScript validation with zero-clutter rules." },
    { num: "04", title: "Sandbox Testing & Launch", desc: "Conducting stress tests, simulation of simultaneous traffic, and direct deployment to secure container engines." }
  ];

  return (
    <div id="software-page-container" className="pt-24 pb-20 bg-[#F4EFE2] text-[#1A1D24]">
      {/* Mesh Backdrop Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A. HERO SECTION */}
        <div className="py-16 md:py-24 text-left space-y-6 max-w-4xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-600/10 px-3 py-1 rounded-full inline-block">
            Enterprise Grade Platforms
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#1A1D24] leading-tight">
            We Build Custom Software <br />
            <span className="text-blue-600">That Automates Your Growth</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            Go beyond simple static layouts. We build custom, high-converting customer portals, SaaS operations, multi-tenant dashboards, and custom CRM architectures designed to keep high-density data looking crisp while maximizing your visual authority and customer conversions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Initiate Custom Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, I'm interested in an enterprise custom software/SaaS platform solution. Let's discuss details!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* B. DETAILED CAPABILITIES GRID */}
        <div className="py-16 border-t border-slate-950/5">
          <div className="text-left space-y-2 mb-12 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-wider text-purple-600 uppercase">
              Bespoke Software Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight">
              Slick background engines meeting secure client views
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((tech, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/70 border border-slate-950/10 hover:border-blue-500/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 border border-slate-900/5 flex items-center justify-center mb-5 shadow-sm">
                    {tech.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#1A1D24] mb-2">{tech.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. BENEFIT GRID BLOCK */}
        <div className="py-16 border-t border-slate-950/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase">
              The Architecture Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight leading-tight">
              Sub-second loading times & bulletproof data isolate schemas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We write clean software utilizing strict TypeScript parameters, secure Node server environments, and isolated database architectures. We prevent state synchronization bottlenecks so your system runs without lag.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white/50 border border-slate-950/10 rounded-2xl p-6 sm:p-8 space-y-4 text-left shadow-lg">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 border-b border-slate-950/5 pb-2">
              Performance &amp; Quality Assurances
            </h3>
            <ul className="space-y-4">
              {systemBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  <div className="p-1 rounded bg-blue-100 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* D. PROCESS TIMELINE */}
        <div className="py-16 border-t border-slate-950/5">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-purple-600 uppercase bg-purple-600/15 px-3 py-1 rounded-full inline-block">
              Development Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight">
              4-Stage Enterprise Sprint Lifecycle
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We execute transparent developmental sprint sequences to assure complete architectural integrity and timely release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/60 border border-slate-950/5 flex flex-col justify-between space-y-4 relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-4 right-4 text-3xl font-display font-black text-slate-950/5 select-none font-mono">
                  {stage.num}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#1A1D24] mb-2">{stage.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E. FOOTER CALL TO ACTION */}
        <div className="py-12 px-6 sm:px-12 rounded-3xl bg-slate-950 text-white border border-white/10 relative overflow-hidden text-center space-y-6 mt-12 shadow-2xl">
          <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight leading-tight">
            Ready to Build Your Dedicated Softwares Platform?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let us convert your manual operational processes or next SaaS startup idea into clean, automated, and secure high-performance custom application codes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Scope Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, let's discuss details and pricing for my custom software/SaaS requirement!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Free Quote Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
