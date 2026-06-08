import { useState } from 'react';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const prefilledMessage = encodeURIComponent("Hello CodeManaic Studio, I would like to discuss my project.");
  const finalLink = `${WHATSAPP_LINK_BASE}?text=${prefilledMessage}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Expanded Hover Tooltip */}
      <div
        className={`bg-[#0F172A] border border-white/10 p-3.5 rounded-2xl shadow-2xl glass-card flex items-start gap-3 w-72 mb-3 pointer-events-auto transition-all duration-300 transform origin-bottom-right ${
          showTooltip
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="relative p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-display font-semibold text-xs text-white">CodeManaic Studio</h4>
            <span className="text-[9px] font-mono font-medium text-emerald-400 uppercase py-0.5 px-1.5 bg-emerald-500/10 rounded-full">
              online
            </span>
          </div>
          <p className="text-[11px] text-gray-400 mt-1">
            "Hello! Usually replies within 15 minutes. How can we elevate your digital growth today?"
          </p>
          <a
            href={finalLink}
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-1.5 mt-2.5 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Chat Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Pulsing Trigger Button */}
      <div className="relative pointer-events-auto">
        {/* Pulsing Aura */}
        <span className="absolute inset-0 bg-emerald-500/20 rounded-full scale-125 animate-ping" />
        <span className="absolute inset-0 bg-emerald-500/10 rounded-full scale-150 animate-pulse [animation-duration:3s]" />
        
        <a
          href={finalLink}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          id="whatsapp-floater-button"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-400 hover:scale-105 transition-all duration-200 group focus:outline-none"
          title="Chat on WhatsApp"
        >
          {/* Custom Sleek SVG logo of WhatsApp */}
          <svg
            className="w-7.5 h-7.5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          
          {/* Subtle Top Right Notification dot */}
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border border-emerald-500 scale-100 group-hover:scale-110 transition-transform flex items-center justify-center font-mono text-[8px] font-black text-slate-950">
            1
          </span>
        </a>
      </div>
    </div>
  );
}
