import React from 'react'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-10 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-300 rounded-full opacity-20 animate-pulse blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-300 rounded-full opacity-20 animate-pulse blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 drop-shadow-md">
            Welcome to <span className="text-indigo-600">HyperCart</span>
          </h1>
          <p className="mt-5 text-md sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Discover beautifully crafted premium products that enhance your everyday lifestyle.
          </p>
        </motion.div>

        <motion.button
          onClick={() => navigate('/products')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="z-10 mt-10 px-8 py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
        >
          Start Shopping
        </motion.button>
      </section>

      <Footer style="footer z-[1000] sm:footer-horizontal bg-white text-black-content p-10 border-t border-gray-200" />
    </>
  )
}
