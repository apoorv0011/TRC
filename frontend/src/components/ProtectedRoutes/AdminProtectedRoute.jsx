import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → send to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Not admin → deny access
  if (role !== "admin") {
    return <h2 style={{ padding: "40px", textAlign: "center" }}>
      ❌ Access Denied — Admins Only
    </h2>;
  }

  return children;
};

export default AdminProtectedRoute;
