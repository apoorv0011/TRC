import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      {/* TOP NAV */}
      <div className="upperNav">
        <Link to="/">
          <div className="logo1">
            <img
              src={assets.trc_bgremove}
              alt=""
              height="100px"
              className="logo"
            />
          </div>
        </Link>

        {/* Search Bar */}
        <form className="searchBar" action="">
          <input type="text" id="searchBar" placeholder="Search" />
          <button className="button-info">
            <img src={assets.search_icon} alt="" />
          </button>
        </form>

        {/* Profile, Cart, Sign In */}
        <div className="profile">
          <Link to="/cart">
            <img src={assets.cart_icon} alt="Cart" />
          </Link>

          <button onClick={() => setShowLogin(true)} className="Signin-button">
            Sign In
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
