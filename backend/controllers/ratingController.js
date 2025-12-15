import Rating from '../models/Rating.js';

// Submit or update a rating
export const submitRating = async (req, res) => {
  try {
    const { productId, userId, rating } = req.body;

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Check if user already rated this product
    const existingRating = await Rating.findOne({ productId, userId });

    if (existingRating) {
      // Update existing rating
      existingRating.rating = rating;
      await existingRating.save();
      return res.status(200).json({ 
        message: 'Rating updated successfully', 
        rating: existingRating 
      });
    } else {
      // Create new rating
      const newRating = new Rating({ productId, userId, rating });
      await newRating.save();
      return res.status(201).json({ 
        message: 'Rating submitted successfully', 
        rating: newRating 
      });
    }
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get ratings for a product
export const getProductRatings = async (req, res) => {
  try {
    const { productId } = req.params;

    // Get all ratings for this product
    const ratings = await Rating.find({ productId });

    // Calculate statistics
    const totalRatings = ratings.length;
    const averageRating = totalRatings > 0 
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / totalRatings 
      : 0;

    // Count ratings by star
    const ratingDistribution = {
      5: ratings.filter(r => r.rating === 5).length,
      4: ratings.filter(r => r.rating === 4).length,
      3: ratings.filter(r => r.rating === 3).length,
      2: ratings.filter(r => r.rating === 2).length,
      1: ratings.filter(r => r.rating === 1).length,
    };

    res.status(200).json({
      totalRatings,
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      ratingDistribution,
      ratings
    });
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get user's rating for a product
export const getUserRating = async (req, res) => {
  try {
    const { productId, userId } = req.params;

    const rating = await Rating.findOne({ productId, userId });

    if (rating) {
      res.status(200).json({ rating: rating.rating });
    } else {
      res.status(200).json({ rating: null });
    }
  } catch (error) {
    console.error('Error fetching user rating:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
