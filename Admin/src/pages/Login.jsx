import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/auth.service";
import "../styles/admin.css"; // Reuse admin variables

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // The server sets an httpOnly admin_token cookie; this flag only drives
      // client-side routing, the API is what actually enforces access.
      await loginAdmin({ email, password });
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } catch (err) {
      localStorage.removeItem("isAdmin");
      if (!err.response) {
        setError("Cannot reach the API server. Check that the backend is running.");
      } else if (err.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError(err.response.data?.message || "Login failed. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
      color: "white"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>TechLand Admin</h2>

        {error && <div style={{ background: "#ef4444", padding: "10px", borderRadius: "8px", marginBottom: "20px", textAlign: "center", fontSize: "14px" }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#94a3b8" }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)", color: "white", outline: "none" }}
              placeholder="admin@techland.com"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#94a3b8" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)", color: "white", outline: "none" }}
              placeholder="admin123"
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              background: "#4f46e5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
            onMouseOver={(e) => e.target.style.background = "#4338ca"}
            onMouseOut={(e) => e.target.style.background = "#4f46e5"}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
