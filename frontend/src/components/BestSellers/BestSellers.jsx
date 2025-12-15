import React from "react";
import "./BestSellers.css";

const BestSellers = () => {
  return (
    <div className="best-section">
      <h1 className="best-title">BESTSELLERS</h1>

      <div className="best-wrapper">
        <div className="best-image-container">
          <img
            src="/products/Resin frames.jpg"
            alt="Best Seller - Resin Frames"
            className="best-img left"
          />
          <div className="image-overlay">
            <span className="overlay-text">Handcrafted Frames</span>
          </div>
        </div>

        <div className="best-image-container">
          <img
            src="/products/pendant3.jpg"
            alt="Best Seller - Pendant"
            className="best-img right"
          />
          <div className="image-overlay">
            <span className="overlay-text">Elegant Pendants</span>
          </div>
        </div>

        <button 
          className="best-btn"
          onClick={() => window.location.href='/shop'}
        >
          <span>EXPLORE NOW</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BestSellers;
