import { useEffect, useRef } from 'react';

// Custom cursor: a small accent dot + a trailing ring that grows over interactive elements.
// Uses event delegation so it works across route changes without re-binding.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0, mx = 0, my = 0, raf;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    };

    const HOT = 'a,button,input,textarea,select,.lnk,[data-hover]';
    const isHot = (t) => t && t.closest && t.closest(HOT);
    const over = (e) => { if (isHot(e.target)) ring.classList.add('hot'); };
    const out = (e) => { if (isHot(e.target)) ring.classList.remove('hot'); };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    loop();

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={dotRef} aria-hidden="true" />
      <div id="curRing" ref={ringRef} aria-hidden="true" />
    </>
  );
}
