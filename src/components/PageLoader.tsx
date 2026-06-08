import { useEffect, useState } from 'react';
import { Sparkles, Cpu } from 'lucide-react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    const renderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      id="page-initial-loader"
      className={`fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Ambient Sphere */}
        <div className="absolute w-44 h-44 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-40 animate-pulse" />
        
        {/* Custom Icon Cluster */}
        <div className="relative mb-6 p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-center">
          <Cpu className="w-12 h-12 text-blue-500 animate-spin [animation-duration:8s]" />
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-purple-400 animate-bounce" />
        </div>

        {/* Brand Text */}
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-2">
          CODEMANAIC<span className="text-blue-500 font-extrabold uppercase ml-1">Studio</span>
        </h1>
        
        {/* Custom Progress Bar */}
        <div className="w-36 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 w-full -translate-x-full animate-[loading_1s_ease-in-out_infinite]" />
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-4 font-mono">
          experiences that drive growth
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
