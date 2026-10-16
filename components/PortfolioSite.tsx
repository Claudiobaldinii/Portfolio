"use client";

import { ArrowUpRight, BriefcaseBusiness, ChevronDown, GitBranch, Mail, Phone, X } from "lucide-react";
import {
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CareerChart } from "@/components/CareerChart";
import { AmbientData } from "@/components/AmbientData";
import { CursorTrail } from "@/components/CursorTrail";
import { Inspector, InspectorAnchor } from "@/components/Inspector";
import { Scramble } from "@/components/Scramble";
import { contact, content, FunctionCode, functions, Language } from "@/lib/content";
import { inspectorText, PreviewId, previews } from "@/lib/previews";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projectIds: PreviewId[] = ["prj-salarios", "prj-ecommerce", "prj-facturas"];
const degreeIds: PreviewId[] = ["edu-master", "edu-ifp", "edu-uru", "edu-bach"];
const certIds: PreviewId[] = ["cert-data", "cert-excel", "cert-ia", "cert-dataviz"];

type OpenPreview = { id: PreviewId; anchor: InspectorAnchor; pinned: boolean; sheet: boolean };

function decimalYear(date: Date) {
  return date.getFullYear() + date.getMonth() / 12 + date.getDate() / 365;
}

function useSheetMode() {
  return () => window.matchMedia("(hover: none), (max-width: 720px)").matches;
}

