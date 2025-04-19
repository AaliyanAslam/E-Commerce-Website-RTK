import React , {useState} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCarts } from "../config/redux/reducers/cartSlice";
const SingleProduct = () => {
    const [showMessege, setShowMessege] = useState(false);
  const products = useSelector((state) => state.product);
  const { id } = useParams();
  const data = products.data.products.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addToCarts(data));
    console.log("clicked", data);
    setShowMessege(true);
  };

  return (
    <>
         {showMessege && (
          <div
            className="fixed bottom-8 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl z-50 
               animate-slide-in opacity-90 transition-all duration-300 ease-out"
          >
            Item added to cart!
          </div>
        )}
      <div className="max-w-screen-xl mx-auto p-6 bg-purple-50 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
          <div className="relative w-[320px] h-[440px] mx-auto rounded-3xl overflow-hidden bg-white border border-purple-200 shadow-lg transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.7)_50%,transparent_60%)] opacity-0 hover:opacity-100 animate-[shine_3s_infinite] pointer-events-none" />
            <div className="absolute -inset-2 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.3)_0%,rgba(168,85,247,0)_70%)] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-full object-contain p-6 relative z-10"
            />
          </div>

          <div className="space-y-6 text-gray-800">
            <h1 className="text-4xl font-bold font-serif text-purple-700">
              {data.title}
            </h1>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-extrabold text-purple-600">
                ${data.price}
              </span>
              <span className="text-md text-gray-400 line-through">
                $
                {((data.price / (100 - data.discountPercentage)) * 100).toFixed(
                  2
                )}
              </span>
              <span className="text-md text-green-600">
                -{data.discountPercentage}% Off
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">
                {data.rating} ({data.reviews.length} Reviews)
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {data.description}
            </p>

            <div className="text-sm space-y-1 text-gray-700">
              <p>
                <strong>Availability:</strong> {data.availabilityStatus} (
                {data.stock} left)
              </p>
              <p>
                <strong>Min Order Qty:</strong> 24
              </p>
              <p>
                <strong>Shipping:</strong> Ships in 1 month
              </p>
              <p>
                <strong>Warranty:</strong> {data.warrantyInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {data.returnPolicy}
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <img
                src="https://assets.dummyjson.com/public/qr-code.png"
                alt="QR Code"
                className="w-20 h-20 border border-purple-200 rounded-md"
              />
              <p className="text-sm text-gray-600">
                <strong>Barcode:</strong> {data.sku}
              </p>
            </div>

            <button
              onClick={() => {
                handleAddToCart(data);
              }}
              className="w-full mt-4 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
