import React from "react";
import "./BestSellers.css";

const BestSellers = () => {
  return (
    <div className="best-section">
      <h1 className="best-title">BESTSELLERS</h1>

      <div className="best-wrapper">
        <img
          src="/products/Resin frames.jpg"
          alt="Best item 1"
          className="best-img left"
        />

        <img
          src="/products/pendant3.jpg"
          alt="Best item 2"
          className="best-img right"
        />

        <button className="best-btn">EXPLORE NOW</button>
      </div>
    </div>
  );
};

export default BestSellers;
