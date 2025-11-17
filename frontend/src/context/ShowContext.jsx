import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [product_list, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    api
      .get("/products")   // ✔ FIXED — no /api/ here
      .then((res) => {
        if (Array.isArray(res.data)) {
          console.log("Products fetched:", res.data.length);
          setProductList(res.data.reverse());
        } else {
          console.error("Invalid backend response:", res.data);
          setProductList([]);
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
        setProductList([]);
      });
  }, []);

  const addToCart = (id) =>
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const removeFromCart = (id) =>
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cartItems) {
      const product = product_list.find((p) => p._id === item);
      if (product) total += product.price * cartItems[item];
    }
    return total;
  };

  return (
    <StoreContext.Provider
      value={{ product_list, cartItems, addToCart, removeFromCart, getTotalCartAmount }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
