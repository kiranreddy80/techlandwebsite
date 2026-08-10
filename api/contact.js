/**
 * POST /api/contact — the website's enquiry endpoint.
 *
 * This runs as a Vercel serverless function on the SAME domain as the site,
 * which is deliberate. Three previous API hosts failed for reasons this
 * arrangement cannot reproduce:
 *
 *   - a separate host that stopped answering  -> nothing separate to go down
 *   - CORS rejecting the production origin    -> same origin, so no CORS at all
 *   - an http:// API called from an https://  -> Vercel terminates TLS for us
 *     page, silently blocked as mixed content
 *
 * It emails the submission to ADMIN_EMAIL. It does not write to MongoDB, so
 * enquiries live in the inbox rather than the Admin panel's contact list —
 * when the full Express backend is deployed for Admin, that becomes the
 * better home for this and the frontend can be pointed back at it.
 */

import nodemailer from "nodemailer";

const REQUIRED = ["name", "email", "message"];

/** Keep submitted text out of the HTML structure of the notification email. */
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const row = (label, value) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
      <strong style="color:#163198;display:block;font-size:12px;text-transform:uppercase;">${label}</strong>
      <span style="font-size:16px;color:#333;">${escapeHtml(value) || "Not provided"}</span>
    </td>
  </tr>`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { name, email, phone, subject, message } = req.body ?? {};

  const missing = REQUIRED.filter((field) => !String(req.body?.[field] ?? "").trim());
  if (missing.length) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email and message.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.ADMIN_EMAIL || user;

  // Without credentials the mail can never leave. Say so with a 500 rather
  // than returning success, so a misconfigured deploy is visible immediately
  // instead of swallowing enquiries behind a cheerful confirmation.
  if (!user || !pass) {
    console.error("[contact] EMAIL_USER / EMAIL_PASS are not set — cannot send.");
    return res.status(500).json({
      success: false,
      message: "We could not send your message right now. Please call or WhatsApp us instead.",
    });
  }

  // Gmail by default; SMTP_HOST/SMTP_PORT override it so the same code can
  // point at another provider, or at a capture server during testing.
  const port = Number(process.env.SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465, // 465 is implicit TLS; 587 upgrades via STARTTLS
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Techland Website" <${user}>`,
      to,
      replyTo: email, // replying in the inbox goes straight back to the enquirer
      subject: `New Inquiry: ${subject || "No Subject"} — from ${name}`,
      html: `
        <div style="font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#163198 0%,#0d257a 100%);color:#fff;padding:25px;text-align:center;">
            <h2 style="margin:0;font-size:24px;letter-spacing:1px;">New Contact Inquiry</h2>
            <p style="margin:5px 0 0;opacity:.8;">A new message has been received from your website.</p>
          </div>
          <div style="padding:30px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;">
              ${row("Full Name", name)}
              ${row("Email Address", email)}
              ${row("Phone Number", phone)}
              ${row("Subject", subject || "General Inquiry")}
              <tr>
                <td style="padding:20px 0 10px;">
                  <strong style="color:#163198;display:block;font-size:12px;text-transform:uppercase;margin-bottom:8px;">Message</strong>
                  <div style="background:#f9f9f9;padding:15px;border-radius:8px;border-left:4px solid #163198;color:#444;">
                    ${escapeHtml(message).replace(/\n/g, "<br>")}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div style="background:#f4f6f9;padding:15px;text-align:center;color:#888;font-size:12px;">
            Sent automatically from techlanditsolutions.com
          </div>
        </div>`,
    });

    return res.status(201).json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    // The send genuinely failed — do not tell the visitor it worked.
    console.error("[contact] sendMail failed:", error?.message);
    return res.status(502).json({
      success: false,
      message: "We could not send your message right now. Please call or WhatsApp us instead.",
    });
  }
}
