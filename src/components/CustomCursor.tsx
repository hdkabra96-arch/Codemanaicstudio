import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailing, setTrailing] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device is a touch screen (coarse pointer)
    const mobileCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsMobile(mobileCheck);
    if (mobileCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Attach event listeners to track hovering over interactive nodes
    const updateHoverState = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .hover-trigger');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Set up modern MutationObserver to watch for dynamically rendered buttons
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });
    updateHoverState();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobile || hidden) return;
    
    // Smooth frame-based trailing interpolation
    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailing((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease with 0.15 factor
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Outer Ring style */}
      <div
        id="cursor-outer"
        className={`fixed pointer-events-none rounded-full border border-blue-600 z-50 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 bg-transparent ${
          isHovered ? 'w-12 h-12 border-purple-600 bg-purple-600/10' : 'w-7 h-7'
        }`}
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
        }}
      />
      {/* Dynamic Inner Dot style */}
      <div
        id="cursor-dot"
        className={`fixed pointer-events-none rounded-full bg-blue-400 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ${
          isHovered ? 'scale-0' : 'w-1.5 h-1.5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
