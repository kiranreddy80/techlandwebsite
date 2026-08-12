import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import "./OurTeam.css";

const ceo = "/assets/media/Assets/ceo.webp";

/**
 * The team, as a horizontal strip of photographs rather than a grid of
 * headshots.
 *
 * Files come from /team-gallery, which holds web-sized .webp copies of the
 * originals in Assets/. The originals are 4000-5000px and up to 3.5MB each —
 * eleven megabytes for nine pictures — so they are resized to 1400px on the
 * way in. Regenerate that folder if better photographs arrive.
 *
 * `span` sets how wide a card sits in the rail. Mixing the three keeps the
 * strip from marching past at one monotonous width; it is the difference
 * between a contact sheet and a spread.
 *
 * Captions stay factual. Where a photograph carries its own label — the
 * testing and admin team shots do — that label is what it says here.
 */
const GALLERY = "/assets/media/Assets/team-gallery";

const PHOTOS = [
  { file: "whole-team.webp", title: "Everyone, in one frame", tag: "The team", span: "wide" },
  { file: "offsite.webp", title: "Out of the office", tag: "Together", span: "wide" },
  { file: "desks-1.webp", title: "A normal Tuesday", tag: "At work", span: "regular" },
  { file: "testing-team.webp", title: "Testing team", tag: "Departments", span: "regular" },
  { file: "studio.webp", title: "Heads down", tag: "At work", span: "wide" },
  { file: "admin-team.webp", title: "Admin team", tag: "Departments", span: "regular" },
  { file: "celebration.webp", title: "Reason to celebrate", tag: "Together", span: "wide" },
  { file: "birthday.webp", title: "Birthdays get cake", tag: "Together", span: "narrow" },
  { file: "desks-2.webp", title: "Shipping something", tag: "At work", span: "regular" },
];

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
   * The gallery fades its cards in as it arrives, staggered by --i.
   * Same guard as the signature: no observer, or reduced motion, means show
   * everything at once rather than leaving the section invisible.
   */
  const peopleRef = useRef(null);
  const [peopleIn, setPeopleIn] = useState(false);

  useEffect(() => {
    const el = peopleRef.current;
    if (!el) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPeopleIn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPeopleIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ------------------------------------------------------ the photo rail */
  const railRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** Where we are along the strip, for the progress bar and the arrows. */
  const readPosition = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    readPosition();
    el.addEventListener("scroll", readPosition, { passive: true });
    window.addEventListener("resize", readPosition);
    return () => {
      el.removeEventListener("scroll", readPosition);
      window.removeEventListener("resize", readPosition);
    };
  }, []);

  /** Step by roughly one card, whatever the card widths happen to be. */
  const nudge = (direction) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector(".tg-card");
    const step = card ? card.getBoundingClientRect().width + 18 : el.clientWidth * 0.8;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: smooth ? "smooth" : "auto" });
  };

  /**
   * The strip advances on its own, so the photographs are seen rather than
   * waiting to be discovered.
   *
   * It yields to the visitor rather than competing: hovering, focusing,
   * touching or dragging holds it, and it resumes a moment after they stop.
   * At the far end it returns to the beginning instead of stalling. Anyone
   * who has asked for reduced motion gets no movement at all — an animation
   * that never stops is precisely what that setting is for.
   */
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = railRef.current;
    if (!el) return;

    const id = setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;

      const card = el.querySelector(".tg-card");
      const step = card ? card.getBoundingClientRect().width + 18 : el.clientWidth * 0.8;

      // Within a card's width of the end counts as the end — snapping can
      // leave a few pixels behind and we would otherwise never wrap.
      const atTheEnd = el.scrollLeft >= max - step * 0.5;
      el.scrollTo({ left: atTheEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 3400);

    return () => clearInterval(id);
  }, [paused]);

  /** Hold the rotation briefly after any manual interaction. */
  const holdBriefly = useRef(null);
  const pauseThenResume = () => {
    setPaused(true);
    clearTimeout(holdBriefly.current);
    holdBriefly.current = setTimeout(() => setPaused(false), 5000);
  };
  useEffect(() => () => clearTimeout(holdBriefly.current), []);

  /**
   * Click-and-drag panning, for anyone on a mouse who does not have a
   * horizontal wheel. Pointer capture keeps the gesture alive if the cursor
   * leaves the rail mid-drag, and the drag flag suppresses the click that
   * would otherwise fire on release.
   */
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e) => {
    if (e.pointerType === "touch") return; // native touch scrolling is better
    const el = railRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    const el = railRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = (e) => {
    const el = railRef.current;
    if (el && drag.current.active) el.releasePointerCapture?.(e.pointerId);
    drag.current.active = false;
  };

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

      {/* ------------------------------------------------------- the gallery */}
      <section
        className={`tg ${peopleIn ? "is-in" : ""}`}
        ref={peopleRef}
        aria-labelledby="ot-team-heading"
      >
        <div className="ot-container">
          <div className="tg-head">
            <div>
              <span className="ot-eyebrow">
                <span className="ot-eyebrow-line" aria-hidden="true" />
                Life at Techland
              </span>
              <h2 className="ot-h2" id="ot-team-heading">
                The people behind <span className="ot-h2-hl">the work</span>.
              </h2>
            </div>

            {/* Controls sit beside the heading rather than under the strip,
                where they would compete with the photographs. */}
            <div className="tg-controls">
              <button
                type="button"
                className="tg-arrow"
                onClick={() => { nudge(-1); pauseThenResume(); }}
                disabled={atStart}
                aria-label="Previous photographs"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M12 4 L6 10 L12 16" />
                </svg>
              </button>
              <button
                type="button"
                className="tg-arrow"
                onClick={() => { nudge(1); pauseThenResume(); }}
                disabled={atEnd}
                aria-label="More photographs"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M8 4 L14 10 L8 16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* The rail runs to the right edge of the window on purpose — a strip
            that stops at the container looks like a component; one that runs
            off the page reads as something you can keep pulling. */}
        <div
          className="tg-rail"
          ref={railRef}
          tabIndex={0}
          role="group"
          aria-label="Photographs of the Techland team. Scroll sideways."
          onPointerDown={(e) => { setPaused(true); onPointerDown(e); }}
          onPointerMove={onPointerMove}
          onPointerUp={(e) => { endDrag(e); pauseThenResume(); }}
          onPointerCancel={(e) => { endDrag(e); pauseThenResume(); }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={pauseThenResume}
        >
          {PHOTOS.map((shot, i) => (
            <figure
              className={`tg-card tg-card--${shot.span}`}
              key={shot.file}
              style={{ "--i": i }}
            >
              <div className="tg-frame">
                <img
                  src={`${GALLERY}/${shot.file}`}
                  alt={`${shot.title} — the team at ${company.name}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
                <span className="tg-scrim" aria-hidden="true" />
              </div>
              <figcaption className="tg-cap">
                <span className="tg-tag">{shot.tag}</span>
                <span className="tg-title">{shot.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="ot-container">
          <div className="tg-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Still parked — switch back on when there is data behind them.

            • Disciplines grid  (frontend / backend / design / growth / QA)
            • Life at Techland  (driven by GET /api/activities)

          The styles for both are still in OurTeam.css under the same class
          names, so re-enabling is a matter of restoring the markup.
      ------------------------------------------------------------------ */}
    </div>
  );
};

export default OurTeam;
