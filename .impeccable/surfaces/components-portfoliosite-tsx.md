---
version: 1
slug: "components-portfoliosite-tsx"
primary_target: "components/PortfolioSite.tsx"
related_targets: ["app/globals.css","lib/content.ts"]
---

# Surface: portfolio home (single page)

Mode: Persuade (recruiter decides to contact). Audience/job: recruiters screening Finance & Data Analyst candidates; action = contact (email/phone/LinkedIn) or open GitHub projects. Proof: LinkedIn-sourced roles, dates, bullets; diploma + credential link; GitHub repos. Constraints: static export, basePath /Portfolio, ES/EN parity, no CV file yet.

## Direction contract

THESIS: The portfolio is a financial data terminal session on one person: a description screen, ledgers and function keys instead of the category's hero-plus-card-grid template with a particle network.

OWN-WORLD: (revised 2026-10-16 at the user's request: more minimalist, still dark) Neutral near-black screen (#09090b), off-white data and keys (#ececef on black), one cool signal blue (#7aa2ff) reserved for the name accent, cursor, data trail, active indicators and preview cards; green only for live/open status; 1px neutral rules, panel header strips. Martian Mono for data and prose, Archivo condensed (wdth 62, 800) uppercase for the name and panel titles. No rounded cards, no glow, no gradients beyond the row hover wash.

STORY: Visitor sees who, current employer, stack and open-to-work in one screen; scans a dated career ledger and a stack matrix tied to where each skill is used; contacts from any screen.

FIRST VIEWPORT: Top bar (identity, command line "EXP <GO>", Madrid clock, ES/EN). Off-white function-key row. Left 7/12: huge condensed name, LinkedIn headline, description-table rows (location, modality, current role, languages), primary "CONTACTAR" key + LinkedIn. Right 5/12: career Gantt 2017–2027 from real dates (work and study lanes, labelled by employer; Gantt instead of a step chart because roles and studies overlap). Under 720px the command line is replaced by the 1–6 function-key tabs (touch).

FORM: user-pinned "Terminal de datos" (chosen over editorial and Swiss options); position 1 of 1. seed:b2b5da9a598cd262 (roll run; user-pinned direction overrides the assignment)
Signature interaction: type a function mnemonic (PER, EXP, PRJ, STK, EDU, CON) or press 1–6 to jump; the target panel header flashes. Hovering any project, education, certification or LinkedIn/GitHub row opens an inspector card (summary, facts, then the outbound link); click pins it, Esc closes; on touch it is a bottom sheet. Crosshair cursor leaves a fading trail of figures and terms from the profile. Motion: titles decode from random glyphs on reveal, rows rise in staggered, career bars draw in, ledger rows expand with a grid-rows transition, numbers count up.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
