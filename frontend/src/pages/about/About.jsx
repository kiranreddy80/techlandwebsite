import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import "./About.css";

/* ---------------------------------------------------------------- content */

const stats = [
  { to: 350, suffix: "+", label: "Clients served" },
  { to: 156, suffix: "+", label: "Apps shipped" },
  { to: 96, suffix: "+", label: "Websites delivered" },
  { to: 12, suffix: "", label: "Sectors worked in" },
];

const pillars = [
  {
    key: "mission",
    numeral: "I",
    title: "Mission",
    lead: "Solve problems worth solving.",
    text: "Scalable digital solutions that streamline operations and improve customer experience — not features nobody asked for.",
  },
  {
    key: "vision",
    numeral: "II",
    title: "Vision",
    lead: "Bridge strategy and engineering.",
    text: "So our clients can take on opportunities they would otherwise have to pass up, with technology that holds under load.",
  },
  {
    key: "goal",
    numeral: "III",
    title: "Goal",
    lead: "Be judged on year three.",
    text: "Long partnerships over one-off projects. We stay on after launch, and the relationship is the deliverable.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Our beginning",
    text: "Founded in Hyderabad with a simple idea: build software that survives contact with real users.",
  },
  {
    year: "2025",
    title: "100+ projects delivered",
    text: "Across healthcare, retail, education, logistics and hospitality — mobile and web, often both.",
  },
  {
    year: "Late 2025",
    title: "Global expansion",
    text: "Work delivered for clients in the Gulf, Europe and North America alongside our Indian base.",
  },
  {
    year: "2026",
    title: "AI-driven delivery",
    text: "Automation woven into how we build and how our clients operate — not bolted on as a feature.",
  },
];

const practices = [
  {
    title: "Web Development",
    text: "Responsive sites and web applications built on modern stacks and measured after launch.",
    to: "/services/web-development",
    tags: ["React", "Node", "Headless CMS"],
  },
  {
    title: "Mobile App Development",
    text: "iOS and Android, native or cross-platform, from requirement analysis to store release.",
    to: "/services/mobile-app-development",
    tags: ["Flutter", "React Native"],
  },
  {
    title: "Digital Marketing",
    text: "SEO, paid, content and email, run against reporting you can actually read.",
    to: "/services/digital-marketing",
    tags: ["SEO", "PPC", "Analytics"],
  },
  {
    title: "Custom Software",
    text: "Bespoke platforms, internal tooling and integrations designed around your domain.",
    to: "/services/custom-software-development",
    tags: ["APIs", "Cloud-native"],
  },
  {
    title: "UI / UX Design",
    text: "Research, prototypes and a design system your engineers can build straight from.",
    to: "/services/ui-ux-design",
    tags: ["Research", "Design systems"],
  },
];

/** Real project artwork, replacing the template's stock illustrations. */
const showcase = [
  { src: "/assets/media/Assets/Projectimg/nudealweb.png", alt: "Nudeal e-commerce website" },
  { src: "/assets/media/Assets/Projectimg/meato.png", alt: "MeatO food delivery app" },
  { src: "/assets/media/Assets/Projectimg/templecityweb.png", alt: "Temple City platform" },
  { src: "/assets/media/Assets/Projectimg/sapid.png", alt: "SAPID hospitality app" },
  { src: "/assets/media/Assets/Projectimg/savaari.png", alt: "Savaari travel platform" },
  { src: "/assets/media/Assets/Projectimg/findHR.png", alt: "FindHR recruitment platform" },
];

/* ------------------------------------------------------------------ hooks */

/**
 * Adds `.is-in` to an element the first time it enters the viewport.
 *
 * Reveals fire once rather than tracking scroll position — content that fades
 * back out as you scroll up reads as a rendering fault, not as polish.
 */
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
      { threshold: 0.18, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};

/** Counts 0 → target once visible, easing out so it settles rather than stops. */
const Counter = ({ to, suffix = "", run }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }

    let raf;
    const start = performance.now();
    const DURATION = 1500;

    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return (
    <span className="ab-stat-n">
      {n}
      <span className="ab-stat-u">{suffix}</span>
    </span>
  );
};

/* ------------------------------------------------------------------- page */

