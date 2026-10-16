"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        ring.classList.add("is-hovering");
        dot.classList.add("is-hovering");
      } else {
        ring.classList.remove("is-hovering");
        dot.classList.remove("is-hovering");
      }
    };

    const tick = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
