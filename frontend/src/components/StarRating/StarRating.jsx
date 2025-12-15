import React, { useState, useEffect } from 'react';
import './StarRating.css';
import api from '../../services/api';

const StarRating = ({ productId }) => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Generate a unique user ID (stored in localStorage)
  const getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9) + Date.now();
      localStorage.setItem('userId', userId);
    }
    return userId;
  };

  // Fetch ratings on component mount
  useEffect(() => {
    fetchRatings();
    fetchUserRating();
  }, [productId]);

  const fetchRatings = async () => {
    try {
      const response = await api.get(`/ratings/product/${productId}`);
      setAverageRating(response.data.averageRating);
      setTotalRatings(response.data.totalRatings);
      setRatingDistribution(response.data.ratingDistribution);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ratings:', error);
      setLoading(false);
    }
  };

  const fetchUserRating = async () => {
    try {
      const userId = getUserId();
      const response = await api.get(`/ratings/product/${productId}/user/${userId}`);
      if (response.data.rating) {
        setUserRating(response.data.rating);
      }
    } catch (error) {
      console.error('Error fetching user rating:', error);
    }
  };

  const handleRating = async (rating) => {
    setSubmitting(true);
    try {
      const userId = getUserId();
      await api.post('/ratings/submit', {
        productId,
        userId,
        rating
      });
      setUserRating(rating);
      // Refresh ratings
      await fetchRatings();
      setSubmitting(false);
    } catch (error) {
      console.error('Error submitting rating:', error);
      setSubmitting(false);
    }
  };

  const renderStars = (interactive = false) => {
    return [1, 2, 3, 4, 5].map((star) => {
      const filled = interactive 
        ? (hoverRating || userRating) >= star 
        : averageRating >= star;
      const halfFilled = !interactive && averageRating >= star - 0.5 && averageRating < star;

      return (
        <span
          key={star}
          className={`star ${interactive ? 'interactive' : ''} ${filled ? 'filled' : ''} ${halfFilled ? 'half-filled' : ''}`}
          onClick={() => interactive && handleRating(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
        >
          ★
        </span>
      );
    });
  };

  const renderRatingBar = (stars, count) => {
    const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
    return (
      <div className="rating-bar-row">
        <span className="rating-bar-label">{stars} ★</span>
        <div className="rating-bar-container">
          <div 
            className="rating-bar-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="rating-bar-count">{count}</span>
      </div>
    );
  };

  if (loading) {
    return <div className="star-rating-loading">Loading ratings...</div>;
  }

  return (
    <div className="star-rating-container">
      {/* Average Rating Display */}
      <div className="rating-summary">
        <div className="rating-average">
          <div className="average-number">{averageRating.toFixed(1)}</div>
          <div className="average-stars">{renderStars(false)}</div>
          <div className="total-ratings">{totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}</div>
        </div>

        {/* Rating Distribution */}
        <div className="rating-distribution">
          {[5, 4, 3, 2, 1].map(stars => (
            <div key={stars}>
              {renderRatingBar(stars, ratingDistribution[stars] || 0)}
            </div>
          ))}
        </div>
      </div>

      {/* User Rating Section */}
      <div className="user-rating-section">
        <h3>Rate this product</h3>
        <div className="user-stars">
          {renderStars(true)}
        </div>
        {userRating > 0 && (
          <p className="user-rating-text">
            You rated this product {userRating} {userRating === 1 ? 'star' : 'stars'}
          </p>
        )}
        {submitting && <p className="submitting-text">Submitting...</p>}
      </div>
    </div>
  );
};

export default StarRating;
