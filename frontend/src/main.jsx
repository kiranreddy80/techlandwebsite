import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

/**
 * Dismiss the boot loader that shipped inside index.html.
 *
 * It is held for a minimum beat before fading: on a warm cache React mounts
 * almost instantly, and a loader that appears and vanishes inside 50ms reads
 * as a flicker rather than as loading.
 */
(() => {
  const boot = document.getElementById("boot");
  if (!boot) return;

  const MIN_VISIBLE = 700;
  const elapsed = performance.now();
  const wait = Math.max(0, MIN_VISIBLE - elapsed);

  const dismiss = () => {
    boot.classList.add("is-out");
    // Remove after the fade so it can never trap clicks.
    setTimeout(() => boot.remove(), 500);
  };

  // requestAnimationFrame lets the first painted frame of the app land
  // underneath before the loader starts fading away.
  setTimeout(() => requestAnimationFrame(dismiss), wait);
})();
