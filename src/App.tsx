import { useState, useEffect } from 'react';
import { PageId } from './types';

// Global Layout Components
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Software from './pages/Software';
import Book from './pages/Book';
import TechCourses from './pages/TechCourses';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Multi-page routing simulator scrolling helper
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    // Scroll to top immediately on mount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div
      id="root-app-layout"
      className="bg-[#FAF6EE] text-[#1A1D24] min-h-screen flex flex-col font-sans select-none overflow-x-hidden relative selection:bg-blue-500/10 selection:text-[#1A1D24]"
    >
      {/* 1. Global sensory components */}
      <ScrollProgress />
      <CustomCursor />
      <PageLoader />

      {/* 2. Glassmorphic Header */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* 3. Render Simulated View Pages with dynamic fade indicators */}
      <main className="flex-grow">
        {activePage === 'home' && <Home onNavigate={handleNavigate} />}
        {activePage === 'about' && <About onNavigate={handleNavigate} />}
        {activePage === 'services' && <Services onNavigate={handleNavigate} />}
        {activePage === 'contact' && <Contact onNavigate={handleNavigate} />}
        {activePage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
        {activePage === 'software' && <Software onNavigate={handleNavigate} />}
        {activePage === 'book' && <Book onNavigate={handleNavigate} />}
        {activePage === 'tech-courses' && <TechCourses onNavigate={handleNavigate} />}
      </main>

      {/* 4. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. Persistent Interactive Floating Widgets */}
      <FloatingWhatsApp />
      <MobileStickyBar activePage={activePage} onNavigate={handleNavigate} />
    </div>
  );
}
