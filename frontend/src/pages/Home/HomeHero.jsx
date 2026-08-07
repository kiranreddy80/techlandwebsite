import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, ShieldCheck, Layers, Trophy, Globe2 } from "lucide-react";

const projects = [
  {
    id: "nudeal",
    name: "Nudeal",
    role: "E-Commerce",
    image: "/assets/media/Assets/Projectimg/Nudeal_Main.jpg",
    primary: "#f97316",
    secondary: "#ec4899",
  },
  {
    id: "paywallet",
    name: "PayWallet",
    role: "Fintech",
    image: "/assets/media/Assets/Projectimg/PayWallet_Main.jpg",
    primary: "#0ea5e9",
    secondary: "#10b981",
  },
  {
    id: "poolpal",
    name: "PoolPal",
    role: "Mobility",
    image: "/assets/media/Assets/Projectimg/Poolpal_Main.jpg",
    primary: "#22c55e",
    secondary: "#0ea5e9",
  },
  {
    id: "meato",
    name: "MeatO",
    role: "Food Delivery",
    image: "/assets/media/Assets/Projectimg/MeatO_Main.jpg",
    primary: "#dc2626",
    secondary: "#f97316",
  },
  {
    id: "yuvaride",
    name: "YuvaRide",
    role: "Ride Sharing",
    image: "/assets/media/Assets/Projectimg/YuvaRide_Main.jpg",
    primary: "#7c3aed",
    secondary: "#ec4899",
  },
  {
    id: "abhisree",
    name: "Abhisree",
    role: "Real Estate",
    image: "/assets/media/Assets/Projectimg/Abhisree_Main.jpg",
    primary: "#0891b2",
    secondary: "#6366f1",
  },
  {
    id: "boutique",
    name: "Boutique",
    role: "Fashion",
    image: "/assets/media/Assets/Projectimg/Boutique_Main.jpg",
    primary: "#db2777",
    secondary: "#a855f7",
  },
  {
    id: "zenfoo",
    name: "Zenfoo",
    role: "Food",
    image: "/assets/media/Assets/Projectimg/Zenfoo_Main.jpg",
    primary: "#16a34a",
    secondary: "#eab308",
  },
];

const trustBadges = [
  // Every badge here has to be something we can actually back up. The first
  // two are drawn straight from the numbers the rest of the site already
  // quotes (350+ clients, 156 apps + 96 websites), so they can never be
  // challenged the way a certification claim can.
  { Icon: Users,       label: "350+ Clients" },
  { Icon: Layers,      label: "250+ Projects" },
  { Icon: ShieldCheck, label: "GST Reg." },
  { Icon: Trophy,      label: "Top 10" },
  { Icon: Globe2,      label: "Global" },
];

