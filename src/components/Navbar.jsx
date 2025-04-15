import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">HyperCart</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">About</Link>
          <Link to="/products" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Products</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Contact</Link>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
