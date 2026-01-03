import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/ShowContext";
import ResinItem from "../ResinItem/ResinItem";

const ProductDisplay = () => {
  const { product_list } = useContext(StoreContext);

  // Get latest 4 products
  const latestProducts = [...product_list].slice(-4).reverse();

  return (
    <div className="product_display" id="product_display">
      <h1>NEW ARRIVALS</h1>

      <div className="product-display-list">
        {latestProducts.length === 0 ? (
          <p className="no-products">No products added yet</p>
        ) : (
          latestProducts.map((item) => (
            <ResinItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
