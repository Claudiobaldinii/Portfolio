"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const STEP = 1700;

/**
 * Phone-framed "mini video" built from real screenshots: frames cross-fade with a
 * slow drift, and story-style segments show the progress. Static under reduced motion.
 */
export function FramePlayer({ frames, alt }: { frames: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setStill(true), 0);
      return () => window.clearTimeout(id);
    }
    const id = window.setInterval(() => setIndex((i) => (i + 1) % frames.length), STEP);
    return () => window.clearInterval(id);
  }, [frames.length]);

  return (
    <div className={`player${still ? " is-still" : ""}`} role="img" aria-label={alt}>
      <div className="player-bars" aria-hidden="true">
        {frames.map((src, i) => (
          <span key={src} className={i < index ? "is-done" : i === index ? "is-now" : undefined}>
            <i key={i === index ? `run-${index}` : "idle"} />
          </span>
        ))}
      </div>
      <div className="player-screen">
        {frames.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={`${basePath}${src}`}
            alt=""
            width={500}
            height={950}
            className={i === index ? "is-on" : undefined}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
