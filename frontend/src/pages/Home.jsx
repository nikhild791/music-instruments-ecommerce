import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Categories based on the image
  const categories = [
    "ALL",
    "GUITAR",
    "TABLA",
    "KEYBOARD",
    "PIANO",
    "DRUM",
    "FLUTE",
    "MUSICIAN'S MALL",
    "SITAR",
  ];

  // Sample products data structure organized by category (in a real app, this would come from an API)
  const allProducts = {
    GUITAR: [
      {
        id: "g1",
        name: "Semi-Acoustic Guitar",
        price: "7000.00",
        discountPrice: "5999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg",
      },
      {
        id: "g2",
        name: "Acoustic Guitar",
        price: "13000.00",
        discountPrice: "11999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg",
      },
      {
        id: "g3",
        name: "Electric Guitar",
        price: "9000.00",
        discountPrice: "6999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg",
      },
      {
        id: "g4",
        name: "Classical Guitar",
        price: "10000.00",
        discountPrice: "8999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg",
      },
    ],
    TABLA: [
      {
        id: "t1",
        name: "Tabla Set",
        price: "7999.00",
        discountPrice: "5999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg",
      },
      {
        id: "t2",
        name: "Professional Tabla",
        price: "3999.00",
        discountPrice: "2999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg",
      },
      {
        id: "t3",
        name: "Concert Tabla",
        price: "2999.00",
        discountPrice: "1999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg",
      },
      {
        id: "t4",
        name: "Designer Tabla",
        price: "3599.00",
        discountPrice: "2599.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_33-1.jpg",
      },
    ],
    KEYBOARD: [
      {
        id: "k1",
        name: "Yamaha PSR F51",
        price: "5999.00",
        discountPrice: "4299.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg",
      },
      {
        id: "k2",
        name: "Yamaha PSR I400 61-Key",
        price: "12999.00",
        discountPrice: "9999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg",
      },
      {
        id: "k3",
        name: "Casio CT-X9000IN 61-Key",
        price: "7999.00",
        discountPrice: "4999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg",
      },
      {
        id: "k4",
        name: "Roland JUNO-DS",
        price: "8999.00",
        discountPrice: "6999.00",
        imgUrl:
          "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg",
      },
    ],
    PIANO: [
      {
        id: "p1",
        name: "Digital Piano",
        price: "25999.00",
        discountPrice: "21999.00",
        imgUrl: "/src/assets/piano1.jpg",
      },
      {
        id: "p2",
        name: "Upright Piano",
        price: "19999.00",
        discountPrice: "15999.00",
        imgUrl: "/src/assets/piano2.jpg",
      },
      {
        id: "p3",
        name: "Grand Piano",
        price: "49999.00",
        discountPrice: "45999.00",
        imgUrl: "/src/assets/piano3.jpg",
      },
      {
        id: "p4",
        name: "Electric Piano",
        price: "29999.00",
        discountPrice: "27999.00",
        imgUrl: "/src/assets/piano4.jpg",
      },
    ],
    DRUM: [
      {
        id: "d1",
        name: "Acoustic Drum Set",
        price: "15999.00",
        discountPrice: "12999.00",
        imgUrl: "/src/assets/drum1.jpg",
      },
      {
        id: "d2",
        name: "Electric Drum Kit",
        price: "49999.00",
        discountPrice: "45999.00",
        imgUrl: "/src/assets/drum2.jpg",
      },
      {
        id: "d3",
        name: "Professional Drum Set",
        price: "15000.00",
        discountPrice: "12000.00",
        imgUrl: "/src/assets/drum3.jpg",
      },
      {
        id: "d4",
        name: "Beginner Drum Kit",
        price: "8499.00",
        discountPrice: "5499.00",
        imgUrl: "/src/assets/drum4.jpg",
      },
    ],
    FLUTE: [
      {
        id: "f1",
        name: "Bamboo Flute",
        price: "1999.00",
        discountPrice: "1599.00",
        imgUrl: "/src/assets/flute1.jpg",
      },
      {
        id: "f2",
        name: "Professional Flute",
        price: "4999.00",
        discountPrice: "3999.00",
        imgUrl: "/src/assets/flute2.jpg",
      },
      {
        id: "f3",
        name: "Silver Flute",
        price: "7999.00",
        discountPrice: "6999.00",
        imgUrl: "/src/assets/flute3.jpg",
      },
      {
        id: "f4",
        name: "Concert Flute",
        price: "3999.00",
        discountPrice: "2999.00",
        imgUrl: "/src/assets/flute4.jpg",
      },
    ],
    SITAR: [
      {
        id: "s1",
        name: "Professional Sitar",
        price: "19999.00",
        discountPrice: "16999.00",
        imgUrl: "/src/assets/sitar1.jpg",
      },
      {
        id: "s2",
        name: "Beginner Sitar",
        price: "15999.00",
        discountPrice: "12999.00",
        imgUrl: "/src/assets/sitar2.jpg",
      },
      {
        id: "s3",
        name: "Concert Sitar",
        price: "17999.00",
        discountPrice: "15999.00",
        imgUrl: "/src/assets/sitar3.jpg",
      },
      {
        id: "s4",
        name: "Decorative Sitar",
        price: "9999.00",
        discountPrice: "7999.00",
        imgUrl: "/src/assets/sitar4.jpg",
      },
    ],
    "MUSICIAN'S MALL": [],
  };

  // Filter products based on selected category
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      if (activeCategory === "ALL") {
        // Flatten all products into a single array for "ALL" category
        const allCategoryProducts = Object.values(allProducts).flat();
        setFilteredProducts(allCategoryProducts);
      } else {
        setFilteredProducts(allProducts[activeCategory] || []);
      }
      setIsLoading(false);
    }, 300); // Small timeout to simulate data fetching
  }, [activeCategory]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Banner Section */}
      <div className="relative">
        <img
          src="https://music-club.mrsoni.me/assets/front/img/banner.jpg"
          alt="Music Instruments"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/* Category Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white relative inline-block">
            OUR CATEGORY
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 -mb-2"></span>
          </h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-md text-sm border transition-colors ${
                activeCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="block h-48 overflow-hidden"
                >
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 truncate dark:text-white">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-baseline mb-4">
                    <span className="text-blue-500 text-lg font-bold">
                      ₹ {product.discountPrice}
                    </span>
                    <span className="text-gray-500 text-sm line-through ml-2">
                      ₹ {product.price}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                      Add to Cart
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            <p className="text-xl">No products available in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
