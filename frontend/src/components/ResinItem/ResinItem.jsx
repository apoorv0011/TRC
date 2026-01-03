import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/ShowContext';
import "./ResinItem.css";
import { assets } from '../../assets/assets';
import ProductRating from '../ProductRating/ProductRating';

const ResinItem = ({ id, name, price, description, image, onAddToCart }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const itemCount = cartItems[id] || 0;

  const handleAddClick = (e) => {
    e.stopPropagation(); // Prevent parent click
    if (onAddToCart) {
      onAddToCart(e);
    } else {
      addToCart(id);
    }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation(); // Prevent parent click
    removeFromCart(id);
  };

  const handleIncreaseClick = (e) => {
    e.stopPropagation(); // Prevent parent click
    addToCart(id);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="resin-item" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="resin-item-image-container">
        <img className='resin-item-image' src={image} alt={name} />
        {
          itemCount === 0 ?
            <div 
              className='add' 
              onClick={handleAddClick}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            : <div className='resin-item-counter'>
                <div 
                  className="counter-btn remove-btn"
                  onClick={handleRemoveClick}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p>{itemCount}</p>
                <div 
                  className="counter-btn add-btn"
                  onClick={handleIncreaseClick}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
        }
      </div>
      <div className="resin-item-info">
        <div className="resin-item-header">
          <div className="resin-item-name">
            <p>{name}</p>
          </div>
          <ProductRating productId={id} compact={true} />
        </div>
        <p className="resin-item-price">₹{price}</p>
      </div>
    </div>
  );
}

export default ResinItem;
