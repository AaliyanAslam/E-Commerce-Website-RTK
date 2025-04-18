import React from 'react'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-white via-indigo-50 to-purple-100 flex flex-col items-center justify-center text-center px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl text-gray-700 text-lg sm:text-xl"
        >
          We are dedicated to providing high-quality, handpicked products to elevate your everyday life. Whether you're shopping for essentials or unique finds, our goal is to make your experience simple, fast, and delightful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 bg-white p-6 rounded-xl shadow-xl max-w-2xl"
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-base sm:text-lg">
            To simplify your shopping journey by offering only the best — combining quality, convenience, and care in everything we do.
          </p>
        </motion.div>
      </section>

      <Footer style="footer sm:footer-horizontal bg-white text-black-content p-10  border-gray" />
    </>
  )
}

export default About
