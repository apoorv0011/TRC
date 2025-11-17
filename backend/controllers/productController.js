import Product from "../models/Product.js";

/* ---------------------- CREATE PRODUCT ---------------------- */
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------------- GET ALL PRODUCTS ---------------------- */
// Supports ?latest=4
export const getProducts = async (req, res) => {
  try {
    const latest = parseInt(req.query.latest);

    if (!isNaN(latest) && latest > 0) {
      const products = await Product.find()
        .sort({ createdAt: -1 })
        .limit(latest);

      return res.json(products);
    }

    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------------- GET PRODUCT BY ID ---------------------- */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------------- DELETE PRODUCT ---------------------- */
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully", product: deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------------- UPDATE PRODUCT ---------------------- */
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
