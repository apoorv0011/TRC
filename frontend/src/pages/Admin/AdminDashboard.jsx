import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // simple frontend guard
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "admin") {
      // redirect non-admins to home
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const logoutAdmin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>

        <ul className="admin-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/products">Manage Products</Link></li>
          <li><Link to="/admin/orders">Manage Orders</Link></li>
        </ul>

        <button className="logout-btn" onClick={logoutAdmin}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
