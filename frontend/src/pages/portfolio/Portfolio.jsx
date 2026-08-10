import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import api from "../../services/api";
import { getSEO } from "../../config/seoConfig";
import { categories } from "./projectsData";

const categoryIcons = {
  All: { icon: "📋", color: "#475569", bgColor: "#f8fafc" },
  "E-Commerce": { icon: "🛒", color: "#475569", bgColor: "#f8fafc" },
  Healthcare: { icon: "🏥", color: "#475569", bgColor: "#f8fafc" },
  Education: { icon: "🎓", color: "#475569", bgColor: "#f8fafc" },
  Finance: { icon: "💰", color: "#475569", bgColor: "#f8fafc" },
  "Social Media": { icon: "📱", color: "#475569", bgColor: "#f8fafc" },
  Entertainment: { icon: "🎬", color: "#475569", bgColor: "#f8fafc" },
  "Food & Delivery": { icon: "🍔", color: "#475569", bgColor: "#f8fafc" },
  Travel: { icon: "✈️", color: "#475569", bgColor: "#f8fafc" },
  "Real Estate": { icon: "🏠", color: "#475569", bgColor: "#f8fafc" },
  Fitness: { icon: "💪", color: "#475569", bgColor: "#f8fafc" },
  Business: { icon: "💼", color: "#475569", bgColor: "#f8fafc" },
  Productivity: { icon: "✅", color: "#475569", bgColor: "#f8fafc" },
  Gaming: { icon: "🎮", color: "#475569", bgColor: "#f8fafc" },
  News: { icon: "📰", color: "#475569", bgColor: "#f8fafc" },
  Music: { icon: "🎵", color: "#475569", bgColor: "#f8fafc" },
  Photography: { icon: "📷", color: "#475569", bgColor: "#f8fafc" },
  Utilities: { icon: "⚙️", color: "#475569", bgColor: "#f8fafc" },
  Communication: { icon: "💬", color: "#475569", bgColor: "#f8fafc" },
  "Job Search": { icon: "🔍", color: "#475569", bgColor: "#f8fafc" },
  Financial: { icon: "💵", color: "#475569", bgColor: "#f8fafc" },
  "Non-Profit": { icon: "❤️", color: "#475569", bgColor: "#f8fafc" },
  "Wedding Planning": { icon: "💒", color: "#475569", bgColor: "#f8fafc" },
  "Car Rental": { icon: "🚗", color: "#475569", bgColor: "#f8fafc" },
  "HR & Recruitment": { icon: "👥", color: "#475569", bgColor: "#f8fafc" },
  Delivery: { icon: "📦", color: "#475569", bgColor: "#f8fafc" },
  "General Utilities": { icon: "🔧", color: "#475569", bgColor: "#f8fafc" },
  Hospitality: { icon: "🏨", color: "#475569", bgColor: "#f8fafc" },
  "Food Delivery": { icon: "🍕", color: "#475569", bgColor: "#f8fafc" },
  default: { icon: "⭐", color: "#475569", bgColor: "#f8fafc" },
};
import config from "../../config";

/**
 * The bundled catalogue, flattened once at module scope.
 *
 * Every project here ships inside the JS bundle, so it owes nothing to the
 * network and can be on screen at first paint.
 */
const buildStaticProjects = () => {
  if (!categories || typeof categories !== "object") return [];

  const out = [];
  for (const categoryKey in categories) {
    (categories[categoryKey] || []).forEach((project) => {
      if (project && project.title) {
        const id = project.id
          ? `${categoryKey}-${project.id}`
          : `${categoryKey}-${project.title.replace(/\s+/g, "-")}`;
        out.push({ ...project, id, category: categoryKey });
      }
    });
  }
  return out;
};

const STATIC_PROJECTS = buildStaticProjects();
const STATIC_CATEGORIES = ["All", ...new Set(STATIC_PROJECTS.map((p) => p.category))];

