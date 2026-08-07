import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StartWorkWithUS.css";

const StartWorkWithUS = () => {
  const { setOpenContactModal } = useOutletContext();

  useEffect(() => {
    AOS.init({ once: true });
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

              <video
                src="/assets/img/mobile_projects/start-work.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
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
