import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQ,
  decreaseQ,
  removeFromCart,
  addTotalPriceAndQuaintity,
} from "../config/redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    dispatch(addTotalPriceAndQuaintity(cartItems));
  }, [cartItems, dispatch]);

  const increaseQuantity = (item) => {
    dispatch(increaseQ(item.id));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQ(item.id));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-purple-100">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-purple-700 flex items-center justify-center gap-2 mb-8">
          <ShoppingCart className="w-7 h-7" />
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty
            <span
              onClick={() => navigate("/products")}
              className="ml-2 text-purple-600 font-semibold hover:underline cursor-pointer"
            >
              Add Products
            </span>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white border border-purple-100 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* Image + Info */}
                <div className="flex items-center gap-4 w-full sm:w-1/2">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover border border-purple-200"
                  />
                  <div>
                    <h2 className="font-semibold text-purple-800 text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="w-9 h-9 text-lg bg-red-500 hover:bg-red-600 text-white rounded-full"
                    >
                      −
                    </button>
                    <span className="text-base font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="w-9 h-9 text-lg bg-green-500 hover:bg-green-600 text-white rounded-full"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeItem(item.id)}
                    title="Remove Item"
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 px-4 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between shadow-inner gap-4">
          <div className="text-xl font-bold text-purple-700">
            Total: <span className="text-green-600">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() =>document.getElementById("checkout_modal").showModal()}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            🧾 Checkout
          </button>
        </div>
      )}
{/* cart */}
<dialog id="checkout_modal" className="modal">
  <div className="modal-box w-full max-w-md">
    <h3 className="font-bold text-2xl mb-6 text-center">Secure Checkout</h3>

    {/* Fake Payment Form */}
  <form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    const btn = document.getElementById("payBtn");
    btn.disabled = true;
    btn.innerHTML = `<span class="loading loading-spinner"></span> Processing...`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = "Pay Now";
      document.getElementById("checkout_modal").close();
      alert("🎉 Payment Successful!");
    }, 3000);
  }}
>

      <div>
        <label className="label">
          <span className="label-text">Name on Card</span>
        </label>
        <input
          type="text"
          required
          placeholder="John Doe"
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Card Number</span>
        </label>
        <input
          type="text"
          required
          placeholder="1234 5678 9012 3456"
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Expiry</span>
          </label>
          <input
            type="text"
            required
            placeholder="MM/YY"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex-1">
          <label className="label">
            <span className="label-text">CVV</span>
          </label>
          <input
            type="text"
            required
            placeholder="123"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <button
        id="payBtn"
        type="submit"
        className="btn btn-success w-full mt-4"
      >
        Pay Now
      </button>
    </form>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn btn-neutral">Cancel</button>
      </form>
    </div>
  </div>
</dialog>


    </div>
  );
};

export default Cart;
