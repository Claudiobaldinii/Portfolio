"use client";

import { ArrowUpRight, X } from "lucide-react";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { FramePlayer } from "@/components/FramePlayer";
import type { Preview } from "@/lib/previews";

export type InspectorAnchor = { x: number; y: number };

type Props = {
  preview: Preview;
  anchor: InspectorAnchor;
  pinned: boolean;
  sheet: boolean;
  text: { close: string; escape: string; soon: string; diploma: string };
  onClose: () => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onDiploma: () => void;
};

const GAP = 20;
const MARGIN = 12;

/** Floating "artifact" card that summarises a row before sending the visitor out. */
export const Inspector = forwardRef<HTMLDivElement, Props>(function Inspector(
  { preview, anchor, pinned, sheet, text, onClose, onPointerEnter, onPointerLeave, onDiploma },
  forwardedRef
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [place, setPlace] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el || sheet) return;
    const { width, height } = el.getBoundingClientRect();
    const top0 = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar-h")) || 100;
    let left = anchor.x + GAP;
    if (left + width > window.innerWidth - MARGIN) left = anchor.x - GAP - width;
    left = Math.max(MARGIN, left);
    let top = anchor.y - 28;
    top = Math.min(top, window.innerHeight - height - MARGIN);
    top = Math.max(top0 + MARGIN, top);
    setPlace({ left, top });
  }, [anchor.x, anchor.y, preview, sheet]);

  return (
    <div
      ref={(node) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={`inspector${sheet ? " is-sheet" : ""}${pinned ? " is-pinned" : ""}${preview.media ? " has-media" : ""}`}
      role="dialog"
      aria-modal={sheet ? true : undefined}
      aria-labelledby="inspector-title"
      tabIndex={-1}
      style={sheet ? undefined : { left: place?.left ?? -9999, top: place?.top ?? -9999 }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      key={preview.code}
    >
      <div className="inspector-scan" aria-hidden="true" />
      <header className="inspector-head">
        <span className="inspector-code">{preview.code}</span>
        <span className="inspector-kind">{preview.kind}</span>
        <button className="inspector-close" type="button" onClick={onClose} aria-label={text.close}>
          <X size={16} aria-hidden="true" />
        </button>
      </header>

      <div className="inspector-main">
        {preview.media ? (
          <div className="inspector-media inspector-line" style={{ ["--d" as string]: 0 }}>
            <FramePlayer frames={preview.media.frames} alt={preview.media.alt} />
          </div>
        ) : null}
        <div className="inspector-content">
          <div className="inspector-body">
            <h3 id="inspector-title" className="inspector-line" style={{ ["--d" as string]: 0 }}>
              {preview.title}
            </h3>
            <p className="inspector-summary inspector-line" style={{ ["--d" as string]: 1 }}>
              {preview.summary}
            </p>
            <dl className="inspector-facts">
              {preview.facts.map((fact, i) => (
                <div className="inspector-line" style={{ ["--d" as string]: i + 2 }} key={fact.k}>
                  <dt>{fact.k}</dt>
                  <dd>{fact.v}</dd>
                </div>
              ))}
            </dl>
          </div>
    
          <footer className="inspector-actions inspector-line" style={{ ["--d" as string]: preview.facts.length + 2 }}>
            {preview.action ? (
              <a className="key key-primary" href={preview.action.href} target="_blank" rel="noreferrer">
                {preview.action.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <span className="inspector-soon">{text.soon}</span>
            )}
            {preview.diploma ? (
              <button className="key key-ghost" type="button" onClick={onDiploma}>
                {text.diploma}
              </button>
            ) : null}
            {preview.secondary ? (
              <a className="key key-ghost" href={preview.secondary.href} target="_blank" rel="noreferrer">
                {preview.secondary.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
            {!sheet ? <span className="inspector-esc">{text.escape}</span> : null}
          </footer>
        </div>
      </div>
    </div>
  );
});
