import { useState, FormEvent } from 'react';
import { 
  Calendar, Clock, Check, ArrowRight, MessageCircle, Sparkles, 
  Smartphone, Bell, CreditCard, ChevronRight, CheckCircle2, User, Mail
} from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface BookProps {
  onNavigate: (page: PageId) => void;
}

export default function Book({ onNavigate }: BookProps) {
  // States for the interactive booking flow prototype
  const [selectedService, setSelectedService] = useState<string>('strategy');
  const [selectedDate, setSelectedDate] = useState<string>('2026-06-10');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [bookingStep, setBookingStep] = useState<number>(1); // 1: service/time, 2: context form, 3: completed

  const availableTimes = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const handleInteractiveSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputName || !inputEmail || !selectedTime) return;
    setBookingStep(3);
  };

  const capabilities = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Google & Outlook Realtime Sync",
      desc: "Absolute bidirectional integration using verified OAuth flows to verify current busy slots instantly and prevent double-booking. Slots update live as you edit your actual calendars."
    },
    {
      icon: <Bell className="w-6 h-6 text-purple-600" />,
      title: "WhatsApp & SMS Auto-Alerts",
      desc: "Instant confirmations, 24-hour reminder templates, and follow-up sequences. Minimize no-shows and keep high-intent leads fully engaged automatically."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      title: "Stripe & Razorpay Deposits",
      desc: "Integrate direct payment processors seamlessly. Require non-refundable deposit payments or full consultation invoice charges upfront before a booking slot is confirmed."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-600" />,
      title: "Native-Speed Mobile Layouts",
      desc: "Designed desktop-first but completely lightweight for phone screens. Big fat touch targets, dynamic layout cards, and fluid scrolling for frictionless checkouts."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Dynamic Smart Intake Fields",
      desc: "Ask the right qualifying questions based on previous answers. Automatically filter, score, and forward high-value corporate leads to your designated teams."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-rose-600" />,
      title: "Multi-Staff Distribution Router",
      desc: "Dynamic round-robin scheduling algorithms or linear division lists to evenly route booked consultation clients straight to available doctors, managers, or sales executives."
    }
  ];

  const valueAxioms = [
    "No-show rates drop by up to 85% through proactive SMS & WhatsApp sequence automations.",
    "Eliminate 100% of scheduling friction, leaving your visitors with a polished, luxury brand feeling.",
    "Strict server-side validation models that prevent slot-overlapping, cancellation loopholes, or stale client views."
  ];

  return (
    <div id="booking-page-container" className="pt-24 pb-20 bg-[#F4EFE2] text-[#1A1D24] relative min-h-screen">
      {/* Mesh Backdrop Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A. HERO SECTION */}
        <div className="py-16 md:py-24 text-left space-y-6 max-w-4xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-600/10 px-3 py-1 rounded-full inline-block">
            High Conversion Schedulers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#1A1D24] leading-tight">
            Stop Losing Leads to <br />
            <span className="text-blue-600">Friction-Filled Calendar Links</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            Generic free standard scheduling widgets look lazy, look generic, and lack direct database or branding integrations. We build robust, high-performance visual booking portals, custom diagnostic input cards, stripe gateway integrations, and automatic reminder engines custom-fit to reflect your absolute brand authority.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Build Custom Scheduler</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, I would like to design and build a high-performance custom calendar booking flow for my business!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Booking Automations</span>
            </a>
          </div>
        </div>

        {/* B. DETAILED CAPABILITIES GRID */}
        <div className="py-16 border-t border-slate-950/5">
          <div className="text-left space-y-2 mb-12 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-wider text-purple-600 uppercase">
              Core Booking Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight">
              Bespoke calendars synced straight to your databases
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

        {/* C. INTERACTIVE MOCK SCHEDULER WIDGET SECTION */}
        <div className="py-16 border-t border-slate-950/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase">
              Try It Live
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1A1D24] tracking-tight leading-tight">
              A Taste of Seamless, Low-Friction Booking UX
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We design booking stages that have zero latency, require zero logging, and render like a beautiful localized component. See how an intake flow seamlessly collects slots, qualifies content, and gives instant satisfaction to your clients.
            </p>

            <ul className="space-y-4 pt-2">
              {valueAxioms.map((axiom, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-1 rounded bg-blue-100 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span>{axiom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-950/10 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Sandbox Top header */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono tracking-wider text-slate-300 font-bold">
                    Sandbox Preview: Custom Scheduler v2.1
                  </span>
                </div>
                <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase font-bold">
                  Fully Responsive
                </span>
              </div>

              {/* Sandbox main screen */}
              <div className="p-6 sm:p-8 min-h-[350px] flex flex-col justify-center text-left">
                {bookingStep === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider mb-2">
                        Step 1: Select Strategy Session
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedService('strategy')}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            selectedService === 'strategy' 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <p className="text-xs font-bold text-slate-900">Custom System consult</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">30 mins &bull; Free Quote</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedService('audit')}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            selectedService === 'audit' 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <p className="text-xs font-bold text-slate-900">Conversion Audit</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">45 mins &bull; Live review</p>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider mb-2">
                        Step 2: Choose Date &amp; Available Slot
                      </h5>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-sans text-slate-700 bg-slate-50 focus:outline-none focus:border-blue-500"
                        />
                        <span className="text-xs text-slate-400 font-mono">
                          (Live Sync Active)
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-1 text-center font-mono rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex justify-end">
                      <button
                        type="button"
                        disabled={!selectedTime}
                        onClick={() => setBookingStep(2)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                          selectedTime 
                            ? 'bg-blue-600 text-white hover:bg-blue-500 cursor-pointer' 
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        <span>Continue to details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <form onSubmit={handleInteractiveSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>
                        Selected: <strong className="text-slate-800">{selectedService === 'strategy' ? 'Custom System consult' : 'Conversion Audit'}</strong> on <strong className="text-slate-800">{selectedDate}</strong> at <strong className="text-slate-800">{selectedTime}</strong>
                      </span>
                    </div>

                    <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                      Step 3: Tell Us About Your Project
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-600 mb-1 font-bold">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="text"
                            placeholder="Aditya Sharma"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-600 mb-1 font-bold">Your Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="email"
                            placeholder="aditya@example.com"
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Modify Time
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-50 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Confirm Slot reservation</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {bookingStep === 3 && (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-black text-slate-900">
                        Slot Reserved Successfully!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Excellent, <span className="font-bold text-slate-800">{inputName}</span>. In a real customized ecosystem, our background triggers would instantly dispatch a branded WhatsApp invite to <strong className="text-slate-800">{inputEmail}</strong> and lock your slot!
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setBookingStep(1);
                        setSelectedTime('');
                        setInputName('');
                        setInputEmail('');
                      }}
                      className="px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

        {/* D. FOOTER CALL TO ACTION */}
        <div className="py-12 px-6 sm:px-12 rounded-3xl bg-slate-950 text-white border border-white/10 relative overflow-hidden text-center space-y-6 mt-12 shadow-2xl">
          <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight leading-tight">
            Deploy Your Brand's Ultra-Fast Booking Funnel
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop letting clients deal with clunky third-party reservation calendars. Build a customized booking workflow built natively into your web layout with complete database synchronization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Scheduler Spec Sheet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent("Hi CodeManaic Studio, let's discuss details and pricing for my custom booking/appointment platform!")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Calendar API Sync</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
