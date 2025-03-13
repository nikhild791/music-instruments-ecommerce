import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fbi from '../assests/images/1.jpg'
import mi from '../assests/images/2.jpg'

function Home() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productArray = [
    {
      categoryName: "GUITAR",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/GUITAR.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 70000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg",
        },
        {
          name: "second",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg",
        },
        {
          name: "third",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg",
        },
        {
          name: "fifth",
          price: "₹ 12000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_5-1.jpg",
        },
        {
          name: "sixth",
          price: "₹ 12000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg",
        },
      ],
    },
    {
      categoryName: "TABLA",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/TABLA.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg",
        },
        {
          name: "second",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg",
        },
        {
          name: "third",
          price: "₹ 3999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_33-1.jpg",
        },
      ],
    },
    {
      categoryName: "KEYBOARD",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/keybord.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg",
        },
        {
          name: "second",
          price: "₹ 9999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg",
        },
        {
          name: "third",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg",
        },
      ],
    },
    {
      categoryName: "PIANO",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/piano.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_18-1.jpg",
        },
        {
          name: "second",
          price: "₹ 19999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_16-1.jpg",
        },
        {
          name: "third",
          price: "₹ 12999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_15-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 37999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_17-1.jpg",
        },
      ],
    },
    {
      categoryName: "DRUM",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/drum.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 54999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_8-1.jpg",
        },
        {
          name: "second",
          price: "₹ 59999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_21-1.jpg",
        },
        {
          name: "third",
          price: "₹ 49999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_9-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 120000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg",
        },
      ],
    },
    {
      categoryName: "FLUTE",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/flute.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Back/p_9-2.jpg",
        },
        {
          name: "second",
          price: "₹ 99.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_23-1.jpg",
        },
        {
          name: "third",
          price: "₹ 499.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_22-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 399.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_25-1.jpg",
        },
      ],
    },
    {
      categoryName: "MUSICIANs MALL",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/MUSICIANs_MALL.jpg",
      categoryProduct: [],
    },
    {
      categoryName: "SITAR",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/Sitar.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_26-1.jpg",
        },
        {
          name: "second",
          price: "₹  15999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_28-1.jpg",
        },
        {
          name: "third",
          price: "₹  17999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_27-1.jpg",
        },
        {
          name: "fourth",
          price: "₹  19999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_29-1.jpg",
        },
      ],
    },
  ];

  const categoryArray =['ALL'];

   productArray.forEach((a)=>{
    categoryArray.push(a.categoryName)
  })

  
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      let newProductArray = [];
      console.log(activeCategory)
      if (activeCategory === "ALL") {
        console.log("hi there")
        productArray.forEach(category => {
          category.categoryProduct.forEach(product => {
            product['category']= category.categoryName
            newProductArray.push(product);
          });
        })
      } else {
        productArray.forEach(category => {
          if(category.categoryName == activeCategory ){
            
            category.categoryProduct.forEach(product => {
              product['category']= category.categoryName
              newProductArray.push(product);
            });
          }
        })
      }
      setFilteredProducts(newProductArray);
      console.log(newProductArray)
      setIsLoading(false);
    }, 300); 
  }, [activeCategory]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Banner Section */}
      <div className="flex flex-row gap-5 max-w-[1440px] m-auto px-4 py-4">
      <div className="relative overflow-hidden">
        <img
          src={fbi}
          alt="Music Instruments"
          className="w-full h-48 md:h-64 object-cover transition-all transform ease-in-out duration-200 hover:scale-110"
        />
      </div>
      <div className="relative overflow-hidden">
        <img
          src={mi}
          alt="Music Instruments"
          className="w-full h-48 md:h-64 object-cover transition-all transform ease-in-out duration-500 hover:scale-110 "
        />
      </div>
      <div className="relative overflow-hidden">
        <img
          src={fbi}
          alt="Music Instruments"
          className="w-full h-48 md:h-64 object-cover transition-all transform ease-in-out duration-200 hover:scale-110  "
        />
      </div>
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
          {categoryArray.map((e) => (
            <button
              key={e}
              onClick={() => setActiveCategory(e)}
              className={`px-4 py-1.5 rounded-md text-sm border transition-colors ${
                activeCategory === e
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
              }`}
            >
              {e}
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
                key={product.imgUrl}
                className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800"
              >
                <Link
                  to={`/categories/${product.category.toLowerCase()}/${product.name}`}
                  className="block h-48 overflow-hidden"
                >
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </Link>
                <div className="p-4">
                  <Link  to={`/categories/${product.category.toLowerCase()}/${product.name}`} className="block">
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
 to={`/categories/${product.category.toLowerCase()}/${product.name}`}                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
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
