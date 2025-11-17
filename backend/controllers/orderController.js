import Order from "../models/Order.js";

// Create order (User)
export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      address: req.body.address,
      phone: req.body.phone,
      paymentMethod: req.body.paymentMethod
    });

    res.json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json({ message: "Status updated", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete order (Optional)
export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
