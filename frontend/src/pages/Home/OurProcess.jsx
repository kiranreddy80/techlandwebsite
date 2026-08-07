import React, { useEffect, useRef, useState } from "react";
import "./OurProcess.css";

// Icons
const processRequirements = "/assets/img/icon/process-requirements.png";
const processAgreement = "/assets/img/icon/process-agreement.png";
const processDesign = "/assets/img/icon/process-design.png";
const processDevelopment = "/assets/img/icon/process-development.png";
const processTesting = "/assets/img/icon/process-testing.png";
const processDeployment = "/assets/img/icon/process-deployment.png";

/**
 * The road the road markers ride on.
 *
 * Hand-authored so the six stops land on exact, evenly spaced points. The
 * same string is reused three times — the tarmac, the dashed centre line and
 * the CSS motion path the travelling marker follows — so they can never drift
 * out of alignment with each other.
 */
const ROAD =
  "M 110 250 C 200 250, 210 110, 300 110 C 390 110, 400 250, 490 250 C 580 250, 590 110, 680 110 C 770 110, 780 250, 870 250 C 960 250, 970 110, 1060 110";

const VIEW_W = 1170;
const VIEW_H = 360;

/**
 * Six stops along the way.
 *
 * `x`/`y` are the exact coordinates where each stop meets the road, in the
 * SVG's own units; the CSS converts them to percentages so the markers stay
 * pinned to the tarmac at any width. `above` places the card clear of the
 * curve rather than on top of it.
 */
const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Goals, users and constraints, mapped before a line is written.",
    icon: processRequirements,
    x: 110, y: 250, above: false,
  },
  {
    id: "02",
    title: "Roadmap",
    desc: "Scope, milestones and a plan you can hold us to.",
    icon: processAgreement,
    x: 300, y: 110, above: true,
  },
  {
    id: "03",
    title: "Design",
    desc: "Wireframes, prototypes and a system your build reuses.",
    icon: processDesign,
    x: 490, y: 250, above: false,
  },
  {
    id: "04",
    title: "Build",
    desc: "Modular, reviewed code on a steady release cadence.",
    icon: processDevelopment,
    x: 680, y: 110, above: true,
  },
  {
    id: "05",
    title: "Testing",
    desc: "Device, performance and security passes before ship.",
    icon: processTesting,
    x: 870, y: 250, above: false,
  },
  {
    id: "06",
    title: "Launch",
    desc: "Deploy, monitor, and stay on long after go-live.",
    icon: processDeployment,
    x: 1060, y: 110, above: true,
  },
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  /**
   * The road lays itself once, when the section arrives. Tying the draw to
   * scroll position instead would make the tarmac advance and retreat as the
   * user moves, which reads as a fault rather than as progress.
   */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) setReduceMotion(true);

    if (!("IntersectionObserver" in window) || reduced) {
      setDrawn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`rd-section ${drawn ? "is-drawn" : ""}`}
      ref={sectionRef}
      id="process"
    >
      <div className="rd-container">
        <header className="rd-head">
          <span className="rd-eyebrow">
            <span className="rd-eyebrow-line" aria-hidden="true" />
            How we work
          </span>
          <h2 className="rd-title">
            The road from <span className="rd-title-hl">brief to launch</span>.
          </h2>
          <p className="rd-lede">
            The same six stops on every project — so you always know where the
            work is now, and what the next turn looks like.
          </p>
        </header>

        <div className="rd-map">
          {/* The road itself */}
          <svg
            className="rd-svg"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="rdInk" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#163198" />
                <stop offset="50%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <filter id="rdGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="9" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ghost route — where the road is going to go */}
            <path
              className="rd-ghost"
              d={ROAD}
              stroke="rgba(10,10,10,0.07)"
              strokeWidth="26"
              strokeLinecap="round"
            />

            {/* Tarmac, drawn on arrival */}
            <path
              id="rdRoadPath"
              className="rd-tarmac"
              d={ROAD}
              pathLength="1"
              stroke="url(#rdInk)"
              strokeWidth="26"
              strokeLinecap="round"
              filter="url(#rdGlow)"
            />

            {/* Centre line, dashed like a real one */}
            <path
              className="rd-dashes"
              d={ROAD}
              pathLength="1"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="0.012 0.018"
            />

            {/* The marker that drives the route.
                It lives inside the SVG so it travels in the same coordinate
                space as the road — a CSS motion path would be measured in
                pixels and drift off the tarmac the moment the map resized. */}
            {!reduceMotion && (
              <g className="rd-runner">
                <circle className="rd-runner-halo" r="16" fill="rgba(124,58,237,0.18)" />
                <circle className="rd-runner-dot" r="7" fill="#ffffff" />
                <circle
                  className="rd-runner-core"
                  r="4"
                  fill="url(#rdInk)"
                />
                <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#rdRoadPath" />
                </animateMotion>
              </g>
            )}
          </svg>

          {/* Stops */}
          <ol className="rd-stops">
            {steps.map((step, i) => (
              <li
                className={`rd-stop ${step.above ? "is-above" : "is-below"}`}
                key={step.id}
                style={{
                  "--i": i,
                  "--x": `${(step.x / VIEW_W) * 100}%`,
                  "--y": `${(step.y / VIEW_H) * 100}%`,
                }}
              >
                <span className="rd-pin">
                  <span className="rd-pin-ring" aria-hidden="true" />
                  <img src={step.icon} alt="" aria-hidden="true" loading="lazy" />
                </span>

                <span className="rd-leg" aria-hidden="true" />

                <div className="rd-card">
                  <span className="rd-num">{step.id}</span>
                  <h3 className="rd-stop-title">{step.title}</h3>
                  <p className="rd-stop-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
