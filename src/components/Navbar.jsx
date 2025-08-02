import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeModes } from '../config/redux/reducers/modeSlice';

const Navbar = () => {
  const mode = useSelector((state) => state.modes.darkMode);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const textColor = mode ? 'text-white' : 'text-black';
  const bgColor = mode ? 'bg-black' : 'bg-white';

  return (
    <nav className={`sticky top-0 z-50 shadow-md transition-all duration-500 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            HyperCart
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
     

          {[ 'About', 'Products', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`text-base font-medium hover:text-purple-500 transition-all ${textColor}`}
            >
              {item}
            </Link>
          ))}

          <Link
            to="/cart"
            className={`relative flex items-center gap-2 text-base font-medium hover:text-purple-500 transition-all ${textColor}`}
          >
            <ShoppingCart size={22} />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 h-5 w-5 flex items-center justify-center text-xs bg-red-600 text-white rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
               <button
            onClick={() => dispatch(changeModes())}
            className="flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-105 transition-all"
          >
            {mode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${textColor}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div className={`md:hidden px-4 pb-4 space-y-3 shadow ${bgColor}`}>
    {['Home', 'About', 'Products', 'Contact'].map((item) => (
      <Link
        key={item}
        to={`/${item.toLowerCase()}`}
        onClick={() => setOpen(false)}
        className={`block text-base font-medium hover:text-purple-500 transition ${textColor}`}
      >
        {item}
      </Link>
    ))}

    <div className="flex justify-between items-center mt-2">
      <Link
        to="/cart"
        onClick={() => setOpen(false)}
        className={`flex items-center gap-2 hover:text-purple-500 transition ${textColor}`}
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
        {cartItems.length > 0 && (
          <span className="ml-2 text-xs bg-red-600 text-white rounded-full px-2 py-0.5">
            {cartItems.length}
          </span>
        )}
      </Link>

      <button
        onClick={() => dispatch(changeModes())}
        className="flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-105 transition"
      >
        {mode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
