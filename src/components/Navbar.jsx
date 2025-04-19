import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useSelector , useDispatch} from 'react-redux';
import  {changeModes}  from '../config/redux/reducers/modeSlice';
const Navbar = () => {
  const mode = useSelector((state)=> state.modes.darkMode)
  console.log(mode);

  const dispatch = useDispatch()
  
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems.cartItems.length);

  return (
    <nav className=" shadow-md sticky top-0 z-50 font-sans" style={{backgroundColor : mode ? "black" : "white" , color : mode ? "white" : "black" }}>
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
          {/* <button className={console.log(mode)
          }></button> */}
          

          <button onClick={()=> dispatch(changeModes())}
  id="theme-toggle"
  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 
         text-gray-800 dark:text-white shadow-md dark:shadow-lg 
         hover:ring-2 hover:ring-blue-500 transition-all duration-500 ease-in-out 
         font-semibold text-sm hover:scale-105"
>
  <svg
    className="w-5 h-5 transition-transform duration-300 dark:rotate-180"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zm4.95 2.55a.75.75 0 011.06 0l.7.7a.75.75 0 11-1.06 1.06l-.7-.7a.75.75 0 010-1.06zM16 10a.75.75 0 010 1.5h-1.25a.75.75 0 010-1.5H16zm-6 4a4 4 0 100-8 4 4 0 000 8zm4.95 1.45a.75.75 0 010 1.06l-.7.7a.75.75 0 11-1.06-1.06l.7-.7a.75.75 0 011.06 0zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.05 15.45a.75.75 0 010-1.06l.7-.7a.75.75 0 111.06 1.06l-.7.7a.75.75 0 01-1.06 0zM4 10a.75.75 0 010-1.5h1.25a.75.75 0 010 1.5H4zm1.11-5.19a.75.75 0 10-1.06 1.06l.7.7a.75.75 0 101.06-1.06l-.7-.7z"
      clipRule="evenodd"
    />
  </svg>
  <span className="transition-all duration-300">Toggle Theme</span>
</button>

          <Link style={{color : mode ? "white" : "black" }} to="/" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Home</Link>
          <Link style={{color : mode ? "white" : "black" }} to="/about" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">About</Link>
          <Link style={{color : mode ? "white" : "black" }} to="/products" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Products</Link>
          <Link style={{color : mode ? "white" : "black" }} to="/contact" className="text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Contact</Link>
          <Link style={{color : mode ? "white" : "black" }} to="/cart" className=" relative flex items-center gap-2 left-3 text-gray-700 hover:text-purple-500 transition-all duration-200 text-base font-medium">Cart
          <button style={{color : mode ? "white" : "black" }} className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
              <ShoppingCart className="w-4 h-4 animate-pulse" />
            </button>
            <div className='h-4 w-4 flex items-center justify-center rounded-xl relative right-5 bottom-3 bg-white text-red-700'>{cartItems.cartItems.length}</div>

            </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button style={{color : mode ? "white" : "black" }} onClick={() => setOpen(!open)} className="text-gray-800">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link style={{color : mode ? "black" : "black" }} to="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Home</Link>
          <Link style={{color : mode ? "black" : "black" }} to="/about" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">About</Link>
          <Link style={{color : mode ? "black" : "black" }} to="/products" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Products</Link>
          <Link style={{color : mode ? "black" : "black" }} to="/contact" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-purple-500 transition text-base">Contact</Link>
          <div className='flex items-center space-x-2'>

          <Link to="/cart" onClick={() => setOpen(false)} className="block flex items-center gap-2 text-gray-700 hover:text-purple-500 transition text-base">Cart
          <button style={{color : mode ? "white" : "black" }} className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition">
              <ShoppingCart className="w-4 h-4 animate-pulse" />
            </button>
          </Link>
          <button onClick={()=> dispatch(changeModes())}
  id="theme-toggle"
  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 
         text-gray-800 dark:text-white shadow-md dark:shadow-lg 
         hover:ring-2 hover:ring-blue-500 transition-all duration-500 ease-in-out 
         font-semibold text-sm hover:scale-105"
>
  <svg
    className="w-5 h-5 transition-transform duration-300 dark:rotate-180"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fill-rule="evenodd"
      d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zm4.95 2.55a.75.75 0 011.06 0l.7.7a.75.75 0 11-1.06 1.06l-.7-.7a.75.75 0 010-1.06zM16 10a.75.75 0 010 1.5h-1.25a.75.75 0 010-1.5H16zm-6 4a4 4 0 100-8 4 4 0 000 8zm4.95 1.45a.75.75 0 010 1.06l-.7.7a.75.75 0 11-1.06-1.06l.7-.7a.75.75 0 011.06 0zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.05 15.45a.75.75 0 010-1.06l.7-.7a.75.75 0 111.06 1.06l-.7.7a.75.75 0 01-1.06 0zM4 10a.75.75 0 010-1.5h1.25a.75.75 0 010 1.5H4zm1.11-5.19a.75.75 0 10-1.06 1.06l.7.7a.75.75 0 101.06-1.06l-.7-.7z"
      clip-rule="evenodd"
    />
  </svg>
  <span className="transition-all duration-300">Toggle Theme</span>
</button>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