const HomeHero = () => {
  const stageRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % projects.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--px", x.toFixed(3));
      el.style.setProperty("--py", y.toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const p = projects[active];

  return (
    <section className="hl-hero" id="hero">
      {/* Soft background */}
      <div className="hl-bg" aria-hidden="true">
        <div className="hl-bg-blob hl-bg-blob--a" />
        <div className="hl-bg-blob hl-bg-blob--b" />
        <div className="hl-bg-blob hl-bg-blob--c" />
        <div className="hl-bg-grid" />
      </div>

      <div className="hl-wrap">
        {/* LEFT */}
        <div className="hl-left">
          <div className="hl-eyebrow">
            <span className="hl-eyebrow-line" aria-hidden="true" />
            <span>About Our Company</span>
          </div>

          <h1 className="hl-title">
            <span className="hl-title-lead">Best </span>
            <span className="hl-title-hl">App, Web &amp; Digital Marketing</span>
            <br />
            <span className="hl-title-lead">Company in </span>
            <span className="hl-title-city">Hyderabad</span>
          </h1>

          <p className="hl-sub">
            Techland IT Solutions is your trusted IT partner in Hyderabad — building
            high-performance apps, websites, and digital campaigns for businesses
            worldwide. We bring strategy, design, and engineering together to ship
            products that grow.
          </p>

          {/* Trust badges */}
          <div className="hl-badges">
            {trustBadges.map(({ Icon, label }, i) => (
              <div key={label} className="hl-badge" style={{ animationDelay: `${0.9 + i * 0.08}s` }}>
                <span className="hl-badge-ring" aria-hidden="true" />
                <Icon size={18} strokeWidth={1.7} />
                <span className="hl-badge-text">{label}</span>
              </div>
            ))}
          </div>

          {/* Trust pill */}
          <div className="hl-trust">
            <span className="hl-trust-dot" aria-hidden="true" />
            <span>Trusted by 350+ businesses across India &amp; abroad</span>
          </div>

          {/* CTAs */}
          <div className="hl-cta">
            <Link to="/services" className="hl-cta-primary">
              <span className="hl-cta-shine" aria-hidden="true" />
              <span className="hl-cta-text">Explore Services</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="hl-cta-ghost">
              <Sparkles size={14} strokeWidth={1.7} />
              <span>Start a Project</span>
            </Link>
          </div>
        </div>

        {/* RIGHT — floating stage */}
        <div className="hl-stage" ref={stageRef}>
          {/* Soft cloud behind stage */}
          <span className="hl-stage-cloud" aria-hidden="true" />

          {/* Project showcase — the phone is the whole stage now. */}
          <div
            className="hl-show"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
              "--brand-1": p.primary,
              "--brand-2": p.secondary,
            }}
          >
            {/* Project name above */}
            <div key={p.id + "-title"} className="hl-show-title">
              <span className="hl-show-name">{p.name}</span>
              <span className="hl-show-role">{p.role}</span>
            </div>

            {/* Project mockup, on a 3D stage.
                The frame rotates with the pointer; the glow sits behind it and
                the sheen in front, each at its own depth, so the card reads as
                a solid object being turned rather than a picture being skewed. */}
            <div className="hl-show-frame">
              <span className="hl-show-glow" aria-hidden="true" />
              <div key={p.id + "-img"} className="hl-show-image-wrap">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.role}`}
                  className="hl-show-image"
                  loading="lazy"
                />
                <span className="hl-show-sheen" aria-hidden="true" />
              </div>
              <span className="hl-show-depth" aria-hidden="true" />
            </div>

            {/* Progress bar */}
            <div className="hl-show-progress" aria-hidden="true">
              <span
                key={p.id + (paused ? "-paused" : "-playing")}
                className={`hl-show-progress-fill ${paused ? "is-paused" : ""}`}
              />
            </div>

            {/* Project dots */}
            <div className="hl-show-dots" role="tablist" aria-label="Featured projects">
              {projects.map((proj, i) => (
                <button
                  key={proj.id}
                  className={`hl-show-dot ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={proj.name}
                  aria-selected={i === active}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ===== HERO — Floating Stage (light) ===== */
        .hl-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 110px 20px 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f8ff 100%);
        }
        @media (min-width: 1024px) { .hl-hero { padding: 140px 32px 100px; } }

        /* Background */
        .hl-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .hl-bg-blob { position: absolute; border-radius: 999px; filter: blur(90px); opacity: 0.45; }
        .hl-bg-blob--a { width: 480px; height: 480px; top: -160px; left: -120px; background: radial-gradient(closest-side, rgba(99,102,241,0.32), transparent); }
        .hl-bg-blob--b { width: 540px; height: 540px; top: -200px; right: -180px; background: radial-gradient(closest-side, rgba(168,85,247,0.28), transparent); }
        .hl-bg-blob--c { width: 380px; height: 380px; bottom: -140px; left: 35%; background: radial-gradient(closest-side, rgba(56,189,248,0.22), transparent); }
        .hl-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%);
        }

        /* Layout */
        .hl-wrap {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hl-wrap { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 56px; }
        }

        /* LEFT */
        .hl-left { display: flex; flex-direction: column; gap: 26px; max-width: 640px; }
        @media (max-width: 1023px) { .hl-left { margin: 0 auto; text-align: center; align-items: center; } }

        .hl-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(10,10,10,0.55);
          animation: hlFadeUp 0.7s 0.05s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hl-eyebrow-line { display: inline-block; width: 36px; height: 1px; background: linear-gradient(to right, #4f46e5, transparent); }

        .hl-title {
          font-family: 'Play', sans-serif !important;
          font-weight: 600;
          font-size: clamp(2rem, 4.6vw + 0.4rem, 3.6rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0;
          text-wrap: balance;
          animation: hlFadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hl-title-lead { color: #0a0a0a; }
        .hl-title-hl {
          background: linear-gradient(120deg, #4f7cff 0%, #6366f1 35%, #7c3aed 65%, #a855f7 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          font-weight: 700;
          animation: hlGradFlow 7s ease-in-out infinite;
        }
        .hl-title-city {
          font-weight: 700;
          color: #0a0a0a;
          position: relative;
          display: inline-block;
        }
        .hl-title-city::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 4px;
          height: 8px;
          background: linear-gradient(120deg, rgba(99,102,241,0.18), rgba(168,85,247,0.18));
          border-radius: 999px;
          z-index: -1;
        }
        @keyframes hlGradFlow {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .hl-sub {
          font-size: clamp(0.98rem, 0.8vw + 0.6rem, 1.08rem);
          line-height: 1.7;
          color: rgba(10,10,10,0.6);
          max-width: 560px;
          margin: 0;
          animation: hlFadeUp 0.8s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* Trust badges */
        .hl-badges {
          display: flex; flex-wrap: wrap; gap: 12px;
          align-items: center;
        }
        @media (max-width: 1023px) { .hl-badges { justify-content: center; } }

        .hl-badge {
          position: relative;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 14px 9px 11px;
          background: #fff;
          border: 1px solid rgba(10,10,10,0.06);
          border-radius: 999px;
          color: #4f46e5;
          font-family: 'Play', sans-serif;
          font-size: 12.5px; font-weight: 600;
          letter-spacing: -0.01em;
          box-shadow: 0 8px 22px -14px rgba(79,70,229,0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          animation: hlFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
          opacity: 0;
        }
        .hl-badge.hl-badge { opacity: 1; }
        .hl-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(124,58,237,0.3);
          box-shadow: 0 14px 32px -14px rgba(79,70,229,0.5);
        }
        .hl-badge-text { color: #0a0a0a; }
        .hl-badge-ring {
          position: absolute; inset: -1px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3));
          padding: 1px;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hl-badge:hover .hl-badge-ring { opacity: 1; }

        /* Trust pill */
        .hl-trust {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 7px 14px 7px 10px;
          border-radius: 999px;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.25);
          color: #15803d;
          font-family: ui-monospace, monospace;
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.06em;
          align-self: flex-start;
          animation: hlFadeUp 0.7s 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 1023px) { .hl-trust { align-self: center; } }
        .hl-trust-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: hlPulse 2s ease-in-out infinite;
        }
        @keyframes hlPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.06); }
        }

        /* CTAs */
        .hl-cta {
          display: flex; flex-wrap: wrap; gap: 12px;
          margin-top: 4px;
          animation: hlFadeUp 0.7s 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 1023px) { .hl-cta { justify-content: center; } }
        .hl-cta-primary, .hl-cta-ghost {
          position: relative;
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 24px;
          font-family: 'Play', sans-serif;
          font-size: 14px; font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease, background-position 0.6s ease;
        }
        .hl-cta-primary {
          color: #fff;
          background: linear-gradient(120deg, #163198, #4338ca, #4f46e5, #7c3aed, #a855f7);
          background-size: 220% 100%;
          background-position: 0% 50%;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.25), 0 16px 40px -16px rgba(79,70,229,0.55);
        }
        .hl-cta-primary:hover {
          transform: translateY(-2px);
          background-position: 100% 50%;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.32), 0 22px 50px -16px rgba(168,85,247,0.55);
          color: #fff;
        }
        .hl-cta-shine {
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.8s ease;
        }
        .hl-cta-primary:hover .hl-cta-shine { transform: translateX(100%); }
        .hl-cta-text { position: relative; z-index: 1; }
        .hl-cta-ghost {
          color: #0a0a0a;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(10,10,10,0.12);
          backdrop-filter: blur(6px);
        }
        .hl-cta-ghost:hover {
          background: #fff;
          border-color: rgba(124,58,237,0.4);
          color: #4f46e5;
          transform: translateY(-2px);
        }

        /* ===== RIGHT — Floating Stage ===== */
        .hl-stage {
          --px: 0; --py: 0;
          position: relative;
          width: 100%;
          /* Taller than square now that the 2:3 mockup is the only thing here. */
          aspect-ratio: 4 / 5;
          max-width: 520px;
          margin: 0 auto;
          perspective: 1200px;
        }

        .hl-stage-cloud {
          position: absolute;
          inset: 8% 8%;
          background:
            radial-gradient(closest-side, rgba(99,102,241,0.18), transparent 70%),
            radial-gradient(closest-side, rgba(168,85,247,0.16), transparent 70%);
          background-size: 80% 80%, 80% 80%;
          background-position: 20% 30%, 80% 70%;
          background-repeat: no-repeat;
          filter: blur(40px);
          border-radius: 50%;
          z-index: 0;
        }


        /* Project showcase (center) */
        .hl-show {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) translate3d(calc(var(--px) * 6px), calc(var(--py) * 6px), 0);
          /* Children keep their own depth instead of being flattened, which is
             what turns the tilt below into real 3D rather than a skew. */
          transform-style: preserve-3d;
          z-index: 1;
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          animation: hlShowIn 0.9s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 640px) { .hl-show { width: 258px; } }
        @media (max-width: 480px) { .hl-show { width: 232px; } }

        @keyframes hlShowIn {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.92); }
          to   { opacity: 1; }
        }

        /* Project name above */
        .hl-show-title {
          transform: translateZ(52px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          text-align: center;
          animation: hlTitleSwap 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes hlTitleSwap {
          0%   { opacity: 0; transform: translateY(-6px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .hl-show-name {
          font-family: 'Play', sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 1.5vw + 0.4rem, 1.75rem);
          letter-spacing: -0.02em;
          line-height: 1;
          background: linear-gradient(120deg, var(--brand-1), var(--brand-2));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background 0.6s ease;
        }
        .hl-show-role {
          font-family: ui-monospace, monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.5);
        }

        /* The source images are already finished mockups — a phone on its own
           branded background — so wrapping them in a second CSS phone frame
           was double-framing them. This is a plain 2:3 card that matches the
           artwork exactly: nothing cropped, nothing letterboxed. */
        /* ---- 3D card ----
           Rotates with the pointer via the --px / --py the stage already
           publishes. The rotation is capped at 9deg: past roughly ten the
           artwork starts to look distorted rather than turned. */
        .hl-show-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
          border-radius: 26px;
          transform-style: preserve-3d;
          transform:
            rotateY(calc(var(--px) * 9deg))
            rotateX(calc(var(--py) * -9deg))
            translateZ(0);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.6s ease;
          box-shadow:
            0 40px 90px -22px color-mix(in srgb, var(--brand-1) 38%, transparent),
            0 20px 44px -16px rgba(10,10,10,0.22);
        }
        /* The shadow deepens and shifts opposite the tilt, so the card reads as
           lifting off the page rather than rotating flat against it. */
        .hl-stage:hover .hl-show-frame {
          box-shadow:
            calc(var(--px) * -22px) calc(var(--py) * -18px + 52px) 110px -24px
              color-mix(in srgb, var(--brand-1) 48%, transparent),
            0 26px 56px -18px rgba(10,10,10,0.28);
        }

        /* Glow sits behind the card in Z, so it stays put as the card turns. */
        .hl-show-glow {
          position: absolute;
          inset: -25%;
          background: radial-gradient(closest-side, color-mix(in srgb, var(--brand-1) 40%, transparent), transparent 70%);
          filter: blur(55px);
          opacity: 0.7;
          transform: translateZ(-90px) scale(1.1);
          z-index: -1;
          transition: background 0.6s ease;
        }

        /* A second card ghosted behind the first, catching the light as the
           stack turns — the cheapest way to read as depth rather than a plane. */
        .hl-show-depth {
          position: absolute;
          inset: 6% 8%;
          border-radius: 22px;
          background: linear-gradient(150deg,
            color-mix(in srgb, var(--brand-1) 26%, transparent),
            color-mix(in srgb, var(--brand-2) 18%, transparent));
          transform: translateZ(-46px) translateY(16px) scale(0.97);
          filter: blur(2px);
          opacity: 0.55;
          z-index: -1;
          pointer-events: none;
          transition: background 0.6s ease;
        }

        /* Specular sweep across the glass, tracking the pointer. */
        .hl-show-sheen {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            calc(105deg + var(--px) * 22deg),
            transparent 38%,
            rgba(255,255,255,0.34) 50%,
            transparent 62%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .hl-stage:hover .hl-show-sheen { opacity: 1; }
        .hl-show-image-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: inherit;
          transform: translateZ(1px);
          animation: hlImgIn 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes hlImgIn {
          0%   { opacity: 0; transform: scale(1.06); filter: blur(8px) saturate(0.7); }
          60%  { opacity: 1; filter: blur(0) saturate(1); }
          100% { opacity: 1; transform: scale(1); filter: blur(0) saturate(1); }
        }
        /* The card is the artwork's own 2:3 ratio, so cover and contain give
           the same result — the whole mockup, uncropped. */
        .hl-show-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Progress bar */
        .hl-show-progress {
          width: 70%;
          height: 2px;
          background: rgba(10,10,10,0.08);
          border-radius: 999px;
          overflow: hidden;
        }
        .hl-show-progress-fill {
          display: block;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, var(--brand-1), var(--brand-2));
          transform-origin: left center;
          animation: hlProgress 3.2s linear forwards;
          transition: background 0.6s ease;
        }
        .hl-show-progress-fill.is-paused { animation-play-state: paused; }
        @keyframes hlProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* Dots */
        .hl-show-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .hl-show-dot {
          width: 6px; height: 6px;
          border-radius: 999px;
          background: rgba(10,10,10,0.18);
          border: 0;
          padding: 0;
          cursor: pointer;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s ease;
        }
        .hl-show-dot.is-active {
          width: 22px;
          background: linear-gradient(90deg, var(--brand-1), var(--brand-2));
        }
        .hl-show-dot:hover { background: rgba(10,10,10,0.4); }
        .hl-show-dot.is-active:hover { background: linear-gradient(90deg, var(--brand-1), var(--brand-2)); }

        /* Animations */
        @keyframes hlPhoneIn {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.92); }
          to   { opacity: 1; }
        }
        @keyframes hlFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .hl-stage { max-width: 460px; }
        }
        @media (max-width: 460px) {
          .hl-stage { aspect-ratio: 4 / 5; max-width: 360px; }
        }

        @media (prefers-reduced-motion: reduce) {
          /* Flatten the 3D stage entirely — a card that pitches with the
             cursor is exactly the kind of motion this setting turns off. */
          .hl-show-frame {
            transform: none !important;
            transition: none !important;
          }
          .hl-show-glow, .hl-show-depth, .hl-show-title { transform: none !important; }
          .hl-show-depth, .hl-show-sheen { display: none; }
          .hl-show, .hl-show-title, .hl-show-image-wrap,
          .hl-phone, .hl-title-hl, .hl-trust-dot, .hl-eyebrow,
          .hl-title, .hl-sub, .hl-cta, .hl-trust, .hl-badge {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
