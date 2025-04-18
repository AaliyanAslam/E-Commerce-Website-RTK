import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-purple-50 via-indigo-50 to-white py-16 px-6 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-600 text-lg sm:text-xl text-center max-w-xl mb-10"
        >
          Have a question, feedback, or just want to say hello? Fill out the form below and we’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-500 transition"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </section>

      <Footer style="footer sm:footer-horizontal bg-white text-black-content p-10 m-3 border-gray" />
    </>
  )
}

export default Contact
