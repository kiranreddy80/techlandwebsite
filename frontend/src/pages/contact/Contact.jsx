import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import company from "../../config/company";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

/** Adds `.is-in` the first time an element enters view. Fires once. */
const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen];
};

const Contact = () => {
  const seo = getSEO("contact");

  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [channelsRef, channelsIn] = useReveal();
  const [formRef, formIn] = useReveal();
  const [mapRef, mapIn] = useReveal({ threshold: 0.08 });

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "Name is required";
    } else if (formData.firstName.trim().length < 2) {
      tempErrors.firstName = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      tempErrors.firstName = "Name should contain only letters";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10-15 digits";
    }

    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      setLoading(false);
      return;
    }

    try {
      await api.post("/contact", {
        name: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        subject: "General Inquiry (Contact Page)",
      });

      setFormData({ firstName: "", phone: "", email: "", message: "" });
      setErrors({});
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit form. Please check your connection and try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  /** Pointer position as CSS variables — no re-render per mouse move. */
  const trackPointer = (e) => {
    const card = e.target.closest(".ct-channel");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const fieldClass = (name) => `ct-field${errors[name] ? " has-error" : ""}`;

  const channels = [
    {
      k: "Call us",
      v: company.phone.display,
      note: "Mon–Sat, 10:00–19:00 IST",
      href: company.phone.href,
      icon: (
        <path d="M4.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L14 12l4 1.5v3a1.5 1.5 0 0 1-1.7 1.5A14 14 0 0 1 3 4.7 1.5 1.5 0 0 1 4.5 3z" />
      ),
    },
    {
      k: "Email us",
      v: company.email.primary,
      note: "Reply within two working hours",
      href: company.email.href,
      icon: (
        <>
          <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
          <path d="M3 6l7 5 7-5" />
        </>
      ),
    },
    {
      k: "WhatsApp",
      v: "Chat with us",
      note: "Fastest for quick questions",
      href: company.whatsapp("Hi Techland, I have a question about"),
      external: true,
      icon: (
        <path d="M10 2.5a7.5 7.5 0 0 0-6.4 11.4L2.5 17.5l3.7-1.1A7.5 7.5 0 1 0 10 2.5z" />
      ),
    },
    {
      k: "Visit us",
      v: company.address.medium,
      note: company.address.postalCode,
      href: company.maps.place,
      external: true,
      icon: (
        <>
          <path d="M10 18s6-5.2 6-9a6 6 0 1 0-12 0c0 3.8 6 9 6 9z" />
          <circle cx="10" cy="9" r="2.2" />
        </>
      ),
    },
  ];

  return (
    <div className="ct-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* ============================================ hero */}
      <section className="ct-hero">
        <div className="ct-hero-bg" aria-hidden="true">
          <span className="ct-orb ct-orb--a" />
          <span className="ct-orb ct-orb--b" />
          <span className="ct-hero-grid" />
        </div>

        <div className="ct-container">
          <nav className="ct-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>

          <h1 className="ct-hero-title">
            Tell us the problem.
            <span className="ct-hero-hl"> We'll tell you what it takes</span>.
          </h1>

          <p className="ct-hero-lede">
            Scope, timeline and a number back within two working hours — no
            discovery-call gate in front of it.
          </p>
        </div>
      </section>

      {/* ============================================ channels */}
      <section
        className={`ct-channels ${channelsIn ? "is-in" : ""}`}
        ref={channelsRef}
        aria-label="Ways to reach us"
      >
        <div className="ct-container">
          <div className="ct-channel-grid" onMouseMove={trackPointer}>
            {channels.map((c, i) => (
              <a
                className="ct-channel"
                key={c.k}
                href={c.href}
                style={{ "--i": i }}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="ct-channel-spot" aria-hidden="true" />
                <span className="ct-channel-edge" aria-hidden="true" />

                {/* Same glyph again, oversized and faint — gives the card a
                    background layer so it reads as a surface, not a rectangle
                    of text. */}
                <span className="ct-channel-mark" aria-hidden="true">
                  <svg viewBox="0 0 20 20">{c.icon}</svg>
                </span>

                <span className="ct-channel-ico" aria-hidden="true">
                  <svg viewBox="0 0 20 20">{c.icon}</svg>
                </span>

                <span className="ct-channel-k">{c.k}</span>
                <span className="ct-channel-v">{c.v}</span>
                <span className="ct-channel-note">{c.note}</span>

                <span className="ct-channel-go" aria-hidden="true">
                  <svg viewBox="0 0 20 20">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ form */}
      <section className={`ct-main ${formIn ? "is-in" : ""}`} ref={formRef}>
        <div className="ct-container ct-main-grid">
          <div className="ct-intro">
            <span className="ct-eyebrow">
              <span className="ct-eyebrow-line" aria-hidden="true" />
              Send a brief
            </span>
            <h2 className="ct-h2">
              A paragraph is enough to <span className="ct-h2-hl">start</span>.
            </h2>
            <p className="ct-intro-text">
              Tell us what you're building and what's in the way. If we're not
              the right fit we'll say so — and point you at someone who is.
            </p>

            <ul className="ct-promises">
              <li>
                <span className="ct-tick" aria-hidden="true" />
                A named engineer replies, not a sales script
              </li>
              <li>
                <span className="ct-tick" aria-hidden="true" />
                Fixed-scope quote or sprint rate, your choice
              </li>
              <li>
                <span className="ct-tick" aria-hidden="true" />
                Your brief stays confidential; NDA on request
              </li>
            </ul>
          </div>

          <form
            className="ct-form"
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            noValidate
          >
            <header className="ct-form-head">
              <h3>Get in touch</h3>
              <span className="ct-badge">
                <span className="ct-badge-dot" aria-hidden="true" />
                Reply in 2 working hours
              </span>
            </header>

            <div className="ct-row">
              <label className={fieldClass("firstName")}>
                <span className="ct-label">
                  Your name <em aria-hidden="true">*</em>
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
                {errors.firstName && (
                  <span className="ct-err">{errors.firstName}</span>
                )}
              </label>

              <label className={fieldClass("email")}>
                <span className="ct-label">
                  Email <em aria-hidden="true">*</em>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
                {errors.email && <span className="ct-err">{errors.email}</span>}
              </label>
            </div>

            <label className={fieldClass("phone")}>
              <span className="ct-label">
                Phone <em aria-hidden="true">*</em>
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                autoComplete="tel"
              />
              {errors.phone && <span className="ct-err">{errors.phone}</span>}
            </label>

            <label className={fieldClass("message")}>
              <span className="ct-label">
                What are we building? <em aria-hidden="true">*</em>
              </span>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Goals, timeline, and anything we should know…"
              />
              {errors.message && (
                <span className="ct-err">{errors.message}</span>
              )}
            </label>

            <footer className="ct-form-foot">
              <p className="ct-consent">
                By submitting, you agree to be contacted by {company.name} about
                this enquiry.
              </p>
              <button type="submit" className="ct-submit" disabled={loading}>
                <span>{loading ? "Sending…" : "Send message"}</span>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </button>
            </footer>
          </form>
        </div>
      </section>

      {/* ============================================ map */}
      <section className={`ct-map ${mapIn ? "is-in" : ""}`} ref={mapRef}>
        <div className="ct-container">
          <div className="ct-map-card">
            <div className="ct-map-info">
              <span className="ct-eyebrow">
                <span className="ct-eyebrow-line" aria-hidden="true" />
                The studio
              </span>
              <h2 className="ct-h2">Madhapur, Hyderabad.</h2>
              <address className="ct-address">{company.address.full}</address>
              <div className="ct-map-actions">
                <a
                  className="ct-btn ct-btn--solid"
                  href={company.maps.place}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </a>
                <a className="ct-btn ct-btn--ghost" href={company.phone.href}>
                  {company.phone.display}
                </a>
              </div>
            </div>

            <div className="ct-map-frame">
              {/* The embed is heavy and sits well below the fold, so it only
                  mounts once the section is actually in view. */}
              {mapIn && (
                <iframe
                  src={company.maps.embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techland IT Solutions location map"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
