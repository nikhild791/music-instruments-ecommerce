const Product = require("../models/productModel");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image_url, category_id, stock } =
      req.body;

    // Basic validation
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      image_url,
      category_id,
      stock: stock || 0,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};