const About = () => {
  const seo = getSEO("about");

  const [statsRef, statsIn] = useReveal();
  const [storyRef, storyIn] = useReveal();
  const [pillarsRef, pillarsIn] = useReveal();
  const [lineRef, lineIn] = useReveal({ threshold: 0.12 });
  const [gridRef, gridIn] = useReveal();

  /**
   * Feed the pointer position to CSS as --mx / --my so each pillar's spotlight
   * can follow the cursor. Written straight to the style attribute rather than
   * held in state, so moving the mouse never triggers a re-render.
   */
  const trackPointer = (e) => {
    const card = e.target.closest(".ab-pillar");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div className="ab-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* ============================================ hero */}
      <section className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <span className="ab-orb ab-orb--a" />
          <span className="ab-orb ab-orb--b" />
          <span className="ab-hero-grid" />
        </div>

        <div className="ab-container">
          <nav className="ab-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>

          <h1 className="ab-hero-title">
            We build software that
            <span className="ab-hero-hl"> outlives the launch</span>.
          </h1>

          <p className="ab-hero-lede">
            Techland IT Solutions is an engineering partner in Madhapur,
            Hyderabad. Since 2024 we have designed, built and maintained apps,
            websites and marketing programmes for {company.stats.clients}{" "}
            businesses across India and abroad — all of it in-house.
          </p>

          <div className="ab-hero-cta">
            <Link to="/contact" className="ab-btn ab-btn--solid">
              Start a project
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </Link>
            <Link to="/portfolio" className="ab-btn ab-btn--ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ stats */}
      <section
        className={`ab-stats ${statsIn ? "is-in" : ""}`}
        ref={statsRef}
        aria-label="By the numbers"
      >
        <div className="ab-container">
          <ul className="ab-stat-row">
            {stats.map((s, i) => (
              <li key={s.label} style={{ "--i": i }}>
                <Counter to={s.to} suffix={s.suffix} run={statsIn} />
                <span className="ab-stat-l">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ story */}
      <section className={`ab-story ${storyIn ? "is-in" : ""}`} ref={storyRef}>
        <div className="ab-container ab-story-grid">
          <div className="ab-story-copy">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-line" aria-hidden="true" />
              Who we are
            </span>
            <h2 className="ab-h2">
              One team, from the first sketch to the
              <span className="ab-h2-hl"> hundredth release</span>.
            </h2>
            <p>
              Most agencies hand your project between a design shop, a dev shop
              and a marketing shop. We don't. Strategy, design, engineering and
              growth sit in the same room, which is why our estimates hold and
              our handovers don't lose anything.
            </p>
            <p>
              We work in two-week sprints with a staging link you can open any
              day of the week. You see the thing being built while it is being
              built — not at the end, when changing it is expensive.
            </p>

            <ul className="ab-story-points">
              <li>In-house team — no subcontracting</li>
              <li>Fixed-scope quote or sprint rate, your choice</li>
              <li>Documentation and runbooks at handover</li>
              <li>Support that continues after go-live</li>
            </ul>
          </div>

          {/* Real project artwork rather than the template's stock illustrations */}
          <div className="ab-collage" aria-hidden="true">
            {showcase.map((s, i) => (
              <figure key={s.src} style={{ "--i": i }}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ pillars */}
      <section
        className={`ab-pillars ${pillarsIn ? "is-in" : ""}`}
        ref={pillarsRef}
      >
        <div className="ab-container">
          <header className="ab-head">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-line" aria-hidden="true" />
              What drives us
            </span>
            <h2 className="ab-h2 ab-h2--center">
              Mission, vision and the <span className="ab-h2-hl">long game</span>.
            </h2>
          </header>

          <div className="ab-pillar-grid" onMouseMove={trackPointer}>
            {pillars.map((p, i) => (
              <article className="ab-pillar" key={p.key} style={{ "--i": i }}>
                <span className="ab-pillar-spot" aria-hidden="true" />
                <span className="ab-pillar-edge" aria-hidden="true" />
                <span className="ab-pillar-numeral" aria-hidden="true">
                  {p.numeral}
                </span>

                <span className="ab-pillar-k">{p.title}</span>
                <p className="ab-pillar-lead">{p.lead}</p>
                <p className="ab-pillar-text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ milestones */}
      <section className={`ab-line ${lineIn ? "is-in" : ""}`} ref={lineRef}>
        <div className="ab-container">
          <header className="ab-head">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-line" aria-hidden="true" />
              How we got here
            </span>
            <h2 className="ab-h2 ab-h2--center">
              Short history, <span className="ab-h2-hl">steep curve</span>.
            </h2>
          </header>

          <ol className="ab-timeline">
            <span className="ab-rail" aria-hidden="true">
              <span className="ab-rail-fill" />
            </span>

            {milestones.map((m, i) => (
              <li key={m.year} style={{ "--i": i }}>
                <span className="ab-dot" aria-hidden="true" />
                <span className="ab-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================ practices */}
      <section className={`ab-grid-sec ${gridIn ? "is-in" : ""}`} ref={gridRef}>
        <div className="ab-container">
          <header className="ab-head">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-line" aria-hidden="true" />
              What we do
            </span>
            <h2 className="ab-h2 ab-h2--center">
              Five practices, <span className="ab-h2-hl">one roof</span>.
            </h2>
          </header>

          <div className="ab-practices">
            {practices.map((p, i) => (
              <Link
                className="ab-practice"
                to={p.to}
                key={p.title}
                style={{ "--i": i }}
              >
                <span className="ab-practice-n">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3>{p.title}</h3>

                <span className="ab-practice-body">
                  <p>{p.text}</p>
                  <span className="ab-practice-tags">
                    {p.tags.map((t) => (
                      <em key={t}>{t}</em>
                    ))}
                  </span>
                </span>

                <span className="ab-practice-go" aria-hidden="true">
                  <svg viewBox="0 0 20 20">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ CTA */}
      <section className="ab-cta">
        <div className="ab-container">
          <div className="ab-cta-card">
            <span className="ab-cta-grid" aria-hidden="true" />
            <div>
              <h2>Let's talk about what you're building.</h2>
              <p>
                Send a short brief — scope, timeline and a number come back
                within two working hours.
              </p>
            </div>
            <div className="ab-cta-actions">
              <Link to="/contact" className="ab-btn ab-btn--white">
                Start a project
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
              <a href={company.phone.href} className="ab-btn ab-btn--outline">
                {company.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
