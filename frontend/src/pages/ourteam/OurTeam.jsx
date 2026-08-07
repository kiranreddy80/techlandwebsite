import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import "./OurTeam.css";

const ceo = "/assets/media/Assets/ceo.jpeg";

/**
 * For now this page is a single thing: a message from the founder.
 *
 * The disciplines grid, the people grid and the "life at Techland" gallery are
 * commented out at the bottom of this file rather than deleted — they are ready
 * to switch back on once there is real team data and photography to carry them.
 */
const SIGNATURE = "Madhu Kadali";
/** Seconds each letter takes, and the gap before the next one starts. */
const LETTER_DUR = 0.34;
const LETTER_GAP = 0.13;

const OurTeam = () => {
  const seo = getSEO("team") || getSEO("home");
  const cardRef = useRef(null);

  /**
   * The signature waits until it is actually on screen before writing itself.
   * Firing on mount meant the whole thing had already finished by the time
   * anyone scrolled down to it.
   */
  const sigRef = useRef(null);
  const [signing, setSigning] = useState(false);

  useEffect(() => {
    const el = sigRef.current;
    if (!el) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setSigning(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSigning(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /**
   * Tilt the portrait toward the pointer. Written straight to the style
   * attribute as CSS variables so moving the mouse never re-renders React.
   */
  const trackPointer = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const resetPointer = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <div className="ot-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <section className="ot-note">
        <div className="ot-note-bg" aria-hidden="true">
          <span className="ot-orb ot-orb--a" />
          <span className="ot-orb ot-orb--b" />
          <span className="ot-grid" />
        </div>

        <div className="ot-container">
          <nav className="ot-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our Team</span>
          </nav>

          <div
            className="ot-note-grid"
            onMouseMove={trackPointer}
            onMouseLeave={resetPointer}
          >
            {/* ---- portrait, on a 3D stage ---- */}
            <div className="ot-portrait-stage">
              <figure className="ot-portrait" ref={cardRef}>
                <span className="ot-portrait-glow" aria-hidden="true" />
                <span className="ot-portrait-depth" aria-hidden="true" />
                <div className="ot-portrait-img">
                  <img
                    src={ceo}
                    alt="Madhu Kadali, Founder and CEO of Techland IT Solutions"
                    loading="eager"
                  />
                  <span className="ot-portrait-sheen" aria-hidden="true" />
                </div>
                <figcaption>
                  <b>Madhu Kadali</b>
                  <i>Founder &amp; CEO</i>
                </figcaption>
              </figure>
            </div>

            {/* ---- the message ---- */}
            <div className="ot-note-copy">
              <span className="ot-eyebrow">
                <span className="ot-eyebrow-line" aria-hidden="true" />
                A message from the founder
              </span>

              <h1 className="ot-note-title">
                We build software that
                <span className="ot-note-hl"> outlives the launch</span>.
              </h1>

              <blockquote className="ot-quote">
                <p>
                  I started Techland in 2024 because too many businesses were
                  being handed software they could not maintain — built fast,
                  handed over, then abandoned.
                </p>
                <p>
                  We do it differently. Strategy, design, engineering and growth
                  sit in the same room, so nothing is lost between hand-offs.
                  You talk to the people doing the work, not an account manager
                  relaying messages. And we stay on after launch, because the
                  third year matters more than the launch day.
                </p>
                <p>
                  {company.stats.clients} businesses have trusted us with that
                  so far. If you are weighing up a project, tell us the problem
                  — we will tell you honestly what it takes, and if we are not
                  the right fit we will say so.
                </p>
              </blockquote>

              <div className="ot-sign">
                {/* Signature that writes itself.
                    The name is real SVG text rather than an image, so it stays
                    selectable and readable to search engines; the stroke is
                    drawn with dashoffset, then the fill washes in behind it. */}
                <svg
                  ref={sigRef}
                  className={`ot-sig ${signing ? "is-signing" : ""}`}
                  viewBox="0 0 420 96"
                  role="img"
                  aria-label={SIGNATURE}
                >
                  <defs>
                    <linearGradient id="otSigInk" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#163198" />
                      <stop offset="55%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>

                  {/* One tspan per letter, each drawing its own outline in
                      turn — so the name is written character by character
                      rather than the whole word fading up at once. */}
                  <text className="ot-sig-stroke" x="4" y="62">
                    {SIGNATURE.split("").map((ch, i) => (
                      <tspan
                        key={`s-${i}`}
                        style={{ "--d": `${i * LETTER_GAP}s` }}
                      >
                        {ch}
                      </tspan>
                    ))}
                  </text>

                  {/* Ink flows in a beat behind the nib. */}
                  <text className="ot-sig-fill" x="4" y="62" aria-hidden="true">
                    {SIGNATURE.split("").map((ch, i) => (
                      <tspan
                        key={`f-${i}`}
                        style={{ "--d": `${i * LETTER_GAP + LETTER_DUR * 0.6}s` }}
                      >
                        {ch}
                      </tspan>
                    ))}
                  </text>

                  {/* The nib travels the line as the letters appear. */}
                  <circle
                    className="ot-sig-nib"
                    r="3.4"
                    cy="52"
                    aria-hidden="true"
                    style={{
                      "--run": `${SIGNATURE.length * LETTER_GAP + LETTER_DUR}s`,
                    }}
                  />

                  {/* The underline flick, drawn last. */}
                  <path
                    className="ot-sig-flick"
                    d="M6 76 C 90 88, 210 84, 300 72 C 330 68, 342 66, 352 70"
                    fill="none"
                    style={{
                      "--d": `${SIGNATURE.length * LETTER_GAP + LETTER_DUR * 0.4}s`,
                    }}
                  />
                </svg>

                <span className="ot-sign-role">
                  Founder &amp; CEO, {company.name}
                </span>
              </div>

              <div className="ot-note-cta">
                <Link to="/contact" className="ot-btn ot-btn--solid">
                  Start a conversation
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </Link>
                <a href={company.phone.href} className="ot-btn ot-btn--ghost">
                  {company.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Parked for now — switch back on when there is real team data and
          consistent photography behind them.

            • Disciplines grid  (frontend / backend / design / growth / QA)
            • People grid       (driven by GET /api/team)
            • Life at Techland  (driven by GET /api/activities)

          The styles for all three are still in OurTeam.css under the same
          class names, so re-enabling is a matter of restoring the markup.
      ------------------------------------------------------------------ */}
    </div>
  );
};

export default OurTeam;
