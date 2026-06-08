import { Cpu, Phone, Mail, MessageCircle, Heart, ArrowUp, Send } from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';
// @ts-ignore
import logoImg from '../../Images/logo.jpeg';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer
      id="main-app-footer"
      className="relative bg-[#05070C] border-t border-white/5 pt-20 pb-24 md:pb-12 text-white overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Logo and Blurb */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handlePageSelect('home')}
              className="flex items-center gap-1.5 focus:outline-none cursor-pointer group text-left"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/20 bg-slate-950">
                <img
                  src={logoImg}
                  alt="CODEMANAIC Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-normal uppercase block">
                  CODEMANAIC<span className="text-blue-500 font-extrabold ml-1 font-sans">Studio</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] text-gray-500 font-mono block relative -top-0.5">
                  EXPERIENCES THAT DRIVE GROWTH
                </span>
              </div>
            </button>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm pt-2">
              CodeManaic Studio designs and engineers fast, fluid, high-converting digital products, modern corporate portals, cross-platform mobile apps, and automated client systems that reset brand authority and scale business transactions.
            </p>
            
            {/* Quick newsletter mockup container */}
            <div className="space-y-2 pt-3">
              <span className="text-[10px] font-mono tracking-wider text-purple-400 font-semibold uppercase block">
                Stay Updated
              </span>
              <div className="flex max-w-sm rounded-xl overflow-hidden bg-white/5 border border-white/5 focus-within:border-blue-500/30 transition-all">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="flex-1 px-3 py-2 bg-transparent text-xs text-white focus:outline-none placeholder-gray-600 font-sans"
                />
                <button
                  type="button"
                  className="px-3 bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  onClick={() => alert("Subscription recorded. Thank you for interest!")}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => handlePageSelect('home')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Services Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('about')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  About Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('software')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Software Platforms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('book')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Booking Schedulers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('contact')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('privacy')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-150 cursor-pointer text-left focus:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white transition-all cursor-pointer text-left focus:outline-none"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white transition-all cursor-pointer text-left focus:outline-none"
                >
                  Mobile Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white transition-all cursor-pointer text-left focus:outline-none"
                >
                  Search Optimization (SEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white transition-all cursor-pointer text-left focus:outline-none"
                >
                  Advanced AI Automations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('services')}
                  className="hover:text-white transition-all cursor-pointer text-left focus:outline-none"
                >
                  Free PDF & Video Editors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Get In Touch
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Email Address</span>
                  <a href="mailto:info@codemanaic.com" className="hover:text-blue-300">
                    info@codemanaic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Call/WhatsApp</span>
                  <a href="tel:+918866851826" className="hover:text-blue-300">
                    +91 88668 51826
                  </a>
                </div>
              </div>

              {/* Secure handles */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href={`${WHATSAPP_LINK_BASE}?text=Hi!`}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors border border-white/5"
                  title="WhatsApp Connect"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500 font-mono">
          <div>
            Copyright &copy; {new Date().getFullYear()} <span className="text-white font-bold">CodeManaic Studio</span>. All rights reserved globally.
          </div>
          
          <div className="flex items-center gap-1.5 justify-center sm:justify-end">
            <span>Powered with precision</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse" />
            <span>&amp; elegant engineering</span>
            <button
              onClick={handleScrollToTop}
              className="ml-4 p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:text-white hover:bg-blue-600 transition-all focus:outline-none"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
