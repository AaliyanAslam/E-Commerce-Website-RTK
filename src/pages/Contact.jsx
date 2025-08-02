import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-20 -left-32 w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-28 w-96 h-96 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center z-10"
        >
          Get in Touch
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-600 text-md sm:text-lg text-center max-w-2xl mb-10 z-10"
        >
          Have a question, feedback, or just want to say hello? Fill out the form below and we’ll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-2xl z-10 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* Footer */}
      <Footer style="footer sm:footer-horizontal bg-white text-black-content p-10 border-t border-gray-200" />
    </>
  )
}

export default Contact