export function PortfolioSite() {
  const [language, setLanguage] = useState<Language>("es");
  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState(false);
  const [active, setActive] = useState<FunctionCode | null>(null);
  const [flash, setFlash] = useState<FunctionCode | null>(null);
  const [openRole, setOpenRole] = useState(0);
  const [clock, setClock] = useState<string | null>(null);
  const [now, setNow] = useState(2026 + 9.5 / 12);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [preview, setPreview] = useState<OpenPreview | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const inspectorRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const openTimer = useRef(0);
  const closeTimer = useRef(0);
  const isSheet = useSheetMode();

  const t = useMemo(() => content[language], [language]);
  const p = previews[language];
  const it = inspectorText[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("es-ES", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => {
      const date = new Date();
      setClock(format.format(date));
      setNow(decimalYear(date));
    };
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 15000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  /* Active function key follows the panel in the middle of the screen. */
  useEffect(() => {
    const sections = functions
      .map((fn) => document.getElementById(fn.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const fn = functions.find((f) => f.id === entry.target.id);
          setActive(fn ? fn.code : null);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    const hero = document.querySelector(".hero");
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, []);

  /* Reveal-on-scroll; content stays visible without JS. */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((el) => el.setAttribute("data-in", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          io.unobserve(entry.target);
          const counter = entry.target.querySelector<HTMLElement>("[data-count]");
          if (counter) countUp(counter);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".reveal:not([data-in])").forEach((el) => io.observe(el));
    return () => io.disconnect();
    /* Re-run on language change: rows keyed by text remount without data-in. */
  }, [language]);

  const jump = useCallback((code: FunctionCode) => {
    const fn = functions.find((f) => f.code === code);
    const el = fn && document.getElementById(fn.id);
    if (!el) return;
    el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", `#${fn.id}`);
    setFlash(null);
    window.requestAnimationFrame(() => setFlash(code));
    window.setTimeout(() => setFlash(null), 1200);
  }, []);

  const closePreview = useCallback((restoreFocus = false) => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    setPreview(null);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && preview) {
        closePreview(true);
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable]")) return;
      const fn = functions.find((f) => f.key === event.key);
      if (fn) {
        event.preventDefault();
        jump(fn.code);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [jump, preview, closePreview]);

  /* Hover previews close on scroll; pinned ones close on an outside press. */
  useEffect(() => {
    if (!preview) return;
    const onScroll = () => {
      if (!preview.pinned) closePreview();
    };
    const onDown = (event: PointerEvent) => {
      const target = event.target as Element;
      if (target.closest(".inspector, [data-preview]")) return;
      closePreview();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [preview, closePreview]);

  useEffect(() => {
    if (preview?.pinned) inspectorRef.current?.focus({ preventScroll: true });
  }, [preview?.pinned, preview?.id]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  /* Stable handlers; the row id travels on the element's data attributes. */
  const previewState = useRef<OpenPreview | null>(null);
  useEffect(() => {
    previewState.current = preview;
  }, [preview]);

  const onRowEnter = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    const current = previewState.current;
    if (event.pointerType !== "mouse" || current?.pinned) return;
    const id = event.currentTarget.dataset.preview as PreviewId;
    window.clearTimeout(closeTimer.current);
    window.clearTimeout(openTimer.current);
    const anchor = { x: event.clientX, y: event.clientY };
    const open = () => setPreview({ id, anchor, pinned: false, sheet: false });
    if (current) open();
    else openTimer.current = window.setTimeout(open, 160);
  }, []);

  const onRowLeave = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(openTimer.current);
    if (!previewState.current?.pinned) closeTimer.current = window.setTimeout(() => setPreview(null), 220);
  }, []);

  const onRowClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement>) => {
      const current = previewState.current;
      const id = event.currentTarget.dataset.for as PreviewId;
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
      triggerRef.current = event.currentTarget;
      if (current?.id === id && current.pinned) {
        closePreview();
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const keyboard = event.detail === 0;
      const anchor = keyboard
        ? { x: rect.left + Math.min(rect.width, 520), y: rect.top + 24 }
        : current?.id === id
          ? current.anchor
          : { x: event.clientX, y: event.clientY };
      setPreview({ id, anchor, pinned: true, sheet: isSheet() });
    },
    [closePreview, isSheet]
  );

  const onRowKey = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Escape") closePreview(true);
    },
    [closePreview]
  );

  /* Props for any row that opens an inspector card. */
  function previewRow(id: PreviewId) {
    return {
      "data-preview": id,
      className: preview?.id === id ? "is-previewing" : undefined,
      onPointerEnter: onRowEnter,
      onPointerLeave: onRowLeave,
    };
  }

  function previewButton(id: PreviewId, label: string) {
    return {
      type: "button" as const,
      className: "row-hit",
      "data-for": id,
      "aria-haspopup": "dialog" as const,
      "aria-expanded": preview?.id === id,
      "aria-label": `${label} · ${it.more}`,
      onClick: onRowClick,
      onKeyDown: onRowKey,
    };
  }

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = command.trim().toUpperCase();
    const fn = functions.find(
      (f) =>
        f.code === query ||
        f.key === query ||
        content.es.fn[f.code].toUpperCase() === query ||
        content.en.fn[f.code].toUpperCase() === query
    );
    if (!fn) {
      setCommandError(true);
      return;
    }
    setCommandError(false);
    setCommand("");
    jump(fn.code);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio · ${name || "Nuevo contacto"}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
  }

  const panelProps = (code: FunctionCode) => ({
    id: functions.find((f) => f.code === code)!.id,
    className: `panel${flash === code ? " is-flashing" : ""}`,
    "aria-labelledby": `${code}-title`,
  });

  const activeIndex = active ? functions.findIndex((f) => f.code === active) : -1;
  const openPreview = preview ? p[preview.id] : null;

  return (
    <>
      <AmbientData />
      <CursorTrail />

      <a className="skip" href="#perfil">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <header className="bar">
        <div className="bar-top shell">
          <a className="brand" href="#top" aria-label="Claudio Baldini">
            <span className="brand-ticker">BALDINI C</span>
            <span className="brand-desc">Finance &amp; Data</span>
          </a>

          <form className="cmd" onSubmit={runCommand} role="search">
            <label className="cmd-label" htmlFor="cmd">
              {t.bar.cmdLabel}
            </label>
            <span className="cmd-prompt" aria-hidden="true">
              &gt;
            </span>
            <input
              id="cmd"
              value={command}
              onChange={(e) => {
                setCommand(e.target.value);
                setCommandError(false);
              }}
              placeholder={t.bar.cmdPlaceholder}
              autoComplete="off"
              spellCheck={false}
              maxLength={12}
              aria-describedby="cmd-hint"
              aria-invalid={commandError}
            />
            <button className="key key-go" type="submit">
              {t.bar.go}
            </button>
            <p id="cmd-hint" className={`cmd-hint${commandError ? " is-error" : ""}`} aria-live="polite">
              {commandError ? `${t.bar.unknown} ${functions.map((f) => f.code).join(" ")}` : ""}
            </p>
          </form>

          <div className="bar-status">
            <span className="status-open">
              <i aria-hidden="true" />
              {t.bar.open}
            </span>
            <span className="status-clock" suppressHydrationWarning>
              MAD {clock ?? "--:--"}
            </span>
            <button
              className="lang"
              type="button"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
            >
              <span className={language === "es" ? "is-on" : ""}>ES</span>
              <span className={language === "en" ? "is-on" : ""}>EN</span>
            </button>
          </div>
        </div>

        <nav className="fkeys" aria-label={t.bar.menu}>
          <div className="shell fkeys-row">
            {functions.map((fn) => (
              <a
                key={fn.code}
                href={`#${fn.id}`}
                className={`fkey${active === fn.code ? " is-active" : ""}`}
                aria-current={active === fn.code ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  jump(fn.code);
                }}
              >
                <kbd>{fn.key}</kbd>
                <span className="fkey-code">{fn.code}</span>
                <span className="fkey-name">{t.fn[fn.code]}</span>
              </a>
            ))}
            <span
              className="fkey-indicator"
              aria-hidden="true"
              style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`, opacity: activeIndex < 0 ? 0 : 1 }}
            />
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-name">
          <div className="hero-id">
            <h1 id="hero-name" className="hero-name">
              <span>
                <Scramble text="Claudio" />
              </span>
              <span>
                <Scramble text="Baldini" delay={120} />
              </span>
            </h1>
            <p className="hero-headline hero-in" style={{ ["--i" as string]: 1 }}>
              {t.hero.headline}
            </p>
            <p className="hero-sub hero-in" style={{ ["--i" as string]: 2 }}>
              {t.hero.sub}
            </p>

            <dl className="des">
              {t.hero.rows.map((row, i) => (
                <div key={row.k} className="hero-in" style={{ ["--i" as string]: i + 3 }}>
                  <dt>{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>

            <div className="hero-actions hero-in" style={{ ["--i" as string]: 7 }}>
              <a
                className="key key-primary"
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  jump("CON");
                }}
              >
                {t.hero.contact}
                <span className="key-go-tag">GO</span>
              </a>
              <a className="key key-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
                {t.hero.linkedin}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <CareerChart
            locale={language === "es" ? "es-ES" : "en-GB"}
            now={now}
            labels={{
              title: t.hero.chartTitle,
              work: t.hero.chartWork,
              study: t.hero.chartStudy,
              present: t.hero.present,
            }}
          />
        </section>

        <section {...panelProps("PER")}>
          <div className="shell">
            <PanelHead code="PER" title={t.about.title} />
            <div className="per-grid">
              <div className="prose reveal">
                {t.about.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <dl className="facts">
                {t.about.facts.map((fact, i) => (
                  <div key={i} className="reveal" style={{ ["--i" as string]: i }}>
                    <dt>{fact.k}</dt>
                    <dd {...(/^\d+$/.test(fact.v) ? { "data-count": fact.v } : {})}>{fact.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section {...panelProps("EXP")}>
          <div className="shell">
            <PanelHead code="EXP" title={t.experience.title} meta={`${t.experience.items.length} reg.`} />
            <div className="ledger" role="list">
              <div className="ledger-cols" aria-hidden="true">
                <span>{t.experience.cols.period}</span>
                <span>{t.experience.cols.company}</span>
                <span>{t.experience.cols.role}</span>
                <span>{t.experience.cols.mode}</span>
              </div>
              {t.experience.items.map((item, index) => {
                const open = openRole === index;
                const isCurrent = "current" in item && item.current;
                return (
                  <article
                    className={`ledger-row reveal${open ? " is-open" : ""}`}
                    style={{ ["--i" as string]: index }}
                    role="listitem"
                    key={item.company}
                  >
                    <button
                      className="ledger-summary"
                      type="button"
                      aria-expanded={open}
                      aria-controls={`role-${index}`}
                      onClick={() => setOpenRole(open ? -1 : index)}
                    >
                      <span className="ledger-period">
                        {isCurrent ? <i className="live-dot" aria-hidden="true" /> : null}
                        {item.period}
                      </span>
                      <span className="ledger-company">{item.company}</span>
                      <span className="ledger-role">{item.role}</span>
                      <span className="ledger-mode">{item.mode}</span>
                      <ChevronDown className="ledger-chevron" size={16} aria-hidden="true" />
                      <span className="sr-only">{open ? t.experience.collapse : t.experience.expand}</span>
                    </button>
                    <div className="ledger-detail" id={`role-${index}`} inert={!open}>
                      <div className="ledger-detail-inner">
                        <ul>
                          {item.tasks.map((task, i) => (
                            <li key={i} style={{ ["--i" as string]: i }}>
                              {task}
                            </li>
                          ))}
                        </ul>
                        <p className="tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="before reveal">
              <h3>{t.experience.earlier}</h3>
              <ul>
                {t.experience.before.map((item) => (
                  <li key={item.company}>
                    <span>{item.period}</span>
                    <strong>{item.company}</strong>
                    <span>{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section {...panelProps("PRJ")}>
          <div className="shell">
            <PanelHead code="PRJ" title={t.projects.title} meta={it.hint} />
            <ol className="projects">
              {t.projects.items.map((project, index) => {
                const id = projectIds[index];
                const href = "href" in project ? project.href : undefined;
                return (
                  <li
                    data-preview={id} onPointerEnter={onRowEnter} onPointerLeave={onRowLeave}
                    className={`project reveal ${preview?.id === id ? "is-previewing" : ""}`}
                    style={{ ["--i" as string]: index }}
                    key={id}
                  >
                    <span className={`project-status${href ? " is-live" : ""}`}>
                      {href ? t.projects.live : t.projects.wip}
                    </span>
                    <div className="project-body">
                      <h3>
                        <button {...previewButton(id, project.title)}>{project.title}</button>
                      </h3>
                      <p>{project.description}</p>
                      <p className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </p>
                    </div>
                    <span className="row-cue" aria-hidden="true">
                      {href ? "GitHub" : t.projects.soon}
                      <ArrowUpRight size={14} />
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section {...panelProps("STK")}>
          <div className="shell">
            <PanelHead code="STK" title={t.stack.title} />
            <table className="matrix reveal">
              <thead>
                <tr>
                  <th scope="col">{t.stack.cols.area}</th>
                  <th scope="col">{t.stack.cols.tool}</th>
                  <th scope="col">{t.stack.cols.where}</th>
                </tr>
              </thead>
              {t.stack.groups.map((group) => (
                <tbody key={group.area}>
                  {group.rows.map((row, i) => (
                    <tr key={row.tool}>
                      {i === 0 ? (
                        <th scope="rowgroup" rowSpan={group.rows.length}>
                          {group.area}
                        </th>
                      ) : null}
                      <td className="matrix-tool">{row.tool}</td>
                      <td>{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </section>

        <section {...panelProps("EDU")}>
          <div className="shell">
            <PanelHead code="EDU" title={t.education.title} meta={it.hint} />
            <div className="edu-grid">
              <ul className="edu-list">
                {t.education.degrees.map((degree, index) => {
                  const id = degreeIds[index];
                  const featured = "featured" in degree && degree.featured;
                  const note = "note" in degree ? degree.note : undefined;
                  return (
                    <li
                      key={id}
                      data-preview={id} onPointerEnter={onRowEnter} onPointerLeave={onRowLeave}
                      className={`reveal ${featured ? "is-featured" : ""} ${preview?.id === id ? "is-previewing" : ""}`}
                      style={{ ["--i" as string]: index }}
                    >
                      <span className="edu-period">{degree.period}</span>
                      <div>
                        <h3>
                          <button {...previewButton(id, degree.title)}>{degree.title}</button>
                        </h3>
                        <p>{degree.school}</p>
                        {note ? <p className="edu-note">{note}</p> : null}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <ul className="certs">
                {t.education.certs.map((cert, index) => {
                  const id = certIds[index];
                  return (
                    <li
                      key={id}
                      data-preview={id} onPointerEnter={onRowEnter} onPointerLeave={onRowLeave}
                      className={`reveal ${preview?.id === id ? "is-previewing" : ""}`}
                      style={{ ["--i" as string]: index }}
                    >
                      <span className="edu-period">{cert.period}</span>
                      <h3>
                        <button {...previewButton(id, cert.title)}>{cert.title}</button>
                      </h3>
                      <p>{cert.school}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section {...panelProps("CON")}>
          <div className="shell">
            <PanelHead code="CON" title={t.contactSection.title} />
            <div className="con-grid">
              <div className="reveal">
                <p className="con-intro">{t.contactSection.intro}</p>
                <ul className="channels">
                  <li>
                    <a href={`mailto:${contact.email}`}>
                      <Mail size={18} aria-hidden="true" />
                      <span>Email</span>
                      <strong>{contact.email}</strong>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${contact.phone}`}>
                      <Phone size={18} aria-hidden="true" />
                      <span>{t.contactSection.phone}</span>
                      <strong>{contact.phoneLabel}</strong>
                    </a>
                  </li>
                  <li {...previewRow("con-linkedin")}>
                    <button {...previewButton("con-linkedin", "LinkedIn")} className="channel-btn">
                      <BriefcaseBusiness size={18} aria-hidden="true" />
                      <span>LinkedIn</span>
                      <strong>claudio-baldini</strong>
                    </button>
                  </li>
                  <li {...previewRow("con-github")}>
                    <button {...previewButton("con-github", "GitHub")} className="channel-btn">
                      <GitBranch size={18} aria-hidden="true" />
                      <span>GitHub</span>
                      <strong>Claudiobaldinii</strong>
                    </button>
                  </li>
                </ul>
              </div>

              <form className="form reveal" style={{ ["--i" as string]: 1 }} onSubmit={handleSubmit}>
                <label>
                  <span>{t.contactSection.name}</span>
                  <input name="name" type="text" autoComplete="name" placeholder={t.contactSection.namePh} required />
                </label>
                <label>
                  <span>{t.contactSection.email}</span>
                  <input name="email" type="email" autoComplete="email" placeholder={t.contactSection.emailPh} required />
                </label>
                <label>
                  <span>{t.contactSection.message}</span>
                  <textarea name="message" rows={5} placeholder={t.contactSection.messagePh} required />
                </label>
                <button className="key key-primary" type="submit">
                  {sent ? t.contactSection.sent : t.contactSection.send}
                  <span className="key-go-tag">GO</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="shell">{t.footer}</div>
      </footer>

      {preview && openPreview ? (
        <>
          {preview.sheet ? (
            <button className="sheet-backdrop" type="button" tabIndex={-1} aria-label={it.close} onClick={() => closePreview(true)} />
          ) : null}
          <Inspector
            key={`${preview.id}-${language}`}
            ref={inspectorRef}
            preview={openPreview}
            anchor={preview.anchor}
            pinned={preview.pinned}
            sheet={preview.sheet}
            text={it}
            onClose={() => closePreview(true)}
            onPointerEnter={() => window.clearTimeout(closeTimer.current)}
            onPointerLeave={() => {
              if (!preview.pinned) closeTimer.current = window.setTimeout(() => setPreview(null), 220);
            }}
            onDiploma={() => {
              closePreview();
              setLightboxOpen(true);
            }}
          />
        </>
      ) : null}

      {lightboxOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.education.diplomaAlt}>
          <button
            className="lightbox-backdrop"
            type="button"
            tabIndex={-1}
            onClick={() => setLightboxOpen(false)}
            aria-label={t.education.close}
          />
          <div className="lightbox-card">
            <button ref={closeRef} className="lightbox-close" type="button" onClick={() => setLightboxOpen(false)}>
              <X size={18} aria-hidden="true" />
              {t.education.close}
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${basePath}/diploma-master.png`} width={1160} height={820} alt={t.education.diplomaAlt} />
          </div>
        </div>
      ) : null}
    </>
  );
}

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const duration = 900;
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function PanelHead({ code, title, meta }: { code: FunctionCode; title: string; meta?: string }) {
  return (
    <div className="panel-head reveal">
      <span className="panel-code" aria-hidden="true">
        {code}
      </span>
      <h2 id={`${code}-title`}>
        <Scramble text={title} />
      </h2>
      {meta ? <span className="panel-meta">{meta}</span> : null}
    </div>
  );
}
