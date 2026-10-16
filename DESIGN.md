---
name: Claudio Baldini Portfolio
description: A financial data terminal session on one person — description screen, ledgers, function keys and an inspector.
colors:
  screen: "#09090b"
  screen-raise: "#111114"
  screen-hover: "#18181c"
  rule: "#222227"
  rule-strong: "#34343b"
  accent: "#ececef"
  soft: "#b6b6be"
  dim: "#85858f"
  ink: "#fafafa"
  body: "#c9c9d0"
  signal-blue: "#7aa2ff"
  signal-wash: "rgba(122, 162, 255, 0.14)"
  live-green: "#5ad48a"
  alert-red: "#ff7a6b"
  key-ink: "#09090b"
  scrim-sheet: "rgba(0, 0, 0, 0.6)"
  scrim-lightbox: "rgba(0, 0, 0, 0.9)"
typography:
  display:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "clamp(28px, 3.6vw, 44px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 62"
  ticker:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "20px"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 62"
  lead:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "clamp(16px, 1.6vw, 20px)"
    fontWeight: 600
    lineHeight: 1.4
    fontVariation: "'wdth' 87.5"
  intro:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    fontVariation: "'wdth' 87.5"
  title:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.35
    fontVariation: "'wdth' 87.5"
  body:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 87.5"
  prose:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.85
    fontVariation: "'wdth' 87.5"
  meta:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 87.5"
  label:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 87.5"
  micro:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 87.5"
  key:
    fontFamily: "'Martian Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "56px"
  4xl: "64px"
  panel: "72px"
components:
  key-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.key-ink}"
    typography: "{typography.key}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  key-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.key-ink}"
  key-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.key}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  key-ghost-hover:
    backgroundColor: "{colors.screen-hover}"
    textColor: "{colors.accent}"
  function-key:
    backgroundColor: "{colors.screen-raise}"
    textColor: "{colors.soft}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "48px"
  function-key-hover:
    backgroundColor: "{colors.screen-hover}"
  function-key-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.key-ink}"
  function-key-indicator:
    backgroundColor: "{colors.signal-blue}"
    height: "2px"
  panel-code:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.key-ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
    padding: "3px 8px"
  command-line:
    backgroundColor: "{colors.screen-raise}"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  input-field:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "11px 12px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  status-badge:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  status-badge-live:
    backgroundColor: "transparent"
    textColor: "{colors.live-green}"
  preview-row-hover:
    backgroundColor: "{colors.signal-wash}"
  inspector:
    backgroundColor: "{colors.screen-raise}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    width: "380px"
  inspector-code:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.key-ink}"
    padding: "2px 6px"
  panel-surface:
    backgroundColor: "{colors.screen-raise}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Claudio Baldini Portfolio

## Overview

**Creative North Star: "The Terminal Session"**

The site reads as one session on a financial data terminal, opened on a single person. A neutral near-black screen carries off-white data; function keys are solid off-white blocks with black labels; every section is a panel with a header strip and a function mnemonic. Content is organised the way a finance professional reads: description tables, dated ledgers, a stack matrix, a career Gantt. The visitor scans rows, not cards, and can inspect any outbound row before leaving.

The palette is minimal and achromatic: a cool-neutral grey ramp from screen to ink, with one cool signal blue as the only hue that is not a status. Monospace text at a slightly condensed width, tabular numerals everywhere, and 1px rules do the structuring work that cards, shadows and whitespace do in the generic portfolio template. The only display type is a heavy, very condensed uppercase grotesque for the name and panel titles, so hierarchy comes from that one contrast in voice rather than from many sizes.

The world is flat, square and quietly alive. There are no rounded corners, no glow and no decorative gradients; depth is one step of tonal raise. Motion is the terminal at work: a crosshair cursor that leaves a fading trail of figures from the profile, titles that decode from random glyphs, rows that rise in, bars that draw, numbers that count up, a caret that blinks. All of it stops under reduced motion.

**Key Characteristics:**
- Neutral near-black screen, off-white data and keys, one signal blue.
- Function keys as solid off-white blocks with black labels; command line and keys 1–6 drive navigation, with a sliding blue indicator.
- Martian Mono for all data and prose; Archivo condensed (wdth 62, weight 800) uppercase for the name and panel titles only.
- 1px hairline rules and tonal raise instead of cards; square corners everywhere (0px).
- Inspector card previews outbound rows (hover on desktop, pinned on click, bottom sheet on touch).
- Crosshair cursor with a data-glyph trail, decode-on-reveal titles, staggered row reveals.
- Green reserved for live/open status; red reserved for errors.

## Colors

A cool-neutral, near-achromatic ramp (OKLCH hue ~286, chroma under 0.016) with one blue signal and two status colours.

