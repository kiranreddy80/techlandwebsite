import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  LineChart,
  Palette,
  Code2,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "web",
    num: "01",
    label: "Web Development",
    tag: "Performance · Conversion",
    icon: Globe,
    title: "Websites engineered to convert",
    desc: "Fast, accessible, search-ready sites built on modern stacks. We tune for Core Web Vitals and ship on a release cadence you can plan around.",
    features: ["React / Next.js builds", "Headless CMS", "Core Web Vitals tuned", "SEO foundation baked in"],
    href: "/services/web-development",
    stat: { v: "99", u: "/100", l: "Lighthouse target" },
  },
  {
    id: "mobile",
    num: "02",
    label: "Mobile Apps",
    tag: "iOS · Android",
    icon: Smartphone,
    title: "Native-feel apps on every device",
    desc: "One codebase, two stores. Mobile apps engineered for fluid UX, offline-first behaviour and clean release pipelines.",
    features: ["React Native & Flutter", "Push, deep-links, analytics", "App Store + Play submission", "Crash-free SLA monitoring"],
    href: "/services/mobile-app-development",
    stat: { v: "60", u: "fps", l: "Smooth interactions" },
  },
  {
    id: "marketing",
    num: "03",
    label: "Digital Marketing",
    tag: "SEO · Paid · Growth",
    icon: LineChart,
    title: "Channels that compound",
    desc: "Search, social and paid working as one system — measured weekly, optimised monthly, accountable to the metrics that matter.",
    features: ["SEO & content programs", "Google + Meta paid ads", "Funnel & landing CRO", "Monthly growth reports"],
    href: "/services/digital-marketing",
    stat: { v: "+218", u: "%", l: "Avg traffic uplift" },
  },
  {
    id: "design",
    num: "04",
    label: "UI / UX Design",
    tag: "Research · Systems",
    icon: Palette,
    title: "Interfaces that test well",
    desc: "Research-led product design — flows, wireframes, prototypes, and design systems your engineers actually want to build from.",
    features: ["User research & testing", "Wireframes + prototypes", "Reusable design systems", "Dev hand-off in Figma"],
    href: "/services/ui-ux-design",
    stat: { v: "4.8", u: "/5", l: "Avg usability score" },
  },
  {
    id: "software",
    num: "05",
    label: "Custom Software",
    tag: "Architecture · Delivery",
    icon: Code2,
    title: "Systems modelled for scale",
    desc: "Bespoke platforms, internal tooling, and integrations — designed around your domain, delivered with predictable cadence.",
    features: ["Domain-driven design", "API & microservices", "Cloud-native deployment", "Hand-over with runbooks"],
    href: "/services/custom-software-development",
    stat: { v: "100", u: "%", l: "Type-safe by default" },
  },
];

/* Total is derived so the counters can never drift out of step with the list. */
const TOTAL = String(services.length).padStart(2, "0");

