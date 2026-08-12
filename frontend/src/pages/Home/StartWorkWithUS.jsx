import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StartWorkWithUS.css";

/**
 * The apps shown in the handset beside the call to action.
 *
 * Add or remove a line and the rotation follows — nothing else to change.
 * Each file is the full device shot, bezel included, which is why the frame
 * around it is transparent rather than the CSS-drawn phone it used to be.
 */
const SHOWCASE = [
  { src: "/assets/img/mobile_projects/1.webp", name: "Zenfoo" },
  { src: "/assets/img/mobile_projects/2.webp", name: "Best Seeds" },
  { src: "/assets/img/mobile_projects/3.webp", name: "Market Yatra" },
  { src: "/assets/img/mobile_projects/6.webp", name: "Temple City" },
  { src: "/assets/img/mobile_projects/7.webp", name: "Yuva Ride" },
];

/** How long each screen holds before the next fades in. */
const SCREEN_MS = 3200;

const StartWorkWithUS = () => {
  const { setOpenContactModal } = useOutletContext();
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  /**
   * Rotate the handset screens. Held still for anyone who has asked for
   * reduced motion — a crossfade that never stops is exactly what that
   * setting exists to prevent.
   */
  useEffect(() => {
    if (SHOWCASE.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setScreen((i) => (i + 1) % SHOWCASE.length),
      SCREEN_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="cta-radical-section">
      {/* Background Layers */}
      <div className="cta-grid-overlay"></div>
      <div className="cta-diagonal-bg"></div>
      <div className="bg-giant-text">TECH</div>

      <div className="container">
        <div className="cta-flex-layout">

          {/* Left Side: Bold Typography & Action */}
          <div className="cta-text-side">
            <div className="cta-status-indicator" data-aos="fade-down">
              <div className="status-dot"></div>
              <span className="status-label">Now Accepting New Projects</span>
            </div>

            <h2 className="cta-big-heading" data-aos="fade-up" data-aos-duration="1200">
              Start Your <span>Evolution</span> With Us
            </h2>

            <p className="cta-description-bold" data-aos="fade-up" data-aos-delay="200">
              We don't just build apps; we engineer digital legacies.
              Partner with Hyderabad's most innovative development force
              to transform your concept into a market-crushing reality.
            </p>

            <button
              className="cta-pure-btn"
              data-aos="zoom-in"
              data-aos-delay="400"
              onClick={() => setOpenContactModal(true)}
            >
              Start Work 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          
          <div className="cta-video-frame" data-aos="fade-left" data-aos-duration="1500">
            {/* Background Aesthetic Glow */}
            <div className="video-glow-base"></div>

            <div className="video-window">
              {/* HUD Decorative Overlays */}
              <div className="hud-corner top-left"></div>
              <div className="hud-corner bottom-right"></div>
              <div className="video-scanner"></div>

              {/* The screens used to be a baked-in 15s MP4, which meant the
                  line-up could only be changed by re-exporting the video —
                  and it played at 280x520 into a 319x711 box, so it was
                  upscaled and soft. These are the project screenshots at
                  818x1600, crossfading on a timer. Adding or removing a
                  project is now a line in SHOWCASE above. */}
              {SHOWCASE.map((shot, i) => (
                <img
                  key={shot.src}
                  className={`cta-screen ${i === screen ? "is-live" : ""}`}
                  src={shot.src}
                  alt={`${shot.name} mobile app built by Techland IT Solutions`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  aria-hidden={i === screen ? undefined : true}
                />
              ))}
            </div>

            {/* Technical HUD Markers */}
            <div className="tech-marker marker-v"></div>
            <div className="tech-marker marker-h"></div>

            {/* Background elements integrated into the frame area */}
            <div className="decorative-label" style={{
              position: 'absolute',
              top: '-30px',
              right: '20px',
              color: '#6366f1',
              fontWeight: '900',
              letterSpacing: '5px'
            }}>
              PROJECT.EXE
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartWorkWithUS;