### Primary
- **Off-White Key** (`accent`): data emphasis and action. Fills primary keys, active function keys, panel codes, inspector codes, the language toggle's active half and the selection highlight; colours function-key codes, command input text, matrix category heads, inline links, chevrons and list dashes.
- **Soft Grey** (`soft`): secondary data — dates and periods, tag text, function-key text at rest, the hero sub-line, filled work bars in the Gantt.
- **Dim Grey** (`dim`): labels and metadata — column heads, table keys, panel meta, the clock, study bars, link underlines, placeholders, the trail's digit glyphs. Passes AA on the screen (about 5.4:1) and on raised surfaces (about 5.2:1).

### Secondary
- **Signal Blue** (`signal-blue`): the one hue. Used for the surname in the hero, the cursor in link and preview modes, strong trail glyphs, the command prompt caret, the function-key indicator, panel-head underline draw, the previewing-row edge bar, row cues on hover, the inspector scan line and pinned border, and the focus ring.
- **Signal Wash** (`signal-wash`): the translucent blue used for the left-to-right row hover wash on previewable rows and the panel header flash.

### Neutral
- **Screen** (`screen`): page background, input wells, the lightbox card, the sticky top bar.
- **Raised Screen** (`screen-raise`): the one step of tonal raise — chart frame, function-key row, command line, open ledger rows, featured education row, certificates box, contact form, inspector card.
- **Hover Screen** (`screen-hover`): row and key hover state.
- **Rule** (`rule`): default 1px hairline between rows; gap colour of the function-key grid.
- **Strong Rule** (`rule-strong`): section-level rules, table heads, panel tops, key/tag/inspector outlines, the scrollbar thumb.
- **Ink** (`ink`): headings, values, company names, the hero name's first line, the idle cursor; hover fill for primary keys.
- **Body** (`body`): running prose.
- **Key Ink** (`key-ink`): the black label on any off-white fill.

### Status
- **Live Green** (`live-green`): live and open only — the open-to-work status, the current role's dot and Gantt bar, the "now" line, live project badges.
- **Alert Red** (`alert-red`): errors only — the unknown-command hint and invalid form fields.

### Named Rules
**The One Signal Rule.** Signal blue is the only accent hue. It marks where attention or the pointer is right now (cursor, focus, active section, the row being inspected) and the surname; it never fills a key or a large surface.

**The Green Means Live Rule.** Green appears only where something is current or open right now. Never use it for success decoration, charts or emphasis.

**The Off-White Key Rule.** Any solid off-white fill carries Key Ink (`key-ink`) text; keys are off-white on black, never blue.

## Typography

**Display Font:** Archivo, variable width axis at 62, weight 800 (with Arial Narrow, sans-serif)
**Body Font:** Martian Mono, variable width axis at 87.5 (with ui-monospace, Cascadia Mono, Consolas, monospace)

**Character:** A heavy, compressed uppercase grotesque set against a wide, technical monospace — the masthead of a terminal over its data stream. Both load through next/font with the `wdth` axis enabled.

### Hierarchy
- **Display** (Archivo 800, wdth 62, clamp(3.4rem, 8vw, 6rem), line-height 0.88, uppercase): the hero name only, stacked on two lines with the surname in Signal Blue. On phones, clamp(3.4rem, 22vw, 6rem).
- **Headline** (Archivo 800, wdth 62, clamp(28px, 3.6vw, 44px), line-height 1, uppercase): panel titles in panel header strips.
- **Ticker** (Archivo 800, wdth 62, 20px, letter-spacing 0.02em): the brand ticker in the top bar.
- **Lead** (Martian Mono 600, clamp(16px, 1.6vw, 20px), line-height 1.4): the hero headline under the name.
- **Intro** (Martian Mono 400, 16px, line-height 1.7, 46ch measure): the contact section's opening line. The inspector title uses 16px/700.
- **Title** (Martian Mono 700, 17px, line-height 1.35): project titles; education and certificate titles use 15px/700.
- **Body** (Martian Mono 400, 14px, line-height 1.7, tabular numerals): default text. Profile prose steps up to 15px/1.85 at 68ch; inspector summaries use 13px/1.75. 13.5px under 720px.
- **Meta** (Martian Mono, 12px, letter-spacing 0.06em): periods and dates, table keys (dt), panel codes, chart head, Gantt years and group labels, row cues, action links, inspector facts.
- **Label** (Martian Mono 500, 11px, letter-spacing 0.08em, uppercase): column heads, panel meta, status text, form labels, tags, inspector header.
- **Micro** (Martian Mono 500–700, 10px, letter-spacing 0.08em): the GO tag inside keys, the cursor's INFO tag and strong trail glyphs, status and channel labels under 720px. Never for running text.
- **Key** (Martian Mono 700, 13px, letter-spacing 0.04em, uppercase): text on keys.

