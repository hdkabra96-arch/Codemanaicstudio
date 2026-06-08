import { Shield, Sparkles, Phone, Mail } from 'lucide-react';
import { PageId } from '../types';
import { WHATSAPP_LINK_BASE } from '../data/servicesData';

interface PrivacyProps {
  onNavigate: (page: PageId) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div id="privacy-page-container" className="pt-24 pb-20">
      
      {/* 1. COVER HERO */}
      <section className="relative py-12 md:py-16 text-left overflow-hidden">
        <div className="gradient-mesh -top-20 right-0 bg-blue-600/15" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>GDPR / Compliant Documentation</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          
          <p className="text-xs font-mono text-gray-500">
            Last Updated: June 7, 2026 &middot; CodeManaic Studio India Division
          </p>
        </div>
      </section>

      {/* 2. POLICY SECTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
        
        {/* Intro */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            1. Introduction
          </h2>
          <p>
            Welcome to CodeManaic Studio ("we", "our", "us"). We represent a premier full-scale digital agency located in Surat, Gujarat, India. This Privacy Policy details how we record, isolate, and utilize information collected when you access our primary domain, customized subpages, and interactive service menus.
          </p>
          <p>
            By accessing our portals, you authorize the data routines described here. We promise absolute secure isolation and never lease or sell user credentials to advertising networks.
          </p>
        </div>

        {/* Information Collection */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            2. Information Collection
          </h2>
          <p>
            We collect different categories of data to provide you with fast, responsive project proposals:
          </p>
          <ul className="space-y-2 pl-4 list-disc list-outside">
            <li>
              <strong className="text-white">Active Personal Inputs:</strong> Full name, Email details, phone parameters, company identity, budget estimations, and custom files/messages submitted during the project quotation process.
            </li>
            <li>
              <strong className="text-white">Automated Device Parameters:</strong> Safe diagnostic data, client browsers types, approximate geo-country location, and local session duration parameters on different sections to optimize speed values.
            </li>
            <li>
              <strong className="text-white">API Call Payloads:</strong> Transient metadata passed securely through our server middleware to run summarizations or classified prompts.
            </li>
          </ul>
        </div>

        {/* Data Usage */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            3. Data Usage
          </h2>
          <p>
            We utilize collected data strictly for standard agency operational metrics:
          </p>
          <ul className="space-y-2 pl-4 list-disc list-outside">
            <li>Reviewing custom proposal requirements and drafting timely development blueprints.</li>
            <li>Routing incoming inquiries directly to Ketan Kabra and Tanya Sengupta via secure WhatsApp dispatcher loops.</li>
            <li>Optimizing our technical server responsiveness to maintain a sub-second load score.</li>
            <li>Providing 100% free downloadable CBSE/GSEB/BCOM/BCA course files without authentication blocks.</li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            4. Cookies File Configurations
          </h2>
          <p>
            We deploy secure local browser indicators ("cookies") to capture your viewing parameters (such as the selected syllabus tabs in the Mega Menu or active sections toggles). These files are strictly non-tracking, expire automatically, and can be deleted cleanly inside your browser preferences at any moment.
          </p>
        </div>

        {/* Third Party Services */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            5. Third Party Services
          </h2>
          <p>
            Our portals interact with well-known web networks to offer premium layout functions:
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li>
              <strong className="text-white">Google Maps Geolocation Platform:</strong> Visualizes our Surat headquarters precisely without tracking your personal coordinates.
            </li>
            <li>
              <strong className="text-white">WhatsApp Secure Relays:</strong> Dispatches prefilled form details with SSL encryption parameters directly into client chat prompts. We are not liable for details once routed onto the WhatsApp application.
            </li>
            <li>
              <strong className="text-white">Gemini Secure API Controllers:</strong> Complex text inputs can be proxy classified safely inside secure servers. Key credentials never leak to client browsers.
            </li>
          </ul>
        </div>

        {/* Data Protection */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            6. Data Protection
          </h2>
          <p>
            All connection layers between your browser and our Surat headquarters utilize secure SSL/TLS. Quoting data is isolated inside firewalled local stores. While no virtual framework can assure 100% immunity, we deploy industry-standard safeguards to prevent unapproved exposure.
          </p>
        </div>

        {/* User Rights */}
        <div className="space-y-3.5">
          <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/5">
            7. User Rights
          </h2>
          <p>
            Under general digital protections, visitors retain basic powers:
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li>Right to access or update any submitted info profile records.</li>
            <li>Right to demand total deletion of historic proposal tickets file folders in our offices.</li>
            <li>Right to restrict statistical automated diagnostics.</li>
          </ul>
          <p>
            To exercise these rights, connect with our compliance desk at <a href="mailto:info@codemanaic.com" className="text-blue-400 font-bold hover:underline">info@codemanaic.com</a>.
          </p>
        </div>

        {/* Contact Information */}
        <div className="p-6 rounded-3xl bg-[#090C15] border border-white/5 space-y-4">
          <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
            8. Documentation Contacts
          </h3>
          <p className="text-xs text-gray-400">
            Send policy requests directly to our compliance desk:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>info@codemanaic.com</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>+91 88668 51826</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
