import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/ShowContext";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems } = useContext(StoreContext);

  // Calculate total items in cart
  const getTotalCartItems = () => {
    let total = 0;
    for (let item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = getTotalCartItems();

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to shop page with search query
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search after submitting
    }
  };

  return (
    <div className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="upperNav">
        <Link to="/">
          <div className="logo1">
            <img
              src={assets.real_logo}
              alt="TRC Logo"
              height="100px"
              className="logo"
            />
          </div>
        </Link>

        {/* Search Bar */}
        <form className="searchBar" onSubmit={handleSearch}>
          <input 
            type="text" 
            id="searchBar" 
            placeholder="Search for products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button-info" type="submit">
            <img src={assets.search_icon} alt="Search" />
          </button>
        </form>

        {/* Profile, Cart, Sign In */}
        <div className="profile">
          <Link to="/cart" className="cart-link">
            <div className="cart-icon-wrapper">
              <img src={assets.cart_icon} alt="Cart" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </Link>

          <button 
            onClick={() => setShowLogin(true)} 
            className="Signin-button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
