import React, { useContext, useState } from "react";
import "./Shop.css";
import { StoreContext } from "../../context/ShowContext";
import ResinItem from "../../components/ResinItem/ResinItem";

const Shop = () => {

  const { product_list } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");

  const categories = [
    "All",
    "PENDANTS",
    "BOOKMARKS",
    "KEYCHAINS",
    "BRACELETS",
    "RAKHIS",
    "EARINGS",
    "PRESERVATIONS",
    "RINGS"
  ];

  // Filter by category
  let filtered = selectedCategory === "All"
    ? product_list
    : product_list.filter(p => p.category === selectedCategory);

  // Sorting
  if (sortOption === "low-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }
  if (sortOption === "high-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }
  if (sortOption === "newest") {
    filtered = [...filtered]; // already sorted newest → oldest in context
  }

  return (
    <div className="shop-page">

      {/* LEFT SIDEBAR */}
      <div className="shop-sidebar">
        <h2>Categories</h2>

        {categories.map((cat, index) => (
          <p
            key={index}
            className={`category-item ${cat === selectedCategory ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* MAIN SHOP CONTENT */}
      <div className="shop-content">

        {/* SORTING */}
        <div className="shop-sort">
          <span>Sort by:</span>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="shop-products">
          {filtered.map((item) => (
            <ResinItem key={item._id} {...item} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Shop;
