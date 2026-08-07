import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import { blogPosts } from "./blogData";
import "./Blogs.css";

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
      { threshold: 0.12, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};

const Blogs = () => {
  const seo = getSEO("blogs") || getSEO("home");
  const [filter, setFilter] = useState("All");
  const [listRef, listIn] = useReveal();

  /** Newest first, so the AI pieces lead. */
  const posts = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const categories = useMemo(() => {
    const set = new Set();
    posts.forEach((p) => (p.category || []).forEach((c) => set.add(c)));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const visible = useMemo(
    () =>
      filter === "All"
        ? posts
        : posts.filter((p) => (p.category || []).includes(filter)),
    [posts, filter]
  );

  const [lead, ...rest] = visible;

  /** Pointer position as CSS variables — no re-render per mouse move. */
  const trackPointer = (e) => {
    const card = e.target.closest(".bl-card, .bl-lead");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div className="bl-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* ============================================ hero */}
      <section className="bl-hero">
        <div className="bl-hero-bg" aria-hidden="true">
          <span className="bl-orb bl-orb--a" />
          <span className="bl-orb bl-orb--b" />
          <span className="bl-hero-grid" />
        </div>

        <div className="bl-container">
          <nav className="bl-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Journal</span>
          </nav>

          <h1 className="bl-hero-title">
            What we've learned
            <span className="bl-hero-hl"> building it</span>.
          </h1>

          <p className="bl-hero-lede">
            Notes from real projects — what worked, what cost more than it
            should have, and what we'd do differently. Written by the people
            who shipped it.
          </p>

          <div className="bl-filters" role="tablist" aria-label="Filter by topic">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={c === filter}
                className={`bl-filter ${c === filter ? "is-active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ posts */}
      <section
        className={`bl-list ${listIn ? "is-in" : ""}`}
        ref={listRef}
        aria-live="polite"
      >
        {/* key on the filter so the stagger replays on every change */}
        <div className="bl-container" key={filter} onMouseMove={trackPointer}>
          {lead && (
            <Link to={`/blogs/${lead.id}`} className="bl-lead">
              <span className="bl-spot" aria-hidden="true" />

              <div className="bl-lead-art">
                <img src={lead.imageUrl} alt={lead.title} loading="eager" />
                <span className="bl-lead-shade" aria-hidden="true" />
                <span className="bl-flag">Latest</span>
              </div>

              <div className="bl-lead-body">
                <div className="bl-tags">
                  {(lead.category || []).map((c) => (
                    <em key={c}>{c}</em>
                  ))}
                </div>
                <h2>{lead.title}</h2>
                <p>{lead.fullDescription}</p>
                <div className="bl-meta">
                  <span>{lead.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lead.readTime}</span>
                  <span className="bl-go" aria-hidden="true">
                    Read
                    <svg viewBox="0 0 20 20">
                      <path d="M4 10h11M11 5l5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="bl-grid">
            {rest.map((p, i) => (
              <Link
                to={`/blogs/${p.id}`}
                className="bl-card"
                key={p.id}
                style={{ "--i": i }}
              >
                <span className="bl-spot" aria-hidden="true" />
                <span className="bl-edge" aria-hidden="true" />

                <div className="bl-card-art">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="bl-card-body">
                  <div className="bl-tags">
                    {(p.category || []).slice(0, 2).map((c) => (
                      <em key={c}>{c}</em>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.fullDescription}</p>
                  <div className="bl-meta">
                    <span>{p.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="bl-empty">Nothing filed under “{filter}” yet.</p>
          )}
        </div>
      </section>

      {/* ============================================ CTA */}
      <section className="bl-cta">
        <div className="bl-container">
          <div className="bl-cta-card">
            <span className="bl-cta-grid" aria-hidden="true" />
            <div>
              <h2>Got a project this applies to?</h2>
              <p>
                Send a brief — scope, timeline and a number come back within two
                working hours.
              </p>
            </div>
            <div className="bl-cta-actions">
              <Link to="/contact" className="bl-btn bl-btn--white">
                Start a project
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
              <a href={company.phone.href} className="bl-btn bl-btn--outline">
                {company.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
