"use client";

import { PointerEvent as ReactPointerEvent, useRef, useState } from "react";
import { timeline } from "@/lib/content";

type Labels = { title: string; work: string; study: string; present: string };

const LABEL_W = 148;
const PLOT_W = 344;
const ROW_H = 24;
const BAR_H = 10;
const GROUP_GAP = 40;
const TOP = 30;

type Hover = { sx: number; year: number; row: string | null };

/**
 * Gantt of real role and study dates; the current role runs to today.
 * Hover scrubs a year line across the plot, names the row under the pointer,
 * replays the bars' draw-in and runs a loading sheen while the pointer stays.
 */
export function CareerChart({ labels, now, locale }: { labels: Labels; now: number; locale: string }) {
  const { from, to, work, study } = timeline;
  const x = (year: number) => LABEL_W + ((year - from) / (to - from)) * PLOT_W;
  const years = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<Hover | null>(null);
  const [play, setPlay] = useState(0);

  const workTop = TOP + 30;
  const studyTop = workTop + work.length * ROW_H + GROUP_GAP;
  const height = studyTop + study.length * ROW_H + 8;
  const width = LABEL_W + PLOT_W + 8;

  const rows = [
    ...work.map((item, i) => ({ ...item, y: workTop + i * ROW_H, kind: "work" as const, i })),
    ...study.map((item, i) => ({ ...item, y: studyTop + i * ROW_H, kind: "study" as const, i: i + work.length })),
  ];

  const month = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" });
  /* Starts are stored as the month's beginning, ends as the following month's. */
  const fmt = (value: number, isEnd = false) => {
    const year = isEnd ? value - 1 / 12 : value;
    const y = Math.floor(year + 1e-6);
    const m = Math.min(11, Math.floor((year - y) * 12 + 1e-6));
    return month.format(new Date(y, m, 1)).replace(".", "");
  };

  function onMove(event: ReactPointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return;
    const pt = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse());
    const sx = Math.max(LABEL_W, Math.min(LABEL_W + PLOT_W, pt.x));
    const year = from + ((sx - LABEL_W) / PLOT_W) * (to - from);
    const hit = rows.find((r) => pt.y >= r.y - 7 && pt.y <= r.y + BAR_H + 7);
    setHover({ sx, year, row: hit ? `${hit.kind}-${hit.label}` : null });
  }

  const hovered = hover?.row ? rows.find((r) => `${r.kind}-${r.label}` === hover.row) : undefined;
  const readout = hovered
    ? "yearsOnly" in hovered
      ? `${hovered.label} · ${Math.floor(hovered.start)} — ${Math.floor(hovered.end ?? now)}`
      : `${hovered.label} · ${fmt(hovered.start)} — ${hovered.end === null ? labels.present : fmt(hovered.end, true)}`
    : hover
      ? fmt(hover.year)
      : null;

  return (
    <figure className={`chart${hover ? " is-hover" : ""}`}>
      <figcaption className="chart-head">
        <span>{labels.title}</span>
        {readout ? (
          <span className="chart-readout" aria-live="polite">
            {readout}
          </span>
        ) : (
          <span className="chart-legend">
            <i className="swatch swatch-work" aria-hidden="true" />
            {labels.work}
            <i className="swatch swatch-study" aria-hidden="true" />
            {labels.study}
          </span>
        )}
      </figcaption>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={rows.map((r) => r.label).join(", ")}
        onPointerEnter={() => setPlay((n) => n + 1)}
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="chart-sheen" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="70" y2="0">
            <stop offset="0" style={{ stopColor: "var(--ink)" }} stopOpacity="0" />
            <stop offset="0.5" style={{ stopColor: "var(--ink)" }} stopOpacity="0.55" />
            <stop offset="1" style={{ stopColor: "var(--ink)" }} stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from={`${LABEL_W - 80} 0`}
              to={`${LABEL_W + PLOT_W + 10} 0`}
              dur="2.6s"
              repeatCount="indefinite"
            />
          </linearGradient>
          {/* Filled bars are light, so their sweep is a signal-blue band instead of a white one. */}
          <linearGradient id="chart-sheen-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="70" y2="0">
            <stop offset="0" style={{ stopColor: "var(--signal)" }} stopOpacity="0" />
            <stop offset="0.5" style={{ stopColor: "var(--signal)" }} stopOpacity="0.95" />
            <stop offset="1" style={{ stopColor: "var(--signal)" }} stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from={`${LABEL_W - 80} 0`}
              to={`${LABEL_W + PLOT_W + 10} 0`}
              dur="2.6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {years.map((year) => (
          <g key={year}>
            <line className="chart-grid" x1={x(year)} x2={x(year)} y1={TOP - 6} y2={height - 4} />
            {year % 2 === 1 ? (
              <text className="chart-year" x={x(year)} y={TOP - 12} textAnchor="middle">
                {String(year).slice(2)}
              </text>
            ) : null}
          </g>
        ))}

        <text className="chart-group" x={0} y={workTop - 10}>
          {labels.work}
        </text>
        <text className="chart-group" x={0} y={studyTop - 10}>
          {labels.study}
        </text>

        {rows.map((row) => {
          const end = row.end ?? now;
          const live = row.end === null;
          const key = `${row.kind}-${row.label}`;
          const barW = Math.max(x(end) - x(row.start), 3);
          const active = hover?.row === key;
          return (
            <g
              key={key}
              className={`chart-row is-${row.kind}${live ? " is-live" : ""}${active ? " is-active" : ""}${
                hover?.row && !active ? " is-muted" : ""
              }`}
            >
              <text className="chart-label" x={0} y={row.y + BAR_H - 1}>
                {row.label}
              </text>
              <rect
                key={play}
                className="chart-bar"
                x={x(row.start)}
                y={row.y}
                width={barW}
                height={BAR_H}
                style={{ animationDelay: `${play ? row.i * 45 : 180 + row.i * 70}ms` }}
              />
              <rect className="chart-sheen" x={x(row.start)} y={row.y} width={barW} height={BAR_H} fill={row.kind === "work" ? "url(#chart-sheen-fill)" : "url(#chart-sheen)"} />
            </g>
          );
        })}

        <line className="chart-now" x1={x(now)} x2={x(now)} y1={TOP - 6} y2={height - 4} />
        <text className="chart-now-label" x={x(now) + 4} y={height - 6}>
          {labels.present}
        </text>

        {hover ? (
          <g className="chart-scrub" aria-hidden="true">
            <line x1={hover.sx} x2={hover.sx} y1={TOP - 6} y2={height - 4} />
            <rect x={hover.sx - 22} y={TOP - 24} width={44} height={16} />
            <text x={hover.sx} y={TOP - 12} textAnchor="middle">
              {Math.floor(hover.year)}
            </text>
          </g>
        ) : null}
      </svg>
    </figure>
  );
}
