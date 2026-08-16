import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Database, ShieldCheck, Cloud, Headset, Award, Sparkles } from "lucide-react";

/**
 * Our own work, cycling through the two cards beside the Zenfoo phone.
 *
 * The two columns are offset by one so the same project never shows in both
 * slots at once, which means this list has to stay at three items or more.
 */
const showcase = [
  { src: "/assets/media/Assets/Projectimg/nudealweb.png",     alt: "Nudeal — e-commerce website built by Techland IT Solutions" },
  { src: "/assets/media/Assets/Projectimg/meato.png",         alt: "MeatO — food delivery mobile app built by Techland IT Solutions" },
  { src: "/assets/media/Assets/Projectimg/templecityweb.png", alt: "Temple City — website built by Techland IT Solutions" },
  { src: "/assets/media/Assets/Projectimg/sapid.png",         alt: "SAPID — hospitality platform built by Techland IT Solutions" },
  { src: "/assets/media/Assets/Projectimg/nudeal.png",        alt: "Nudeal — marketplace mobile app built by Techland IT Solutions" },
];

const ROTATE_MS = 2000;

const HomeAboutUs = () => {
  const [slot, setSlot] = useState(0);
  const sectionRef = useRef(null);

  /**
   * Scroll-scrubbed parallax.
   *
   * Publishes how far through the viewport the section is as --scrub (-1 at
   * the bottom edge, 0 dead centre, 1 at the top), and the CSS multiplies that
   * by a different distance per layer.
   *
   * Done in JS rather than with CSS animation-timeline because that is still
   * Chromium-only — this runs everywhere. Reads are batched into a rAF so the
   * scroll handler never lays out synchronously.
   */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Centre of the section relative to centre of viewport, normalised.
      const p = (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2);
      el.style.setProperty("--scrub", Math.max(-1, Math.min(1, p)).toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    // Respect the OS setting — an image swapping every 2s is exactly the kind
    // of motion "reduce motion" is asking us not to do.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = setInterval(() => {
      setSlot((i) => (i + 1) % showcase.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  // Fetch the next pair ahead of time. Without this the first pass through the
  // list shows an empty card for a beat while each file downloads.
  useEffect(() => {
    [2, 3].forEach((ahead) => {
      const img = new Image();
      img.src = showcase[(slot + ahead) % showcase.length].src;
    });
  }, [slot]);

  // Second card trails the first by one, so the pair is always two different
  // projects.
  const cardA = showcase[slot];
  const cardB = showcase[(slot + 1) % showcase.length];

  const features = [
    { id: 1, icon: Database,    title: "Data Storage & Backup",   desc: "Secure, scalable storage with automated backups." },
    { id: 2, icon: ShieldCheck, title: "Disaster Recovery",        desc: "Business continuity with rapid recovery plans." },
    { id: 3, icon: Cloud,       title: "Hybrid & Multi-Cloud",     desc: "Seamless integration across cloud providers." },
    { id: 4, icon: Headset,     title: "24/7 Expert Support",      desc: "Dedicated team available around the clock." },
  ];

  const stats = [
    { id: 1, value: "Since 2024", label: "Trusted Partner" },
    { id: 2, value: "156+",       label: "Mobile Apps" },
    { id: 3, value: "96+",        label: "Websites" },
  ];

  return (
    <section className="hau-section" id="about-sec" ref={sectionRef}>
      <div className="hau-bg" aria-hidden="true">
        <div className="hau-bg-grad" />
        <div className="hau-bg-orb hau-bg-orb--a" />
        <div className="hau-bg-orb hau-bg-orb--b" />
      </div>

      <div className="hau-container">
        {/* Header */}
        <div className="hau-head">
          <div className="hau-eyebrow">
            <span className="hau-eyebrow-line" aria-hidden="true" />
            <span className="hau-eyebrow-text">About Us</span>
          </div>
          <h2 className="hau-title">
            <span className="hau-title-lead">Techland IT Solutions — Best </span>
            <span className="hau-title-hl">App, Web &amp; Digital Marketing</span>
            <span className="hau-title-lead"> Services</span>
            <span className="hau-title-dot">.</span>
          </h2>
        </div>

        <div className="hau-grid">
          {/* LEFT — original images, framed */}
          <div className="hau-media">
            <div className="hau-media-frame">
              <span className="hau-media-grid" aria-hidden="true" />
              <span className="hau-media-orb hau-media-orb--a" aria-hidden="true" />
              <span className="hau-media-orb hau-media-orb--b" aria-hidden="true" />

              {/* Our own work, not stock photography — a website build and an
                  app build either side of the Zenfoo screen. */}
              <div className="img-box15 d-flex justify-content-center">
                <div className="img1 d-none d-md-block">
                  {/* key forces a remount on change so the fade replays */}
                  <img
                    key={cardA.src}
                    className="hau-rotator"
                    src={cardA.src}
                    alt={cardA.alt}
                    width="1080"
                    height="1080"
                    loading="lazy"
                  />
                  <img
                    key={cardB.src}
                    className="hau-rotator"
                    src={cardB.src}
                    alt={cardB.alt}
                    width="1080"
                    height="1080"
                    loading="lazy"
                  />
                </div>
                <div className="img2">
                  <img
                    src="/assets/img/normal/mobile about.png"
                    alt="Zenfoo — grocery delivery app built by Techland IT Solutions"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Top-left chip — matches services chip style */}
              <div className="hau-chip">
                <Award size={13} strokeWidth={1.8} />
                <span className="hau-chip-text">Since 2024</span>
                <span className="hau-chip-sep" aria-hidden="true">·</span>
                <span className="hau-chip-meta">Trusted IT Partner</span>
              </div>

              {/* Bottom-right floating stat — matches services stat-float */}
              <div className="hau-float">
                <span className="hau-float-v">
                  350<span className="hau-float-u">+</span>
                </span>
                <span className="hau-float-l">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="hau-content">
            <p className="hau-paragraph">
              Techland IT Solutions is a leading provider of App, Web, and Digital
              Marketing services in Hyderabad. Our customer-centric approach and
              innovative strategies set us apart. We are a team of passionate
              developers and marketers dedicated to delivering high-performance
              digital solutions. From custom application development to
              result-oriented digital marketing campaigns, we combine creativity
              and technology to help your business thrive in the digital landscape.
            </p>

            <ul className="hau-features">
              {features.map(({ id, icon: Icon, title, desc }) => (
                <li key={id} className="hau-feature">
                  <span className="hau-feature-icon">
                    <Icon size={16} strokeWidth={1.6} />
                  </span>
                  <div className="hau-feature-text">
                    <span className="hau-feature-title">{title}</span>
                    <span className="hau-feature-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="hau-stats">
              {stats.map((s, i) => (
                <div key={s.id} className={`hau-stat ${i > 0 ? "has-rule" : ""}`}>
                  <span className="hau-stat-v">{s.value}</span>
                  <span className="hau-stat-l">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hau-cta-row">
              <Link to="/about" className="hau-cta-primary">
                Learn More <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="hau-cta-ghost">
                <Sparkles size={14} strokeWidth={1.7} />
                Work With Us
              </Link>  
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ===== About Us — aligned with Hero + Services design system ===== */
        .hau-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 90px 0 100px;
          background: #ffffff;
        }
        @media (min-width: 1024px) { .hau-section { padding: 115px 0 135px; } }

        .hau-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .hau-bg-grad { 
          position: absolute; inset: 0;
          background:   
            radial-gradient(900px 480px at 100% -8%, rgba(22,49,152,0.05), transparent 60%),
            radial-gradient(800px 480px at 0% 110%, rgba(124,58,237,0.06), transparent 60%),
            linear-gradient(180deg, #ffffff 0%, #fafaff 60%, #ffffff 100%);
        }
        .hau-bg-orb { position: absolute; border-radius: 999px; filter: blur(80px); opacity: 0.45; }
        .hau-bg-orb--a { width: 340px; height: 340px; top: -120px; right: -100px; background: radial-gradient(closest-side, rgba(22,49,152,0.18), transparent); }
        .hau-bg-orb--b { width: 440px; height: 440px; bottom: -180px; left: -120px; background: radial-gradient(closest-side, rgba(124,58,237,0.18), transparent); }

        .hau-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .hau-container { padding: 0 32px; } }

        /* Header — same as services head */
        .hau-head { margin: 0 auto 40px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; }
        @media (min-width: 1024px) { .hau-head { margin-bottom: 58px; gap: 20px; } }
        .hau-eyebrow { display: inline-flex; align-items: center; gap: 14px; }
        .hau-eyebrow-line { display: inline-block; width: 36px; height: 1px; background: linear-gradient(to right, transparent, #4f46e5, transparent); }
        .hau-eyebrow-text {
          font-family: 'Play', sans-serif;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase;
          color: rgba(10,10,10,0.55);
        }
        .hau-title {
          font-family: 'Play', sans-serif !important;
          font-weight: 500;
          font-size: clamp(1.65rem, 2.9vw + 0.45rem, 2.7rem);
          line-height: 1.12;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 0;
          max-width: 820px;
          text-wrap: balance;
        }
        .hau-title-lead { color: #0a0a0a; }
        /* Same face as the rest of the headline — the gradient carries the
           emphasis on its own, the way the hero already does it. */
        .hau-title-hl {
          font-weight: 700;
          background: linear-gradient(120deg, #163198 0%, #4338ca 30%, #4f46e5 55%, #7c3aed 80%, #a855f7 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: hauGradFlow 6s ease-in-out infinite;
        }
        @keyframes hauGradFlow {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .hau-title-dot { color: rgba(10,10,10,0.9); }

        /* Layout */
        .hau-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hau-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 56px; }
        }

        /* LEFT — image frame */
        .hau-media { width: 100%; display: flex; justify-content: center; }
        .hau-media-frame {
          position: relative;
          width: 100%;
          max-width: 500px;
          background: #ffffff;
          border: 1px solid rgba(10,10,10,0.07);
          border-radius: 22px;
          padding: 28px 22px;
          overflow: hidden;
          isolation: isolate;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.95),
            0 32px 86px -34px rgba(79, 70, 229, 0.32),
            0 10px 28px -12px rgba(10,10,10,0.06);
        }
        @media (min-width: 768px) { .hau-media-frame { padding: 36px 26px; } }

        .hau-media-grid {
          position: absolute; inset: 0; z-index: -1;
          background-image:
            linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%);
          opacity: 0.7;
        }
        .hau-media-orb { position: absolute; border-radius: 999px; filter: blur(60px); z-index: -1; }
        .hau-media-orb--a {
          width: 220px; height: 220px; top: -60px; left: -40px;
          background: radial-gradient(closest-side, rgba(22,49,152,0.18), transparent);
        }
        .hau-media-orb--b {
          width: 260px; height: 260px; bottom: -80px; right: -60px;
          background: radial-gradient(closest-side, rgba(124,58,237,0.18), transparent);
        }

        /* Preserve original image layout from img-box15 */
        .hau-media-frame .img-box15 { position: relative; z-index: 1; align-items: center; }
        .hau-media-frame .img-box15 img { border-radius: 16px; }

        /* The project cards are square 1080x1080 artwork with the project name
           set across the bottom, so the slots are square too — cropping them to
           the old 6:5 would cut the name off. Sizes are fixed here because the
           source files are far larger than the space they sit in. */
        .hau-media-frame .img-box15 .img1 {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: none;
        }
        .hau-media-frame .img-box15 .img1 img {
          width: 250px;
          height: 250px;
          object-fit: cover;
          display: block;
          box-shadow: 0 18px 40px -20px rgba(10,10,10,0.35);
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.45s ease;
        }

        /* Cross-fade as each project swaps in. Kept well under the 2s interval
           so the card is fully settled before the next change. */
        .hau-rotator { animation: hauSwap 0.6s cubic-bezier(0.22,1,0.36,1); }
        @keyframes hauSwap {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        .hau-media-frame .img-box15 .img1 img:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 54px -20px rgba(79,70,229,0.45);
        }
        @media (max-width: 1199px) {
          .hau-media-frame .img-box15 .img1 img { width: 205px; height: 205px; }
        }


          to   { transform: translateY(-26px); }
        }


        /* ============================================================
           SCROLL-SCRUBBED PARALLAX

           --scrub runs -1 → 1 as the section crosses the viewport, set
           by the handler in this component. Each layer multiplies it by
           a different distance, and that difference is what reads as
           depth — if they all moved the same amount it would just look
           like the page sliding.
           ============================================================ */
        .hau-section { --scrub: 0; }

        .hau-media-frame,
        .hau-media-frame .img1 img,
        .hau-media-frame .img2,
        .hau-media-orb--a,
        .hau-media-orb--b,
        .hau-content {
          will-change: transform;
        }

        /* Back layer travels furthest. */
        .hau-media-orb--a { transform: translate3d(calc(var(--scrub) * 30px), calc(var(--scrub) * -52px), 0); }
        .hau-media-orb--b { transform: translate3d(calc(var(--scrub) * -30px), calc(var(--scrub) * 52px), 0); }

        /* The frame drifts and tilts. */
        .hau-media-frame {
          transform: translateY(calc(var(--scrub) * -20px)) rotate(calc(var(--scrub) * 0.7deg));
        }

        /* Cards rise; the phone runs against them so the group
           counter-rotates rather than sliding as one piece. */
        .hau-media-frame .img1 img:first-child { transform: translateY(calc(var(--scrub) * -22px)); }
        .hau-media-frame .img1 img:last-child  { transform: translateY(calc(var(--scrub) * -40px)); }
        .hau-media-frame .img2                 { transform: translateY(calc(var(--scrub) * 24px)); }

        .hau-content { transform: translateY(calc(var(--scrub) * -18px)); }

        /* The rotator swap animation sets its own transform, so let it win
           for the moment it runs. */
        .hau-rotator { animation-fill-mode: none; }

        @media (prefers-reduced-motion: reduce) {
          .hau-section { --scrub: 0 !important; }
          .hau-media-frame .img-box15 .img1 img { transition: none; }
          .hau-media-frame .img-box15 .img1 img:hover { transform: none; }
          .hau-rotator { animation: none; }
        }

        /* Chip — matches services .as-card-chip */
        .hau-chip {
          position: absolute;
          top: 18px; left: 18px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 12px 6px 10px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(124,58,237,0.18);
          border-radius: 999px;
          backdrop-filter: blur(8px);
          box-shadow: 0 12px 28px -16px rgba(79,70,229,0.35);
          z-index: 3;
          color: #4f46e5;
        }
        .hau-chip-text {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .hau-chip-sep { color: rgba(10,10,10,0.25); font-size: 11px; line-height: 1; }
        .hau-chip-meta {
          font-family: ui-monospace, monospace;
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(10,10,10,0.6);
        }

        /* Float stat — matches services .as-card-stat-float */
        .hau-float {
          position: absolute;
          bottom: 18px; right: 18px;
          display: flex; flex-direction: column; gap: 1px;
          padding: 10px 13px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(10,10,10,0.06);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 28px -16px rgba(10,10,10,0.18);
          z-index: 3;
          text-align: right;
          min-width: 110px;
        }
        .hau-float-v {
          font-family: 'Play', sans-serif;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          line-height: 1;
        }
        .hau-float-u { font-size: 13px; font-weight: 600; }
        .hau-float-l {
          font-family: ui-monospace, monospace;
          font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(10,10,10,0.5);
          margin-top: 2px;
        }

        /* RIGHT — content */
        .hau-content { display: flex; flex-direction: column; gap: 22px; max-width: 540px; }
        @media (max-width: 1023px) { .hau-content { margin: 0 auto; } }

        .hau-paragraph {
          font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: 13.8px;
          line-height: 1.75;
          letter-spacing: -0.005em;
          color: rgba(10,10,10,0.65);
          margin: 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        /* Features — matches services .as-features visual language */
        .hau-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 540px) { .hau-features { grid-template-columns: 1fr 1fr; gap: 14px 18px; } }
        .hau-feature {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 12px 12px;
          border-radius: 13px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(10,10,10,0.07);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .hau-feature:hover {
          transform: translateY(-2px);
          border-color: rgba(124,58,237,0.25);
          box-shadow: 0 16px 36px -20px rgba(79,70,229,0.3);
        }
        .hau-feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 29px; height: 29px;
          flex-shrink: 0;
          border-radius: 8px;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          color: #fff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 10px 22px -10px rgba(79,70,229,0.5);
        }
        .hau-feature-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .hau-feature-title {
          font-family: 'Play', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: -0.018em;
          color: #0a0a0a;
          line-height: 1.2;
        }
        .hau-feature-desc {
          font-size: 11.8px;
          line-height: 1.45;
          color: rgba(10,10,10,0.55);
          letter-spacing: -0.005em;
        }

        /* Stats strip — same gradient style as services stat */
        .hau-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 16px 6px;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(10,10,10,0.07);
          border-radius: 15px;
          backdrop-filter: blur(8px);
          box-shadow: 0 16px 44px -26px rgba(79,70,229,0.22);
        }
        .hau-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; position: relative; padding: 4px 6px; text-align: center; }
        .hau-stat.has-rule::before {
          content: "";
          position: absolute;
          left: 0; top: 15%;
          height: 70%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(10,10,10,0.1), transparent);
        }
        .hau-stat-v {
          font-family: 'Play', sans-serif;
          font-weight: 700;
          font-size: clamp(14.5px, 2vw, 20px);
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #163198, #4f46e5, #7c3aed);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          line-height: 1;
          white-space: nowrap;
        }
        .hau-stat-l {
          font-family: ui-monospace, monospace;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.5);
          text-align: center;
        }

        /* CTA — matches hero + services button system */
        .hau-cta-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .hau-cta-primary, .hau-cta-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 20px;
          font-family: 'Play', sans-serif;
          font-size: 12.5px; font-weight: 600; letter-spacing: -0.01em;
          border-radius: 11px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease, background-position 0.6s ease;
          white-space: nowrap;
        }
        .hau-cta-primary {
          color: #fff;
          background: linear-gradient(120deg, #163198 0%, #4338ca 30%, #4f46e5 55%, #7c3aed 80%, #a855f7 100%);
          background-size: 200% 100%;
          background-position: 0% 50%;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 18px 48px -20px rgba(79,70,229,0.55);
        }
        .hau-cta-primary:hover {
          transform: translateY(-1px);
          background-position: 100% 50%;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), 0 22px 56px -18px rgba(124,58,237,0.5);
          color: #fff;
        }
        .hau-cta-ghost {
          color: #0a0a0a;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(10,10,10,0.12);
          backdrop-filter: blur(6px);
        }
        .hau-cta-ghost:hover {
          background: #fff;
          border-color: rgba(124,58,237,0.35);
          color: #4f46e5;
          transform: translateY(-1px);
        }

        @media (max-width: 480px) {
          .hau-chip { top: 10px; left: 10px; padding: 4px 10px 4px 8px; gap: 6px; }
          .hau-chip-meta { display: none; }
          .hau-chip-sep { display: none; }
          .hau-float { bottom: 10px; right: 10px; padding: 8px 11px; min-width: 90px; }
          .hau-float-v { font-size: 18px; }
          .hau-stats { padding: 14px 4px; }
          .hau-stat-l { font-size: 8.5px; }
          .hau-cta-row { width: 100%; }
          .hau-cta-primary, .hau-cta-ghost { flex: 1; justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hau-title-hl { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default HomeAboutUs;
