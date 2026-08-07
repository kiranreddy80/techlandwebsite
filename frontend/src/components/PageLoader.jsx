import React from "react";
import "./PageLoader.css";

/**
 * The loader you see on a refresh.
 *
 * Built from the brand mark rather than a generic spinner: the logo's stepped
 * pixel blocks fill in sequence, which is the one motif nobody else's site can
 * borrow. Everything is CSS — no JS timers, no image beyond the wordmark.
 */
const PageLoader = () => {
  return (
    <div className="pl" role="status" aria-live="polite" aria-label="Loading">
      <div className="pl-bg" aria-hidden="true">
        <span className="pl-orb pl-orb--a" />
        <span className="pl-orb pl-orb--b" />
        <span className="pl-grid" />
      </div>

      <div className="pl-stage">
        {/* Stepped blocks, lifted from the logo mark. */}
        <div className="pl-blocks" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <span className="pl-block" key={i} style={{ "--i": i }} />
          ))}
        </div>

        <div className="pl-word" aria-hidden="true">
          <span className="pl-word-main">TECHLAND</span>
          <span className="pl-word-sub">IT Solutions</span>
        </div>

        <div className="pl-bar" aria-hidden="true">
          <span className="pl-bar-fill" />
        </div>
      </div>

      <span className="pl-sr">Loading…</span>
    </div>
  );
};

export default PageLoader;
