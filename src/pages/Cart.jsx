import { ShoppingCart } from "lucide-react";
import React, { useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQ , decreaseQ , addTotalPriceAndQuaintity } from "../config/redux/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

const total = useSelector((state)=> state.cart.totalPrice)
// console.log(total);

const [totalPrice , setTotalPrice] = useState("")

// setTotalPrice(total)
// console.log(totalPrice);




  const increaseQuantity = (cart) => {
    dispatch(increaseQ(cart.id));
    console.log("clicked");
    dispatch(addTotalPriceAndQuaintity(cart))

    // console.log(dispatch(increaseQ(cart)));
  };
  const decreaseQuaintity = (cart) => {
    dispatch(decreaseQ(cart.id));
    dispatch(addTotalPriceAndQuaintity(cart))
    console.log("clicked");
    // console.log(dispatch(increaseQ(cart)));
  };


  useEffect(()=> {

setTotalPrice(total)
console.log(totalPrice);


  }, [totalPrice])


  

  return (
    <>
    <div>{total}</div>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-white min-h-screen">
        <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-3xl shadow-2xl border border-purple-100">
          <h1 className="text-center flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold gap-3 text-purple-700 mb-8">
            <ShoppingCart className="w-8 h-8 sm:w-9 sm:h-9" /> Your Cart
          </h1>

          {cartItems.cartItems.length === 0 ? (
            <div className="text-center flex justify-center text-gray-500 text-base sm:text-lg">
              Your cart is empty 😔
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.cartItems.map((cart) => (
                <div
                  key={cart.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 shadow-sm"
                >
                  {/* Image + Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={cart.thumbnail}
                      alt={cart.title}
                      className="w-20 h-20 object-cover rounded-lg border border-purple-200"
                    />
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg font-semibold text-purple-800">
                        {cart.title}
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 space-x-2.5">
                        <span className="price">${cart.price}</span>{" "}
                        <span className="qty">x : {cart.quantity}</span>
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 justify-end sm:justify-start">
                    <button  onClick={() => {
                        decreaseQuaintity(cart);
                        
                      }} className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all">
                      -
                    </button>
                    <button
                      onClick={() => {
                        increaseQuantity(cart);
                        
                      }}
                      className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
