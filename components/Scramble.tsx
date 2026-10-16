"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%€#$Σ";
const DURATION = 720;

/**
 * Text that "decodes" from random glyphs the first time it enters the viewport
 * (and again when the language changes). The real text is always in the DOM for
 * assistive tech and for no-JS rendering.
 */
export function Scramble({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setDisplay(text), 0);
      return () => window.clearTimeout(id);
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timeout = 0;
    const run = () => {
      const start = performance.now() + delay;
      const tick = (now: number) => {
        const t = Math.max(0, (now - start) / DURATION);
        const out = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const revealAt = (i / text.length) * 0.75;
            return t >= revealAt + 0.25 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setDisplay(out);
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(text);
      };
      raf = requestAnimationFrame(tick);
    };

    if (seen.current) {
      timeout = window.setTimeout(run, 0);
      return () => {
        window.clearTimeout(timeout);
        cancelAnimationFrame(raf);
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        seen.current = true;
        io.disconnect();
        run();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return (
    <span ref={ref} className="scramble">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
