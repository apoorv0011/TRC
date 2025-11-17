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

/* -------------------- PUBLIC ROUTES -------------------- */
router.get("/", getProducts);         // Get all products
router.get("/:id", getProductById);   // Get product by ID

/* -------------------- ADMIN ONLY ROUTES -------------------- */
router.post("/add", auth, adminOnly, createProduct);           // Add product
router.put("/update/:id", auth, adminOnly, updateProduct);     // Update product
router.delete("/delete/:id", auth, adminOnly, deleteProduct);  // Delete product

export default router;
