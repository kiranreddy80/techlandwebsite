import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import Masonry from "react-masonry-css";
import { categories } from "./projectsData";
import api from "../../services/api";
import config from "../../config";

// Category icons matching Portfolio page
const categoryIcons = {
  All: { icon: "📋", color: "#667eea", bgColor: "#f0f4ff" },
  "E-Commerce": { icon: "🛒", color: "#f59e0b", bgColor: "#fef3c7" },
  Healthcare: { icon: "🏥", color: "#ef4444", bgColor: "#fee2e2" },
  Education: { icon: "🎓", color: "#8b5cf6", bgColor: "#f5f3ff" },
  Finance: { icon: "💰", color: "#10b981", bgColor: "#d1fae5" },
  "Social Media": { icon: "📱", color: "#ec4899", bgColor: "#fce7f3" },
  Entertainment: { icon: "🎬", color: "#f43f5e", bgColor: "#ffe4e6" },
  "Food & Delivery": { icon: "🍔", color: "#f97316", bgColor: "#ffedd5" },
  Travel: { icon: "✈️", color: "#06b6d4", bgColor: "#cffafe" },
  "Real Estate": { icon: "🏠", color: "#14b8a6", bgColor: "#ccfbf1" },
  Fitness: { icon: "💪", color: "#84cc16", bgColor: "#ecfccb" },
  Business: { icon: "💼", color: "#6366f1", bgColor: "#e0e7ff" },
  Productivity: { icon: "✅", color: "#a855f7", bgColor: "#f3e8ff" },
  Gaming: { icon: "🎮", color: "#d946ef", bgColor: "#fae8ff" },
  News: { icon: "📰", color: "#64748b", bgColor: "#f1f5f9" },
  Music: { icon: "🎵", color: "#f43f5e", bgColor: "#ffe4e6" },
  Photography: { icon: "📷", color: "#0ea5e9", bgColor: "#e0f2fe" },
  Utilities: { icon: "⚙️", color: "#71717a", bgColor: "#f4f4f5" },
  Communication: { icon: "💬", color: "#3b82f6", bgColor: "#dbeafe" },
  "Job Search": { icon: "🔍", color: "#8b5cf6", bgColor: "#f5f3ff" },
  Financial: { icon: "💵", color: "#10b981", bgColor: "#d1fae5" },
  "Non-Profit": { icon: "❤️", color: "#ef4444", bgColor: "#fee2e2" },
  "Wedding Planning": { icon: "💒", color: "#ec4899", bgColor: "#fce7f3" },
  "Car Rental": { icon: "🚗", color: "#06b6d4", bgColor: "#cffafe" },
  "HR & Recruitment": { icon: "👥", color: "#6366f1", bgColor: "#e0e7ff" },
  Delivery: { icon: "📦", color: "#f97316", bgColor: "#ffedd5" },
  "General Utilities": { icon: "🔧", color: "#71717a", bgColor: "#f4f4f5" },
  Hospitality: { icon: "🏨", color: "#f59e0b", bgColor: "#fef3c7" },
  "Food Delivery": { icon: "🍕", color: "#f97316", bgColor: "#ffedd5" },
  default: { icon: "⭐", color: "#eab308", bgColor: "#fef9c3" },
};

