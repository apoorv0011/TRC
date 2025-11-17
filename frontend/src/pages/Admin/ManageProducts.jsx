import React, { useState, useEffect } from "react";
import api from "../../services/api";   // ✅ IMPORTANT

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: ""
  });

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");  // ✅ FIXED

      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        console.error("❌ Backend did NOT return array:", res.data);
        setProducts([]);
      }
    } catch (err) {
      console.error("❌ Error fetching products:", err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products/add", form, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Product Added Successfully");

      setForm({
        name: "",
        price: "",
        image: "",
        description: "",
        category: "",
        stock: ""
      });

      fetchProducts();
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to add product");
    }
  };

  const deleteProduct = async (id) => {
    if (!confirm("Delete product?")) return;

    try {
      await api.delete(`/products/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      fetchProducts();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Products</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "400px",
          marginTop: "20px"
        }}
      >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="price" value={form.price} type="number" onChange={handleChange} placeholder="Price" required />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image path" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
        <input name="stock" value={form.stock} type="number" onChange={handleChange} placeholder="Stock" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />

        <button style={{ padding: "10px", background: "#444", color: "white" }}>Add Product</button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      <h2>Existing Products</h2>

      <div style={{ marginTop: "20px" }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <strong>{p.name}</strong> — ₹{p.price}
            <br />
            <img src={p.image} width="80" />
            <br />
            <button
              onClick={() => deleteProduct(p._id)}
              style={{ marginTop: "10px", background: "red", color: "white", padding: "6px 12px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
