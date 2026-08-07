import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/auth.service";
import "../styles/admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/projects", label: "Projects", icon: "🚀" },
    { path: "/admin/clients", label: "Clients", icon: "🤝" },
    { path: "/admin/team", label: "Team", icon: "👥" },
    { path: "/admin/activities", label: "Activities", icon: "🎈" },
    { path: "/admin/testimonials", label: "Testimonials", icon: "⭐" },
    { path: "/admin/contacts", label: "Messages", icon: "📩" },
    { path: "/admin/media", label: "Media Library", icon: "📁" },
  ];

  return (
    <div className="admin-wrapper">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="admin-logo">TechLand</h2>
          <button className="sidebar-close" onClick={closeSidebar}>
            &times;
          </button>
        </div>        

        <nav className="admin-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "admin-link active" : "admin-link"
              }
            >
              <span style={{ marginRight: "10px" }}>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="admin-main">
        {/* HEADER */}
        <header className="admin-header">
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <button
              className="mobile-toggle"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰
            </button>
            <span classNam e="admin-header-title">Admin Dashboard</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span className="user-name">Welcome, Admin</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