// Technology logo mapping
const getTechLogo = (techName) => {
  const techLogos = {
    React: "/assets/img/cdn-assets/devicon-react-original.svg",
    "Node.js": "/assets/img/cdn-assets/devicon-nodejs-original.svg",
    Flutter: "/assets/img/cdn-assets/devicon-flutter-original.svg",
    Firebase: "/assets/img/cdn-assets/devicon-firebase-plain.svg",
    MongoDB: "/assets/img/cdn-assets/devicon-mongodb-original.svg",
    "Stripe API":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
    "Google Maps API": "/assets/img/cdn-assets/devicon-google-original.svg",
    "REST API": "/assets/img/cdn-assets/flaticon-2164832.png",
    Express: "/assets/img/cdn-assets/devicon-express-original.svg",
    MySQL: "/assets/img/cdn-assets/devicon-mysql-original.svg",
    PostgreSQL: "/assets/img/cdn-assets/devicon-postgresql-original.svg",
    Redux: "/assets/img/cdn-assets/devicon-redux-original.svg",
    TypeScript: "/assets/img/cdn-assets/devicon-typescript-original.svg",
    JavaScript: "/assets/img/cdn-assets/devicon-javascript-original.svg",
    Python: "/assets/img/cdn-assets/devicon-python-original.svg",
    Django: "/assets/img/cdn-assets/devicon-django-plain.svg",
    "Vue.js": "/assets/img/cdn-assets/devicon-vuejs-original.svg",
    Angular: "/assets/img/cdn-assets/devicon-angularjs-original.svg",
    Docker: "/assets/img/cdn-assets/devicon-docker-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Git: "/assets/img/cdn-assets/devicon-git-original.svg",
    GraphQL: "/assets/img/cdn-assets/devicon-graphql-plain.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Bootstrap: "/assets/img/cdn-assets/devicon-bootstrap-original.svg",
    Sass: "/assets/img/cdn-assets/devicon-sass-original.svg",
    Webpack: "/assets/img/cdn-assets/devicon-webpack-original.svg",
    "Next.js": "/assets/img/cdn-assets/devicon-nextjs-original.svg",
    Kotlin: "/assets/img/cdn-assets/devicon-kotlin-original.svg",
    Swift: "/assets/img/cdn-assets/devicon-swift-original.svg",
    Java: "/assets/img/cdn-assets/devicon-java-original.svg",
    PHP: "/assets/img/cdn-assets/devicon-php-original.svg",
    Laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    Redis: "/assets/img/cdn-assets/devicon-redis-original.svg",
    Nginx: "/assets/img/cdn-assets/devicon-nginx-original.svg",
  };
  return techLogos[techName] || "/assets/img/cdn-assets/flaticon-2164832.png";
};

