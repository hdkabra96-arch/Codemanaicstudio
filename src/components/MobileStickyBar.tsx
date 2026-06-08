import { Phone, MessageCircle, FileText } from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface MobileStickyBarProps {
  onNavigate: (page: PageId) => void;
  activePage: PageId;
}

export default function MobileStickyBar({ onNavigate, activePage }: MobileStickyBarProps) {
  const customMessage = encodeURIComponent("Hello CodeManaic Studio, I would like to get a free quote regarding my digital project.");
  const finalWhatsAppLink = `${WHATSAPP_LINK_BASE}?text=${customMessage}`;

  return (
    <div
      id="mobile-sticky-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0B0F19]/90 backdrop-blur-md border-t border-white/10 z-30 flex items-center justify-around px-4"
    >
      {/* Call Now Action */}
      <a
        href="tel:+918866851826"
        id="mobile-action-call"
        className="flex flex-col items-center justify-center text-center text-gray-400 hover:text-white transition-colors flex-1 py-2 gap-1 focus:outline-none"
      >
        <div className="p-1 px-3 bg-white/5 rounded-full">
          <Phone className="w-4 h-4 text-blue-400" />
        </div>
        <span className="text-[9px] uppercase tracking-wider font-mono">Call Now</span>
      </a>

      {/* Primary WhatsApp Connect */}
      <a
        href={finalWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
        id="mobile-action-whatsapp"
        className="flex flex-col items-center justify-center text-center text-emerald-400 hover:text-emerald-300 transition-colors flex-1 py-1 gap-1 focus:outline-none relative -top-3"
      >
        <div className="w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#070A12] animate-bounce [animation-duration:4s]">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span className="text-[9px] uppercase tracking-wider font-mono font-semibold relative -top-1">WhatsApp</span>
      </a>

      {/* Navigation Quote trigger */}
      <button
        type="button"
        onClick={() => onNavigate('contact')}
        id="mobile-action-quote"
        className={`flex flex-col items-center justify-center text-center transition-colors flex-1 py-2 gap-1 focus:outline-none ${
          activePage === 'contact' ? 'text-blue-400' : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="p-1 px-3 bg-blue-500/10 rounded-full">
          <FileText className="w-4 h-4 text-purple-400" />
        </div>
        <span className="text-[9px] uppercase tracking-wider font-mono">Get Quote</span>
      </button>
    </div>
  );
}