const Portfolio = () => {
  const seo = getSEO("portfolio");
  const [allProjects, setAllProjects] = useState(STATIC_PROJECTS);
  const [categoryList, setCategoryList] = useState(STATIC_CATEGORIES);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [activeProjectType, setActiveProjectType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const backendUrl = config.ASSETS_URL;

  // Only a genuinely empty bundle is an error. An unreachable API is not.
  const error = STATIC_PROJECTS.length
    ? null
    : "Project data is not available or is in an incorrect format.";

  useEffect(() => {
    let cancelled = false;

    /**
     * Admin-managed projects are an ADDITION to the page, never a gate on it.
     *
     * This used to run the other way round: `loading` started true and the
     * spinner held the whole page until the request settled. With the backend
     * unreachable that is the full 15s axios timeout spent staring at a
     * spinner — for projects that were sitting in the bundle the entire time.
     */
    const loadDynamic = async () => {
      try {
        const { data } = await api.get("/projects");
        if (cancelled || !Array.isArray(data)) return;

        const dynamic = data
          .filter((p) => p.isActive !== false)
          .map((p) => ({
            ...p,
            id: p._id,
            platform: "Web", // Default for dynamic, or could be part of model
            image: p.image?.startsWith("http")
              ? p.image
              : `${backendUrl}${p.image}`,
          }));

        // An empty API response is not a reason to redraw the section.
        if (!dynamic.length) return;

        const combined = [...dynamic, ...STATIC_PROJECTS];
        setAllProjects(combined);
        setCategoryList(["All", ...new Set(combined.map((p) => p.category))]);
      } catch (apiErr) {
        console.warn(
          "[/projects] API unavailable, showing bundled projects.",
          apiErr?.message
        );
      }
    };

    loadDynamic();
    return () => {
      cancelled = true;
    };
  }, [backendUrl]);

  const handleCategoryToggle = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((c) => c !== "All");
        if (newCategories.includes(category)) {
          const filtered = newCategories.filter((c) => c !== category);
          return filtered.length === 0 ? ["All"] : filtered;
        } else {
          return [...newCategories, category];
        }
      });
    }
  };

  const handleProjectTypeChange = (type) => {
    setActiveProjectType(type);
  };

  const filteredProjects = useMemo(() => {
    let projects = allProjects;

    // Filter by project type (platform)
    if (activeProjectType === "mobile") {
      projects = projects.filter(
        (p) => p.platform === "Android" || p.platform === "iOS"
      );
    } else if (activeProjectType === "web") {
      projects = projects.filter((p) => p.platform === "Web");
    }

    // Filter by category
    if (!selectedCategories.includes("All")) {
      projects = projects.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    return projects;
  }, [allProjects, activeProjectType, selectedCategories]);

  const getProjectCountByType = (type) => {
    if (type === "all") return allProjects.length;
    if (type === "mobile")
      return allProjects.filter(
        (p) => p.platform === "Android" || p.platform === "iOS"
      ).length;
    if (type === "web")
      return allProjects.filter((p) => p.platform === "Web").length;
    return 0;
  };

  const getCategoryData = (category) =>
    categoryIcons[category] || categoryIcons["default"];
  const formatCategoryForUrl = (category) =>
    (category || "uncategorized").toLowerCase().replace(/ /g, "-");

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  if (error) {
    return (
      <div className="error-wrapper">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      {/* Breadcrumb Area */}
      <div className="breadcumb-area style2 bg-smoke4">
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("/assets/img/bg/breadcumb-bg.webp")' }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Portfolio</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Case Area - Main content with filtering */}
      <div className="case-area space">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-12">
              <span className="sub-title mb-5">Our Latest Projects</span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="case-menu mb-5 text-center">
                {/* Project Type Filter Buttons */}
                <button
                  className={`case4-btn ${activeProjectType === "all" ? "active" : ""
                    }`}
                  onClick={() => handleProjectTypeChange("all")}
                >
                  All Projects ({getProjectCountByType("all")})
                </button>
                <button
                  className={`case4-btn ${activeProjectType === "mobile" ? "active" : ""
                    }`}
                  onClick={() => handleProjectTypeChange("mobile")}
                >
                  Mobile Apps ({getProjectCountByType("mobile")})
                </button>
                <button
                  className={`case4-btn ${activeProjectType === "web" ? "active" : ""
                    }`}
                  onClick={() => handleProjectTypeChange("web")}
                >
                  Web Projects ({getProjectCountByType("web")})
                </button>
              </div>
            </div>
          </div>

          <div className="portfolio-layout">
            {/* Mobile Filter Toggle Button */}
            <div className="mobile-filter-toggle d-lg-none mb-4">
              <button className="filter-toggle-btn" onClick={toggleFilters}>
                <span className="toggle-icon">{showFilters ? "✕" : "☰"}</span>
                {showFilters ? "Hide Filters" : "Show Filters"}
                <span className="selected-badge">
                  {selectedCategories.length}
                </span>
              </button>
            </div>

            {/* Left Sidebar - Category Filters */}
            <div
              className={`col-lg-3 portfolio-sidebar ${showFilters ? "show" : ""
                }`}
            >
              <div className="sidebar-widget">
                <div className="widget-header">
                  <h3 className="widget-title">
                    <span className="title-icon">🎯</span>
                    Filter by Category
                  </h3>
                  <p className="widget-subtitle">
                    {selectedCategories.includes("All")
                      ? "All categories selected"
                      : `${selectedCategories.length} selected`}
                  </p>
                </div>

                <div className="category-filter-grid">
                  {categoryList.map((category) => {
                    const catData = getCategoryData(category);
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <div
                        key={category}
                        className={`category-pill ${isSelected ? "active" : ""
                          }`}
                        onClick={() => handleCategoryToggle(category)}
                        style={{
                          "--pill-color": catData.color,
                          "--pill-bg": catData.bgColor,
                        }}
                      >
                        <div className="pill-content">
                          <span className="pill-icon">{catData.icon}</span>
                          <span className="pill-label">{category}</span>
                          {isSelected && (
                            <span className="pill-check">
                              <img
                                src="/assets/icons/checkmark.png"
                                alt="Selected"
                                width="14"
                                height="14"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </span>
                          )}
                        </div>
                        <div className="pill-ripple"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content - Projects Grid */}
            <div className="col-lg-9 portfolio-content">
              {/* Projects Count */}

              {/* Grid container */}
              <div className="row">
                {filteredProjects.length === 0 ? (
                  <div className="col-12 text-center">
                    <p className="no-projects-message">
                      No projects found matching your filters.
                    </p>
                  </div>
                ) : (
                  filteredProjects.map((project) => {
                    const catData = getCategoryData(project.category);
                    const categoryClass = formatCategoryForUrl(
                      project.category
                    );
                    const platformClass = project.platform
                      ? project.platform.toLowerCase()
                      : "";

                    return (
                      <div
                        key={project.id}
                        className={`col-xl-4 col-lg-6 col-md-6 mb-4 project-item ${categoryClass} ${platformClass}`}
                      >
                        <div className="case-box style2 inner-style1 position-relative">
                          <div className="case-img global-img">
                            <img
                              src={
                                project.image ||
                                "/assets/img/default-project.webp"
                              }
                              alt={project.title}
                            />
                            <Link
                              to={`/portfolio/${formatCategoryForUrl(
                                project.category
                              )}/${project.id}`}
                              className="icon-btn"
                            >
                              <img
                                src="/assets/icons/forward.png"
                                alt="View"
                                width="20"
                                height="20"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="case-content">
                            <h3 className="case-title">
                              <Link
                                to={`/portfolio/${formatCategoryForUrl(
                                  project.category
                                )}/${project.id}`}
                              >
                                {project.title}
                              </Link>
                            </h3>
                            <div className="case-meta">
                              <span className="case-categ">
                                {project.category}
                              </span>
                              {project.platform && (
                                <span className="case-platform">
                                  {" "}
                                  • {project.platform}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="case-action">
                            <Link
                              to={`/portfolio/${formatCategoryForUrl(
                                project.category
                              )}/${project.id}`}
                              className="case-btn"
                            >
                              <i className="fa-regular fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ============================================
           PROFESSIONAL CATEGORY FILTER STYLES
           ============================================ */

        .portfolio-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        .portfolio-sidebar {
          flex: 0 0 280px;
          position: sticky;
          top: 100px;
          height: fit-content;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }

        .portfolio-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .portfolio-sidebar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .portfolio-sidebar::-webkit-scrollbar-thumb {
          background: #64748b;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .portfolio-sidebar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        .portfolio-content {
          flex: 1;
          min-width: 0;
        }

        /* Widget Styling */
        .sidebar-widget {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05),
            0 10px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
        }

        .widget-header {
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        .widget-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 6px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #1e293b;
          letter-spacing: -0.02em;
        }

        .title-icon {
          font-size: 22px;
          filter: grayscale(0.2);
        }

        .widget-subtitle {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        /* Category Filter Grid */
        .category-filter-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Professional Category Pills */
        .category-pill {
          position: relative;
          cursor: pointer;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
        }

        .category-pill::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          transition: background 0.25s ease;
          z-index: 0;
        }

        .category-pill:hover {
          border-color: #cbd5e1;
          background: #f1f5f9;
          transform: translateX(4px);
        }

        .category-pill:hover::before {
          background: rgba(100, 116, 139, 0.02);
        }

        .category-pill.active {
          border-color: #475569;
          background: #475569;
          box-shadow: 0 2px 8px rgba(71, 85, 105, 0.15);
          transform: translateX(4px);
        }

        .category-pill.active::before {
          background: transparent;
        }

        .pill-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
        }

        .pill-icon {
          font-size: 18px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
          filter: grayscale(0.1);
        }

        .category-pill:hover .pill-icon {
          transform: scale(1.1);
        }

        .category-pill.active .pill-icon {
          transform: scale(1.05);
          filter: grayscale(0) brightness(1.2);
        }

        .pill-label {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          transition: color 0.25s ease;
          letter-spacing: -0.01em;
        }

        .category-pill:hover .pill-label {
          color: #1e293b;
        }

        .category-pill.active .pill-label {
          color: #ffffff;
          font-weight: 700;
        }

        .pill-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: checkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @keyframes checkPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* Ripple Effect */
        .pill-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #475569;
          opacity: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .category-pill:active .pill-ripple {
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        /* Mobile Filter Toggle */
        .filter-toggle-btn {
          width: 100%;
          padding: 14px 20px;
          background: #475569;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(71, 85, 105, 0.15);
          position: relative;
          overflow: hidden;
        }

        .filter-toggle-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          transition: left 0.5s ease;
        }

        .filter-toggle-btn:hover::before {
          left: 100%;
        }

        .filter-toggle-btn:hover {
          background: #334155;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(71, 85, 105, 0.25);
        }

        .toggle-icon {
          font-size: 18px;
          font-weight: bold;
        }

        .selected-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Projects Count */
        .projects-count {
          color: #64748b;
          font-size: 16px;
          margin: 0;
          padding: 15px 20px;
          background: #f8fafc;
          border-radius: 10px;
          border-left: 3px solid #475569;
        }

        .projects-count strong {
          color: #475569;
          font-weight: 700;
          font-size: 18px;
        }

        /* No Projects Message */
        .no-projects-message {
          padding: 80px 20px;
          font-size: 18px;
          color: #94a3b8;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px dashed #cbd5e1;
        }

        /* Project Items */
        .project-item {
          transition: all 0.3s ease;
        }

        .case-box {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
        }

        .case-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .case-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
        }

        .case-title a {
          color: #ffffffff !important;
          text-decoration: none;
        }

        .case-categ {
          color: #ffffffff !important;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .case-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
        }

        .case-platform {
          color: #94a3b8;
          font-size: 13px;
        }

        .mobile-filter-toggle {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .portfolio-sidebar {
            flex: 0 0 100%;
            width: 100%;
            max-height: none;
            position: relative;
            top: 0;
            display: none;
          }

          .portfolio-sidebar.show {
            display: block;
            animation: slideDown 0.3s ease-out;
          }

          .portfolio-content {
            flex: 0 0 100%;
          }

          .mobile-filter-toggle {
            display: block;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
