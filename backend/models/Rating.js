import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true 
    },
    userId: { 
      type: String, 
      required: true 
    }, // Using string for simplicity (can be IP or session ID)
    rating: { 
      type: Number, 
      required: true, 
      min: 1, 
      max: 5 
    }
  },
  { timestamps: true }
);

// Ensure one rating per user per product
ratingSchema.index({ productId: 1, userId: 1 }, { unique: true });

const Rating = mongoose.model("Rating", ratingSchema);
export default Rating;
