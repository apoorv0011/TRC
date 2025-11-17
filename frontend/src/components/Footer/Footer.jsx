import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT SECTION */}
      <div className="footer-left">
        <img src={assets.trc_bgremove} alt="logo" className="footer-logo" />

        <p className="footer-tagline">WHERE YOUR IMAGINATION TAKES SHAPE</p>

        <a href="https://www.therezelco.in" className="footer-website">
          www.therezelco.in
        </a>

        <div className="footer-icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="footer-right">

        <div className="footer-column">
          <p>Shop</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Order Tracking</p>
        </div>

        <div className="footer-column">
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>My Account</p>
          <p>Refund and Returns Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
