import React from 'react';
import './CustomDesign.css';

const CustomDesign = () => {
  const handleInstagramConnect = () => {
    window.open('https://www.instagram.com/therezelco/', '_blank');
  };

  const handleWhatsAppConnect = () => {
    const message = encodeURIComponent('Hi! I would like to create a custom resin jewelry piece. Can you help me with the design?');
    window.open(`https://wa.me/+918081828261?text=${message}`, '_blank');
  };

  return (
    <div className="custom-design-section">
      <div className="custom-design-container">
        
        {/* Left Side - Content */}
        <div className="custom-design-content">
          <div className="custom-badge">
            <span className="badge-icon">✨</span>
            <span>Custom Creations</span>
          </div>
          
          <h2 className="custom-title">
            Bring Your <span className="gradient-text">Vision to Life</span>
          </h2>
          
          <p className="custom-description">
            We specialize in handcrafted custom resin jewelry that tells your unique story. 
            From personalized name pieces to bespoke designs, every creation is made with 
            passion and precision just for you.
          </p>

          <div className="custom-features">
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <div className="feature-text">
                <h4>Personalized Designs</h4>
                <p>Share your ideas and we'll create something unique</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <div className="feature-text">
                <h4>Premium Resin Quality</h4>
                <p>Durable, beautiful, and long-lasting materials</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Fast Turnaround</h4>
                <p>Quick production without compromising quality</p>
              </div>
            </div>
          </div>

          <div className="custom-cta-buttons">
            <button className="cta-instagram" onClick={handleInstagramConnect}>
              <i className="fa-brands fa-instagram"></i>
              <span>Connect on Instagram</span>
            </button>
            
            <button className="cta-whatsapp" onClick={handleWhatsAppConnect}>
              <i className="fa-brands fa-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <p className="custom-note">
            <i className="fa-solid fa-heart"></i>
            Started as an Instagram business, we've created 1000+ custom pieces for happy customers
          </p>
        </div>

        {/* Right Side - Visual */}
        <div className="custom-design-visual">
          <div className="visual-card card-1">
            <div className="card-content">
              <div className="card-icon">📸</div>
              <h3>Share Your Idea</h3>
              <p>Send us your design inspiration via Instagram DM or WhatsApp</p>
            </div>
          </div>
          
          <div className="visual-card card-2">
            <div className="card-content">
              <div className="card-icon">💬</div>
              <h3>We Collaborate</h3>
              <p>Work together to perfect every detail of your custom piece</p>
            </div>
          </div>
          
          <div className="visual-card card-3">
            <div className="card-content">
              <div className="card-icon">✨</div>
              <h3>Receive Your Treasure</h3>
              <p>Get your handcrafted, one-of-a-kind jewelry delivered</p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="floating-element element-1">💎</div>
          <div className="floating-element element-2">✨</div>
          <div className="floating-element element-3">🎨</div>
        </div>

      </div>
    </div>
  );
};

export default CustomDesign;
