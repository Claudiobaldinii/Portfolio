"use client";

import { useEffect, useRef } from "react";

type Glyph = { x: number; y: number; vx: number; vy: number; born: number; text: string; strong: boolean };

/** Figures and terms from the profile itself; digits fill the gaps. */
const TOKENS = ["SQL", "DAX", "PEP", "FI-AA", "120", "9,17", "Σ", "Δ", "€", "%", "KPI", "ETL"];
const DIGITS = "0123456789";
const LIFE = 950;
const SPACING = 16;
const MAX = 70;

/**
 * Crosshair cursor with a trail of fading data glyphs.
 * Only on fine pointers without reduced motion; touch keeps the native behaviour.
 */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");
    const styles = getComputedStyle(root);
    const signal = styles.getPropertyValue("--signal").trim() || "#7aa2ff";
    const dim = styles.getPropertyValue("--dim").trim() || "#85858f";
    const ink = styles.getPropertyValue("--ink").trim() || "#fafafa";
    const font = styles.getPropertyValue("--font-mono").trim();

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = false;
    let hiddenForText = false;
    let mode: "idle" | "link" | "preview" = "idle";
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let size = 10;
    let lastSpawn = { x: 0, y: 0 };
    const glyphs: Glyph[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const spawn = (x: number, y: number, now: number) => {
      const strong = Math.random() < 0.28;
      glyphs.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.25 - Math.random() * 0.35,
        born: now,
        text: strong ? TOKENS[Math.floor(Math.random() * TOKENS.length)] : DIGITS[Math.floor(Math.random() * 10)],
        strong,
      });
      if (glyphs.length > MAX) glyphs.shift();
    };

    const drawCursor = () => {
      if (!visible || hiddenForText) return;
      const goal = mode === "idle" ? 10 : 26;
      size += (goal - size) * 0.25;
      const x = Math.round(pos.x) + 0.5;
      const y = Math.round(pos.y) + 0.5;
      const half = size / 2;
      ctx.strokeStyle = mode === "idle" ? ink : signal;
      ctx.lineWidth = 1;

      if (mode === "idle") {
        const gap = 3;
        const arm = 7;
        ctx.beginPath();
        ctx.moveTo(x - gap - arm, y);
        ctx.lineTo(x - gap, y);
        ctx.moveTo(x + gap, y);
        ctx.lineTo(x + gap + arm, y);
        ctx.moveTo(x, y - gap - arm);
        ctx.lineTo(x, y - gap);
        ctx.moveTo(x, y + gap);
        ctx.lineTo(x, y + gap + arm);
        ctx.stroke();
        ctx.fillStyle = ink;
        ctx.fillRect(x - 1, y - 1, 2, 2);
      } else {
        const c = 6;
        ctx.beginPath();
        // four corner brackets
        ctx.moveTo(x - half, y - half + c);
        ctx.lineTo(x - half, y - half);
        ctx.lineTo(x - half + c, y - half);
        ctx.moveTo(x + half - c, y - half);
        ctx.lineTo(x + half, y - half);
        ctx.lineTo(x + half, y - half + c);
        ctx.moveTo(x + half, y + half - c);
        ctx.lineTo(x + half, y + half);
        ctx.lineTo(x + half - c, y + half);
        ctx.moveTo(x - half + c, y + half);
        ctx.lineTo(x - half, y + half);
        ctx.lineTo(x - half, y + half - c);
        ctx.stroke();
        ctx.fillStyle = signal;
        ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
        if (mode === "preview") {
          ctx.font = `600 10px ${font}, monospace`;
          ctx.fillText("INFO", x + half + 6, y + half);
        }
      }
    };

    const frame = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      pos.x += (target.x - pos.x) * 0.35;
      pos.y += (target.y - pos.y) * 0.35;

      ctx.textBaseline = "middle";
      for (let i = glyphs.length - 1; i >= 0; i -= 1) {
        const g = glyphs[i];
        const age = (now - g.born) / LIFE;
        if (age >= 1) {
          glyphs.splice(i, 1);
          continue;
        }
        g.x += g.vx;
        g.y += g.vy;
        const alpha = (1 - age) * (g.strong ? 0.95 : 0.6);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g.strong ? signal : dim;
        ctx.font = `${g.strong ? 600 : 400} ${g.strong ? 10 : 11}px ${font}, monospace`;
        ctx.fillText(g.text, g.x, g.y);
      }
      ctx.globalAlpha = 1;
      drawCursor();

      const settled = Math.abs(target.x - pos.x) < 0.3 && Math.abs(target.y - pos.y) < 0.3;
      if (glyphs.length === 0 && settled && Math.abs(size - (mode === "idle" ? 10 : 26)) < 0.3) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (!visible) {
        pos.x = event.clientX;
        pos.y = event.clientY;
        lastSpawn = { x: event.clientX, y: event.clientY };
      }
      visible = true;
      target.x = event.clientX;
      target.y = event.clientY;

      const el = event.target as Element | null;
      hiddenForText = Boolean(el?.closest("input, textarea, [contenteditable]"));
      mode = el?.closest("[data-preview]") ? "preview" : el?.closest("a, button, [role='button'], label") ? "link" : "idle";

      const dx = event.clientX - lastSpawn.x;
      const dy = event.clientY - lastSpawn.y;
      if (!hiddenForText && dx * dx + dy * dy > SPACING * SPACING) {
        spawn(event.clientX, event.clientY, performance.now());
        lastSpawn = { x: event.clientX, y: event.clientY };
      }
      wake();
    };

    const onLeave = () => {
      visible = false;
      wake();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-layer" aria-hidden="true" />;
}
