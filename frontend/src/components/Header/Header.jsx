import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-overlay"></div>
      
      <div className="header-content">
        {/* Hero Text */}
        <div className="hero-text">
          <span className="hero-badge">Handcrafted with Love</span>
          <h1>
            Timeless Resin
            <span className="highlight"> Jewellery</span>
          </h1>
          <p className="hero-subtitle">
            Each piece tells a story. Discover unique, handcrafted resin jewellery 
            that captures your most precious moments in stunning detail.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn-explore"
              onClick={() => window.location.href='/shop'}
            >
              Shop Collection
            </button>
            <button 
              className="btn-learn"
              onClick={() => document.getElementById('explore-menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover More
            </button>
          </div>
        </div>

        {/* Hero Image - No floating badges */}
        <div className="hero-image">
          <div className="image-frame">
            <img src="/products/pendant1.jpg" alt="Featured Jewellery" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Header;
