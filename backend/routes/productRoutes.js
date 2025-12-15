import express from "express";
import { auth, adminOnly } from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Public routes - anyone can access
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin-only routes - require authentication and admin role
router.post("/add", auth, adminOnly, createProduct);
router.put("/update/:id", auth, adminOnly, updateProduct);
router.delete("/delete/:id", auth, adminOnly, deleteProduct);

export default router;
