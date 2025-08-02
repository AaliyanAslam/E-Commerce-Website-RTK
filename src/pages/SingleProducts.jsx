import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCarts } from "../config/redux/reducers/cartSlice";

const SingleProduct = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.product);

  const product = data?.products?.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="text-center py-20 text-base sm:text-lg">
        Product not found
      </div>
    );

  const handleAddToCart = () => {
    dispatch(addToCarts(product));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <>
      {showMessage && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-md sm:rounded-lg shadow-lg z-50 transition-all duration-300 text-sm sm:text-base">
          ✅ Item added to cart!
        </div>
      )}

      <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-3 sm:px-6 py-8 sm:py-10 lg:px-20">
        <div className="max-w-7xl mx-auto bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 grid gap-8 lg:grid-cols-2">
          {/* Image Section */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm bg-white border border-purple-200 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.7)_50%,transparent_60%)] opacity-0 hover:opacity-100 animate-[shine_3s_infinite]" />
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[320px] sm:h-[440px] object-contain p-4 sm:p-6 z-10"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5 sm:space-y-6 text-gray-800">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-700">
              {product.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-base sm:text-lg">
              <span className="text-purple-600 font-bold text-xl sm:text-2xl">
                ${product.price}
              </span>
              <span className="line-through text-gray-400 text-sm sm:text-md">
                $
                {(
                  (product.price / (100 - product.discountPercentage)) *
                  100
                ).toFixed(2)}
              </span>
              <span className="text-green-600 text-sm sm:text-md">
                -{product.discountPercentage}% Off
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-gray-600">
                {product.rating} ({product?.reviews?.length || 0} Reviews)
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            <div className="space-y-1 text-sm sm:text-base text-gray-700">
              <p>
                <strong>Availability:</strong>{" "}
                {product.availabilityStatus || "In stock"} ({product.stock}{" "}
                left)
              </p>
              <p>
                <strong>Min Order Qty:</strong> 24
              </p>
              <p>
                <strong>Shipping:</strong> Ships in 1 month
              </p>
              <p>
                <strong>Warranty:</strong>{" "}
                {product.warrantyInformation || "1 year standard warranty"}
              </p>
              <p>
                <strong>Return Policy:</strong>{" "}
                {product.returnPolicy || "30 days easy return"}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-3 sm:pt-4">
              <img
                src="https://assets.dummyjson.com/public/qr-code.png"
                alt="QR Code"
                className="w-14 h-14 sm:w-16 sm:h-16 border border-purple-200 rounded"
              />
              <p className="text-sm text-gray-600">
                <strong>Barcode:</strong> {product.sku || "N/A"}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 sm:py-3 mt-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 shadow-lg transition-all"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
