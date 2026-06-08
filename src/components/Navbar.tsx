import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Phone, FileText, ChevronRight, GraduationCap, Cpu, FileJson, Book } from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE, FREE_RESOURCES, EDUCATION_SYLLABUS } from '../data/servicesData';
// @ts-ignore
import logoImg from '../../Images/logo.jpeg';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

type EducationTier = 'cbse' | 'gseb' | 'bcom' | 'bba' | 'bca';

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [selectedEdTier, setSelectedEdTier] = useState<EducationTier>('cbse');
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowMegaMenu(false);
    }, 250);
    setHoverTimeout(timeout);
  };

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    setIsOpen(false);
    setShowMegaMenu(false);
  };

  const preFilledWhatsappQuote = encodeURIComponent("Hello CodeManaic Studio, I would like to schedule a free agency consultation.");

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3.5 glass-nav text-white shadow-2xl' : 'py-6 bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <button
            type="button"
            onClick={() => handlePageSelect('home')}
            className="flex items-center gap-1.5 focus:outline-none cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-500/20 bg-slate-950">
              <img
                src={logoImg}
                alt="CODEMANAIC Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-base tracking-normal uppercase block">
                CODEMANAIC<span className="text-blue-500 font-extrabold ml-1 font-sans">Studio</span>
              </span>
              <span className="text-[8px] tracking-[0.2em] text-gray-400 font-mono block relative -top-0.5">
                EXPERIENCES THAT DRIVE GROWTH
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-[13px] tracking-wide text-gray-300">
            <button
              onClick={() => handlePageSelect('home')}
              className={`hover:text-blue-400 transition-colors cursor-pointer relative py-2 ${
                activePage === 'home' ? 'text-blue-400' : ''
              }`}
            >
              Home
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            {/* Premium Services Mega Menu Anchor */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1 py-1 focus:outline-none ${
                  activePage === 'services' ? 'text-blue-400' : ''
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Spectacular mega-menu dropdown card */}
              {showMegaMenu && (
                <div
                  id="navbar-services-megamenu"
                  className="absolute left-1/2 -translate-x-[45%] top-full pt-4 w-[980px] z-50 pointer-events-auto"
                >
                  <div className="glass-card rounded-3xl p-6 shadow-2xl border border-white/10 grid grid-cols-12 gap-6 bg-[#0E1322]/98 backdrop-blur-2xl">
                    
                    {/* Column 1: Our Services Intro */}
                    <div className="col-span-3 border-r border-white/5 pr-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-blue-400 font-bold font-display text-sm uppercase tracking-wider mb-2.5">
                          <Cpu className="w-4 h-4" />
                          Our Services
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          We solve complex commercial development hurdles for growing brands worldwide. Explore our open resource hubs:
                        </p>
                      </div>
                      
                      {/* Free Utilities Display */}
                      <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-mono tracking-wider text-purple-400 uppercase font-bold block mb-1">
                          Free Custom Tools
                        </span>
                        {FREE_RESOURCES.map((resource, i) => (
                          <div
                            key={i}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group"
                            onClick={() => handlePageSelect('services')}
                          >
                            <span className="text-xs font-semibold text-white group-hover:text-blue-400 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-yellow-400" />
                              {resource.name}
                            </span>
                            <span className="text-[10px] text-gray-500 block truncate leading-relaxed">
                              {resource.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Specific Services */}
                    <div className="col-span-4 border-r border-white/5 pr-4">
                      <div className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase mb-3 flex items-center justify-between">
                        <span>Digital Capabilities</span>
                        <button
                          onClick={() => handlePageSelect('services')}
                          className="text-[10px] lowercase text-blue-400 hover:underline flex items-center"
                        >
                          all details <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <div className="space-y-1">
                        <div
                          onClick={() => handlePageSelect('services')}
                          className="group p-2.5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
                        >
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                            Website Development
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                            Corporate Websites, Landing pages, Dental Clinic, Real Estate listing portals.
                          </p>
                        </div>

                        <div
                          onClick={() => handlePageSelect('services')}
                          className="group p-2.5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
                        >
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                            E-commerce Stores
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                            Shopify, WooCommerce custom storefronts with rapid multi-currency routing.
                          </p>
                        </div>

                        <div
                          onClick={() => handlePageSelect('services')}
                          className="group p-2.5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
                        >
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                            Mobile Applications
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                            Fast cross-platform iOS & Android apps with deep device sync.
                          </p>
                        </div>
                        
                        <div
                          onClick={() => handlePageSelect('services')}
                          className="group p-2.5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
                        >
                          <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                            Advanced Automations & SEO
                          </h4>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                            Zapier workflows, schema structures, speed optimizations to achieve 95+.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: High Fidelity Free Education Portal */}
                    <div className="col-span-5 flex flex-col">
                      <div className="mb-3.5 flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-blue-400" />
                          Education For Free
                        </span>
                        
                        {/* Interactive Syllabus Buttons */}
                        <div className="flex gap-1.5">
                          {(['cbse', 'gseb', 'bcom', 'bba', 'bca'] as EducationTier[]).map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedEdTier(tier);
                              }}
                              className={`px-1.5 py-0.5 rounded text-[9px] font-mono tracking-tighter uppercase transition-all ${
                                selectedEdTier === tier
                                  ? 'bg-blue-600 text-white font-bold'
                                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dynamic Content Display column */}
                      <div className="flex-1 overflow-y-auto max-h-[290px] pr-1 space-y-3 scrollbar-thin">
                        <div className="p-1 px-2.5 bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-blue-500/10 rounded-xl mb-1 flex items-center justify-between">
                          <span className="text-[10px] text-gray-400">
                            Course Content syllabus for <strong className="text-blue-400 uppercase font-bold font-mono">{selectedEdTier}</strong>:
                          </span>
                          <span className="text-[9px] font-mono font-semibold text-purple-300">
                            100% Free
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {EDUCATION_SYLLABUS[selectedEdTier].map((entry, index) => (
                            <div key={index} className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all">
                              <h5 className="text-[11px] font-mono font-bold text-gray-100 flex items-center gap-1 border-b border-white/5 pb-1 mb-1">
                                <Book className="w-3 h-3 text-indigo-400" />
                                {entry.title}
                              </h5>
                              <ul className="space-y-0.5">
                                {entry.items.map((sub, key) => (
                                  <li key={key} className="text-[9px] text-gray-400 list-disc list-inside truncate">
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>



            <button
              onClick={() => handlePageSelect('about')}
              className={`hover:text-blue-400 transition-colors cursor-pointer relative py-2 ${
                activePage === 'about' ? 'text-blue-400' : ''
              }`}
            >
              About
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handlePageSelect('contact')}
              className={`hover:text-blue-400 transition-colors cursor-pointer relative py-2 ${
                activePage === 'contact' ? 'text-blue-400' : ''
              }`}
            >
              Contact Us
              {activePage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>

            <button
              onClick={() => handlePageSelect('privacy')}
              className={`hover:text-blue-400 transition-colors cursor-pointer relative py-2 ${
                activePage === 'privacy' ? 'text-blue-400' : ''
              }`}
            >
              Privacy Policy
              {activePage === 'privacy' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
              )}
            </button>
          </nav>

          {/* Tablet & Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-navigation-toggle"
              type="button"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5 animate-spin [animation-duration:0.5s]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Slider */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-80 bg-[#080B15] shadow-2xl border-l border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6 overflow-y-auto pr-1">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="font-display font-black text-sm tracking-wide text-white uppercase block">
              CODEMANAIC<span className="text-blue-500 font-extrabold ml-1">Studio</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 font-display font-bold text-sm text-gray-200">
            <button
              onClick={() => handlePageSelect('home')}
              className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left ${
                activePage === 'home' ? 'bg-blue-600/10 text-blue-400' : ''
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>

            <button
              onClick={() => handlePageSelect('services')}
              className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left ${
                activePage === 'services' ? 'bg-blue-600/10 text-blue-400' : ''
              }`}
            >
              <span className="flex items-center gap-1.5">
                Services <span className="text-[8px] bg-blue-500 text-white font-mono uppercase px-1 rounded">mega</span>
              </span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>

            <button
              onClick={() => handlePageSelect('about')}
              className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left ${
                activePage === 'about' ? 'bg-blue-600/10 text-blue-400' : ''
              }`}
            >
              <span>About Company</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>

            <button
              onClick={() => handlePageSelect('contact')}
              className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left ${
                activePage === 'contact' ? 'bg-blue-600/10 text-blue-400' : ''
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>

            <button
              onClick={() => handlePageSelect('privacy')}
              className={`flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer text-left ${
                activePage === 'privacy' ? 'bg-blue-600/10 text-blue-400' : ''
              }`}
            >
              <span>Privacy Policy</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </nav>
          
          {/* Quick Info Box inside Drawer */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2 mt-4">
            <span className="text-[10px] font-mono tracking-wider text-purple-400 uppercase font-semibold block">
              Direct Contact Details
            </span>
            <p className="text-xs text-gray-400 leading-snug">
              Connect immediately details for quotation & CBSE/GSEB free materials.
            </p>
            <div className="text-[11px] text-gray-300 font-mono space-y-1 pt-1">
              <div>Email: info@codemanaic.com</div>
              <div>Phone: +91 88668 51826</div>
            </div>
          </div>
        </div>

        <div className="space-y-3 pb-8">
          <p className="text-[10px] text-gray-600 font-mono text-center">
            Replies instantly on WhatsApp
          </p>
        </div>
      </div>
      
      {/* Background Dim Backdrop for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}
    </header>
  );
}
