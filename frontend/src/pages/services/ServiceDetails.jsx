import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "./servicesData";
import company from "../../config/company";
import UsedToolsTab from "./UsedToolsTab";
import HomeFAQ from "../Home/HomeFAQ";
import HomeContact from "../Home/HomeContactUs";
import "./ServiceDetails.css";

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
      { threshold: 0.14, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  const [gridRef, gridIn] = useReveal();
  const [aboutRef, aboutIn] = useReveal();

  // Land at the top when moving between services.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  /** Pointer position as CSS variables — no re-render per mouse move. */
  const trackPointer = (e) => {
    const card = e.target.closest(".sd-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  if (!service) {
    return (
      <div className="sd-page">
        <section className="sd-missing">
          <div className="sd-container">
            <h1>Service not found</h1>
            <p>That service doesn't exist, or it is no longer offered.</p>
            <Link to="/services" className="sd-btn sd-btn--solid">
              See all services
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  /** Sibling services, for the "keep exploring" rail. */
  const others = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="sd-page">
      <Helmet>
        <title>{service.metaTitle || service.title}</title>
        <meta name="description" content={service.metaDescription || service.description} />
        <link rel="canonical" href={`${company.website}/services/${service.id}`} />
      </Helmet>

      {/* ============================================ hero */}
      <section className="sd-hero">
        <div className="sd-hero-bg" aria-hidden="true">
          <span className="sd-orb sd-orb--a" />
          <span className="sd-orb sd-orb--b" />
          <span className="sd-hero-grid" />
        </div>

        <div className="sd-container sd-hero-grid-2">
          <div className="sd-hero-copy">
            <nav className="sd-crumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <h1 className="sd-hero-title">
              <span className="sd-hero-hl">{service.title}</span>
            </h1>

            <p className="sd-hero-lede">{service.description}</p>

            <div className="sd-hero-cta">
              <Link to="/contact" className="sd-btn sd-btn--solid">
                Get a quote
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
              <a href={company.phone.href} className="sd-btn sd-btn--ghost">
                {company.phone.display}
              </a>
            </div>
          </div>

          {service.heroImage && (
            <div className="sd-hero-art">
              <span className="sd-hero-art-glow" aria-hidden="true" />
              <img src={service.heroImage} alt={service.title} loading="eager" />
            </div>
          )}
        </div>
      </section>

      {/* ============================================ what's included */}
      {service.details?.length > 0 && (
        <section className={`sd-inc ${gridIn ? "is-in" : ""}`} ref={gridRef}>
          <div className="sd-container">
            <header className="sd-head">
              <span className="sd-eyebrow">
                <span className="sd-eyebrow-line" aria-hidden="true" />
                What's included
              </span>
              <h2 className="sd-h2">
                {service.servicesTitle || `Everything in ${service.title}`}
              </h2>
            </header>

            {/* A rail with the deliverables alternating either side of it —
                a sequence you read down, rather than a flat grid of tiles. */}
            <ol className="sd-track" onMouseMove={trackPointer}>
              <span className="sd-track-rail" aria-hidden="true">
                <span className="sd-track-fill" />
              </span>

              {service.details.map((d, i) => (
                <li
                  className={`sd-step ${i % 2 ? "is-right" : "is-left"}`}
                  key={d.subTitle}
                  style={{ "--i": i }}
                >
                  <span className="sd-node" aria-hidden="true">
                    <span className="sd-node-ring" />
                    <b>{String(i + 1).padStart(2, "0")}</b>
                  </span>

                  <article className="sd-card">
                    <span className="sd-card-spot" aria-hidden="true" />
                    <span className="sd-card-edge" aria-hidden="true" />
                    <h3>{d.subTitle}</h3>
                    <p>{d.subDescription}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ============================================ about this service */}
      {service.aboutContent && (
        <section className={`sd-about ${aboutIn ? "is-in" : ""}`} ref={aboutRef}>
          <div className="sd-container sd-about-grid">
            <div className="sd-about-copy">
              <span className="sd-eyebrow">
                <span className="sd-eyebrow-line" aria-hidden="true" />
                {service.aboutTitle || "About this service"}
              </span>
              <h2 className="sd-h2">{service.aboutSubtitle || service.title}</h2>
              <p>{service.aboutContent}</p>
              {service.closingContent && <p>{service.closingContent}</p>}

              <Link to="/contact" className="sd-inline-link">
                Talk to us about {service.title}
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
            </div>

            <aside className="sd-facts">
              <h3>{service.closingTitle || "Why Techland"}</h3>
              <ul>
                <li>
                  <span className="sd-fact-k">Team</span>
                  <span className="sd-fact-v">In-house, no subcontracting</span>
                </li>
                <li>
                  <span className="sd-fact-k">Cadence</span>
                  <span className="sd-fact-v">Two-week sprints, staging always live</span>
                </li>
                <li>
                  <span className="sd-fact-k">Pricing</span>
                  <span className="sd-fact-v">Fixed scope or sprint rate</span>
                </li>
                <li>
                  <span className="sd-fact-k">After launch</span>
                  <span className="sd-fact-v">Runbooks, handover and support</span>
                </li>
                <li>
                  <span className="sd-fact-k">Reply time</span>
                  <span className="sd-fact-v">Two working hours</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      )}

      {/* ============================================ tools */}
      <UsedToolsTab />

      {/* ============================================ other services */}
      {others.length > 0 && (
        <section className="sd-others">
          <div className="sd-container">
            <header className="sd-head sd-head--row">
              <h2 className="sd-h2">Keep exploring</h2>
              <Link to="/services" className="sd-inline-link">
                All services
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
            </header>

            <div className="sd-others-rail">
              {others.map((o) => (
                <Link to={`/services/${o.id}`} className="sd-other" key={o.id}>
                  <span>{o.title}</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <HomeFAQ />
      <HomeContact />
    </div>
  );
};

export default ServiceDetails;
