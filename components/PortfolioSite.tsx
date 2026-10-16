"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Database,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  MessageSquareText,
  Phone,
  ScanText,
  Sparkles,
  Store,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { HeroCanvas } from "@/components/HeroCanvas";
import { content, Language, navItems } from "@/lib/content";

const projectIcons = {
  chart: BarChart3,
  store: Store,
  scan: ScanText,
};

const educationIcons = [GraduationCap, BriefcaseBusiness, BarChart3, BadgeCheck, Building2, Database];

const navNums: Record<string, string> = {
  about: "01",
  experience: "02",
  projects: "03",
  skills: "04",
  contact: "05",
};

export function PortfolioSite() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const t = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Contacto portfolio - ${name || "Nuevo mensaje"}`);
    const body = encodeURIComponent(`${message}\n\nNombre: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:Cbaldiniwork@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 2800);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav-shell" aria-label="Navegación principal">
          <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
            Claudio Baldini
          </a>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href} onClick={() => setMenuOpen(false)}>
                <span className="nav-num">{navNums[item.key]}</span>
                {t.nav[item.key]}
              </a>
            ))}
            <button
              className="language-button"
              type="button"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <HeroCanvas />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="hero-currently">
                <span className="currently-dot" aria-hidden="true" />
                {language === "es" ? "Actualmente en" : "Currently at"} GASIB · CEPSA
              </div>
              <p className="eyebrow">{t.hero.greeting}</p>
              <h1>Claudio Baldini</h1>
              <p className="hero-role">{t.hero.role}</p>
              <p className="hero-description">{t.hero.description}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {t.hero.projects}
                  <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href="#contact">
                  {t.hero.contact}
                  <MessageSquareText size={18} />
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label={t.hero.availability}>
              <div className="status-pill">
                <Sparkles size={16} />
                <span>{t.hero.availability}</span>
              </div>
              <div className="metric-grid">
                {t.metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeader num="01" label={t.about.label} title={t.about.title} />
            <div className="about-layout">
              <div className="about-copy reveal">
                <p>{t.about.text}</p>
              </div>

              <div className="education-panel reveal reveal-d1">
                <div className="panel-heading">
                  <GraduationCap size={20} />
                  <h3>{t.about.education}</h3>
                </div>
                <div className="education-list">
                  {t.education.map((item, index) => {
                    const Icon = educationIcons[index] ?? GraduationCap;
                    const isFeatured = "featured" in item && item.featured;
                    const verification = "verification" in item ? item.verification : undefined;
                    return (
                      <article className={`education-item ${isFeatured ? "featured" : ""}`} key={item.title}>
                        <div className="education-icon">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.institution}</p>
                          <span>{item.date}</span>
                          {verification ? (
                            <a href={verification} target="_blank" rel="noreferrer">
                              {t.about.verify}
                              <ExternalLink size={14} />
                            </a>
                          ) : null}
                        </div>
                        {isFeatured ? (
                          <button className="diploma-preview" type="button" onClick={() => setLightboxOpen(true)}>
                            <Image
                              src="/diploma-master.png"
                              width={260}
                              height={180}
                              alt="Diploma Máster Data Analytics"
                            />
                          </button>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <SectionHeader num="02" label={t.experience.label} title={t.experience.title} />
            <div className="timeline">
              {t.experience.items.map((item, index) => (
                <article className={`timeline-card reveal reveal-d${index + 1}`} key={`${item.company}-${item.date}`}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-content">
                    <div className="timeline-top">
                      <div>
                        <h3>{item.company}</h3>
                        <p>{item.role}</p>
                      </div>
                      <span>{item.date}</span>
                    </div>
                    <ul>
                      {item.tasks.map((task) => (
                        <li key={task}>
                          <CheckCircle2 size={16} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeader num="03" label={t.projects.label} title={t.projects.title} />
            <div className="projects-grid">
              {t.projects.items.map((project, index) => {
                const Icon = projectIcons[project.icon as keyof typeof projectIcons] ?? BarChart3;
                const status = "status" in project ? project.status : undefined;
                const href = "href" in project ? project.href : undefined;
                return (
                  <article className={`project-card reveal reveal-d${index + 1}`} key={project.title}>
                    <div className="project-num-badge">/{String(index + 1).padStart(2, "0")}</div>
                    <div className="project-icon">
                      <Icon size={26} />
                    </div>
                    {status ? <span className="project-status">{status}</span> : null}
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {href ? (
                      <a className="project-link" href={href} target="_blank" rel="noreferrer">
                        {t.projects.github}
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="project-link is-disabled">{t.projects.wip}</span>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeader num="04" label={t.skills.label} title={t.skills.title} />
            <div className="skills-grid">
              {t.skills.groups.map((group, index) => (
                <article className={`skill-group reveal reveal-d${index + 1}`} key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>
                        <ChevronRight size={15} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <SectionHeader num="05" label={t.contact.label} title={t.contact.title} />
            <div className="contact-grid">
              <div className="contact-info reveal">
                <p>{t.contact.intro}</p>
                <div className="contact-links">
                  <a href="mailto:Cbaldiniwork@gmail.com">
                    <Mail size={19} />
                    <span>
                      <strong>Email</strong>
                      <small>Cbaldiniwork@gmail.com</small>
                    </span>
                  </a>
                  <a href="tel:+34658209727">
                    <Phone size={19} />
                    <span>
                      <strong>{t.contact.phone}</strong>
                      <small>658 209 727</small>
                    </span>
                  </a>
                  <a href="https://es.linkedin.com/in/claudio-baldini-2338251b9" target="_blank" rel="noreferrer">
                    <BriefcaseBusiness size={19} />
                    <span>
                      <strong>LinkedIn</strong>
                      <small>claudio-baldini</small>
                    </span>
                  </a>
                  <a href="https://github.com/Claudiobaldinii" target="_blank" rel="noreferrer">
                    <GitBranch size={19} />
                    <span>
                      <strong>GitHub</strong>
                      <small>Claudiobaldinii</small>
                    </span>
                  </a>
                </div>
              </div>

              <form className="contact-form reveal reveal-d1" onSubmit={handleSubmit}>
                <label>
                  {t.contact.name}
                  <input name="name" type="text" autoComplete="name" placeholder={t.contact.namePlaceholder} required />
                </label>
                <label>
                  {t.contact.email}
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </label>
                <label>
                  {t.contact.message}
                  <textarea name="message" rows={5} placeholder={t.contact.messagePlaceholder} required />
                </label>
                <button className="button button-primary" type="submit">
                  {sent ? t.contact.sent : t.contact.send}
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">{t.footer}</footer>

      {lightboxOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Diploma">
          <button className="lightbox-backdrop" type="button" onClick={() => setLightboxOpen(false)} aria-label="Cerrar" />
          <div className="lightbox-card">
            <button className="lightbox-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Cerrar">
              <X size={20} />
            </button>
            <Image src="/diploma-master.png" width={1160} height={820} alt="Diploma Máster Data Analytics" />
          </div>
        </div>
      ) : null}
    </>
  );
}

function SectionHeader({ num, label, title }: { num: string; label: string; title: string }) {
  return (
    <div className="section-header reveal">
      <span className="section-num" aria-hidden="true">{num}</span>
      <div className="section-title-wrap">
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
