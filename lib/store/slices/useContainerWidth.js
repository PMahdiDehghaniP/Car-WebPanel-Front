// ---------- File: app/(dashboard)/garage/hooks/useContainerWidth.js ----------
import { useEffect, useRef, useState } from 'react';

export default function useContainerWidth() {
  const ref = useRef(null);
  const [currentWidth, setCurrentWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const measure = () => {
      const w = Math.min(el?.clientWidth || window.innerWidth || 1200, 1920);
      setCurrentWidth(w);
      setIsMobile(window.matchMedia('(max-width:900px)').matches);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el) ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return { ref, currentWidth, isMobile };
}

