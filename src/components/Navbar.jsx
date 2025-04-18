import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems.cartItems.length);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-3xl font-extrabold text-purple-500 hover:text-purple-400 transition duration-300 drop-shadow-lg">
  <Link
    to="/"
    className="tracking-tight font-sans hover:scale-105 transition-transform duration-300"
  >
    <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
      HyperCart
    </span>
  </Link>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6  justify-center items-center">
          <Link to="/" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">About</Link>
          <Link to="/products" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Products</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Contact</Link>
          <Link to="/cart" className=" relative flex items-center gap-2 left-3 text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Cart
          <button className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
              <ShoppingCart className="w-4 h-4 animate-pulse" />
            </button>
            <div className='h-4 w-4 flex items-center justify-center rounded-xl relative right-5 bottom-3 bg-white text-red-700'>{cartItems.cartItems.length}</div>

            </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">About</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Contact</Link>
          <div className='flex items-center space-x-2'>

          <Link to="/cart" onClick={() => setOpen(false)} className="block flex items-center gap-2 text-gray-700 hover:text-purple-500 transition text-base">Cart
          <button className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
              <ShoppingCart className="w-4 h-4 animate-pulse" />
            </button>
          </Link>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
