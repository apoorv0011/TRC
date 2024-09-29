import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.navlogo} alt="" />
        </div>
        <div className="footer-content-center">
            <ul>
          <li>Shop</li>

          <li>About Us</li>

          <li>Contact Us</li>

          <li>Order Tracking</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <ul>
            <li>Privacy Policy</li>

<li>Shipping Policy</li>

<li>MyAccount</li>

<li>Shipping And Return Policy</li>

            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
