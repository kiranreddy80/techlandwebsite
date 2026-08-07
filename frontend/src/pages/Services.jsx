import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getSEO } from "../config/seoConfig";
import company from "../config/company";
import { servicesData } from "./services/servicesData";
import "./services/ServicesIndex.css";

/** Short stack labels per service, so each card says something concrete. */
const STACKS = {
  "mobile-app-development": ["Flutter", "React Native", "Swift", "Kotlin"],
  "web-development": ["React", "Node.js", "Headless CMS", "Core Web Vitals"],
  "digital-marketing": ["SEO", "Google Ads", "Meta Ads", "Analytics"],
  "custom-software-development": ["APIs", "Cloud-native", "Integrations"],
  "ui-ux-design": ["Research", "Prototypes", "Design systems"],
};

/** First sentence only — the stored copy runs to a full paragraph. */
const firstSentence = (text = "") => {
  const cut = text.indexOf(". ");
  return cut === -1 ? text : text.slice(0, cut + 1);
};

/* ------------------------------------------------------------------ hooks */

/** Adds `.is-in` the first time an element enters view. Fires once. */
const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};

/* ------------------------------------------------------------------- page */

const Services = () => {
  const seo = getSEO("services");
  const services = servicesData;

  const [listRef, listIn] = useReveal();
  const [howRef, howIn] = useReveal();

  /**
   * Pointer position as CSS variables, so each card's spotlight and gradient
   * edge can follow the cursor without a re-render per mouse move.
   */
  const trackPointer = (e) => {
    const card = e.target.closest(".sv-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const steps = [
    { n: "01", t: "Discovery", d: "Goals, users and constraints, mapped before a line is written." },
    { n: "02", t: "Roadmap", d: "Scope, milestones and a plan you can hold us to." },
    { n: "03", t: "Build", d: "Design and engineering in two-week sprints, staging always live." },
    { n: "04", t: "Launch", d: "Deploy, monitor, and stay on long after go-live." },
  ];

  return (
    <div className="sv-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* ============================================ hero */}
      <section className="sv-hero">
        <div className="sv-hero-bg" aria-hidden="true">
          <span className="sv-orb sv-orb--a" />
          <span className="sv-orb sv-orb--b" />
          <span className="sv-hero-grid" />
        </div>

        <div className="sv-container">
          <nav className="sv-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>

          <h1 className="sv-hero-title">
            Everything it takes to ship,
            <span className="sv-hero-hl"> under one roof</span>.
          </h1>

          <p className="sv-hero-lede">
            Strategy, design, engineering and growth in the same team — so
            nothing gets lost handing your project between agencies.
          </p>

          <ul className="sv-hero-meta">
            <li>
              <b>{company.stats.clients}</b>
              <span>Clients served</span>
            </li>
            <li>
              <b>{company.stats.apps}</b>
              <span>Apps shipped</span>
            </li>
            <li>
              <b>{company.stats.websites}</b>
              <span>Websites delivered</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ services */}
      <section
        className={`sv-list ${listIn ? "is-in" : ""}`}
        ref={listRef}
        aria-label="Our services"
      >
        <div className="sv-container">
          <div className="sv-grid" onMouseMove={trackPointer}>
            {services.map((s, i) => (
              <Link
                to={`/services/${s.id}`}
                className="sv-card"
                key={s.id}
                style={{ "--i": i }}
              >
                <span className="sv-card-spot" aria-hidden="true" />
                <span className="sv-card-edge" aria-hidden="true" />
                <span className="sv-card-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="sv-card-title">{s.title}</h2>
                <p className="sv-card-text">{firstSentence(s.description)}</p>

                {STACKS[s.id] && (
                  <ul className="sv-card-stack">
                    {STACKS[s.id].map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}

                <span className="sv-card-go">
                  <span>Explore {s.title}</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ how it runs */}
      <section className={`sv-how ${howIn ? "is-in" : ""}`} ref={howRef}>
        <div className="sv-container">
          <header className="sv-head">
            <span className="sv-eyebrow">
              <span className="sv-eyebrow-line" aria-hidden="true" />
              However we engage
            </span>
            <h2 className="sv-h2">
              The same four steps, <span className="sv-h2-hl">every time</span>.
            </h2>
          </header>

          <ol className="sv-steps">
            <span className="sv-steps-rail" aria-hidden="true">
              <span className="sv-steps-fill" />
            </span>
            {steps.map((s, i) => (
              <li key={s.n} style={{ "--i": i }}>
                <span className="sv-step-dot" aria-hidden="true" />
                <span className="sv-step-n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================ CTA */}
      <section className="sv-cta">
        <div className="sv-container">
          <div className="sv-cta-card">
            <span className="sv-cta-grid" aria-hidden="true" />
            <div>
              <h2>Not sure which one you need?</h2>
              <p>
                Describe the problem in a paragraph. We'll tell you what it
                takes — scope, timeline and a number, within two working hours.
              </p>
            </div>
            <div className="sv-cta-actions">
              <Link to="/contact" className="sv-btn sv-btn--white">
                Start a project
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
              <a href={company.phone.href} className="sv-btn sv-btn--outline">
                {company.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
