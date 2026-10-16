"use client";

import { useEffect, useRef } from "react";

type Mote = { x: number; y: number; born: number; life: number; drift: number; text: string; strong: boolean };

const TOKENS = ["SQL", "DAX", "PEP", "FI-AA", "KPI", "ETL", "Σ", "Δ", "€", "%", "120"];
const DIGITS = "0123456789";

/**
 * Sparse background field of the same data glyphs the cursor leaves behind:
 * a few at a time, small and faint, each fading in, rising a little and out.
 * Runs at ~30fps, pauses with the tab, and is off under reduced motion.
 */
export function AmbientData() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const styles = getComputedStyle(document.documentElement);
    const signal = styles.getPropertyValue("--signal").trim() || "#7aa2ff";
    const font = styles.getPropertyValue("--font-mono").trim();

    let width = 0;
    let height = 0;
    let cap = 18;
    let raf = 0;
    let last = 0;
    let nextSpawn = 0;
    const motes: Mote[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      cap = width < 720 ? 8 : 18;
    };

    const spawn = (now: number) => {
      const strong = Math.random() < 0.3;
      motes.push({
        x: 16 + Math.random() * (width - 32),
        y: 120 + Math.random() * (height - 140),
        born: now,
        life: 5000 + Math.random() * 4000,
        drift: 18 + Math.random() * 26,
        text: strong ? TOKENS[Math.floor(Math.random() * TOKENS.length)] : DIGITS[Math.floor(Math.random() * 10)],
        strong,
      });
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < 33) return;
      last = now;

      if (now > nextSpawn && motes.length < cap) {
        spawn(now);
        nextSpawn = now + 350 + Math.random() * 500;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = signal;
      ctx.textBaseline = "middle";
      for (let i = motes.length - 1; i >= 0; i -= 1) {
        const m = motes[i];
        const t = (now - m.born) / m.life;
        if (t >= 1) {
          motes.splice(i, 1);
          continue;
        }
        const fade = t < 0.2 ? t / 0.2 : t > 0.7 ? (1 - t) / 0.3 : 1;
        ctx.globalAlpha = fade * (m.strong ? 0.32 : 0.2);
        ctx.font = `${m.strong ? 600 : 400} ${m.strong ? 10 : 11}px ${font}, monospace`;
        ctx.fillText(m.text, m.x, m.y - t * m.drift);
      }
      ctx.globalAlpha = 1;
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-layer" aria-hidden="true" />;
}
