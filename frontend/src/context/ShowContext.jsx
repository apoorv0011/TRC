import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { fallbackProducts } from "../data/fallbackProducts";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [product_list, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        
        if (Array.isArray(response.data) && response.data.length > 0) {
          console.log(`✅ Loaded ${response.data.length} products from database`);
          setProductList(response.data.reverse());
        } else {
          console.warn("⚠️ No products in database, using fallback products");
          setProductList(fallbackProducts);
        }
      } catch (error) {
        console.error("❌ Failed to fetch products:", error.message);
        console.log("📦 Using fallback products");
        setProductList(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add item to cart
  const addToCart = (id) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [id]: (prev[id] || 0) + 1 
    }));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  // Calculate total cart amount
  const getTotalCartAmount = () => {
    let total = 0;
    
    for (let itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = product_list.find((p) => p._id === itemId);
        if (product) {
          total += product.price * cartItems[itemId];
        }
      }
    }
    
    return total;
  };

  const contextValue = {
    product_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    loading
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
