import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Contact <span className="font-normal">Us</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Have a project in mind or need support? Fill in your details and our
          team will get back to you shortly.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto"
      >
        <div className="flex flex-col text-left w-full md:w-1/4">
          <label htmlFor="name" className="text-sm mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border-b border-black focus:outline-none focus:border-gray-600 py-1"
          />
        </div>

        <div className="flex flex-col text-left w-full md:w-1/4">
          <label htmlFor="email" className="text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-b border-black focus:outline-none focus:border-gray-600 py-1"
          />
        </div>

        <div className="flex flex-col text-left w-full md:w-1/4">
          <label htmlFor="company" className="text-sm mb-1">
            Company
          </label>
          <input
            id="company"
            type="text"
            className="border-b border-black focus:outline-none focus:border-gray-600 py-1"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-2 border border-black font-medium hover:bg-black hover:text-white transition"
        >
          Send
        </motion.button>
      </motion.form>
    </section>
  );
}
