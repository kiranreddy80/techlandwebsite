import React, { useMemo } from "react";
import staticTestimonials from "./testimonialsData";
import useApiWithFallback from "../../utils/useApiWithFallback";

const COLUMNS = 3;

/** "Trust Labs" → "TL". Used when a testimonial has no logo. */
const initials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase();

const Stars = ({ n = 5 }) => (
  <span className="ts-stars" aria-label={`${n} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={i < n ? "is-on" : ""} aria-hidden="true">
        <path d="M10 1.6l2.47 5.3 5.53.72-4.06 3.9 1.03 5.68L10 14.5l-4.97 2.7 1.03-5.68L2 7.62l5.53-.72L10 1.6z" />
      </svg>
    ))}
  </span>
);

const HomeTestimonials = () => {
  // Testimonials added in the admin panel replace the bundled ones once the API
  // is reachable; otherwise the section still renders.
  const { items } = useApiWithFallback(
    "/testimonials",
    (t) => ({
      id: t._id,
      rating: Math.round(Number(t.rating ?? 5)),
      text: t.message,
      author: t.name,
      designation: t.designation,
    }),
    staticTestimonials
  );

  /**
   * Deal the testimonials into three columns, then repeat each column once.
   *
   * The duplicate is what makes the scroll seamless: the track travels exactly
   * -50% and restarts, which lands on an identical frame. Without it the
   * column would visibly snap back at the end of every pass.
   */
  const columns = useMemo(() => {
    const source = items?.length ? items : [];
    if (!source.length) return [];

    const cols = Array.from({ length: COLUMNS }, () => []);
    source.forEach((t, i) => cols[i % COLUMNS].push(t));

    // A short column scrolls out of view too quickly — pad it so every column
    // has enough cards to cover its own height before repeating.
    return cols.map((col) => {
      const filled = col.length ? col : source;
      const padded = filled.length < 3 ? [...filled, ...filled] : filled;
      return [...padded, ...padded];
    });
  }, [items]);

  return (
    <section className="ts-section" id="testi-sec">
      <div className="ts-bg" aria-hidden="true">
        <span className="ts-orb ts-orb--a" />
        <span className="ts-orb ts-orb--b" />
        <span className="ts-grid" />
      </div>

      <div className="ts-container">
        <header className="ts-head">
          <span className="ts-eyebrow">
            <span className="ts-eyebrow-line" aria-hidden="true" />
            Testimonials
          </span>
          <h2 className="ts-title">
            Real feedback from <span className="ts-title-hl">real clients</span>.
          </h2>
          <p className="ts-lede">
            Every word below came from a project we shipped — no stock quotes,
            no invented names.
          </p>
        </header>

        <div className="ts-wall">
          {columns.map((col, ci) => (
            <div className="ts-col" key={ci} style={{ "--dur": `${38 + ci * 9}s` }}>
              <div className={`ts-track ${ci % 2 === 1 ? "is-reverse" : ""}`}>
                {col.map((t, i) => (
                  <article className="ts-card" key={`${t.id}-${i}`}>
                    {/* API items carry `rating`; the bundled fallback carries
                        `review` as a string ("5.0"). Accept either. */}
                    <Stars n={Math.round(Number(t.rating ?? t.review ?? 5)) || 5} />

                    <p className="ts-quote">“{t.text}”</p>

                    <span className="ts-rule" aria-hidden="true" />

                    <footer className="ts-by">
                      {/* Initials, not photos — the stored images are seed
                          placeholders, and a uniform monogram keeps the wall
                          reading as one system. */}
                      <span className="ts-avatar">{initials(t.author)}</span>
                      <span className="ts-who">
                        <b>{t.author}</b>
                        {t.designation && <i>{t.designation}</i>}
                      </span>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ============================================================
           TESTIMONIALS — a wall of quotes

           Three columns drifting at different speeds, the middle one
           against the other two.

           Light ground on purpose: every section around this one is
           white, and a dark block in the middle of them read as a hole
           in the page rather than as emphasis. The colour here comes
           from the cards and the accents, not from the backdrop.
           ============================================================ */
        .ts-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          /* Trailing padding trimmed: the FAQ section below opens with its own
             generous top padding, and the two stacked into a large empty band
             under the last review. The lead-in above is unchanged. */
          padding: 96px 0 56px;
          background: #ffffff;
          color: #0a0a0a;
        }
        @media (min-width: 1024px) { .ts-section { padding: 124px 0 72px; } }

        .ts-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .ts-bg::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, #ffffff 0%, #fafaff 55%, #ffffff 100%);
          z-index: -1;
        }
        .ts-orb { position: absolute; border-radius: 999px; filter: blur(110px); }
        .ts-orb--a {
          width: 520px; height: 520px; top: -170px; left: -150px;
          background: radial-gradient(closest-side, rgba(22,49,152,0.13), transparent);
        }
        .ts-orb--b {
          width: 560px; height: 560px; bottom: -210px; right: -170px;
          background: radial-gradient(closest-side, rgba(124,58,237,0.13), transparent);
        }
        .ts-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(10,10,10,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,0.03) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(ellipse at 50% 40%, #000 15%, transparent 72%);
        }

        .ts-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .ts-container { padding: 0 32px; } }

        /* ---- head ---- */
        .ts-head {
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          margin-bottom: 52px;
        }
        .ts-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(10,10,10,0.45);
        }
        .ts-eyebrow-line {
          width: 26px; height: 1px;
          background: linear-gradient(to right, transparent, #4f46e5);
        }
        .ts-title {
          font-family: "Play", sans-serif;
          font-weight: 400;
          font-size: clamp(2rem, 3.4vw + 0.6rem, 3.3rem);
          line-height: 1.06; letter-spacing: -0.035em;
          margin: 0; color: #0a0a0a; text-wrap: balance;
        }
        .ts-title-hl {
          font-weight: 700;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .ts-lede {
          margin: 0; max-width: 54ch;
          font-size: 16px; line-height: 1.65;
          color: rgba(10,10,10,0.52);
          text-wrap: balance;
        }

        /* ---- the wall ---- */
        .ts-wall {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          height: 620px;
          overflow: hidden;
          /* Quotes fade out rather than being cut off at the edges. */
          mask-image: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent);
          -webkit-mask-image: linear-gradient(180deg, transparent, #000 11%, #000 89%, transparent);
        }
        @media (max-width: 900px) {
          .ts-wall { grid-template-columns: repeat(2, 1fr); height: 560px; }
          .ts-col:nth-child(3) { display: none; }
        }
        @media (max-width: 600px) {
          .ts-wall { grid-template-columns: 1fr; height: 520px; }
          .ts-col:nth-child(2) { display: none; }
        }

        .ts-col { position: relative; overflow: hidden; }

        .ts-track {
          display: flex;
          flex-direction: column;
          gap: 22px;
          animation: tsScroll var(--dur) linear infinite;
          will-change: transform;
        }
        /* The middle column runs the other way, so the wall reads as alive
           rather than as one block sliding. */
        .ts-track.is-reverse { animation-direction: reverse; }

        @keyframes tsScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        /* Pause the whole wall when someone is reading it. */
        .ts-wall:hover .ts-track,
        .ts-wall:focus-within .ts-track { animation-play-state: paused; }

        /* ---- card ---- */
        .ts-card {
          background: #ffffff;
          border: 1px solid rgba(10,10,10,0.075);
          border-radius: 18px;
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 2px 4px -2px rgba(10,10,10,0.05),
                      0 12px 28px -20px rgba(10,10,10,0.18);
          transition: border-color 0.35s ease, box-shadow 0.35s ease,
                      transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .ts-card:hover {
          border-color: rgba(79,70,229,0.3);
          box-shadow: 0 24px 50px -26px rgba(79,70,229,0.45),
                      0 8px 20px -14px rgba(10,10,10,0.12);
          transform: translateY(-3px);
        }

        .ts-stars { display: inline-flex; gap: 3px; }
        .ts-stars svg { width: 15px; height: 15px; fill: rgba(10,10,10,0.13); }
        .ts-stars svg.is-on { fill: #F5A524; }

        .ts-quote {
          margin: 0;
          font-size: 15px;
          line-height: 1.62;
          letter-spacing: -0.005em;
          color: rgba(10,10,10,0.78);
        }

        .ts-rule { height: 1px; background: rgba(10,10,10,0.08); }

        .ts-by { display: flex; align-items: center; gap: 12px; }
        .ts-avatar {
          width: 40px; height: 40px; flex: none;
          border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: linear-gradient(140deg, rgba(22,49,152,0.1), rgba(124,58,237,0.12));
          border: 1px solid rgba(79,70,229,0.18);
          font-family: "Play", sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.03em;
          color: #4338ca;
          transition: border-color 0.35s ease, background 0.35s ease, color 0.35s ease;
        }
        .ts-card:hover .ts-avatar {
          border-color: transparent;
          background: linear-gradient(140deg, #163198, #7c3aed);
          color: #ffffff;
        }

        .ts-who { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .ts-who b {
          font-family: "Play", sans-serif;
          font-size: 14.5px; font-weight: 700; letter-spacing: -0.015em;
          color: #0a0a0a;
        }
        .ts-who i {
          font-style: normal;
          font-size: 12px;
          color: rgba(10,10,10,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          /* Drifting text is the exact thing this setting exists to stop.
             The wall becomes a static, scrollable column instead. */
          .ts-track { animation: none !important; }
          .ts-card { transition: none !important; }
          .ts-card:hover { transform: none !important; }
          .ts-wall { height: auto; overflow: visible; mask-image: none; -webkit-mask-image: none; }
        }
      `}</style>
    </section>
  );
};

export default HomeTestimonials;
