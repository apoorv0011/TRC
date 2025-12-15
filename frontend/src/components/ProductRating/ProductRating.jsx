import React, { useState, useEffect } from 'react';
import './ProductRating.css';
import api from '../../services/api';

const ProductRating = ({ productId, compact = false }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await api.get(`/ratings/product/${productId}`);
        setAverageRating(response.data.averageRating || 0);
        setTotalRatings(response.data.totalRatings || 0);
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    if (productId) {
      fetchRating();
    }
  }, [productId]);

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => {
      const filled = averageRating >= star;
      const halfFilled = averageRating >= star - 0.5 && averageRating < star;

      return (
        <span
          key={star}
          className={`rating-star ${filled ? 'filled' : ''} ${halfFilled ? 'half-filled' : ''}`}
        >
          ★
        </span>
      );
    });
  };

  if (totalRatings === 0 && compact) {
    return null; // Don't show if no ratings in compact mode
  }

  return (
    <div className={`product-rating ${compact ? 'compact' : ''}`}>
      <div className="rating-stars-display">
        {renderStars()}
      </div>
      {!compact && totalRatings > 0 && (
        <span className="rating-count">({totalRatings})</span>
      )}
      {compact && totalRatings > 0 && (
        <span className="rating-value">{averageRating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default ProductRating;
