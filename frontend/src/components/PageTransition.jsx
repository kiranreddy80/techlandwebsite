import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

/**
 * Route transition.
 *
 * Wraps the routed page so moving between tabs — Services, About, Contact,
 * Blog — animates instead of hard-cutting. Two things happen at once:
 *
 *  1. a thin progress bar sweeps across the top, the way a real page load
 *     would signal itself
 *  2. the outgoing page drops back in Z and fades while the incoming one
 *     rises toward the viewer
 *
 * Driven by the pathname, not by data loading, because the pages are already
 * client-side — the point is to give the change a beat, not to fake latency.
 */
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState(children);
  const [phase, setPhase] = useState("in");
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (pathname === lastPath.current) {
      // Same route, new children (e.g. data arrived) — pass straight through.
      setDisplay(children);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lastPath.current = pathname;
      setDisplay(children);
      return;
    }

    setPhase("out");

    const swap = setTimeout(() => {
      lastPath.current = pathname;
      setDisplay(children);
      setPhase("in");
    }, 260);

    return () => clearTimeout(swap);
  }, [pathname, children]);

  return (
    <>
      <span className={`pt-bar ${phase === "out" ? "is-running" : ""}`} aria-hidden="true">
        <i />
      </span>
      <div className={`pt-stage pt-${phase}`}>{display}</div>
    </>
  );
};

export default PageTransition;
