import React, { useState, useEffect } from "react";
import api from "../../services/api";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/${id}`, { status });
      fetchOrders();
    } catch (err) {
      alert("Status update failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Orders</h1>

      {orders.map((o) => (
        <div key={o._id} style={{ border: "1px solid #ddd", padding: 15, marginBottom: 15 }}>
          <p><b>Order ID:</b> {o._id}</p>
          <p><b>User:</b> {o.user?.name} ({o.user?.email})</p>
          <p><b>Total:</b> ₹{o.totalAmount}</p>
          <p><b>Status:</b> {o.status}</p>

          <select
            value={o.status}
            onChange={(e) => updateStatus(o._id, e.target.value)}
          >
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          <h4>Items:</h4>
          {o.items.map((item) => (
            <p key={item.productId}>
              {item.name} x {item.quantity} — ₹{item.price}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;
