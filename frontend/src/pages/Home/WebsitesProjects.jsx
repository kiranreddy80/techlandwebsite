import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../portfolio/projectsData";
import api from "../../services/api";
import config from "../../config";
import company from "../../config/company";

const ROTATE_MS = 2000;

const WebsitesProjects = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const backendUrl = config.ASSETS_URL;

  const formatCategoryForUrl = (category) => {
    const safeCategory = category || "uncategorized";
    return safeCategory.toLowerCase().replace(/ /g, "-");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setDynamicProjects(data.filter(p => p.isActive !== false && (p.platform === "Web" || !p.platform)));
      } catch (error) {
        console.error("Error fetching web projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const webProjects = useMemo(() => {
    const staticWebProjects = [];

    Object.keys(categories).forEach((categoryKey) => {
      const categoryProjects = categories[categoryKey];
      const webProjectsInCategory = categoryProjects
        .filter((project) => project.platform === "Web")
        .map((project) => ({
          ...project,
          category: categoryKey,
          compositeId: project.id
            ? `${categoryKey}-${project.id}`
            : `${categoryKey}-${project.title.replace(/\s+/g, "-")}`,
        }));
      staticWebProjects.push(...webProjectsInCategory);
    });

    const mappedDynamic = dynamicProjects.map(p => ({
      ...p,
      compositeId: p._id,
      category: p.category || "General",
      image: p.image.startsWith("http") ? p.image : `${backendUrl}${p.image}`
    }));

    // Show 2 dynamic (if available) and fill rest with static
    const combined = [...mappedDynamic, ...staticWebProjects];
    return combined.slice(0, 7);
  }, [dynamicProjects]);

  /**
   * One card, changing in place.
   *
   * This used to render all seven projects stacked down the page, which made
   * the section enormous and repetitive. Now a single card holds the spot and
   * cycles through them.
   *
   * Rotation stops while the pointer is over the card, so a project never
   * slides away from under someone reading it.
   */
  useEffect(() => {
    if (paused || webProjects.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % webProjects.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, webProjects.length]);

  const goTo = (i) => setActive(i);

  const project = webProjects[active];

  return (
    <section
      className="bg-smoke space wp-section"
      style={{ backgroundImage: "url(/assets/img/bg/team_bg_1.webp)" }}
    >
      <style>{`
        /* ============================================================
           POLISH LAYER — scoped to .wp-section so none of it leaks into
           the other places the template's .blog-grid4 classes are used.
           ============================================================ */

        .wp-section { position: relative; isolation: isolate; overflow: hidden; }

        /* Soft brand light behind the section, matching the services block. */
        .wp-section::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(760px 420px at 8% 0%, rgba(22,49,152,0.07), transparent 62%),
            radial-gradient(720px 420px at 96% 100%, rgba(124,58,237,0.08), transparent 62%);
        }

        /* --- Left column follows you down the list on desktop --- */
        @media (min-width: 992px) {
          .wp-intro { position: sticky; top: 120px; }
        }

        /* --- Cards: lift, gradient edge, and a wash that fades up --- */
        .wp-section .blog-grid4 {
          position: relative;
          isolation: isolate;
          border-radius: 18px;
          background: #ffffff;
          overflow: hidden;
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.55s ease;
        }
        .wp-section .blog-grid4::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(180deg, transparent 45%, rgba(79,70,229,0.06));
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        /* Gradient hairline drawn with a masked border. */
        .wp-section .blog-grid4::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          pointer-events: none;
          background: linear-gradient(130deg, rgba(22,49,152,0.55), rgba(124,58,237,0.5));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .wp-section .blog-grid4:hover {
          transform: translateY(-5px);
          box-shadow: 0 34px 66px -30px rgba(79,70,229,0.4),
                      0 12px 26px -16px rgba(10,10,10,0.12);
        }
        .wp-section .blog-grid4:hover::before,
        .wp-section .blog-grid4:hover::after { opacity: 1; }

        /* --- Image: zoom on hover, with a sheen pass --- */
        .wp-section .blog-img {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          isolation: isolate;
        }
        .wp-section .blog-img img {
          display: block;
          width: 100%;
          transition: transform 0.85s cubic-bezier(0.22,1,0.36,1);
          will-change: transform;
        }
        .wp-section .blog-grid4:hover .blog-img img { transform: scale(1.07); }
        .wp-section .blog-img::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          left: -70%;
          width: 55%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.34), transparent);
          transform: skewX(-16deg);
        }
        .wp-section .blog-grid4:hover .blog-img::after {
          animation: wpSheen 0.9s cubic-bezier(0.3,0.8,0.4,1);
        }
        @keyframes wpSheen {
          from { left: -70%; }
          to   { left: 140%; }
        }

        /* --- Title picks up the brand gradient on hover --- */
        .wp-section .box-title {
          transition: color 0.35s ease;
          background-image: linear-gradient(120deg, #163198, #4f46e5, #7c3aed);
          background-size: 100% 100%;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .wp-section .blog-grid4:hover .box-title {
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* --- Buttons: arrow leads the way out --- */
        .wp-section .th-btn i { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .wp-section .th-btn:hover i { transform: translateX(4px); }

        /* --- Left column ---
           Replaces the template block (sec_title_static / sub-title /
           th-btn style4 and a decorative "blog-present.png") with type,
           two figures and one link. */
        .wp-intro {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 8px;
        }
        @media (max-width: 991px) { .wp-intro { margin-bottom: 34px; } }

        .wp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(10,10,10,0.4);
        }
        .wp-eyebrow-line {
          width: 26px; height: 1px;
          background: linear-gradient(to right, transparent, #4f46e5);
        }

        .wp-title {
          margin: 20px 0 0;
          font-family: "Play", sans-serif;
          font-weight: 400;
          font-size: clamp(1.85rem, 2.6vw + 0.6rem, 2.7rem);
          line-height: 1.08;
          letter-spacing: -0.036em;
          color: #0a0a0a;
          max-width: 14ch;
          text-wrap: balance;
        }
        .wp-title-hl {
          font-weight: 700;
          background: linear-gradient(135deg, #163198, #4f46e5 50%, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }

        .wp-lede {
          margin: 18px 0 0;
          font-size: 15.5px; line-height: 1.7;
          color: rgba(10,10,10,0.55);
          max-width: 40ch;
        }

        .wp-figures {
          list-style: none; margin: 30px 0 0; padding: 24px 0 0;
          border-top: 1px solid rgba(10,10,10,0.09);
          display: flex; flex-wrap: wrap; gap: 16px 44px;
          width: 100%;
        }
        .wp-figures li { display: flex; flex-direction: column; gap: 3px; }
        .wp-figures b {
          font-family: "Play", sans-serif;
          font-size: 1.9rem; font-weight: 700;
          letter-spacing: -0.04em; line-height: 1;
          font-variant-numeric: tabular-nums;
          background: linear-gradient(135deg, #163198, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wp-figures span {
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(10,10,10,0.38);
        }

        .wp-cta {
          margin-top: 30px;
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px;
          border-radius: 999px;
          font-family: "Play", sans-serif;
          font-size: 14px; font-weight: 640; letter-spacing: -0.01em;
          text-decoration: none; color: #fff;
          background: linear-gradient(120deg, #163198, #4f46e5 55%, #7c3aed);
          box-shadow: 0 18px 40px -18px rgba(79,70,229,0.7);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .wp-cta:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 24px 52px -18px rgba(79,70,229,0.85);
        }
        .wp-cta svg {
          width: 16px; height: 16px;
          fill: none; stroke: currentColor;
          stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .wp-cta:hover svg { transform: translateX(3px); }

        /* --- One card, holding its place, scrolling vertically --- */
        .wp-rotator { position: relative; }

        /* The window. Everything outside it is clipped, so each card slides
           up and out while the next rises into the same spot. */
        .wp-viewport {
          position: relative;
          overflow: hidden;
          height: 340px;
          border-radius: 18px;
        }
        .wp-track {
          display: flex;
          flex-direction: column;
          height: 100%;
          /* Kept well under the 2s cycle so each card is still and readable
             for most of its turn rather than permanently in motion. */
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        /* Each slide is exactly one window tall, so translateY(-N * 100%)
           always lands a card perfectly in frame. */
        .wp-slide {
          flex: 0 0 100%;
          height: 100%;
          min-height: 0;
        }
        .wp-slide .blog-grid4 {
          height: 100%;
          margin: 0;
        }
        /* Cards waiting their turn recede slightly — a hint of depth as the
           column moves, without dimming the one you're reading. */
        .wp-slide { opacity: 0.35; transition: opacity 0.45s ease; }
        .wp-slide.is-active { opacity: 1; }

        .wp-text {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Below the two-column breakpoint the card stacks and grows, so the
           fixed window would clip it. Show the active card at natural height
           instead and drop the sliding. */
        @media (max-width: 991px) {
          .wp-viewport { height: auto; overflow: visible; }
          .wp-track { transform: none !important; height: auto; }
          .wp-slide { flex: none; height: auto; opacity: 1; }
          .wp-slide:not(.is-active) { display: none; }
          .wp-slide .blog-grid4 { height: auto; }
        }

        /* --- Progress dots --- */
        .wp-dots {
          display: flex;
          gap: 8px;
          margin-top: 22px;
          justify-content: center;
        }
        @media (min-width: 992px) { .wp-dots { justify-content: flex-start; padding-left: 4px; } }
        .wp-dot {
          position: relative;
          width: 30px;
          height: 4px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(10,10,10,0.13);
          cursor: pointer;
          overflow: hidden;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s ease;
        }
        .wp-dot:hover { background: rgba(10,10,10,0.24); }
        .wp-dot.is-active { width: 58px; background: rgba(79,70,229,0.18); }
        /* The fill doubles as a countdown to the next change. */
        .wp-dot-fill {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, #163198, #7c3aed);
          transform-origin: left center;
          transform: scaleX(0);
        }
        .wp-dot.is-active .wp-dot-fill {
          animation-name: wpCountdown;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes wpCountdown {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .wp-intro { position: static; }
          .wp-section .blog-grid4,
          .wp-section .blog-grid4::before,
          .wp-section .blog-grid4::after,
          .wp-section .blog-img img,
          .wp-section .box-title,
          .wp-section .th-btn i {
            transition: none !important;
            transform: none !important;
          }
          .wp-section .blog-grid4:hover { transform: none !important; }
          .wp-section .blog-grid4:hover .blog-img img { transform: none !important; }
          .wp-section .blog-grid4:hover .blog-img::after { animation: none !important; }
          .wp-cta, .wp-cta svg { transition: none !important; }
          .wp-cta:hover { transform: none !important; }
          /* Auto-rotation is already disabled in JS; kill the visuals too. */
          .wp-track { transition: none !important; }
          .wp-slide { transition: none !important; }
          .wp-dot.is-active .wp-dot-fill { animation: none !important; transform: scaleX(1); }
          .wp-dot { transition: none !important; }
        }
      `}</style>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="wp-intro">
              <span className="wp-eyebrow">
                <span className="wp-eyebrow-line" aria-hidden="true" />
                Our website projects
              </span>

              <h2 className="wp-title">
                Turning ideas into
                <span className="wp-title-hl"> things people use</span>.
              </h2>

              <p className="wp-lede">
                Marketing sites, platforms and e-commerce builds — designed,
                engineered and measured after launch, not handed over and
                forgotten.
              </p>

              {/* Counts derived from the live list, so they cannot drift. */}
              <ul className="wp-figures">
                <li>
                  <b>{company.stats.websites}</b>
                  <span>Websites delivered</span>
                </li>
                <li>
                  <b>{webProjects.length}</b>
                  <span>Featured here</span>
                </li>
              </ul>

              <Link to="/portfolio" className="wp-cta">
                See all projects
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column — one card, cycling in place */}
          <div className="col-lg-7">
            {project && (
                <div
                  className="wp-rotator"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                >
                  {/* A fixed window. The track slides up by exactly one card
                      each time, so the outgoing project is visibly replaced
                      by the next rather than swapped behind a fade. */}
                  <div className="wp-viewport">
                    <div
                      className="wp-track"
                      style={{ transform: `translateY(-${active * 100}%)` }}
                    >
                      {webProjects.map((p, i) => {
                        const text = p.project_overview || p.description;
                        return (
                          <div
                            className={`wp-slide ${i === active ? "is-active" : ""}`}
                            key={p.compositeId}
                            aria-hidden={i !== active}
                          >
                            <div className="blog-grid4 th-ani style4 p-4">
                              <div className="box-content">
                                <h3 className="box-title">{p.title}</h3>
                                <p className="wp-text">{text}</p>

                                <Link
                                  to={`/portfolio/${formatCategoryForUrl(
                                    p.category
                                  )}/${p.compositeId}`}
                                  className="th-btn style4 th-icon mt-2"
                                  tabIndex={i === active ? 0 : -1}
                                >
                                  View Project Details{" "}
                                  <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                              </div>

                              <div className="blog-img global-img">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Which project you're on, and a way to jump */}
                  {webProjects.length > 1 && (
                    <div className="wp-dots" role="tablist" aria-label="Website projects">
                      {webProjects.map((p, i) => (
                        <button
                          key={p.compositeId}
                          type="button"
                          role="tab"
                          aria-selected={i === active}
                          aria-label={p.title}
                          title={p.title}
                          className={`wp-dot ${i === active ? "is-active" : ""}`}
                          onClick={() => goTo(i)}
                        >
                          <span
                            className="wp-dot-fill"
                            style={{
                              animationDuration: `${ROTATE_MS}ms`,
                              animationPlayState:
                                i === active && !paused ? "running" : "paused",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesProjects;
