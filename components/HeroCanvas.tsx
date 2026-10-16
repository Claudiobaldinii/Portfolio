"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseOpacity: number;
  pulse: number;
  pulseSpeed: number;
  label: string | null;
  labelPhase: number;
};

const labels = ["SQL", "KPI", "DAX", "P&L", "%", "ROI", "EDA", "FCF", "BI", "IA"];

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const hero = canvas?.closest("section");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !hero) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let nodes: Node[] = [];

    const makeNode = (): Node => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.7 + 0.9,
      baseOpacity: Math.random() * 0.22 + 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.007 + Math.random() * 0.011,
      label: Math.random() < 0.24 ? labels[Math.floor(Math.random() * labels.length)] : null,
      labelPhase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      nodes = nodes.length
        ? nodes.map((node) => ({
            ...node,
            x: Math.max(0, Math.min(node.x, width)),
            y: Math.max(0, Math.min(node.y, height)),
          }))
        : Array.from({ length: 58 }, makeNode);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < -24) node.x = width + 24;
        if (node.x > width + 24) node.x = -24;
        if (node.y < -24) node.y = height + 24;
        if (node.y > height + 24) node.y = -24;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(46, 196, 182, ${((1 - distance / 150) * 0.12).toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const wave = Math.sin(node.pulse);
        const radius = node.r + wave * 0.45;
        const opacity = node.baseOpacity + wave * 0.07;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 196, 182, ${opacity.toFixed(3)})`;
        ctx.fill();

        if (node.label) {
          const labelOpacity =
            node.baseOpacity * 0.95 * (0.5 + 0.5 * Math.sin(node.pulse * 0.42 + node.labelPhase));
          ctx.font = "9px Inter, sans-serif";
          ctx.fillStyle = `rgba(143, 188, 255, ${labelOpacity.toFixed(3)})`;
          ctx.fillText(node.label, node.x + radius + 4, node.y + 4);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !raf) raf = requestAnimationFrame(draw);
      if (!entry.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });

    resize();
    observer.observe(hero);
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
