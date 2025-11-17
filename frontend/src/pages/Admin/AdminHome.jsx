import React from "react";

const AdminHome = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 30, marginBottom: 8 }}>Welcome, Admin</h1>
      <p>Use the left menu to manage products and orders.</p>
      <div style={{ marginTop: 24 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <h3>Products</h3>
            <p>View, add or remove products.</p>
          </div>
          <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <h3>Orders</h3>
            <p>Monitor customer orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
