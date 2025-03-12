const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Music Instruments API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
