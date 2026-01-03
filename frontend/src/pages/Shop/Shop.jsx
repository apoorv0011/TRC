import React, { useContext, useState, useEffect } from "react";
import "./Shop.css";
import { StoreContext } from "../../context/ShowContext";
import ResinItem from "../../components/ResinItem/ResinItem";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";

const Shop = () => {

  const { product_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [productRatings, setProductRatings] = useState({});

  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset category to "All" when searching
  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory("All");
    }
  }, [searchQuery]);

  // Fetch ratings for all products
  useEffect(() => {
    const fetchAllRatings = async () => {
      const ratings = {};
      for (const product of product_list) {
        try {
          const response = await api.get(`/ratings/product/${product._id}`);
          ratings[product._id] = response.data.averageRating || 0;
        } catch (error) {
          console.error(`Error fetching rating for ${product._id}:`, error);
          ratings[product._id] = 0;
        }
      }
      setProductRatings(ratings);
    };

    if (product_list.length > 0) {
      fetchAllRatings();
    }
  }, [product_list]);

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

  // Filter by search query first
  let filtered = product_list;
  
  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  } else {
    // Filter by category only if not searching
    filtered = selectedCategory === "All"
      ? product_list
      : product_list.filter(p => p.category === selectedCategory);
  }

  // Sorting
  if (sortOption === "low-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }
  if (sortOption === "high-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }
  if (sortOption === "rating") {
    filtered = [...filtered].sort((a, b) => {
      const ratingA = productRatings[a._id] || 0;
      const ratingB = productRatings[b._id] || 0;
      return ratingB - ratingA; // High to low
    });
  }
  if (sortOption === "newest") {
    filtered = [...filtered]; // already sorted newest → oldest in context
  }

  const clearSearch = () => {
    navigate('/shop');
  };

  return (
    <div className="shop-page">

      {/* LEFT SIDEBAR */}
      <div className="shop-sidebar">
        <h2>Categories</h2>

        {categories.map((cat, index) => (
          <p
            key={index}
            className={`category-item ${cat === selectedCategory ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              if (searchQuery) {
                navigate('/shop'); // Clear search when selecting category
              }
            }}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* MAIN SHOP CONTENT */}
      <div className="shop-content">

        {/* Search Results Header */}
        {searchQuery && (
          <div className="search-results-header">
            <p>
              Showing results for: <strong>"{searchQuery}"</strong>
              <span className="results-count">({filtered.length} products found)</span>
            </p>
            <button onClick={clearSearch} className="clear-search-btn">
              Clear Search
            </button>
          </div>
        )}

        {/* SORTING */}
        <div className="shop-sort">
          <span>Sort by:</span>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="rating">Rating: High to Low</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="shop-products">
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No products found {searchQuery && `for "${searchQuery}"`}</p>
            </div>
          ) : (
            filtered.map((item) => (
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

    </div>
  );
};

export default Shop;
