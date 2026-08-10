import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import "./OurTeam.css";

const ceo = "/assets/media/Assets/ceo.webp";

/**
 * The core team, shown under the founder's note.
 *
 * `photo` points at the .webp in /core-team — every portrait in that folder
 * already has one, and they are roughly a tenth the size of the .jpeg beside
 * them. Spaces are percent-encoded so the filenames survive as URLs.
 *
 * `role` is deliberately optional: a member without one renders as a name and
 * a portrait, and nothing is invented to fill the gap. Add the real titles here
 * and they appear under each face automatically.
 */
const PHOTOS = "/assets/media/Assets/core-team";
const portrait = (file) => `${PHOTOS}/${encodeURIComponent(file)}`;

const TEAM = [
  // Jagadiswari's portrait is still filed as "HR (1)" — the name the photo
  // arrived with, not a department. Renaming the file is safe whenever
  // someone wants to; only this line points at it.
  { name: "Jagadiswari", role: "HR Department", photo: portrait("HR (1).webp") },
  { name: "Ram", role: "Mobile Developer Lead", photo: portrait("ram.webp") },
  { name: "Harsh", role: "Backend Lead", photo: portrait("harsh.webp") },
  { name: "Bhargavi", role: "Design Head", photo: portrait("Bhargavi.webp") },
  { name: "Vinay Kumar", role: "Sales Head", photo: portrait("Vinay Kumar.webp") },
  { name: "Sathish", role: "Lead Tester", photo: portrait("sathish.webp") },
  { name: "Yashwanth", role: "Frontend Developer Lead", photo: portrait("Yashwanth.webp") },
  { name: "Raaja", role: "Social Media Head", photo: portrait("raaja.webp") },
  { name: "Yesu", role: "MERN Developer", photo: portrait("Yesu.webp") },
  { name: "Vicky", role: "Android Developer", photo: portrait("vicky.webp") },
  { name: "Keerthana", role: "Tester", photo: portrait("keerthana.webp") },
  { name: "Pradeep", role: "Sales Department", photo: portrait("pradeep.webp") },
  // Two different people share the first name; the AWS portrait is the
  // DevOps one, the other is the tester above.
  { name: "Sathish", role: "DevOps Lead", photo: portrait("sathish_aws.webp") },
];

/** Fallback for a member with no portrait — "Vinay Kumar" becomes "VK". */
const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

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
   * The people grid fades its faces in as it arrives, staggered by --i.
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

      {/* ---------------------------------------------------------- people */}
      <section
        className={`ot-people ${peopleIn ? "is-in" : ""}`}
        ref={peopleRef}
        aria-labelledby="ot-team-heading"
      >
        <div className="ot-container">
          <div className="ot-head">
            <span className="ot-eyebrow">
              <span className="ot-eyebrow-line" aria-hidden="true" />
              The core team
            </span>
            <h2 className="ot-h2" id="ot-team-heading">
              The people behind{" "}
              <span className="ot-h2-hl">the work</span>.
            </h2>
          </div>

          <div className="ot-people-grid">
            {TEAM.map((member, i) => (
              <article
                className="ot-person"
                key={`${member.name}-${i}`}
                style={{ "--i": i }}
              >
                <div className="ot-person-art">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.name}, ${company.shortName}`}
                      loading="lazy"
                      decoding="async"
                      width="220"
                      height="220"
                    />
                  ) : (
                    <span className="ot-person-initials" aria-hidden="true">
                      {initials(member.name)}
                    </span>
                  )}
                  <span className="ot-person-ring" aria-hidden="true" />
                </div>
                <h3>{member.name}</h3>
                {member.role && <p>{member.role}</p>}
              </article>
            ))}
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
