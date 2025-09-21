import React from "react";
import { motion } from "framer-motion";

export default function DownloadsSection() {
  return (
    <section className="relative px-6 py-32 overflow-hidden text-center bg-gray-100 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-bold text-gray-200 opacity-40"
      >
        2025
      </motion.h2>
      <motion.img
        src="https://images.unsplash.com/photo-1505691723518-36a1cdba1f82"
        alt="Brochure"
        className="relative z-10 max-w-xs mx-auto mb-8 md:max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <button className="relative z-10 px-6 py-3 font-medium text-white transition bg-black rounded-full hover:bg-gray-800">
        Download
      </button>
    </section>
  );
}
