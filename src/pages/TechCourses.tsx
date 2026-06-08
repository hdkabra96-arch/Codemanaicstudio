import { useState, FormEvent } from 'react';
import { 
  GraduationCap, BookOpen, Code, Database, Server, Terminal, 
  Check, ArrowRight, MessageCircle, Sparkles, Smartphone, Play, 
  CheckCircle2, User, Mail, ChevronRight, ChevronDown, ListRestart
} from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface TechCoursesProps {
  onNavigate: (page: PageId) => void;
}

export default function TechCourses({ onNavigate }: TechCoursesProps) {
  // Curriculum browser state
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'architecture' | 'ai'>('frontend');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  // States for interactive custom bootcamp builder
  const [teamSize, setTeamSize] = useState<string>('5-15');
  const [focusStack, setFocusStack] = useState<string>('react-typescript');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [coursesStep, setCoursesStep] = useState<number>(1); // 1: Select specs, 2: context form, 3: completed

  const curriculumCategories = {
    frontend: {
      title: "Advanced Frontend Engineering",
      desc: "Master layout performance, robust modern state engines, type safety, and pixel-perfect design-system integrations.",
      modules: [
        {
          num: "01",
          name: "React 19 & Next.js Core Mechanics",
          topics: ["Server Components vs. Client Components layout", "Suspense boundaries & hydration optimization", "Custom hook architectures & performance profiling", "Strict useTransition & form action models"]
        },
        {
          num: "02",
          name: "Bulletproof TypeScript",
          topics: ["Generics, conditional types, and mapped utility helpers", "Discriminated unions for resilient component props", "Integrating external types securely without 'any'", "Configuring strict compiler options for zero compile leaks"]
        },
        {
          num: "03",
          name: "Modern State Engine Orchestration",
          topics: ["Zustand design patterns for ultra-low rendering loops", "Global React Context optimization structures", "Persistent storage sync and atomic updates", "Ref and key manipulation parameters"]
        }
      ]
    },
    backend: {
      title: "Production Backend & Systems",
      desc: "In-depth API robustness, type-safe database schemas, transaction-safe routes, and resilient background jobs.",
      modules: [
        {
          num: "01",
          name: "Node.js (Express & TS)",
          topics: ["Enterprise Express middleware architecture", "Centralized, typesafe error routing handlers", "Token authentication using secure HTTP-only cookies", "API schema compliance using strict validators"]
        },
        {
          num: "02",
          name: "Database Modelling & Drizzle ORM",
          topics: ["Relational schema design (PostgreSQL/CloudSQL)", "Type-safe migrations and automated schema sync", "Complex lookup joins and optimized raw subqueries", "Transactional protection states"]
        },
        {
          num: "03",
          name: "Performance & Caching",
          topics: ["Redis pub-sub notifications and state sync", "Database index optimization strategies", "API rate-limit load balancing loops", "Secure asynchronous worker handlers"]
        }
      ]
    },
    architecture: {
      title: "Enterprise Systems Architecture",
      desc: "Designing and orchestrating complex distributed services, serverless pathways, and lightweight container deployments.",
      modules: [
        {
          num: "01",
          name: "REST, GraphQL & WebSockets",
          topics: ["Defining clean contract-driven API specs", "Event-driven architecture with WebSockets", "GraphQL query optimization & resolver security", "API gateway routing and rate limiting"]
        },
        {
          num: "02",
          name: "Docker Containers & Cloud Run",
          topics: ["Writing lean, multi-stage Docker builds", "Environment variable lifecycle injection", "Local development orchestration with Compose", "Zero-downtime rolling container delivery"]
        }
      ]
    },
    ai: {
      title: "Applied AI Pipeline Engineering",
      desc: "Gain an unstoppable edge. Learn to interface securely with advanced ML models to build smart automation agents.",
      modules: [
        {
          num: "01",
          name: "@google/genai SDK Integration",
          topics: ["Model selection guidelines: Gemini 1.5 Flash vs Pro", "Structured JSON output schemas from LLMs", "Token consumption profiling and cost reduction", "Semantic search architectures using Vector Embeddings"]
        },
        {
          num: "02",
          name: "Safe AI Agent Workflows",
          topics: ["Prompt tuning and context window engineering", "Implementing strict verification filters for hallucinations", "Streaming real-time AI responses to modern React fronts", "Function calling and database lookup hooks"]
        }
      ]
    }
  };

  const capabilities = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Pure Code-First Syllabus",
      desc: "Zero generic textbook theory. We focus strictly on building actual applications, troubleshooting real stack failures, and deploying production-ready codebases with clean architectural patterns."
    },
    {
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      title: "Team-Tailored Curriculum",
      desc: "Before launching, we conduct complete skills audits of your staff. We structure the exercises to work directly with your existing enterprise systems, API formats, and internal libraries."
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-600" />,
      title: "Typesafe Stack Standard",
      desc: "All training is delivered with absolute type-safety as the primary core. We teach developers how to prevent runtime errors entirely with comprehensive compile-time protections."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-600" />,
      title: "Self-Paced Sandboxes",
      desc: "We build isolated development repositories with progressive exercises, unit tests, and continuous integration flows so your developers can safely test their work dynamically."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Advanced AI-Assisted Sprints",
      desc: "Learn to utilize modern coding tools (Gemini Code Assist, prompt-driven workflows) correctly. We show engineers how to write safe code 3x faster without compromising quality."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-rose-600" />,
      title: "Expert Mentor Code Reviews",
      desc: "Receive rigorous, professional PR reviews from seasoned architects. We audit variable naming, complexity parameters, layout structures, and dependency loops."
    }
  ];

  const handleInteractiveSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setCoursesStep(3);
  };

  return (
    <div id="tech-courses-page-container" className="pt-24 pb-20 bg-[#F4EFE2] text-[#1A1D24] relative min-h-screen">
      {/* Mesh Backdrop Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A. HERO SECTION */}
        <div className="py-16 md:py-24 text-left space-y-6 max-w-4xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-600/10 px-3 py-1 rounded-full inline-block">
            Production-Grade Engineering Bootcamps
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#1A1D24] leading-tight">
            Level Up Your Engineers <br />
            With <span className="text-blue-600">Enterprise Coding Masterclasses</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            Generic online tutorials are superficial, boring, and disconnected from genuine production environments. We write advanced, team-customized training tracks, typesafe architectural modules, and hands-on laboratory exercises designed to align and sharpen your development teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Courses Spec Sheet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, let's discuss details, syllabus modules, and pricing for your custom Tech Courses bootcamp training pack!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Course Curriculum</span>
            </a>
          </div>
        </div>

        {/* B. CORE INSTRUCTIONAL PILLARS */}
        <div className="py-16 border-t border-slate-950/5">
          <div className="text-left space-y-2 mb-12 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-wider text-purple-600 uppercase">
              Rigorous Engineering Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight">
              Curriculum engineered for real-world scaling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/70 border border-slate-950/10 hover:border-blue-500/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 border border-slate-900/5 flex items-center justify-center mb-5 shadow-sm">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#1A1D24] mb-2">{cap.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. INTERACTIVE SYLLABUS EXPLORER */}
        <div className="py-16 border-t border-slate-950/5">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase">
              Interactive Explorer
            </span>
            <h2 className="text-3xl font-display font-black text-[#1A1D24] tracking-tight">
              Syllabus Curriculum Deep-Dive
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a specialized track below to investigate specific, actionable module timelines and technical subtopics built into the coding bootcamps.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {(Object.keys(curriculumCategories) as Array<keyof typeof curriculumCategories>).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedModule(null);
                }}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md'
                    : 'bg-white border-slate-950/5 hover:bg-slate-50 text-slate-700'
                }`}
              >
                {cat.toUpperCase()} ENGINEERING
              </button>
            ))}
          </div>

          {/* Active Category View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-slate-950/10 p-6 sm:p-8 rounded-3xl shadow-xl">
            {/* Left side brief */}
            <div className="lg:col-span-4 space-y-4 text-left lg:sticky lg:top-28">
              <div className="p-3 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                {curriculumCategories[activeCategory].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {curriculumCategories[activeCategory].desc}
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Book This Track</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side modules map accordion */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider text-left">
                COURSE MODULES TIMELINE
              </h4>
              <div className="space-y-3">
                {curriculumCategories[activeCategory].modules.map((mod, idx) => {
                  const isExpanded = expandedModule === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all text-left"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedModule(isExpanded ? null : idx)}
                        className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors focus:outline-none text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded-md">
                            MOD {mod.num}
                          </span>
                          <span className="text-sm font-extrabold text-slate-900">{mod.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="p-5 bg-white border-t border-slate-100 space-y-3 animation-fade-in">
                          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                            TIMELINE CURRICULUM TOPICS INCLUDE:
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {mod.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* D. INTERACTIVE BOOTCAMP BUILDER (SANDBOX WIDGET) */}
        <div className="py-16 border-t border-slate-950/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase">
              Configure Your Bootcamp
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight leading-tight">
              Instantly Build a Custom Training Outline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Answer 3 simple questions to configure an automated instruction proposal tailored perfectly to align with your organization size, experience levels, and primary workspace stack.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 mt-0.5 shrink-0">
                  <Play className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Custom Sandbox Sandbox Key</h4>
                  <p className="text-[10px] text-slate-500">Every attendee gets access to continuous-integration repos with automated validation scripts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600 mt-0.5 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Certified Developer Assessment</h4>
                  <p className="text-[10px] text-slate-500">Includes individualized review rubrics focusing purely on performance, styling architecture, and type efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-950/10 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Sandbox Top header */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono tracking-wider text-slate-300 font-bold">
                    Sandbox Builder: Curriculum Configurator v1.3
                  </span>
                </div>
                <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase font-bold">
                  Interactive State
                </span>
              </div>

              {/* Sandbox main screen */}
              <div className="p-6 sm:p-8 min-h-[350px] flex flex-col justify-center text-left">
                {coursesStep === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider mb-2">
                        Step 1: Select Developer Team Size
                      </h4>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { val: '1-4', lbl: '1-4 Devs', desc: 'Indie team / startups' },
                          { val: '5-15', lbl: '5-15 Devs', desc: 'Active agency / scale' },
                          { val: '15+', lbl: '15+ Devs', desc: 'Enterprise / corporate' }
                        ].map((item) => (
                          <button
                            key={item.val}
                            type="button"
                            onClick={() => setTeamSize(item.val)}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                              teamSize === item.val
                                ? 'border-blue-600 bg-blue-50/50' 
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <p className="text-xs font-bold text-slate-900">{item.lbl}</p>
                            <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider mb-2">
                        Step 2: Choose Primary Focus Technologies
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFocusStack('react-typescript')}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            focusStack === 'react-typescript' 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <p className="text-xs font-bold text-slate-900">Frontend React &amp; TS</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">Vite, Zustand, CSS layout rules</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFocusStack('fullstack-ai')}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            focusStack === 'fullstack-ai' 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <p className="text-xs font-bold text-slate-900">Custom SaaS, APIs &amp; AI</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">Client state engines &amp; Gemini SDK</p>
                        </button>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCoursesStep(2)}
                        className="px-5 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-500 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Continue to details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {coursesStep === 2 && (
                  <form onSubmit={handleInteractiveSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>
                        Configuration: <strong className="text-slate-800">{teamSize} Developers</strong> studying <strong className="text-slate-800">{focusStack === 'react-typescript' ? 'React & TS' : 'SaaS, APIs & AI'}</strong>
                      </span>
                    </div>

                    <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                      Step 3: Tell Us Who To Send Proposal
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-600 mb-1 font-bold">Contact Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="text"
                            placeholder="Aarav Mehra"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-600 mb-1 font-bold">Work Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="email"
                            placeholder="admin@enterprise.com"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCoursesStep(1)}
                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Modify Specs
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Generate Custom Proposal</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {coursesStep === 3 && (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black text-slate-900">
                        Proposal Generated Successfully!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Excellent, <span className="font-bold text-slate-800">{contactName}</span>. In a real customized ecosystem, our background triggers would instantly formulate a beautifully detailed course outline for <span className="font-bold">{teamSize} engineers</span> program details, dispatch the PDF straight to <strong className="text-slate-800">{contactEmail}</strong>, and notify your account manager!
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCoursesStep(1);
                        setContactName('');
                        setContactEmail('');
                      }}
                      className="px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer flex items-center gap-1.5 mx-auto"
                    >
                      <ListRestart className="w-4 h-4" />
                      <span>Re-reconfigure Stack</span>
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

        {/* E. FOOTER CALL TO ACTION */}
        <div className="py-12 px-6 sm:px-12 rounded-3xl bg-slate-950 text-white border border-white/10 relative overflow-hidden text-center space-y-6 mt-12 shadow-2xl">
          <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight leading-tight">
            Deploy Production-Grade Skills Into Your Development Workspace
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Equip your developers with state-of-the-art architectures, bulletproof typings, and modern AI orchestration frameworks to optimize speed, precision, and business output.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Curriculum Consult</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, let's discuss details and pricing for custom corporate Tech Courses bootcamps!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Team Onboarding</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
