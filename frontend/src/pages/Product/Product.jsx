import React, { useEffect, useState, useContext } from "react";
import "./Product.css";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { StoreContext } from "../../context/ShowContext";
import StarRating from "../../components/StarRating/StarRating";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(StoreContext);

  useEffect(() => {
    // Scroll to top when product page loads
    window.scrollTo(0, 0);

    // Fetch current product
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

    // Fetch all products for related items
    api
      .get('/products')
      .then((res) => {
        // Filter out current product and get random 4 products
        const filtered = res.data.filter(p => p._id !== id);
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 4));
      })
      .catch((err) => {
        console.error("Error fetching related products:", err);
      });
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(id);
    }
    // Show success feedback
    const btn = document.querySelector('.add-to-cart-btn');
    const originalHTML = btn.innerHTML;
    btn.textContent = '✓ Added to Cart';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  };

  const handleBuyNow = () => {
    // Add to cart first
    for (let i = 0; i < quantity; i++) {
      addToCart(id);
    }
    // Navigate to cart
    navigate('/cart');
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (loading) {
    return (
      <div className="product-loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-error">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-home-btn">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      <div className="product-container">
        {/* Left Side - Image Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="product-details">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
          </div>

          <div className="product-price-section">
            <p className="product-price">₹{product.price}</p>
            <p className="price-note">Inclusive of all taxes • Free Shipping</p>
          </div>

          <div className="product-description">
            <h3>Product Description</h3>
            <p>{product.description || "Exquisite handcrafted jewelry piece, meticulously designed to add elegance and charm to your special occasions. Each piece is unique and crafted with premium materials for lasting beauty."}</p>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button 
                className="quantity-btn" 
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                −
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 2L7.17 4H3C2.45 4 2 4.45 2 5C2 5.55 2.45 6 3 6H4.08L6.6 13.59C6.77 14.03 7.17 14.34 7.65 14.34H18.31C18.79 14.34 19.19 14.03 19.36 13.59L22 6H6.42M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
              </svg>
              Add to Cart
            </button>
            
            <button className="buy-now-btn" onClick={handleBuyNow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
              </svg>
              Buy Now
            </button>
          </div>

          {/* Star Rating Section */}
          <StarRating productId={id} />
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h2 className="related-title">You May Also Like</h2>
          <div className="related-products-grid">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct._id} 
                className="related-product-card"
                onClick={() => navigate(`/product/${relatedProduct._id}`)}
              >
                <div className="related-product-image">
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <div className="related-product-overlay">
                    <button className="quick-view-btn">View Details</button>
                  </div>
                </div>
                <div className="related-product-info">
                  <h3>{relatedProduct.name}</h3>
                  <p className="related-product-price">₹{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