### Named Rules
**The Two Voices Rule.** Archivo condensed is used only for the name, the brand ticker and panel titles. Everything else, including headings inside panels and the inspector, is Martian Mono.

**The Tabular Rule.** Numerals are always tabular (`font-variant-numeric: tabular-nums` on body and on decoding text), so dates, figures and scrambling glyphs hold their columns.

## Layout

A single centred shell of max 1280px with a 24px gutter (16px under 720px). The top bar is sticky (108px tall with the function-key row; 100px on phones) and anchor scrolling is offset to clear it.

The hero is a 7/5 split: identity, headline, description table and keys on the left; the career Gantt on the right, filling the viewport below the bar. Below it, panels stack vertically, each 72px top and bottom (56px on phones) with a strong rule on top and a header strip 40px above its content. Two-column splits inside panels use 7/4 (profile, education) or 5/6 (contact) fractional grids with 48–64px gaps.

Tabular content sits on fixed label columns: the experience ledger uses 190px period / company / role / 150px mode / chevron; description tables use a 150px key column; education rows 170px; projects 150px status / body / cue column; inspector facts 110px. Rows carry 12px horizontal inner padding so hover fills read as table rows.

The inspector floats beside the pointer (20px gap, kept 12px inside the viewport and below the bar), max 380px wide. On touch or under 720px it becomes a full-width bottom sheet, max 82vh, over a backdrop.

Responsive behaviour: at 1100px the hero and two-column grids collapse to one column, the clock and status text hide, function-key names hide (codes remain) and the ledger drops its mode column. At 720px the command line is removed and the six function keys become the touch navigation, tables reflow to stacked rows (the stack matrix becomes grouped lists), and primary keys go full width.

Spacing steps observed: 8, 12, 16, 24, 32, 40, 56, 64 and 72px, with 6px and 18–20px for tight gaps inside rows.

## Elevation & Depth

The page is flat. Depth is one step of tonal raise (Screen to Raised Screen), always paired with a 1px Strong Rule. The single exception is the floating inspector card, the only element that sits above the page while the page stays usable; it carries one soft ambient shadow. Modal layers use translucent black scrims rather than shadows.

