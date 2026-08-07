import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Layers,
  LayoutGrid,
  Users,
  BookOpen,
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import "./Navbar.css";

const Navbar = ({ setOpenContactModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleOpenContactModal = (e) => {
    e.preventDefault();
    if (setOpenContactModal) {
      setOpenContactModal(true);
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleSubmenu = (menuName, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <>
      {/* Mobile off-canvas */}
      <div
        className={`th-menu-wrapper onepage-nav ${isMenuOpen ? "th-body-visible menu-open" : ""}`}
      >
        <div className="th-menu-area text-center">
          <button type="button" className="th-menu-toggle" onClick={toggleMenu} aria-label="Close menu">
            <X size={22} />
          </button>
          <div className="mobile-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/assets/media/logo.png" alt="Techland" loading="lazy" />
            </Link>
          </div>
          <div className="th-mobile-menu allow-natural-scroll">
            <ul>
              <li><NavLink to="/" onClick={closeMenu}><Home size={15} className="ck-nav-ico" /> Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}><Info size={15} className="ck-nav-ico" /> About Us</NavLink></li>
              <li className={`menu-item-has-children ${openSubmenu === "services" ? "open" : ""}`}>
                <Link
                  to="#"
                  onClick={(e) => toggleSubmenu("services", e)}
                  className={servicesActive ? "active" : ""}
                >
                  <Layers size={15} className="ck-nav-ico" /> Our Services
                </Link>
                <ul className={`sub-menu ${openSubmenu === "services" ? "open" : ""}`}>
                  <li><Link to="/services/mobile-app-development" onClick={closeMenu}>Mobile App Development</Link></li>
                  <li><Link to="/services/web-development" onClick={closeMenu}>Web Development</Link></li>
                  <li><Link to="/services/digital-marketing" onClick={closeMenu}>Digital Marketing</Link></li>
                  <li><Link to="/services/custom-software-development" onClick={closeMenu}>Custom Software Development</Link></li>
                  <li><Link to="/services/ui-ux-design" onClick={closeMenu}>UI/UX Design</Link></li>
                </ul>
              </li>
              <li><NavLink to="/portfolio" onClick={closeMenu}><LayoutGrid size={15} className="ck-nav-ico" /> Portfolio</NavLink></li>
              <li><NavLink to="/our-team" onClick={closeMenu}><Users size={15} className="ck-nav-ico" /> Our Team</NavLink></li>
              <li><NavLink to="/blogs" onClick={closeMenu}><BookOpen size={15} className="ck-nav-ico" /> Blog</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}><Phone size={15} className="ck-nav-ico" /> Contact us</NavLink></li>
            </ul>
            <div className="ck-mobile-cta-wrap">
              <button
                type="button"
                onClick={(e) => { closeMenu(); handleOpenContactModal(e); }}
                className="ck-cta-btn"
              >
                Free Quote <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className={`ck-nav ${scrolled ? "ck-nav--scrolled" : ""}`}>
        <div className="ck-nav-inner">
          <Link to="/" className="ck-logo" aria-label="Techland home">
            <img src="/assets/media/logo.png" alt="Techland" loading="eager" />
          </Link>

          <div className="ck-nav-links">
            <NavLink to="/" end className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <Home size={15} className="ck-nav-ico" /> <span>Home</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <Info size={15} className="ck-nav-ico" /> <span>About</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>

            <div className="ck-nav-dd">
              <button
                type="button"
                className={`ck-nav-link ck-nav-link--btn ${servicesActive ? "is-active" : ""}`}
              >
                <Layers size={15} className="ck-nav-ico" /> <span>Services</span>
                <ChevronDown size={14} className="ck-nav-chev" />
                <span className="ck-underline" aria-hidden="true" />
              </button>
              <div className="ck-nav-dd-panel" role="menu">
                <Link to="/services/mobile-app-development" role="menuitem">Mobile App Development</Link>
                <Link to="/services/web-development" role="menuitem">Web Development</Link>
                <Link to="/services/digital-marketing" role="menuitem">Digital Marketing</Link>
                <Link to="/services/custom-software-development" role="menuitem">Custom Software Development</Link>
                <Link to="/services/ui-ux-design" role="menuitem">UI/UX Design</Link>
              </div>
            </div>

            <NavLink to="/portfolio" className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <LayoutGrid size={15} className="ck-nav-ico" /> <span>Portfolio</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>
            <NavLink to="/our-team" className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <Users size={15} className="ck-nav-ico" /> <span>Team</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <BookOpen size={15} className="ck-nav-ico" /> <span>Blog</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `ck-nav-link ${isActive ? "is-active" : ""}`}>
              <Phone size={15} className="ck-nav-ico" /> <span>Contact</span>
              <span className="ck-underline" aria-hidden="true" />
            </NavLink>
          </div>

          <div className="ck-nav-actions">
            <button
              type="button"
              onClick={handleOpenContactModal}
              className="ck-cta-btn"
            >
              Get in Touch <ArrowRight size={15} />
            </button>
            <button
              type="button"
              className="ck-nav-burger"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
