import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQ,
  decreaseQ,
  addTotalPriceAndQuaintity,
} from "../config/redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart.totalPrice);
  let fixedTotal = total.toFixed(2);

  function seeItems(cartItems) {
    if (cartItems) {
      dispatch(addTotalPriceAndQuaintity(cartItems.cartItems));
    }
  }
  seeItems(cartItems);

  const increaseQuantity = (cart) => {
    dispatch(increaseQ(cart.id));
    dispatch(addTotalPriceAndQuaintity(cart));
  };

  const decreaseQuaintity = (cart) => {
    dispatch(decreaseQ(cart.id));
    dispatch(addTotalPriceAndQuaintity(cart));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-white min-h-screen">
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-purple-100">
        <h1 className="text-center flex flex-col sm:flex-row items-center justify-center text-3xl md:text-4xl font-extrabold text-purple-700 mb-8">
          <ShoppingCart className="w-8 h-8 mr-2" /> Your Cart
        </h1>

        {cartItems.cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty
            <span
              className="text-purple-600 font-semibold hover:underline ml-2 cursor-pointer"
              onClick={() => navigate(`/products`)}
            >
              Add Products
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.cartItems.map((cart) => (
              <div
                key={cart.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition duration-300 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={cart.thumbnail}
                    alt={cart.title}
                    className="w-20 h-20 object-cover rounded-lg border border-purple-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-purple-800">
                      {cart.title}
                    </span>
                    <span className="text-gray-600 text-sm">
                      ${cart.price} x {cart.quantity}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 justify-end md:justify-start">
                  <button
                    onClick={() => decreaseQuaintity(cart)}
                    className="w-10 h-10 text-xl bg-red-500 hover:bg-red-600 text-white rounded-lg shadow hover:shadow-lg transition duration-200"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(cart)}
                    className="w-10 h-10 text-xl bg-green-500 hover:bg-green-600 text-white rounded-lg shadow hover:shadow-lg transition duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-purple-200 shadow-inner px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
          <div className="text-lg font-semibold text-purple-800">
            Total: <span className="text-green-600">${fixedTotal}</span>
          </div>
          <button
            onClick={() => alert("Proceed to checkout")}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-md transition duration-200 w-full sm:w-auto"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
