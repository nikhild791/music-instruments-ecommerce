import { Link } from "react-router-dom";

function ProductCard({ productDetail }) {
  console.log(productDetail);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden w-96">
        <img
          src={productDetail.imgUrl}
          alt={productDetail.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {productDetail.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          This product is very good
        </p>
        <div className="flex justify-between items-center">
          <span className="text-primary-dark font-bold">
            ${productDetail.price}
          </span>
          <div className="space-x-2">
            <Link
              to={"/"}
              className="text-primary hover:text-primary-dark text-sm"
            >
              Details
            </Link>
            <button className="btn btn-primary text-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
