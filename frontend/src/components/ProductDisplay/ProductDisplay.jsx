import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/ShowContext";
import ResinItem from "../ResinItem/ResinItem";
import { useNavigate } from "react-router-dom";

const ProductDisplay = () => {
  const { product_list, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Get latest 4 products
  const latestProducts = [...product_list].slice(-4).reverse();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); // Prevent navigation when clicking add button
    addToCart(productId);
  };

  return (
    <div className="product_display" id="product_display">
      <h1>NEW ARRIVALS</h1>

      <div className="product-display-list">
        {latestProducts.length === 0 ? (
          <p className="no-products">No products added yet</p>
        ) : (
          latestProducts.map((item) => (
            <div 
              key={item._id} 
              className="product-link"
              onClick={() => handleProductClick(item._id)}
            >
              <ResinItem
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onAddToCart={(e) => handleAddToCart(e, item._id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
