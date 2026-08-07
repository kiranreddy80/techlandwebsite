import React, { useState } from "react";
import api from "../../services/api";
import company from "../../config/company";
// Import the toast library
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  // State for loading button
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should contain only letters";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }

    // Phone validation
    if (!formData.number) {
      tempErrors.number = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.number)) {
      tempErrors.number = "Phone number must be 10 digits and start with 6-9";
    }

    // Message validation
    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.trim().length < 2)
        error = "Name must be at least 2 characters";
      else if (!/^[A-Za-z\s]+$/.test(value))
        error = "Name should contain only letters";
    }
    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
        error = "Enter a valid email address";
    }
    if (name === "number") {
      if (!value) error = "Phone number is required";
      else if (!/^[6-9]\d{9}$/.test(value))
        error = "Phone number must be 10 digits and start with 6-9";
    }
    if (name === "message") {
      if (!value) error = "Message is required";
      else if (value.length < 10)
        error = "Message must be at least 10 characters";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
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
      const dataToSend = {
        name: formData.name,
        phone: formData.number,
        email: formData.email,
        subject: formData.subject || "Home Page Quote Inquiry",
        message: formData.message,
      };

      await api.post("/contact", dataToSend);

      // Reset form immediately on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        number: "",
      });
      setErrors({});

      // Show success toast
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

  const fieldClass = (name) => `cu-field${errors[name] ? " has-error" : ""}`;

  return (
    <section className="cu-section" id="contact-sec">
      <div className="cu-bg" aria-hidden="true">
        <span className="cu-orb cu-orb--a" />
        <span className="cu-orb cu-orb--b" />
      </div>

      <div className="cu-container">
        <div className="cu-grid">
          {/* ---------------------------------------------- left: the pitch */}
          <div className="cu-intro">
            <span className="cu-eyebrow">
              <span className="cu-eyebrow-line" aria-hidden="true" />
              Start a project
            </span>

            <h2 className="cu-title">
              Tell us the problem.{" "}
              <span className="cu-title-hl">We'll tell you what it takes</span>.
            </h2>

            <p className="cu-lede">
              Send a short brief and you'll get scope, timeline and a number
              back — usually within two working hours. No discovery-call gate in
              front of it.
            </p>

            <ul className="cu-points">
              <li>
                <span className="cu-tick" aria-hidden="true" />
                A named engineer on the reply, not a sales script
              </li>
              <li>
                <span className="cu-tick" aria-hidden="true" />
                Fixed-scope quote or sprint rate — your choice
              </li>
              <li>
                <span className="cu-tick" aria-hidden="true" />
                Your brief stays confidential; NDA on request
              </li>
            </ul>

            <div className="cu-direct">
              <a className="cu-direct-item" href={company.phone.href}>
                <span className="cu-direct-k">Call</span>
                <span className="cu-direct-v">{company.phone.display}</span>
              </a>
              <a className="cu-direct-item" href={company.email.href}>
                <span className="cu-direct-k">Email</span>
                <span className="cu-direct-v">{company.email.primary}</span>
              </a>
              <a
                className="cu-direct-item"
                href={company.maps.place}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cu-direct-k">Studio</span>
                <span className="cu-direct-v">{company.address.medium}</span>
              </a>
            </div>
          </div>

          {/* ---------------------------------------------- right: the form */}
          <div className="cu-formwrap">
            <form
              className="cu-form"
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
              noValidate
            >
              <header className="cu-form-head">
                <h3>Request a quote</h3>
                <span className="cu-badge">Reply in 2 working hours</span>
              </header>

              <div className="cu-row">
                <label className={fieldClass("name")}>
                  <span className="cu-label">
                    Full name <em aria-hidden="true">*</em>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                  {errors.name && <span className="cu-err">{errors.name}</span>}
                </label>

                <label className={fieldClass("email")}>
                  <span className="cu-label">
                    Work email <em aria-hidden="true">*</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    placeholder="jane@company.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="cu-err">{errors.email}</span>}
                </label>
              </div>

              <div className="cu-row">
                <label className={fieldClass("number")}>
                  <span className="cu-label">
                    Phone <em aria-hidden="true">*</em>
                  </span>
                  <span className="cu-tel">
                    <span className="cu-cc">+91</span>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="98765 43210"
                      maxLength={10}
                      autoComplete="tel"
                    />
                  </span>
                  {errors.number && (
                    <span className="cu-err">{errors.number}</span>
                  )}
                </label>

                <label className={fieldClass("subject")}>
                  <span className="cu-label">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What are we building?"
                  />
                </label>
              </div>

              <label className={fieldClass("message")}>
                <span className="cu-label">
                  Project details <em aria-hidden="true">*</em>
                </span>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Goals, timeline, and any constraints we should know about…"
                />
                {errors.message && (
                  <span className="cu-err">{errors.message}</span>
                )}
              </label>

              <footer className="cu-form-foot">
                <p className="cu-consent">
                  By submitting, you agree to be contacted by Techland IT
                  Solutions about this enquiry.
                </p>
                <button type="submit" className="cu-submit" disabled={loading}>
                  {loading ? "Sending…" : "Send brief"}
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* ============================================================
           GET A QUOTE — corporate

           Replaces the dark build: near-black ground, blue/green/purple
           orbs bleeding across the panel, and emoji standing in for
           field icons (👤 @ 📞 🎨 💬), which is the single fastest way
           to make a B2B form look unserious.

           Light ground, real labels above real inputs, one accent, and
           the commercial terms stated next to the form rather than left
           for the visitor to guess.
           ============================================================ */
        .cu-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 96px 0 104px;
          background: #ffffff;
        }
        @media (min-width: 1024px) { .cu-section { padding: 124px 0 132px; } }

        .cu-bg { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
        .cu-bg::after {
          content: "";
          position: absolute; inset: 0; z-index: -1;
          background: linear-gradient(180deg, #ffffff 0%, #fafaff 60%, #ffffff 100%);
        }
        .cu-orb { position: absolute; border-radius: 999px; filter: blur(120px); }
        .cu-orb--a {
          width: 480px; height: 480px; top: -180px; left: -160px;
          background: radial-gradient(closest-side, rgba(22,49,152,0.12), transparent);
        }
        .cu-orb--b {
          width: 520px; height: 520px; bottom: -220px; right: -180px;
          background: radial-gradient(closest-side, rgba(124,58,237,0.12), transparent);
        }

        .cu-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        @media (min-width: 1024px) { .cu-container { padding: 0 32px; } }

        .cu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 44px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .cu-grid { grid-template-columns: 1fr 1.05fr; gap: 64px; }
        }

        /* ---------------------------------------------------- left */
        .cu-intro { display: flex; flex-direction: column; }
        @media (min-width: 992px) { .cu-intro { position: sticky; top: 120px; } }

        .cu-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: ui-monospace, monospace;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(10,10,10,0.45);
        }
        .cu-eyebrow-line {
          width: 26px; height: 1px;
          background: linear-gradient(to right, transparent, #4f46e5);
        }

        .cu-title {
          font-family: "Play", sans-serif;
          font-weight: 400;
          font-size: clamp(1.9rem, 2.9vw + 0.6rem, 2.9rem);
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          margin: 18px 0 0;
          max-width: 18ch;
          text-wrap: balance;
        }
        .cu-title-hl {
          font-weight: 700;
          background: linear-gradient(135deg, #163198 0%, #4f46e5 50%, #7c3aed 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }

        .cu-lede {
          margin: 20px 0 0;
          font-size: 16px; line-height: 1.68;
          color: rgba(10,10,10,0.55);
          max-width: 46ch;
        }

        .cu-points {
          list-style: none;
          margin: 26px 0 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .cu-points li {
          display: flex; align-items: flex-start; gap: 11px;
          font-size: 14.5px; line-height: 1.55;
          color: rgba(10,10,10,0.68);
        }
        .cu-tick {
          width: 18px; height: 18px; flex: none;
          margin-top: 1px;
          border-radius: 50%;
          background: linear-gradient(140deg, rgba(22,49,152,0.1), rgba(124,58,237,0.14));
          border: 1px solid rgba(79,70,229,0.24);
          position: relative;
        }
        .cu-tick::after {
          content: "";
          position: absolute; left: 5px; top: 4.5px;
          width: 5px; height: 8px;
          border: solid #4338ca;
          border-width: 0 1.6px 1.6px 0;
          transform: rotate(43deg);
        }

        .cu-direct {
          margin-top: 32px;
          padding-top: 8px;
          border-top: 1px solid rgba(10,10,10,0.09);
          display: grid;
        }
        .cu-direct-item {
          display: grid;
          grid-template-columns: 74px 1fr;
          gap: 16px;
          align-items: baseline;
          padding: 13px 0;
          border-bottom: 1px solid rgba(10,10,10,0.07);
          text-decoration: none;
          transition: padding-left 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .cu-direct-item:hover { padding-left: 6px; }
        .cu-direct-k {
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(10,10,10,0.38);
        }
        .cu-direct-v {
          font-size: 14.5px;
          color: #0a0a0a;
          transition: color 0.3s ease;
        }
        .cu-direct-item:hover .cu-direct-v { color: #4f46e5; }

        /* --------------------------------------------------- right */
        .cu-formwrap { position: relative; }

        .cu-form {
          background: #ffffff;
          border: 1px solid rgba(10,10,10,0.08);
          border-radius: 22px;
          padding: 28px 26px 26px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 2px 4px -2px rgba(10,10,10,0.05),
                      0 32px 64px -40px rgba(10,10,10,0.28);
        }
        @media (min-width: 768px) { .cu-form { padding: 34px 34px 30px; } }

        .cu-form-head {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(10,10,10,0.07);
        }
        .cu-form-head h3 {
          margin: 0;
          font-family: "Play", sans-serif;
          font-size: 1.3rem; font-weight: 700;
          letter-spacing: -0.028em;
          color: #0a0a0a;
        }
        .cu-badge {
          font-family: ui-monospace, monospace;
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: #4338ca;
          background: rgba(79,70,229,0.08);
          border: 1px solid rgba(79,70,229,0.18);
          padding: 6px 10px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .cu-row { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 560px) { .cu-row { grid-template-columns: 1fr 1fr; } }

        .cu-field { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
        .cu-label {
          font-size: 12.5px;
          font-weight: 620;
          letter-spacing: -0.005em;
          color: rgba(10,10,10,0.62);
        }
        .cu-label em { font-style: normal; color: #7c3aed; margin-left: 1px; }

        .cu-field input,
        .cu-field textarea {
          width: 100%;
          font-family: inherit;
          font-size: 14.5px;
          color: #0a0a0a;
          padding: 12px 14px;
          border-radius: 11px;
          border: 1px solid rgba(10,10,10,0.13);
          background: #fcfcfe;
          outline: none;
          resize: vertical;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .cu-field textarea { min-height: 128px; line-height: 1.6; }
        .cu-field input::placeholder,
        .cu-field textarea::placeholder { color: rgba(10,10,10,0.32); }
        .cu-field input:focus,
        .cu-field textarea:focus {
          background: #ffffff;
          border-color: rgba(79,70,229,0.55);
          box-shadow: 0 0 0 4px rgba(124,58,237,0.1);
        }

        /* Phone: the country code is part of the control, not a separate chip. */
        .cu-tel {
          display: flex; align-items: stretch;
          border-radius: 11px;
          border: 1px solid rgba(10,10,10,0.13);
          background: #fcfcfe;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .cu-tel:focus-within {
          background: #ffffff;
          border-color: rgba(79,70,229,0.55);
          box-shadow: 0 0 0 4px rgba(124,58,237,0.1);
        }
        .cu-cc {
          display: inline-flex; align-items: center;
          padding: 0 12px;
          font-size: 14px; font-weight: 620;
          color: rgba(10,10,10,0.5);
          border-right: 1px solid rgba(10,10,10,0.1);
          background: rgba(10,10,10,0.02);
        }
        .cu-tel input { border: 0; background: transparent; border-radius: 0; }
        .cu-tel input:focus { box-shadow: none; background: transparent; }

        .cu-field.has-error input,
        .cu-field.has-error textarea,
        .cu-field.has-error .cu-tel { border-color: rgba(220,38,38,0.55); }
        .cu-field.has-error input:focus,
        .cu-field.has-error textarea:focus,
        .cu-field.has-error .cu-tel:focus-within {
          box-shadow: 0 0 0 4px rgba(220,38,38,0.1);
        }
        .cu-err {
          font-size: 12px;
          color: #dc2626;
          letter-spacing: -0.005em;
        }

        .cu-form-foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 18px; flex-wrap: wrap;
          padding-top: 6px;
        }
        .cu-consent {
          margin: 0;
          font-size: 11.5px;
          line-height: 1.5;
          color: rgba(10,10,10,0.42);
          max-width: 34ch;
        }

        .cu-submit {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 26px;
          border: 0;
          border-radius: 999px;
          font-family: "Play", sans-serif;
          font-size: 14px; font-weight: 640;
          letter-spacing: -0.01em;
          color: #ffffff;
          cursor: pointer;
          background: linear-gradient(120deg, #163198, #4f46e5 55%, #7c3aed);
          box-shadow: 0 18px 40px -18px rgba(79,70,229,0.7);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
        }
        .cu-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 24px 52px -18px rgba(79,70,229,0.85);
        }
        .cu-submit:disabled { opacity: 0.65; cursor: not-allowed; }
        .cu-submit svg {
          width: 17px; height: 17px;
          fill: none; stroke: currentColor;
          stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .cu-submit:hover:not(:disabled) svg { transform: translateX(3px); }

        @media (max-width: 559px) {
          .cu-form-foot { flex-direction: column-reverse; align-items: stretch; }
          .cu-submit { justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cu-submit, .cu-submit svg, .cu-direct-item, .cu-direct-v,
          .cu-field input, .cu-field textarea, .cu-tel {
            transition: none !important;
          }
          .cu-submit:hover:not(:disabled) { transform: none !important; }
          .cu-intro { position: static; }
        }
      `}</style>
    </section>
  );
};

export default HomeContactUs;
