# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers screening candidates for Finance / Accounting / Data Analyst roles in Spain (Madrid, on-site, hybrid or remote). They arrive from LinkedIn or a CV link, usually on a laptop, and spend under a minute deciding whether to reach out.

## Product Purpose

Personal portfolio of Claudio Baldini. Its job is to get him hired: show, fast and verifiably, a finance professional (SAP FI-AA, asset accounting, monthly close, treasury) who also builds data and automation work (SQL, Python, Power BI, Excel/VBA, applied AI). Success = the visitor contacts him (email, phone, LinkedIn) or opens his GitHub projects.

## Positioning

Not a generic data-analyst portfolio: real accounting operations experience (GASIB/Cepsa fixed assets, real-estate fund Capex/Opex, 120 bank accounts in treasury) combined with data tooling aimed at the repetitive monthly work — closes, reconciliations, reports.

## Operating Context

Static site (Next.js `output: "export"`) deployed to GitHub Pages at https://claudiobaldinii.github.io/Portfolio/ via `.github/workflows/deploy.yml` (basePath `/Portfolio` in production). Bilingual ES/EN toggle; Spanish is the default. Contact form only prepares a `mailto:`; there is no backend.

## Capabilities and Constraints

- Content lives in `lib/content.ts` (ES and EN), mirrored from his LinkedIn profile (last synced 2026-10-16).
- No CV/PDF file exists in the repo yet; do not link one until provided.
- English: show as B1 (user, 2026-10-16; LinkedIn says limited working proficiency). No longer studying at 16 School. Spanish native.
- In progress at thePower (user, 2026-10-16): generative-AI specialisation for automating/improving processes, and Data Visualization (Power BI) aimed at Microsoft PL-300. He is no longer doing the AI Developer track.

## Brand Commitments

- Visual direction chosen by the user (2026-10-16): "Terminal de datos" — dark, monospace, dashboard/table-driven.
- Name: Claudio Baldini. Headline from LinkedIn: "Gestor de activos y contable en Cepsa | SAP FI-AA | Automatización y análisis de datos con SQL, Power BI y Python".

## Evidence on Hand

- Master diploma image: `public/diploma-master.png`; credential verification URL https://verified.sertifier.com/en/verify/35524001443935/.
- GitHub projects: Analisis_salarios, Proyecto_Final (links in content). PDF invoice extractor is in development (no link).
- No testimonials, client logos or quantified business outcomes exist beyond those on LinkedIn (e.g. 120 bank accounts, FP grade 9,17). Do not invent any.

## Product Principles

1. Recruiter-first: role, current employer, stack and contact visible in the first viewport.
2. Every claim traceable to LinkedIn or a linked artifact.
3. Finance credibility leads; data/AI skills support it.
4. Bilingual parity: every string exists in ES and EN.
