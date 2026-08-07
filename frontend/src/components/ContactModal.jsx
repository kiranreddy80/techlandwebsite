import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import api from "../services/api";
import company from "../config/company";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactModal.css";

const ContactModal = ({ openModal, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (openModal) {
      setIsOpen(true);
      if (setOpenModal) setOpenModal(false);
    }
  }, [openModal, setOpenModal]);

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => setIsOpen(true), 6000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }, 300);
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Required";
    if (!formData.email) tempErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email";
    if (formData.phone && !/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) tempErrors.phone = "10–15 digits";
    if (!formData.message) tempErrors.message = "Required";
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
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    setIsSubmitting(true);
    try {
      await api.post("/contact", {
        ...formData,
        subject: formData.subject || "Website Inquiry (Modal)",
      });
      toast.success("Message sent! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(handleClose, 1500);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cm-overlay" onClick={handleClose} role="dialog" aria-modal="true">
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close" onClick={handleClose} aria-label="Close">
          <X size={18} strokeWidth={2} />
        </button>

        <aside className="cm-aside">
          <div className="cm-aside-bg" aria-hidden="true">
            <div className="cm-aside-mesh" />
            <div className="cm-aside-grid" />
            <div className="cm-aside-orb cm-aside-orb--a" />
            <div className="cm-aside-orb cm-aside-orb--b" />
          </div>

          <div className="cm-aside-top">
            <div className="cm-eyebrow">
              <Sparkles size={12} className="cm-eyebrow-spark" />
              <span>Let’s build together</span>
            </div>
            <h2 className="cm-title">
              Let’s start{" "}
              <span className="cm-title-hl">something great</span>
              <span className="cm-title-dot">.</span>
            </h2>
            <p className="cm-lede">
              Tell us about your project. We’ll get back to you within one business day with scope, timeline and a clear next step.
            </p>
          </div>

          <ul className="cm-info">
            <li>
              <span className="cm-info-ico"><Mail size={14} strokeWidth={1.7} /></span>
              <div>
                <span className="cm-info-l">Email</span>
                <a className="cm-info-v" href={company.email.href}>
                  {company.email.primary}
                </a>
              </div>
            </li>
            <li>
              <span className="cm-info-ico"><Phone size={14} strokeWidth={1.7} /></span>
              <div>
                <span className="cm-info-l">Call</span>
                <a className="cm-info-v" href={company.phone.href}>
                  {company.phone.display}
                </a>
              </div>
            </li>
            <li>
              <span className="cm-info-ico"><MapPin size={14} strokeWidth={1.7} /></span>
              <div>
                <span className="cm-info-l">Studio</span>
                <a
                  className="cm-info-v"
                  href={company.maps.place}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.address.short}
                </a>
              </div>
            </li>
          </ul>

          <p className="cm-foot-meta">
            <span>One studio</span>
            <span aria-hidden="true">·</span>
            <span>Global by default</span>
          </p>
        </aside>

        <section className="cm-form-wrap">
          <header className="cm-form-head">
            <h3 className="cm-form-title">Request a quote</h3>
            <p className="cm-form-sub">A few quick details and we’ll be in touch.</p>
          </header>

          <form onSubmit={handleSubmit} className="cm-form" noValidate>
            <div className="cm-grid">
              <Field
                label="Your name"
                required
                error={errors.name}
                input={
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" autoComplete="name" />
                }
              />
              <Field
                label="Email"
                required
                error={errors.email}
                input={
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" autoComplete="email" />
                }
              />
              <Field
                label="Subject"
                error={null}
                input={
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What are we building?" />
                }
              />
              <Field
                label="Phone"
                error={errors.phone}
                phone
                input={
                  <div className="cm-phone">
                    <span className="cm-phone-cc">
                      <span className="cm-phone-flag" aria-hidden="true">🇮🇳</span>
                      <span>+91</span>
                    </span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="98765 43210" maxLength={10} autoComplete="tel" />
                  </div>
                }
              />
              <Field
                label="Project details"
                required
                error={errors.message}
                full
                input={
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="A few lines about your goals, timeline, and any constraints we should know about…" rows={4} />
                }
              />
            </div>

            <div className="cm-form-foot">
              <p className="cm-form-foot-meta">
                <span>By submitting, you agree to be contacted by Techland.</span>
              </p>
              <button type="submit" className="cm-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Get a quote"}
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

/**
 * Underline field with a floating label.
 *
 * The label renders AFTER the input so CSS can lift it out of the way, and the
 * input's own placeholder stays invisible until the field is focused — that way
 * the resting state shows one label instead of a label and a placeholder
 * competing for the same line.
 */
const Field = ({ label, required, error, input, full, phone }) => (
  <label
    className={[
      "cm-field",
      full ? "is-full" : "",
      phone ? "is-phone" : "",
      error ? "has-error" : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <div className="cm-field-wrap">
      {input}
      <span className="cm-field-label">
        {label}
        {required && <span className="cm-field-req" aria-hidden="true">*</span>}
      </span>
      <span className="cm-field-bar" aria-hidden="true" />
    </div>
    {error && <span className="cm-field-err">{error}</span>}
  </label>
);

export default ContactModal;
