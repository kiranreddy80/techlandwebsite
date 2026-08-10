/**
 * Single source of truth for every company detail shown on the website.
 *
 * Before this file existed the same phone number appeared in six different
 * formats, the address in three different lengths, and one `tel:` link was
 * missing the country code entirely. Anything a visitor can read, call, mail
 * or click belongs here — never hardcoded in a component again.
 *
 * When something changes (a new office, a new number), change it HERE and it
 * updates everywhere at once.
 */

const rawPhone = "917842385604"; // country code + number, digits only

const company = {
  name: "Techland IT Solutions",
  shortName: "Techland",
  tagline: "Best App, Web & Digital Marketing Company in Hyderabad",
  website: "https://techlanditsolutions.com",

  /* ---------------------------------------------------------------- email */
  email: {
    // The public inbox shown on the site.
    primary: "info@techlanditsolutions.com",
    get href() {
      return `mailto:${this.primary}`;
    },
  },

  /* ---------------------------------------------------------------- phone */
  phone: {
    // Digits only, used for wa.me links.
    raw: rawPhone,
    // The one and only display format. Do not re-space it per component.
    display: "+91 784 238 5604",
    // Compact form for tight spaces (mobile headers, floating buttons).
    compact: "+91 78423 85604",
    // E.164, used for tel: and for structured data.
    e164: `+${rawPhone}`,
    get href() {
      return `tel:+${rawPhone}`;
    },
  },

  /* -------------------------------------------------------------- address */
  address: {
    line1: "Flat No. 101, Sirisampada Hitec Apartment",
    line2: "H.No. 1-63/C/8/2, Plot No. 2, Block No. 8",
    locality: "Kavuri Hills",
    area: "Madhapur",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500081",
    country: "IN",

    /**
     * The complete postal address — the ONLY form shown to visitors.
     *
     * There used to be `short` and `medium` variants for tight spaces, which
     * meant the studio address read three different ways depending on which
     * component you landed on. Every surface now renders this one string; if a
     * layout is too cramped for it, fix the layout, don't shorten the address.
     */
    get full() {
      return `${this.line1}, ${this.line2}, ${this.locality}, ${this.area}, ${this.city}, ${this.state} ${this.postalCode}`;
    },
    /** Street portion only, for schema.org streetAddress. */
    get street() {
      return `${this.line1}, ${this.line2}, ${this.locality}, ${this.area}`;
    },
  },

  /** Google Maps place link and the embed used on the Contact page. */
  maps: {
    place: "https://maps.app.goo.gl/N13ixNnC7UHf7nwT9",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin",
  },

  /* --------------------------------------------------------------- social */
  // Only profiles that actually exist belong here. An empty string means
  // "we don't have this account" and the UI will skip rendering it.
  social: {
    linkedin: "https://www.linkedin.com/company/techland-it-solutions/",
    instagram:
      "https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==",
    facebook: "",
    twitter: "",
    youtube: "",
  },

  /** Prefilled WhatsApp link. Pass your own message for context-specific CTAs. */
  whatsapp(
    message = "Hi Techland,\nI'm inquiring about the website development and mobile app development"
  ) {
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`;
  },

  /* ---------------------------------------------------------------- hours */
  hours: {
    display: "Mon – Sat, 10:00 – 19:00 IST",
    schema: "Mo-Sa 10:00-19:00",
  },

  /* ------------------------------------------------------------- messaging */
  // What a visitor is told once a form goes through. It is a promise about
  // response time, so it lives here with the rest of the commitments rather
  // than being retyped — slightly differently — in each of the three forms.
  forms: {
    success: "Thank you! Our team will reach out to you within the next 2 hours.",
  },

  /* ------------------------------------------------- credentials & claims */
  // Every number quoted on the site comes from here so the same figure can't
  // drift between the hero, the about page and the footer.
  stats: {
    clients: "350+",
    websites: "96+",
    apps: "156+",
  },
  // Only list credentials that can be produced on request. ISO 9001 and MSME
  // were removed because nothing backs them up — add them back here the day a
  // certificate exists, and they will reappear in the hero badge row.
  certifications: ["GST Registered"],

  /** Languages the team supports — used in structured data. */
  languages: ["English", "Hindi", "Telugu"],
};

export default company;
