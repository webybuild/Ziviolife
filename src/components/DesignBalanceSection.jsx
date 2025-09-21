import React from "react";
import { motion } from "framer-motion";

export default function DesignBalanceSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <img
            src="/images/building.jpg" // replace with your actual image
            alt="Building"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-black text-white flex flex-col justify-center px-8 md:px-16 py-20"
        >
          {/* Background Squares */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-64 h-64 border border-gray-700 rotate-45 opacity-30"></div>
            <div className="absolute bottom-10 right-32 w-64 h-64 border border-gray-700 rotate-45 opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug">
              Can light achieve perfect balance with design?
            </h2>
            <p className="text-gray-400 mb-8">
              At Zivio, we merge creativity with precision, delivering drawings,
              3D visualizations, and samples to ensure lighting that unites
              beauty, function, and performance.
            </p>
            <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition">
              Read More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Overlapping Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-10 w-[320px] md:w-[450px] shadow-lg"
      >
        <img
          src="/images/office.jpg" // replace with your actual image
          alt="Office interior"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}
