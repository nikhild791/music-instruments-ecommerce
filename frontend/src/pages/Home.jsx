import { useState, useEffect } from "react";
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container-custom py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-12 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MusicShop
          </h1>
          <p className="text-xl mb-8">
            Find the perfect instrument to express your musical talent
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container-custom py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Instruments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Guitars",
              "Keyboards",
              "Drums",
              "Wind Instruments",
              "Accessories",
            ].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <a
                  href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-primary hover:underline"
                >
                  View All
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
