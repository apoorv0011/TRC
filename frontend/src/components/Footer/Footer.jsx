import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* Main Footer Content */}
        <div className="footer-main">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-brand-top">
              <img src={assets.trc_bgremove} alt="TRC Logo" className="footer-logo" />
              <div className="footer-social">
                <a href="https://instagram.com/therezelco" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:therezelco@gmail.com" className="social-icon" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://facebook.com/therezelco" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://linkedin.com/in/therezelco" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <p className="footer-tagline">WHERE YOUR IMAGINATION TAKES SHAPE</p>
            <p className="footer-description">
              Crafting exquisite artificial jewelry that brings your unique style to life. 
              Each piece is designed with passion and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/shop">Shop All</a></li>
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/bestsellers">Best Sellers</a></li>
              <li><a href="/collections">Collections</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-links">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/track-order">Order Tracking</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Legal & Account */}
          <div className="footer-links">
            <h4>Account & Legal</h4>
            <ul>
              <li><a href="/account">My Account</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 The Rezel Co. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
