const db = require("../config/db");

class Product {
  static async findAll() {
    try {
      const [rows] = await db.query("SELECT * FROM products");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [
        id,
      ]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async create(product) {
    try {
      const { name, description, price, image_url, category_id, stock } =
        product;
      const [result] = await db.query(
        "INSERT INTO products (name, description, price, image_url, category_id, stock) VALUES (?, ?, ?, ?, ?, ?)",
        [name, description, price, image_url, category_id, stock]
      );
      return { id: result.insertId, ...product };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Product;
