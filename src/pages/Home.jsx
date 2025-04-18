import React from 'react'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 drop-shadow-lg"
        >
          Welcome to Our Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl"
        >
          Discover premium products crafted for your lifestyle
        </motion.p>
        <motion.button onClick={()=> navigate("/products")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-500 transition"
        >
         Start Pruchase
        </motion.button>
      </section>

      <Footer style="footer sm:footer-horizontal bg-white text-black-content p-10 m-3 border-gray" />
    </>
  )
}
