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
            <img src={assets.trc_bgremove} alt="TRC Logo" className="footer-logo" />
            <p className="footer-tagline">WHERE YOUR IMAGINATION TAKES SHAPE</p>
            <p className="footer-description">
              Crafting exquisite artificial jewelry that brings your unique style to life. 
              Each piece is designed with passion and attention to detail.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </div>
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
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} The Rezel Co. All rights reserved.
            </p>
            <div className="footer-payment">
              <span>We Accept:</span>
              <div className="payment-icons">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-brands fa-cc-paypal"></i>
                <i className="fa-brands fa-google-pay"></i>
              </div>
            </div>
            <a href="https://www.therezelco.in" className="footer-website" target="_blank" rel="noopener noreferrer">
              www.therezelco.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