const findProjectById = (id) => {
  if (categories && typeof categories === "object") {
    for (const categoryKey in categories) {
      const categoryProjects = categories[categoryKey];
      const project = categoryProjects.find((p) => {
        const generatedId = p.id
          ? `${categoryKey}-${p.id}`
          : `${categoryKey}-${p.title.replace(/\s+/g, "-")}`;
        return generatedId === id;
      });
      if (project) {
        return { ...project, category: project.category || categoryKey };
      }
    }
  }
  return null;
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const seo = getSEO("portfolio");
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const backendUrl = config.ASSETS_URL;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProjectData = async () => {
      setLoading(true);
      try {
        // 1. Check static data first (fast)
        let foundProject = null;
        if (categories && typeof categories === "object") {
          for (const categoryKey in categories) {
            const categoryProjects = categories[categoryKey];
            const p = categoryProjects.find((p) => {
              const generatedId = p.id
                ? `${categoryKey}-${p.id}`
                : `${categoryKey}-${p.title.replace(/\s+/g, "-")}`;
              return generatedId === projectId;
            });
            if (p) {
              foundProject = { ...p, category: p.category || categoryKey };
              break;
            }
          }
        }

        // 2. If not found in static, check API
        if (!foundProject) {
          try {
            const { data } = await api.get("/projects");
            const dynamicP = data.find(p => p._id === projectId);
            if (dynamicP) {
              foundProject = {
                ...dynamicP,
                id: dynamicP._id,
                platform: dynamicP.platform || "Web",
                category: dynamicP.category || "General",
                image: dynamicP.image.startsWith("http") ? dynamicP.image : `${backendUrl}${dynamicP.image}`,
                details_image: dynamicP.image.startsWith("http") ? dynamicP.image : `${backendUrl}${dynamicP.image}`,
              };
            }
          } catch (apiErr) {
            console.error("API Fetch failed for detail", apiErr);
          }
        }

        setProject(foundProject);

        // 3. Set Related Projects
        if (foundProject) {
          const category = foundProject.category;
          const staticRelated = (categories[category] || [])
            .filter(p => {
              const pId = p.id ? `${category}-${p.id}` : `${category}-${p.title.replace(/\s+/g, "-")}`;
              return pId !== projectId;
            })
            .map(p => ({
              ...p,
              compositeId: p.id ? `${category}-${p.id}` : `${category}-${p.title.replace(/\s+/g, "-")}`,
              category
            }));

          setRelatedProjects(staticRelated.slice(0, 3));
        }
      } catch (err) {
        console.error("Error in detail fetching:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectId]);

  const getCategoryData = (category) =>
    categoryIcons[category] || categoryIcons["default"];
  const formatCategoryForUrl = (category) =>
    (category || "uncategorized").toLowerCase().replace(/ /g, "-");

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
        <p>Loading Project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error-wrapper">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/portfolio" className="back-btn">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const catData = getCategoryData(project.category);

  return (
    <div>
      <SEO
        title={`${project.title} - ${seo.title}`}
        description={project.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* Breadcrumb */}

      <div className="breadcumb-area style2 bg-smoke4">
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("/assets/img/bg/breadcumb-bg.webp")' }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="container space">
            <div className="breadcumb-content pt-5">
              <h1 className="breadcumb-title">{project.title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>{project.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        <div className="container-fluid">
          <div className="content-layout">
            {/* Main Column */}
            <div className="main-column">
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={
                    project.details_image ||
                    project.image ||
                    "/assets/img/default-project.webp"
                  }
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* Project Overview */}
              <div className="content-section">
                <h2 className="section-title">Project Overview</h2>
                <p className="section-text">
                  {project.project_overview || project.description}
                </p>
              </div>

              {/* Technologies Used */}
              {project.technologies_used &&
                project.technologies_used.length > 0 && (
                  <div className="content-section">
                    <h2 className="section-title">Technologies Used</h2>
                    <div className="tech-stack-grid">
                      {project.technologies_used.map((tech, idx) => (
                        <div key={idx} className="tech-item">
                          <div className="tech-icon-wrapper">
                            <img
                              src={getTechLogo(tech)}
                              alt={tech}
                              className="tech-logo"
                              onError={(e) => {
                                e.target.src =
                                  "/assets/img/cdn-assets/flaticon-2164832.png";
                              }}
                            />
                          </div>
                          <span className="tech-name">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="content-section">
                  <h2 className="section-title">Key Features</h2>
                  <div className="features-grid">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-item-center gap-3">
                        <img
                          src="/assets/icons/checkmark.png"
                          alt="Feature"
                          width="20"
                          height="20"
                          style={{ objectFit: "contain" }}
                          className="feature-icon"
                          loading="lazy" />
                        <p className="feature-text">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="content-section">
                  <h2 className="section-title">Challenges & Solutions</h2>
                  <div className="challenges-list">
                    {project.challenges.map((challenge, idx) => (
                      <div key={idx} className="challenge-card">
                        <div className="challenge-problem">
                          <span className="challenge-label">Challenge:</span>
                          <p>{challenge.problem}</p>
                        </div>
                        <div className="challenge-solution">
                          <span className="solution-label">Solution:</span>
                          <p>{challenge.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="sidebar-column">
              {/* Project Info Card */}
              <div className="info-card d-block">
                <h3 className="card-title">Project Info</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.category}</span>
                  </li>
                  <li className="info-item">
                    <span className="info-label">Platform</span>
                    <span className="info-value">{project.platform}</span>
                  </li>
                  <li className="info-item">
                    <span className="info-label">Status</span>
                    <span
                      className={`info-value status-badge ${project.status === "Live" ? "live" : "progress"
                        }`}
                    >
                      {project.status}
                    </span>
                  </li>
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    <span className="btn-icon">🚀</span>
                    View Live Project
                  </a>
                )}
              </div>

              {/* Timeline Card */}
              {project.timeline && Object.keys(project.timeline).length > 0 && (
                <div className="timeline-card">
                  <h3 className="card-title">Development Timeline</h3>
                  <div className="timeline-list">
                    {Object.entries(project.timeline).map(
                      ([phase, duration], idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <span className="timeline-phase">{phase}</span>
                            <span className="timeline-duration">
                              {duration}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="related-section">
              <h2 className="related-title">Related Projects</h2>
              <div className="related-grid">
                {relatedProjects.map((proj) => {
                  const projCatData = getCategoryData(proj.category);
                  return (
                    <Link
                      key={proj.compositeId}
                      to={`/portfolio/${formatCategoryForUrl(proj.category)}/${proj.compositeId
                        }`}
                      className="related-card"
                    >
                      <div className="related-image">
                        <img
                          src={proj.image || "/assets/img/default-project.webp"}
                          alt={proj.title}
                        />
                        {proj.platform && (
                          <span className="related-platform">
                            {proj.platform}
                          </span>
                        )}
                      </div>
                      <div className="related-body">
                        <h3 className="related-card-title">{proj.title}</h3>
                        <p className="related-desc">{proj.description}</p>
                        <span
                          className="related-category"
                          style={{
                            background: projCatData.bgColor,
                            color: projCatData.color,
                          }}
                        >
                          {proj.category}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .loading-wrapper,
        .error-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 40px;
          text-align: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e0e0e0;
          border-top-color: #163198;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .back-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 28px;
          background: #163198;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .back-btn:hover {
          background: #1c5bbf;
        }

        .breadcumb-area {
          background: #f2f5fa;
          border-bottom: 1px solid #e0e0e0;
        }
        .breadcumb-wrapper {
          padding: 40px 0;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .breadcumb-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        .breadcumb-content {
          position: relative;
          z-index: 1;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
          transition: opacity 0.2s;
        }
        .back-link:hover {
          opacity: 0.8;
        }
        .back-icon {
          font-size: 18px;
        }
        .project-title {
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          font-family: "Poppins", sans-serif;
        }
        .breadcumb-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
        .breadcumb-menu li {
          display: flex;
          align-items: center;
        }
        .breadcumb-menu li::after {
          content: "/";
          margin-left: 8px;
        }
        .breadcumb-menu li:last-child::after {
          display: none;
        }
        .breadcumb-menu a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
        }
        .breadcumb-menu a:hover {
          color: #fff;
        }

        .project-content {
          padding: 40px 0;
        }
        .container-fluid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .content-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 30px;
        }

        .main-column {
          min-width: 0;
        }
        .project-image-wrapper {
          background: #f2f5fa;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }
        .project-image {
          width: 100%;
          display: block;
        }

        .content-section {
          background: #f2f5fa;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 20px;
          font-family: "Poppins", sans-serif;
        }
        .section-text {
          font-size: 15px;
          line-height: 1.8;
          color: #666;
          margin: 0;
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 16px;
        }
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .tech-item:hover {
          background: #e9ecef;
          transform: translateY(-2px);
        }
        .tech-icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f5fa;
          border-radius: 8px;
          padding: 10px;
        }
        .tech-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .tech-name {
          font-size: 13px;
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        .features-grid {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .feature-icon {
          width: 24px;
          height: 24px;
          background: #e8f5e9;
          color: #388e3c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .feature-text {
          margin: 0;
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .challenges-list {
          display: grid;
          gap: 20px;
        }
        .challenge-card {
          border-left: 3px solid #163198;
          padding-left: 20px;
        }
        .challenge-problem,
        .challenge-solution {
          margin-bottom: 12px;
        }
        .challenge-label,
        .solution-label {
          display: block;
          font-weight: 700;
          font-size: 14px;
          color: #212121;
          margin-bottom: 6px;
        }
        .challenge-problem p,
        .challenge-solution p {
          margin: 0;
          font-size: 15px;
          color: #666;
          line-height: 1.6;
        }

        .sidebar-column {
          position: sticky;
          top: 20px;
          height: fit-content;
        }
        .info-card,
        .timeline-card {
          background: #f2f5fa;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 20px;
          font-family: "Poppins", sans-serif;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          border-top: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .info-label {
          font-size: 14px;
          font-weight: 600;
          color: #878787;
        }
        .info-value {
          font-size: 14px;
          font-weight: 600;
          color: #212121;
        }
        .status-badge {
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-badge.live {
          background: #e8f5e9;
          color: #388e3c;
        }
        .status-badge.progress {
          background: #fef3c7;
          color: #f57c00;
        }

        .live-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background: #163198;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .live-btn:hover {
          background: #1c5bbf;
        }
        .btn-icon {
          font-size: 18px;
        }

        .timeline-list {
          display: grid;
          gap: 16px;
        }
        .timeline-item {
          display: flex;
          gap: 12px;
          position: relative;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          background: #163198;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .timeline-item:not(:last-child) .timeline-dot::after {
          content: "";
          position: absolute;
          left: 5px;
          top: 16px;
          width: 2px;
          height: calc(100% + 4px);
          background: #e0e0e0;
        }
        .timeline-content {
          flex: 1;
        }
        .timeline-phase {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #212121;
          margin-bottom: 4px;
        }
        .timeline-duration {
          display: block;
          font-size: 13px;
          color: #878787;
        }

        .related-section {
          margin-top: 60px;
        }
        .related-title {
          font-size: 28px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 30px;
          font-family: "Poppins", sans-serif;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .related-card {
          text-decoration: none;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s;
        }
        .related-card:hover {
          transform: translateY(-5px);
        }
        .related-image {
          height: 180px;
          position: relative;
        }
        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .related-platform {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
        .related-body {
          padding: 16px;
        }
        .related-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 8px;
        }
        .related-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin: 0 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .related-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .content-layout {
            grid-template-columns: 1fr;
          }
          .sidebar-column {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
