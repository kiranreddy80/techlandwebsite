import React from "react";
import { Link } from "react-router-dom";
import company from "../config/company";

/**
 * Services shown in the footer.
 *
 * Staffing Services was removed — it is no longer offered, and it had already
 * been taken out of the home page services section.
 */
const services = [
  { to: "/services/web-development", label: "Web Development" },
  { to: "/services/mobile-app-development", label: "Mobile App Development" },
  { to: "/services/digital-marketing", label: "Digital Marketing" },
  { to: "/services/custom-software-development", label: "Custom Software" },
  { to: "/services/ui-ux-design", label: "UI / UX Design" },
];

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/our-team", label: "Our Team" },
  { to: "/portfolio", label: "Our Work" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

/** Only profiles that exist. Empty entries in company.js drop out here. */
const socials = [
  { href: company.social.linkedin, label: "LinkedIn", icon: "fab fa-linkedin-in" },
  { href: company.social.instagram, label: "Instagram", icon: "fab fa-instagram" },
  { href: company.social.facebook, label: "Facebook", icon: "fab fa-facebook-f" },
  { href: company.whatsapp(), label: "WhatsApp", icon: "fab fa-whatsapp" },
].filter((s) => s.href);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft" role="contentinfo">
      <div className="ft-bg" aria-hidden="true">
        <span className="ft-orb ft-orb--a" />
        <span className="ft-orb ft-orb--b" />
        <span className="ft-grid" />
      </div>

      <div className="ft-container">
        {/* -------------------------------------------------- top CTA */}
        <div className="ft-cta">
          <div>
            <h2 className="ft-cta-title">
              Have something to build?
            </h2>
            <p className="ft-cta-sub">
              Send a short brief — scope, timeline and a number come back within
              two working hours.
            </p>
          </div>
          <div className="ft-cta-actions">
            <Link to="/contact" className="ft-btn ft-btn--solid">
              Start a project
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </Link>
            <a href={company.phone.href} className="ft-btn ft-btn--ghost">
              {company.phone.display}
            </a>
          </div>
        </div>

        {/* -------------------------------------------------- columns */}
        <div className="ft-cols">
          <div className="ft-col ft-col--brand">
            <Link to="/" className="ft-logo" aria-label="Techland IT Solutions home">
              <img src="/assets/media/logo.png" alt="Techland IT Solutions" loading="lazy" />
            </Link>
            <p className="ft-about">
              An IT partner in Hyderabad building apps, websites and marketing
              programmes for {company.stats.clients} businesses across India and
              abroad — designed, built and supported in-house.
            </p>

            {socials.length > 0 && (
              <ul className="ft-social">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                    >
                      <i className={s.icon} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav className="ft-col" aria-label="Services">
            <h3 className="ft-col-title">Services</h3>
            <ul className="ft-links">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="ft-col" aria-label="Company">
            <h3 className="ft-col-title">Company</h3>
            <ul className="ft-links">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ft-col ft-col--contact">
            <h3 className="ft-col-title">Get in touch</h3>
            <ul className="ft-contact">
              <li>
                <span className="ft-k">Studio</span>
                <a
                  className="ft-v"
                  href={company.maps.place}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.address.full}
                </a>
              </li>
              <li>
                <span className="ft-k">Phone</span>
                <a className="ft-v" href={company.phone.href}>
                  {company.phone.display}
                </a>
              </li>
              <li>
                <span className="ft-k">Email</span>
                <a className="ft-v" href={company.email.href}>
                  {company.email.primary}
                </a>
              </li>
              <li>
                <span className="ft-k">Hours</span>
                <span className="ft-v ft-v--plain">{company.hours.display}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* -------------------------------------------------- bottom */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="ft-meta">
            {company.certifications.join(" · ")}
            <span aria-hidden="true"> · </span>
            Hyderabad, India
          </p>
        </div>
      </div>

      <style>{`
        /* ============================================================
           FOOTER

           Replaces a 746-line build that carried ~300 lines of seasonal
           emoji snowfall (❄ 💖 🔱 raining over the links), a logo with
           alt="Atek" from the purchased template, a Staffing Services
           link for a service no longer offered, and a six-image blog
           thumbnail gallery that loaded full-size images.

           Four columns, one accent, everything sourced from company.js.
           ============================================================ */
        .ft {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #0B1020;
          color: rgba(255,255,255,0.72);
          padding: 0 0 26px;
        }

        .ft-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .ft-orb { position: absolute; border-radius: 999px; filter: blur(120px); }
        .ft-orb--a {
          width: 520px; height: 520px; top: -220px; left: -160px;
          background: radial-gradient(closest-side, rgba(79,70,229,0.42), transparent);
        }
        .ft-orb--b {
          width: 560px; height: 560px; bottom: -260px; right: -180px;
          background: radial-gradient(closest-side, rgba(124,58,237,0.34), transparent);
        }
        .ft-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(ellipse at 50% 0%, #000 10%, transparent 68%);
        }

        .ft-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .ft-container { padding: 0 32px; } }

        /* ---- top CTA ---- */
        .ft-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          padding: 46px 0 42px;
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        @media (min-width: 1024px) { .ft-cta { padding: 62px 0 54px; } }

        .ft-cta-title {
          margin: 0;
          font-family: "Play", sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 2.4vw + 0.6rem, 2.4rem);
          line-height: 1.1;
          letter-spacing: -0.032em;
          color: #ffffff;
          text-wrap: balance;
        }
        .ft-cta-sub {
          margin: 10px 0 0;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.55);
          max-width: 46ch;
        }
        .ft-cta-actions { display: flex; flex-wrap: wrap; gap: 12px; }

        .ft-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px;
          border-radius: 999px;
          font-family: "Play", sans-serif;
          font-size: 14px; font-weight: 640;
          letter-spacing: -0.01em;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .ft-btn--solid {
          color: #ffffff;
          background: linear-gradient(120deg, #163198, #4f46e5 55%, #7c3aed);
          box-shadow: 0 18px 40px -18px rgba(79,70,229,0.8);
        }
        .ft-btn--solid:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 24px 52px -18px rgba(79,70,229,0.95);
        }
        .ft-btn--ghost {
          color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }
        .ft-btn--ghost:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.34);
        }
        .ft-btn svg {
          width: 17px; height: 17px;
          fill: none; stroke: currentColor;
          stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-btn--solid:hover svg { transform: translateX(3px); }

        /* ---- columns ---- */
        .ft-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 38px;
          padding: 44px 0 40px;
          border-bottom: 1px solid rgba(255,255,255,0.09);
        }
        @media (min-width: 640px)  { .ft-cols { grid-template-columns: 1fr 1fr; gap: 38px 32px; } }
        @media (min-width: 1024px) { .ft-cols { grid-template-columns: 1.5fr 1fr 1fr 1.4fr; gap: 44px; padding: 56px 0 48px; } }

        .ft-col { min-width: 0; }
        .ft-col-title {
          margin: 0 0 18px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .ft-logo { display: inline-block; }
        /* The stored logo is dark-on-white, so it needs a plate to sit on a
           dark ground. A knockout version would remove the need for this. */
        .ft-logo img {
          height: 42px; width: auto; display: block;
          background: #ffffff;
          padding: 7px 11px;
          border-radius: 10px;
        }
        .ft-about {
          margin: 20px 0 0;
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.55);
          max-width: 42ch;
        }

        .ft-social { list-style: none; margin: 22px 0 0; padding: 0; display: flex; gap: 10px; }
        .ft-social a {
          width: 38px; height: 38px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .ft-social a:hover {
          transform: translateY(-3px);
          color: #ffffff;
          border-color: transparent;
          background: linear-gradient(135deg, #163198, #7c3aed);
        }

        .ft-links { list-style: none; margin: 0; padding: 0; display: grid; gap: 11px; }
        .ft-links a {
          font-size: 14.5px;
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.28s ease, gap 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        /* A rule that grows in from nothing, rather than an arrow that jumps. */
        .ft-links a::before {
          content: "";
          width: 0; height: 1px;
          background: linear-gradient(90deg, #4f46e5, #a78bfa);
          transition: width 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-links a:hover { color: #ffffff; }
        .ft-links a:hover::before { width: 14px; }

        /* ---- contact ---- */
        .ft-contact { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; }
        .ft-contact li {
          display: grid;
          grid-template-columns: 62px 1fr;
          gap: 14px;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ft-contact li:last-child { border-bottom: 0; }
        .ft-k {
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }
        .ft-v {
          font-size: 14px;
          line-height: 1.55;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          transition: color 0.28s ease;
        }
        a.ft-v:hover { color: #a78bfa; }
        .ft-v--plain { color: rgba(255,255,255,0.6); }

        /* ---- bottom ---- */
        .ft-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 24px;
        }
        .ft-copy, .ft-meta {
          margin: 0;
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
        }
        .ft-meta {
          font-family: ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          .ft-btn, .ft-btn svg, .ft-social a, .ft-links a, .ft-links a::before, .ft-v {
            transition: none !important;
          }
          .ft-btn--solid:hover, .ft-social a:hover { transform: none !important; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
