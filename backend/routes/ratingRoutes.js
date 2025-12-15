import express from 'express';
import { submitRating, getProductRatings, getUserRating } from '../controllers/ratingController.js';

const router = express.Router();

// Submit or update a rating
router.post('/submit', submitRating);

// Get all ratings for a product
router.get('/product/:productId', getProductRatings);

// Get user's rating for a product
router.get('/product/:productId/user/:userId', getUserRating);

export default router;
