import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import api from "../services/api";
import company from "../config/company";
import "./ChatWidget.css";

/**
 * The chat bubble, answering immediately instead of queueing for a person.
 *
 * Replaces the Tawk.to widget. Tawk is a live-chat product: with nobody signed
 * in at its dashboard it falls back to an offline form and files a ticket,
 * which is why questions sat unanswered for hours. That behaviour is set in
 * Tawk's own dashboard, not here, so it could not be fixed from the codebase.
 *
 * Ask a question and the form appears at once — no waiting, no agent. The
 * question carries into the message box so nobody types it twice, and it posts
 * to the same /api/contact endpoint as every other form, so a conversation
 * lands in the same inbox as everything else.
 *
 * Rendered through a portal into <body>: every page sits inside .pt-stage,
 * whose transform and perspective make it the containing block for anything
 * position:fixed — which clipped the panel at the window edges.
 */

const GREETING =
  "Hi! Ask anything about your project — I'll take a few details and the team will come straight back to you.";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("asking"); // asking -> form -> done
  const [question, setQuestion] = useState("");
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const closeTimer = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /** Keep the newest message in view as the thread grows. */
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [stage, question]);

  const askSubmit = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setQuestion(text);
    setForm((f) => ({ ...f, message: text }));
    setDraft("");
    setStage("form"); // immediate — nothing is awaited here
  };

  const reset = () => {
    setStage("asking");
    setQuestion("");
    setForm({ name: "", email: "", phone: "", message: "" });
    setError("");
  };

  const detailsSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Please tell us your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return setError("Please enter a valid email address.");
    if (!form.message.trim()) return setError("Please tell us what you need.");

    setSending(true);
    try {
      const { data } = await api.post("/contact", {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject: "Website chat enquiry",
        message: form.message.trim(),
      });
      if (data && data.success === false) throw new Error(data.message);

      setStage("done");
      closeTimer.current = setTimeout(() => {
        setOpen(false);
        closeTimer.current = setTimeout(reset, 400);
      }, 3000);
    } catch (err) {
      setError(`Couldn't send that. Please WhatsApp or call ${company.phone.display}.`);
    } finally {
      setSending(false);
    }
  };

  const field = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const widget = (
    <>
      <button
        type="button"
        className={`cw-bubble ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
          </svg>
        )}
      </button>

      <div className={`cw-panel ${open ? "is-open" : ""}`} role="dialog" aria-label="Chat with Techland">
        <header className="cw-head">
          <span className="cw-avatar" aria-hidden="true">T</span>
          <div className="cw-who">
            <strong>{company.shortName}</strong>
            <span className="cw-status">Replies within 2 hours</span>
          </div>
          <button type="button" className="cw-x" onClick={() => setOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>

        <div className="cw-body" ref={threadRef}>
          <div className="cw-msg cw-msg--bot">{GREETING}</div>
          {question && <div className="cw-msg cw-msg--me">{question}</div>}
          {stage === "form" && (
            <div className="cw-msg cw-msg--bot">Got it. Where should the team reach you?</div>
          )}
          {stage === "done" && (
            <div className="cw-msg cw-msg--bot cw-msg--ok">{company.forms.success}</div>
          )}
        </div>

        {stage === "asking" && (
          <form className="cw-foot" onSubmit={askSubmit}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question…"
              aria-label="Your question"
              autoComplete="off"
            />
            <button type="submit" aria-label="Send" disabled={!draft.trim()}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
        )}

        {/* noValidate: the browser's own check on type="email" blocks submit
            before React sees it, so our inline message never appeared and the
            form simply refused to send with no explanation. */}
        {stage === "form" && (
          <form className="cw-details" onSubmit={detailsSubmit} noValidate>
            <label className="cw-field">
              <span>Name</span>
              <input value={form.name} onChange={field("name")} placeholder="Your name" aria-label="Your name" />
            </label>
            <label className="cw-field">
              <span>Email</span>
              <input type="email" value={form.email} onChange={field("email")} placeholder="you@company.com" aria-label="Email" />
            </label>
            <label className="cw-field">
              <span>Phone</span>
              <input value={form.phone} onChange={field("phone")} placeholder="Optional" aria-label="Phone" inputMode="tel" />
            </label>
            <label className="cw-field">
              <span>Message</span>
              <textarea value={form.message} onChange={field("message")} rows={3} placeholder="What do you need?" aria-label="Message" />
            </label>

            {error && <p className="cw-err">{error}</p>}

            <div className="cw-actions">
              <button type="button" className="cw-back" onClick={reset} disabled={sending}>Back</button>
              <button type="submit" className="cw-send" disabled={sending}>
                {sending ? "Sending…" : "Send to the team"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );

  return typeof document === "undefined" ? null : createPortal(widget, document.body);
};

export default ChatWidget;
