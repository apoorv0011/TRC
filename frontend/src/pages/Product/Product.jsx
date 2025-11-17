import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading product...</p>;

  if (!product) return <p className="error">Product not found.</p>;

  return (
    <div className="product-page">
      <div className="product-left">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">₹{product.price}</p>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
