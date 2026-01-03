import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import ratingRoutes from "./routes/ratingRoutes.js";

// Load environment variables
// In production (Render), variables are set in dashboard
// In development, load from .env.local
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: '.env.local' });
} else {
    dotenv.config(); // Load from environment (Render sets these)
}

// Initialize Express app
const app = express();

// Get directory path (needed for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectDB();

// Middleware setup
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL // Set this in Render environment variables
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // Allow if origin is in allowedOrigins or matches Vercel pattern
        if (allowedOrigins.includes(origin) || origin.includes('.vercel.app')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/ratings", ratingRoutes);

// Serve static product images
app.use("/products", express.static(path.join(__dirname, "public/products")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Frontend URL: http://localhost:5173`);
});