### Shadow Vocabulary
- **Inspector float** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55)`): the inspector card only.

### Scrims
- **Sheet Scrim** (`scrim-sheet`): behind the inspector when it is a bottom sheet on touch; fades in over 200ms.
- **Lightbox Scrim** (`scrim-lightbox`): behind the diploma lightbox.

### Named Rules
**The Flat Screen Rule.** No glow and no decorative gradients; the only gradient is the Signal Wash row hover, and the only shadow is the inspector float. If something needs to stand forward on the page, raise it one tone and give it a 1px rule.

## Shapes

Every corner is square (0px); form inputs explicitly reset browser rounding. Boundaries are 1px lines: solid Rule between rows, Strong Rule for section and table edges and outlines of keys, tags, the language toggle and the inspector; a dashed Rule for the secondary "before" history list. Active and inspected states use 2px blue bars (function-key indicator under the row, previewing-row edge on the left, inspector scan line on top). Status dots are 7px squares. Gantt bars are flat 10px rectangles, work filled, study outlined. List bullets are 8px horizontal dashes. The cursor is drawn from 1px lines: a gapped crosshair at rest, four corner brackets over links and previewable rows.

## Components

### Keys (buttons)
Solid, square, keyboard-like.
- **Shape:** square (0px), 44px minimum height (40px inside the inspector), 16px horizontal padding, 1px border.
- **Primary:** Off-White Key fill, Key Ink text, 13px bold uppercase, optionally with an inset "GO" tag (Key Ink block, off-white 10px text).
- **Hover / Focus:** primary fills to Ink over 160ms; focus is a 2px Signal Blue outline offset 2px.
- **Ghost:** transparent with off-white text and a Strong Rule border; on hover the border turns off-white and the fill becomes Hover Screen.

### Function keys (navigation)
Six equal cells separated by 1px Rule gaps on Raised Screen. Each shows a bordered number cap, the bold off-white mnemonic (PER, EXP, PRJ, STK, EDU, CON) and a dim name. Hover shifts to Hover Screen over 90ms linear; the section in view becomes a solid off-white key, and a 2px Signal Blue indicator slides under it (420ms, ease-out). Under 720px the caps and names hide and the six codes are the touch tabs.

### Command line
An input well on Raised Screen with a Strong Rule border, a dim uppercase label and a blue `>` prompt that blinks (1.1s, stepped) until the field is focused. Typed text is off-white, bold, uppercase, widely tracked; the border turns off-white on focus. A solid GO key submits; an unknown mnemonic shows a red-outlined hint listing valid codes.

### Panel header strip
Every section opens with a strip: a solid off-white panel code (12px, weight 800), the Archivo condensed title (which decodes from glyphs on first reveal) and dim uppercase meta, over a 1px Rule. On reveal a 1px blue underline draws left to right (1000ms) and then fades. Reached by command or key, the strip flashes the Signal Wash for 1100ms and the code turns Ink.

### Ledger and tables
Rows divided by 1px Rule, heads in dim labels over a Strong Rule. Experience rows are buttons that expand in place with a grid-rows transition (420ms, ease-out); bullets slide in staggered 40ms; hover gives Hover Screen, the open row sits on Raised Screen, the chevron rotates 180° (220ms). The stack matrix uses off-white uppercase category heads and Ink tool names.

### Previewable rows
Project, education, certificate and LinkedIn/GitHub rows carry a full-row hit area. Hover, focus or inspection sweeps the Signal Wash in from the left (500ms); the inspected row gets a 2px blue left edge; the row cue turns blue and nudges 4px right. Keyboard focus draws a 2px blue inset outline around the whole row.

### Inspector (signature)
A floating card on Raised Screen with a Strong Rule border and the inspector float shadow. It opens by unclipping top to bottom (280ms) while a 2px blue scan line draws across its top (600ms); its lines (title, summary, facts, actions) rise in staggered 45ms. The header holds an off-white code block, a dim kind label and a 32px square close button. Facts are a 110px-key description table. Actions are the outbound primary key (or a dim "coming soon"), an optional ghost key, and an Esc hint. Hover previews, click pins (border turns Signal Blue), Esc closes. On touch it slides up as a bottom sheet (360ms) over the sheet backdrop with full-width keys.

### Cursor and data trail (signature)
On fine pointers without reduced motion, the native cursor is replaced by a canvas layer: an Ink crosshair at rest, Signal Blue corner brackets that grow to 26px over links, plus a 10px INFO tag over previewable rows. Moving the pointer leaves glyphs every 16px (at most 70 at once) that drift upward and fade over 950ms: dim digits, and about one in four a Signal Blue term or figure from the profile (SQL, DAX, FI-AA, 120, Σ, €). Text fields keep the native text cursor and suppress the trail.

### Tags, status badges and links
Tags: 1px Strong Rule outline, Soft Grey 11px text. Status badges: 1px Dim outline and text, uppercase; live projects switch to Live Green. Text links: off-white 12px bold uppercase with a 1px Dim underline; hover turns both to Ink; a disabled link drops to Dim with no line.

### Inputs / Fields
Screen-coloured wells inside a Raised Screen form panel, 1px Strong Rule border, square, 11px × 12px padding, Ink text, Dim placeholder. Focus turns the border off-white; `:user-invalid` turns it Alert Red. Labels are dim uppercase 11px.

### Career Gantt
A framed figure on Raised Screen with a header strip and legend. Year gridlines in Rule, odd years and group labels in Dim. Work bars are filled Soft Grey, study bars outlined in Dim, the current role is Live Green with an Ink bold label, and a dashed green "now" line marks today. Bars draw in once on load (scaleX from the left, 900ms, staggered 70ms per row).

### Load and reveal motion
Hero lines rise 12px on load (700ms, from 240ms, staggered 70ms). Below the fold, rows and blocks rise 16px and fade in as they enter (600–800ms, staggered 70ms). Panel titles and the hero name decode from random glyphs over 720ms. Integer facts count up over 900ms with a quartic ease-out. Under `prefers-reduced-motion` every animation and transition is removed, reveals render in place, and the custom cursor is not installed.

## Do's and Don'ts

### Do:
- **Do** keep the palette achromatic and spend Signal Blue only on attention: cursor, focus, the active section, the row being inspected, and the surname.
- **Do** use Key Ink (`key-ink`) for text on every solid off-white block.
- **Do** structure content as rows, ledgers and description tables separated by 1px rules, with fixed label columns.
- **Do** keep corners square (0px) and the page flat: one tonal raise plus a 1px Strong Rule.
- **Do** open every new section with a panel header strip: off-white code, Archivo condensed uppercase title, dim meta.
- **Do** make outbound rows previewable through the inspector before sending the visitor away.
- **Do** keep numerals tabular and text in Martian Mono at wdth 87.5.
- **Do** honour `prefers-reduced-motion` by removing all animation, transitions and the custom cursor.

### Don't:
- **Don't** use rounded cards, glow or decorative gradients; the Signal Wash row hover is the only gradient.
- **Don't** add shadows to anything on the page; the inspector float is the only shadow.
- **Don't** fill keys or large surfaces with Signal Blue, or introduce a second accent hue.
- **Don't** use green for anything that is not live or open, or red for anything that is not an error.
- **Don't** use Archivo condensed for body text or in-panel headings.
- **Don't** fall back to the hero-plus-card-grid portfolio template or decorative particle networks.