/* Per-service visual */
const Visual = ({ id }) => {
  const c = { blue: "#163198", indigo: "#4f46e5", purple: "#7c3aed" };
  switch (id) {
    case "web":
      return (
        <svg viewBox="0 0 600 380" className="as-visual-svg" role="img" aria-label="Web preview">
          <defs>
            <linearGradient id="awG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={c.blue} stopOpacity="0.14"/>
              <stop offset="100%" stopColor={c.purple} stopOpacity="0.06"/>
            </linearGradient>
          </defs>
          <rect x="30" y="30" width="540" height="320" rx="18" fill="#fff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="30" y="30" width="540" height="40" rx="18" fill="#fafbff"/>
          <rect x="30" y="68" width="540" height="1" fill="rgba(10,10,10,0.06)"/>
          <circle cx="50" cy="50" r="4" fill="#e6e6e6"/><circle cx="64" cy="50" r="4" fill="#e6e6e6"/><circle cx="78" cy="50" r="4" fill="#e6e6e6"/>
          <rect x="140" y="40" width="260" height="20" rx="10" fill="#f1f3fb"/>
          <rect x="58" y="100" width="220" height="18" rx="4" fill="#0a0a0a" opacity="0.85"/>
          <rect x="58" y="128" width="280" height="11" rx="4" fill="rgba(10,10,10,0.22)"/>
          <rect x="58" y="146" width="240" height="11" rx="4" fill="rgba(10,10,10,0.16)"/>
          <rect x="58" y="178" width="130" height="38" rx="10" fill={c.blue}/>
          <rect x="360" y="100" width="180" height="130" rx="14" fill="url(#awG)"/>
          <circle cx="450" cy="165" r="26" fill="#fff" opacity="0.92"/>
          <path d="M442 156 l18 9 l-18 9 z" fill={c.blue}/>
          <rect x="58" y="252" width="148" height="68" rx="12" fill="#fafbff" stroke="rgba(10,10,10,0.06)"/>
          <rect x="222" y="252" width="148" height="68" rx="12" fill="#fafbff" stroke="rgba(10,10,10,0.06)"/>
          <rect x="386" y="252" width="154" height="68" rx="12" fill="url(#awG)" stroke="rgba(79,70,229,0.18)"/>
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 600 380" className="as-visual-svg" role="img" aria-label="Mobile preview">
          <defs>
            <linearGradient id="amG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c.indigo} stopOpacity="0.2"/>
              <stop offset="100%" stopColor={c.purple} stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <rect x="170" y="50" width="150" height="290" rx="24" fill="#fff" stroke="rgba(10,10,10,0.1)"/>
          <rect x="178" y="58" width="134" height="274" rx="18" fill="#f7f8ff"/>
          <rect x="222" y="64" width="46" height="6" rx="3" fill="#dadfee"/>
          <rect x="190" y="84" width="110" height="46" rx="11" fill="url(#amG)" stroke="rgba(79,70,229,0.25)"/>
          <rect x="202" y="98" width="62" height="9" rx="3" fill={c.blue}/>
          <rect x="202" y="113" width="40" height="7" rx="3" fill="rgba(10,10,10,0.3)"/>
          <rect x="190" y="140" width="52" height="52" rx="11" fill="#fafbff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="248" y="140" width="52" height="52" rx="11" fill="#fafbff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="190" y="200" width="52" height="52" rx="11" fill="#fafbff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="248" y="200" width="52" height="52" rx="11" fill="#fafbff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="190" y="266" width="110" height="40" rx="10" fill={c.indigo}/>
          <rect x="214" y="282" width="62" height="9" rx="3" fill="#fff" opacity="0.92"/>
          <g transform="translate(360 80) rotate(6)">
            <rect x="0" y="0" width="150" height="250" rx="24" fill="#fff" stroke="rgba(10,10,10,0.1)"/>
            <rect x="8" y="8" width="134" height="234" rx="18" fill="#fff"/>
            <rect x="22" y="24" width="108" height="62" rx="11" fill="url(#amG)"/>
            <rect x="34" y="42" width="48" height="9" rx="3" fill={c.blue}/>
            <rect x="34" y="58" width="66" height="7" rx="3" fill="rgba(10,10,10,0.3)"/>
            <rect x="22" y="100" width="108" height="9" rx="3" fill="rgba(10,10,10,0.7)"/>
            <rect x="22" y="114" width="88" height="7" rx="3" fill="rgba(10,10,10,0.25)"/>
            <rect x="22" y="138" width="108" height="64" rx="11" fill="#f7f8ff" stroke="rgba(10,10,10,0.06)"/>
            <circle cx="44" cy="170" r="11" fill={c.purple} opacity="0.85"/>
            <rect x="62" y="162" width="50" height="7" rx="3" fill="rgba(10,10,10,0.45)"/>
            <rect x="62" y="174" width="38" height="6" rx="3" fill="rgba(10,10,10,0.25)"/>
          </g>
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 600 380" className="as-visual-svg" role="img" aria-label="Marketing preview">
          <defs>
            <linearGradient id="akG" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor={c.blue} stopOpacity="0.25"/>
              <stop offset="100%" stopColor={c.purple} stopOpacity="0"/>
            </linearGradient>
          </defs>
          <rect x="30" y="30" width="540" height="320" rx="18" fill="#fff" stroke="rgba(10,10,10,0.07)"/>
          <rect x="58" y="60" width="140" height="14" rx="4" fill="#0a0a0a" opacity="0.85"/>
          <rect x="58" y="84" width="210" height="9" rx="4" fill="rgba(10,10,10,0.25)"/>
          <rect x="450" y="56" width="90" height="32" rx="10" fill={c.indigo}/>
          <rect x="472" y="68" width="46" height="8" rx="3" fill="#fff"/>
          <text x="58" y="170" fontFamily="ui-monospace, monospace" fontSize="52" fontWeight="700" fill={c.blue}>+218%</text>
          <rect x="58" y="186" width="180" height="7" rx="3" fill="rgba(10,10,10,0.18)"/>
          <path d="M 58 300 L 110 260 L 162 272 L 214 232 L 266 242 L 318 190 L 370 200 L 422 150 L 474 172 L 540 122" fill="none" stroke={c.blue} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 58 300 L 110 260 L 162 272 L 214 232 L 266 242 L 318 190 L 370 200 L 422 150 L 474 172 L 540 122 L 540 320 L 58 320 Z" fill="url(#akG)"/>
          <circle cx="318" cy="190" r="6" fill="#fff" stroke={c.blue} strokeWidth="2"/>
          <circle cx="422" cy="150" r="6" fill="#fff" stroke={c.indigo} strokeWidth="2"/>
          <circle cx="540" cy="122" r="6" fill={c.purple}/>
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 600 380" className="as-visual-svg" role="img" aria-label="Design preview">
          <defs>
            <linearGradient id="adG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={c.indigo} stopOpacity="0.18"/>
              <stop offset="100%" stopColor={c.purple} stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <rect x="80" y="90" width="360" height="230" rx="16" fill="#f7f8ff" stroke="rgba(10,10,10,0.06)" transform="rotate(-4 260 205)"/>
          <rect x="110" y="60" width="360" height="230" rx="16" fill="#fff" stroke="rgba(10,10,10,0.08)"/>
          <rect x="132" y="86" width="130" height="16" rx="4" fill="#0a0a0a" opacity="0.85"/>
          <rect x="132" y="110" width="200" height="9" rx="4" fill="rgba(10,10,10,0.2)"/>
          <rect x="132" y="138" width="92" height="92" rx="12" fill="url(#adG)"/>
          <rect x="232" y="138" width="92" height="92" rx="12" fill="#fafbff" stroke="rgba(10,10,10,0.06)"/>
          <rect x="332" y="138" width="92" height="92" rx="12" fill="url(#adG)"/>
          <rect x="132" y="242" width="70" height="26" rx="7" fill={c.indigo}/>
          <rect x="212" y="242" width="70" height="26" rx="7" fill="#fff" stroke="rgba(10,10,10,0.12)"/>
        </svg>
      );
    case "software":
      return (
        <svg viewBox="0 0 600 380" className="as-visual-svg" role="img" aria-label="Custom software preview">
          <defs>
            <linearGradient id="asG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={c.indigo} stopOpacity="0.22"/>
              <stop offset="100%" stopColor={c.purple} stopOpacity="0.06"/>
            </linearGradient>
          </defs>
          <path d="M 150 110 C 230 110, 280 180, 300 180" fill="none" stroke="rgba(79,70,229,0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <path d="M 150 250 C 230 250, 280 180, 300 180" fill="none" stroke="rgba(79,70,229,0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <path d="M 450 110 C 370 110, 320 180, 300 180" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <path d="M 450 250 C 370 250, 320 180, 300 180" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" strokeDasharray="4 4"/>
          <rect x="70" y="80" width="140" height="64" rx="12" fill="#fff" stroke="rgba(10,10,10,0.08)"/>
          <rect x="90" y="98" width="56" height="9" rx="3" fill={c.blue}/>
          <rect x="90" y="116" width="90" height="7" rx="3" fill="rgba(10,10,10,0.25)"/>
          <rect x="70" y="218" width="140" height="64" rx="12" fill="#fff" stroke="rgba(10,10,10,0.08)"/>
          <rect x="90" y="236" width="56" height="9" rx="3" fill={c.indigo}/>
          <rect x="90" y="254" width="90" height="7" rx="3" fill="rgba(10,10,10,0.25)"/>
          <rect x="390" y="80" width="140" height="64" rx="12" fill="#fff" stroke="rgba(10,10,10,0.08)"/>
          <rect x="410" y="98" width="56" height="9" rx="3" fill={c.purple}/>
          <rect x="410" y="116" width="90" height="7" rx="3" fill="rgba(10,10,10,0.25)"/>
          <rect x="390" y="218" width="140" height="64" rx="12" fill="#fff" stroke="rgba(10,10,10,0.08)"/>
          <rect x="410" y="236" width="56" height="9" rx="3" fill={c.indigo}/>
          <rect x="410" y="254" width="90" height="7" rx="3" fill="rgba(10,10,10,0.25)"/>
          <circle cx="300" cy="180" r="64" fill="url(#asG)" stroke="rgba(79,70,229,0.45)" strokeWidth="1.5"/>
          <circle cx="300" cy="180" r="44" fill="#fff" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5"/>
          <path d="M 284 178 l 12 12 l 22 -24" fill="none" stroke={c.indigo} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const HomeServices = () => {
  const [active, setActive] = useState(0);
  const cardRef = useRef(null);
  const s = services[active];
  const ActiveIcon = s.icon;

  /**
   * Feed the pointer position to CSS as --mx / --my so the card's spotlight and
   * gradient edge can follow the cursor. Done with custom properties rather
   * than React state so it never triggers a re-render on mouse move.
   */
  const trackPointer = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section className="as-section" id="services">
      <div className="as-bg" aria-hidden="true">
        <div className="as-bg-grad" />
        <div className="as-bg-orb as-bg-orb--a" />
        <div className="as-bg-orb as-bg-orb--b" />
      </div>

      <div className="as-container">
        {/* Header */}
        <div className="as-head">
          <span className="as-head-line" aria-hidden="true" />
          <h2 className="as-title">
            <span className="as-title-our">Our</span>
            <span className="as-title-hl">Services</span>
          </h2>
        </div>

        <div className="as-split">
          {/* LEFT — side nav */}
          <nav className="as-nav" role="tablist" aria-label="Services">
            <div className="as-nav-cap">
              <span>Index</span>
              <span className="as-nav-count">{String(active + 1).padStart(2, "0")} / {TOTAL}</span>
            </div>

            <ul className="as-list">
              {services.map((srv, i) => {
                const Icon = srv.icon;
                const isActive = i === active;
                return (
                  <li
                    key={srv.id}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`as-item ${isActive ? "is-active" : ""}`}
                  >
                    <span className="as-item-marker" aria-hidden="true" />
                    <span className="as-item-num">{srv.num}</span>
                    <span className="as-item-ico"><Icon size={16} strokeWidth={1.6} /></span>
                    <span className="as-item-label">{srv.label}</span>
                    <span className="as-item-arrow" aria-hidden="true">
                      <ArrowRight size={14} strokeWidth={1.8} />
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="as-nav-foot">
              <span>From strategy</span>
              <span aria-hidden="true">·</span>
              <span>To production</span>
            </p>
          </nav>

          {/* RIGHT — unified card */}
          <article className="as-preview" key={s.id}>
            <div className="as-card" ref={cardRef} onMouseMove={trackPointer}>
              <span className="as-card-halo" aria-hidden="true" />
              <span className="as-card-spot" aria-hidden="true" />

              <div className="as-card-visual">
                <div className="as-card-visual-bg" aria-hidden="true" />
                <div className="as-card-visual-grid" aria-hidden="true" />

                <div className="as-card-chip">
                  <span className="as-chip-num">{s.num}</span>
                  <span className="as-chip-sep" aria-hidden="true">·</span>
                  <span className="as-chip-tag">{s.tag}</span>
                </div>

                <div className="as-card-stat-float">
                  <span className="as-stat-v">
                    {s.stat.v}<span className="as-stat-u">{s.stat.u}</span>
                  </span>
                  <span className="as-stat-l">{s.stat.l}</span>
                </div>

                <div className="as-card-visual-inner">
                  <Visual id={s.id} />
                </div>
              </div>

              <div className="as-card-content">
                <div className="as-card-row">
                  <span className="as-card-icon">
                    <ActiveIcon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="as-card-label">{s.label}</span>
                </div>

                <h3 className="as-headline">{s.title}</h3>
                <p className="as-desc">{s.desc}</p>

                <ul className="as-features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className="as-dot" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="as-cta-row">
                  <Link to={s.href} className="as-cta">
                    Explore {s.label}
                    <ArrowUpRight size={16} />
                  </Link>
                  <span className="as-cta-meta">
                    <span className="as-cta-meta-num">{String(active + 1).padStart(2, "0")} / {TOTAL}</span>
                    <span className="as-cta-meta-dot" aria-hidden="true" />
                    <span>hover the index to switch</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        /* ===== Apple-style services — side nav + unified card ===== */
        .as-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 100px 0 110px;
          background: #ffffff;
        }
        @media (min-width: 1024px) { .as-section { padding: 130px 0 150px; } }

        .as-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .as-bg-grad {
          position: absolute; inset: 0;
          background:
            radial-gradient(900px 480px at 10% -8%, rgba(22,49,152,0.05), transparent 60%),
            radial-gradient(800px 480px at 100% 110%, rgba(124,58,237,0.06), transparent 60%),
            linear-gradient(180deg, #ffffff 0%, #fafaff 60%, #ffffff 100%);
        }
        .as-bg-orb { position: absolute; border-radius: 999px; filter: blur(80px); opacity: 0.45; }
        .as-bg-orb--a { width: 340px; height: 340px; top: -120px; left: -100px; background: radial-gradient(closest-side, rgba(22,49,152,0.18), transparent); }
        .as-bg-orb--b { width: 440px; height: 440px; bottom: -180px; right: -120px; background: radial-gradient(closest-side, rgba(124,58,237,0.18), transparent); }

        .as-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .as-container { padding: 0 32px; } }

        /* Header — light & airy */
        .as-head { margin: 0 auto 44px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 18px; }
        @media (min-width: 1024px) { .as-head { margin-bottom: 64px; gap: 22px; } }
        .as-head-line { display: inline-block; width: 36px; height: 1px; background: linear-gradient(to right, transparent, #4f46e5, transparent); }
        .as-title {
          font-family: 'Play', sans-serif !important;
          font-weight: 400;
          font-size: clamp(2rem, 3.4vw + 0.6rem, 3.4rem);
          line-height: 1;
          letter-spacing: -0.035em;
          margin: 0;
          display: inline-flex;
          align-items: baseline;
          gap: 0.22em;
          color: #0a0a0a;
        }
        .as-title-our { font-weight: 300; color: rgba(10,10,10,0.55); }
        /* Same face as the rest of the headline — see HomeAboutUs. */
        .as-title-hl {
          font-weight: 700;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }

        /* Split layout */
        .as-split { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: stretch; }
        @media (min-width: 1024px) { .as-split { grid-template-columns: 340px minmax(0, 1fr); gap: 56px; } }

        /* LEFT side nav */
        .as-nav {
          position: relative;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(10,10,10,0.07);
          border-radius: 20px;
          padding: 22px 18px 18px;
          backdrop-filter: blur(8px);
          box-shadow: 0 24px 64px -32px rgba(22,49,152,0.18);
          align-self: start;
        }
        @media (min-width: 1024px) { .as-nav { position: sticky; top: 110px; } }

        .as-nav-cap {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 8px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(10,10,10,0.45);
          margin-bottom: 14px;
        }
        .as-nav-count {
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .as-nav-foot {
          margin: 14px 8px 0;
          padding-top: 12px;
          border-top: 1px solid rgba(10,10,10,0.06);
          font-family: ui-monospace, monospace;
          font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(10,10,10,0.4);
          display: flex; align-items: center; gap: 10px; justify-content: space-between;
        }
        .as-nav-foot span:nth-child(2) { color: rgba(10,10,10,0.2); }

        .as-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px; }
        .as-item {
          position: relative;
          display: grid;
          grid-template-columns: 4px 28px 22px 1fr 18px;
          align-items: center;
          gap: 10px;
          padding: 13px 12px;
          border-radius: 12px;
          color: rgba(10,10,10,0.6);
          cursor: pointer;
          outline: none;
          transition: color 0.35s ease, background 0.35s ease;
        }
        .as-item:focus-visible { background: rgba(124,58,237,0.05); }
        .as-item:hover { color: #0a0a0a; }
        .as-item.is-active {
          color: #0a0a0a;
          background: linear-gradient(to right, rgba(22,49,152,0.06), rgba(124,58,237,0.04), transparent);
        }

        .as-item-marker {
          width: 3px;
          height: 22px;
          border-radius: 999px;
          background: linear-gradient(to bottom, #163198, #4f46e5, #7c3aed);
          opacity: 0;
          transform: scaleY(0.4);
          transform-origin: center;
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .as-item.is-active .as-item-marker { opacity: 1; transform: scaleY(1); }

        .as-item-num {
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.18em;
          color: rgba(10,10,10,0.4);
          transition: color 0.35s ease;
        }
        .as-item.is-active .as-item-num {
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .as-item-ico { display: inline-flex; align-items: center; justify-content: center; color: rgba(10,10,10,0.5); transition: color 0.35s ease; }
        .as-item.is-active .as-item-ico { color: #4f46e5; }
        .as-item-label {
          font-family: 'Play', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          letter-spacing: -0.018em;
          white-space: nowrap;
        }
        .as-item.is-active .as-item-label { font-weight: 600; }
        .as-item-arrow {
          display: inline-flex; align-items: center; justify-content: center;
          color: rgba(10,10,10,0.25);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.35s ease, transform 0.35s ease, color 0.35s ease;
        }
        .as-item:hover .as-item-arrow,
        .as-item.is-active .as-item-arrow { opacity: 1; transform: translateX(0); color: #4f46e5; }

        /* RIGHT unified card */
        .as-preview { animation: asFade 0.5s cubic-bezier(0.22,1,0.36,1); }
        @keyframes asFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .as-card {
          position: relative;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(10,10,10,0.07);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.95),
            0 36px 96px -36px rgba(79, 70, 229, 0.32),
            0 12px 32px -14px rgba(10,10,10,0.06);
          display: flex;
          flex-direction: column;
        }

        .as-card-halo {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(22,49,152,0.5), rgba(79,70,229,0.25), rgba(124,58,237,0.5));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.55;
          pointer-events: none;
          z-index: 4;
        }

        .as-card-visual {
          position: relative;
          padding: 16px 18px 18px;
          overflow: hidden;
          isolation: isolate;
          border-bottom: 1px solid rgba(10,10,10,0.07);
          min-height: 220px;
        }
        @media (min-width: 1024px) { .as-card-visual { padding: 18px 22px 20px; min-height: 240px; } }

        .as-card-visual-bg {
          position: absolute; inset: 0; z-index: -2;
          background:
            radial-gradient(700px 320px at 0% 0%, rgba(22,49,152,0.13), transparent 60%),
            radial-gradient(700px 320px at 100% 100%, rgba(124,58,237,0.16), transparent 60%),
            linear-gradient(135deg, #f6f5ff 0%, #f3f0ff 50%, #eef0ff 100%);
        }
        .as-card-visual-grid {
          position: absolute; inset: 0; z-index: -1;
          background-image:
            linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
          opacity: 0.7;
        }

        .as-card-chip {
          position: absolute;
          top: 18px; left: 18px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(124,58,237,0.18);
          border-radius: 999px;
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 28px -16px rgba(79,70,229,0.35);
          z-index: 3;
        }
        .as-chip-num {
          font-family: ui-monospace, monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .as-chip-sep { color: rgba(10,10,10,0.25); font-size: 11px; line-height: 1; }
        .as-chip-tag {
          font-family: ui-monospace, monospace;
          font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(10,10,10,0.6);
        }

        .as-card-stat-float {
          position: absolute;
          bottom: 14px; right: 14px;
          display: flex; flex-direction: column; gap: 1px;
          padding: 8px 11px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(10,10,10,0.06);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 28px -16px rgba(10,10,10,0.18);
          z-index: 3;
          text-align: right;
          min-width: 96px;
        }
        .as-card-stat-float .as-stat-v { font-size: 18px; }
        .as-card-stat-float .as-stat-u { font-size: 11px; }
        .as-card-stat-float .as-stat-l { font-size: 8.5px; }

        .as-card-visual-inner {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 36px 0 8px;
        }
        @media (min-width: 1024px) { .as-card-visual-inner { padding: 40px 0 10px; } }
        .as-visual-svg { width: 100%; max-width: 240px; height: auto; display: block; max-height: 130px; }
        @media (min-width: 1024px) { .as-visual-svg { max-width: 280px; max-height: 150px; } }

        .as-card-content {
          padding: 18px 20px 20px;
          display: flex; flex-direction: column; gap: 10px;
          position: relative;
          background: #ffffff;
        }
        @media (min-width: 1024px) { .as-card-content { padding: 22px 24px; gap: 12px; } }

        .as-card-row { display: inline-flex; align-items: center; gap: 12px; }
        .as-card-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          color: #fff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 10px 22px -10px rgba(79,70,229,0.5);
        }
        .as-card-label {
          font-family: ui-monospace, monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(10,10,10,0.55);
        }

        .as-cta-meta {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(10,10,10,0.4);
        }
        .as-cta-meta-num {
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .as-cta-meta-dot { width: 4px; height: 4px; border-radius: 999px; background: rgba(124,58,237,0.4); }

        .as-headline {
          font-family: 'Play', sans-serif;
          font-weight: 600;
          font-size: clamp(1.15rem, 1.1vw + 0.6rem, 1.55rem);
          line-height: 1.15;
          letter-spacing: -0.028em;
          color: #0a0a0a;
          margin: 0;
          text-wrap: balance;
        }
        .as-desc {
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(10,10,10,0.6);
          margin: 0;
          letter-spacing: -0.005em;
          max-width: 640px;
        }

        .as-features {
          list-style: none;
          padding: 0;
          margin: 2px 0 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px 16px;
        }
        @media (min-width: 540px) { .as-features { grid-template-columns: 1fr 1fr; } }
        .as-features li {
          display: flex; align-items: center; gap: 9px;
          font-size: 12.5px; color: rgba(10,10,10,0.72); letter-spacing: -0.005em;
        }
        .as-dot {
          width: 6px; height: 6px; border-radius: 999px;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.08);
        }

        .as-cta-row {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap;
          justify-content: space-between;
          padding-top: 10px;
          margin-top: 2px;
          border-top: 1px solid rgba(10,10,10,0.06);
        }
        .as-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          font-family: 'Play', sans-serif;
          font-size: 12.5px; font-weight: 600; letter-spacing: -0.01em;
          color: #fff;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          border-radius: 10px;
          text-decoration: none;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.22),
            0 16px 38px -18px rgba(79, 70, 229, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .as-cta:hover {
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), 0 22px 50px -16px rgba(124, 58, 237, 0.5);
          color: #fff;
        }
        .as-stat-v {
          font-family: 'Play', sans-serif;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          line-height: 1;
        }
        .as-stat-u { font-size: 13px; font-weight: 600; }
        .as-stat-l {
          font-family: ui-monospace, monospace;
          font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(10,10,10,0.5);
        }

        /* ============================================================
           POLISH LAYER
           Effects added on top of the layout above. Everything here is
           additive — remove this block and the section still works.
           ============================================================ */

        /* --- 1. Living gradient edge on the card ---------------------
           The border was a static gradient. Animating its position makes
           the light appear to travel around the card. */
        .as-card-halo {
          background: linear-gradient(
            115deg,
            rgba(22,49,152,0.55),
            rgba(79,70,229,0.2),
            rgba(124,58,237,0.6),
            rgba(79,70,229,0.2),
            rgba(22,49,152,0.55)
          );
          background-size: 320% 100%;
          animation: asEdgeFlow 9s ease-in-out infinite;
        }
        @keyframes asEdgeFlow {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* --- 2. Spotlight that follows the cursor --------------------
           Fed by --mx / --my from the pointer handler. Sits under the
           content so it lifts the surface without washing out text. */
        .as-card { --mx: 50%; --my: 0%; }
        .as-card-spot {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: radial-gradient(
            420px circle at var(--mx) var(--my),
            rgba(79,70,229,0.09),
            transparent 62%
          );
        }
        .as-card:hover .as-card-spot { opacity: 1; }

        /* --- 3. Staggered reveal when the service changes ------------
           The card already faded as one block. Letting the pieces arrive
           in reading order makes the switch feel authored rather than
           like a page repaint. */
        .as-preview .as-card-visual   { animation: asRise 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .as-preview .as-card-row      { animation: asRise 0.5s 0.06s cubic-bezier(0.22,1,0.36,1) both; }
        .as-preview .as-headline      { animation: asRise 0.5s 0.11s cubic-bezier(0.22,1,0.36,1) both; }
        .as-preview .as-desc          { animation: asRise 0.5s 0.16s cubic-bezier(0.22,1,0.36,1) both; }
        .as-preview .as-features li   { animation: asRise 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .as-preview .as-features li:nth-child(1) { animation-delay: 0.20s; }
        .as-preview .as-features li:nth-child(2) { animation-delay: 0.25s; }
        .as-preview .as-features li:nth-child(3) { animation-delay: 0.30s; }
        .as-preview .as-features li:nth-child(4) { animation-delay: 0.35s; }
        .as-preview .as-cta-row       { animation: asRise 0.5s 0.4s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes asRise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* --- 4. The visual breathes ---------------------------------- */
        .as-visual-svg {
          animation: asFloat 7s ease-in-out infinite;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes asFloat {
          0%, 100% { translate: 0 0; }
          50%      { translate: 0 -7px; }
        }
        .as-card:hover .as-visual-svg { transform: scale(1.03); }

        /* --- 5. Light sweeps across the CTA on hover ----------------- */
        .as-cta { position: relative; overflow: hidden; isolation: isolate; }
        .as-cta::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          left: -60%;
          width: 45%;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            100deg,
            transparent,
            rgba(255,255,255,0.42),
            transparent
          );
          transform: skewX(-18deg);
        }
        .as-cta:hover::after { animation: asSheen 0.85s cubic-bezier(0.3,0.8,0.4,1); }
        @keyframes asSheen {
          from { left: -60%; }
          to   { left: 130%; }
        }

        /* --- 6. Index items: wash slides in behind the active row ---- */
        .as-item { position: relative; isolation: isolate; overflow: hidden; }
        .as-item::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: linear-gradient(
            95deg,
            rgba(79,70,229,0.10),
            rgba(124,58,237,0.05) 55%,
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .as-item.is-active::before { transform: translateX(0); }
        /* The marker snaps in with a little overshoot rather than a linear grow. */
        .as-item-marker { transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1); }
        .as-item-num { transition: color 0.35s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1); }
        .as-item.is-active .as-item-num { transform: translateX(2px); }
        .as-item-ico { transition: color 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1); }
        .as-item.is-active .as-item-ico { transform: scale(1.14); }

        /* --- 7. Section entrance ------------------------------------- */
        .as-head { animation: asRise 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .as-nav  { animation: asRise 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .as-preview { animation: none !important; }
          /* Kill every polish animation, but keep the end state visible. */
          .as-card-halo,
          .as-visual-svg,
          .as-head,
          .as-nav,
          .as-preview .as-card-visual,
          .as-preview .as-card-row,
          .as-preview .as-headline,
          .as-preview .as-desc,
          .as-preview .as-features li,
          .as-preview .as-cta-row {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            translate: none !important;
          }
          .as-cta:hover::after { animation: none !important; }
          .as-card-spot { display: none; }
          .as-item::before,
          .as-item-marker,
          .as-item-num,
          .as-item-ico,
          .as-card:hover .as-visual-svg {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeServices;
