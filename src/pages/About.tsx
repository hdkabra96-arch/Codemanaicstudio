import { Check, ArrowRight, Heart, Users, Calendar, Award } from 'lucide-react';
import { PageId } from '../types';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Global Clients' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '5+', label: 'Years Experience' }
  ];

  const coreValues = [
    { title: 'Architectural Honesty', desc: 'We never mask static systems with exaggerated layouts. Every stylesheet we write exists strictly to render speed, balance, and high organic search outcomes.' },
    { title: 'Sub-Second Speeds', desc: 'We design lightweight DOM trees with zero block render parameters. Our pages execute rendering in under 1 second to improve customer retention.' },
    { title: 'Responsive Symmetry', desc: 'Designs must look identical across extreme viewports—from a compact screen up to a high-density retina layout.' },
    { title: 'Lead Dominance', desc: 'Every service element must guide the prospect seamlessly toward clear conversions, leveraging direct WhatsApp relays.' }
  ];

  const processTimeline = [
    { title: '1. Discovery', desc: 'Understanding your product metrics, target audience, and current conversion choke points through exploration workshops.' },
    { title: '2. Research', desc: 'Deep-diving into high-volume keywords, search competitors, and industry design standards to build structural blueprints.' },
    { title: '3. Planning', desc: 'Mapping database schemas, state hierarchies, wireframe hierarchies, and secure WhatsApp endpoint architectures.' },
    { title: '4. Design', desc: 'Rendering high-fidelity glassmorphic visual canvases and bespoke responsive styles inside interactive Figma boards.' },
    { title: '5. Development', desc: 'Writing clean, typed CSS utilities and React components under TypeScript parameters with zero clutter.' },
    { title: '6. Launch', desc: 'Full DNS optimization, SSL keys generation, schema validations, and high-performance server container deployments.' },
    { title: '7. Growth', desc: 'Google Search Console tracking, active telemetry monitoring, periodic speed optimizations, and ongoing support.' }
  ];

  return (
    <div id="about-page-container" className="pt-24 pb-20">
      
      {/* A. ABOUT HERO */}
      <section className="relative py-16 md:py-24 text-left overflow-hidden">
        <div className="gradient-mesh top-0 left-0 bg-blue-600/15" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Mission &amp; Purpose
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight max-w-4xl">
            Creating Digital Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
              That Deliver Real Results
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            Founded with a vision to eliminate slow templates and boilerplate layouts, CodeManaic Studio leverages precision engineering, bespoke graphic systems, and rapid contact gateways to optimize conversions and fuel scalable growth.
          </p>
        </div>
      </section>

      {/* B. STATISTICS SECTION */}
      <section className="py-12 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl glass-card border border-white/5 bg-slate-950/25">
                <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-gray-500 mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. OUR STORY & VALUE BLOCKS */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Story Left Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
                The Narrative
              </span>
              <h2 className="text-3xl font-display font-black tracking-tight text-white">
                How we reset organic industry benchmarks.
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                CodeManaic Studio was established in answer to a simple market realization: most digital projects look identical, function slowly, and fail to retain visitor attention. By writing core components from scratch and integrating fast WhatsApp lead triggers directly inside structural frameworks, we provide businesses with a highly optimized, high-converting digital presence.
              </p>
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-4">
                <Award className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Accredited Craft</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Recognized globally for rendering sub-second interactive structures across dental, real estate, and retail startup agencies.</p>
                </div>
              </div>
            </div>

            {/* Core Values Right Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, i) => (
                <div key={i} className="p-5 rounded-3xl glass-card border border-white/5 bg-slate-900/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-black font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white">{value.title}</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* D. PROCESS TIMELINE SECTION */}
      <section className="py-20 md:py-28 bg-[#04060B] border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 animate-fade">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Development Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
              7-Stage Production Lifecycle
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              We execute transparent developmental sprint sequences to assure complete architectural integrity and timely release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {processTimeline.map((step, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl glass-card border border-white/5 bg-slate-950/30 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-purple-400 uppercase mb-2">
                    Phase 0{i + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 leading-tight">
                    {step.title.split('. ')[1]}
                  </h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                <span className="h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/3 mt-2 block" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* E. TEAM SECTION */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Our Pioneers
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white animate-fade">
              Meet the CodeManaic Architects
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Meet the specialists leading our design systems and building our full-stack products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden glass-card border border-white/5 bg-slate-950/25 relative flex flex-col justify-between">
                
                {/* Team photo frame */}
                <div className="aspect-square bg-slate-900 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent z-15" />
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Team details wrapper */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-mono text-purple-400 uppercase">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2.5 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social lists links */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>Active Team Member</span>
                    <a href={`${WHATSAPP_LINK_BASE}`} className="hover:text-blue-400 underline">
                      Schedule Meet
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* F. ABOUT CTA */}
      <section className="py-16 bg-gradient-to-b from-white/[0.01] to-[#05070C] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
            Looking to align your brand with elite digital capabilities?
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            Contact Dr. Kabra and our lead developers directly on WhatsApp or using the quote portal to map your product blueprints.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs uppercase transition-all hover:scale-[1.02]"
            >
              Get Free Quote
            </button>
            
            <a
              href={`${WHATSAPP_LINK_BASE}?text=Hi%20CodeManaic%20Studio%2C%20I%20details%20from%20the%20about%20page.`}
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs uppercase transition-all flex items-center gap-1.5 shadow"
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
