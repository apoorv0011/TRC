import express from "express";
import { auth, adminOnly } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getAllOrders,
  updateOrderStatus,
  deleteOrder
} from "../controllers/orderController.js";

const router = express.Router();

// User
router.post("/", auth, createOrder);

// Admin
router.get("/", auth, adminOnly, getAllOrders);
router.put("/:id", auth, adminOnly, updateOrderStatus);
router.delete("/:id", auth, adminOnly, deleteOrder);

export default router;
