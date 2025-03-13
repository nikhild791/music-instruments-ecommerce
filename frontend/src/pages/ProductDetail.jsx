import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Mock product data (in a real app, you would fetch this data)
  const product = {
    id: id || '1',
    name: 'Yamaha PSR I400 61-Key',
    price: '₹ 9999.00',
    originalPrice: '₹ 12999.00',
    description: 'All Mahogany Body Developed in accordance with recent acoustic guitar market trends, this model features not only mahogany back and sides but mahogany top as well. Although darker sounding than spruce, mahogany produces a warmer tone with a full rich mid-range. Auditorium Cutaway Body Type with dimensions that perfectly balance between the large Dreadnought and the more intimate Grand Concert.',
    color: 'BLACK',
    images: [
      'https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg'
    ],
    warranty: '1 Year',
    returnable: '10 Days',
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    setAddedToCart(true);
    // Add cart logic would go here
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden border dark:border-gray-700">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h1>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {product.price}
                </span>
                <span className="text-gray-500 text-sm line-through ml-2">
                  MRP {product.originalPrice}
                </span>
              </div>
              
              {/* Share options */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Share</h3>
                <div className="flex space-x-3">
                  {['facebook', 'google', 'twitter', 'instagram', 'rss'].map(platform => (
                    <button key={platform} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600">
                      <span className="text-gray-500 dark:text-gray-300">{platform[0].toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              
              {/* Color options */}
              <div className="mb-4">
                <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Product Color</h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-black rounded-full border-2 border-blue-500"></div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">BLACK</span>
                </div>
              </div>
              
              {/* Quantity selector */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Quantity</h3>
                <div className="flex border rounded w-fit">
                  <button 
                    onClick={decrementQuantity}
                    className="px-4 py-2 border-r hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 dark:text-white">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-4 py-2 border-l hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <button 
                onClick={handleAddToCart}
                className={`py-3 px-6 rounded-md text-white font-medium text-center mb-4 transition-colors ${
                  addedToCart 
                    ? "bg-green-500" 
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {addedToCart ? "Added to Cart ✓" : "Add To Cart"}
              </button>
              
              {/* Delivery options */}
              <h3 className="text-md font-semibold mb-3 text-gray-700 dark:text-gray-300">Delivery Option</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border rounded p-4 text-center hover:shadow-md transition-shadow dark:border-gray-700">
                  <div className="flex justify-center mb-2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Shipping Charges</div>
                </div>
                
                <div className="border rounded p-4 text-center hover:shadow-md transition-shadow dark:border-gray-700">
                  <div className="flex justify-center mb-2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">10 Days Returnable</div>
                </div>
                
                <div className="border rounded p-4 text-center hover:shadow-md transition-shadow dark:border-gray-700">
                  <div className="flex justify-center mb-2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">1 Year Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4 border-b dark:border-gray-700">
            <div className="flex space-x-8">
              <button className="text-blue-500 border-b-2 border-blue-500 pb-2 font-medium">
                DESCRIPTION
              </button>
              <button className="text-gray-500 dark:text-gray-400 pb-2 font-medium">
                DETAILS
              </button>
              <button className="text-gray-500 dark:text-gray-400 pb-2 font-medium">
                WRITE REVIEW
              </button>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
