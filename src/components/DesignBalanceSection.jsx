import React from "react";
import { motion } from "framer-motion";
import glassBuilding from "/src/assets/project/glassbuild.jpeg";
import bannerSqr from "/src/assets/banner/designBg.png";
import officeBg from "/src/assets/project/a_modern_open_plan_office_interior_with_sleek.jpeg";

export default function DesignBalanceSection() {
  return (
    <section className="min-h-screen relative">
      <div className="relative overflow-hidden">
        {/* Building Image as background layer */}
        <motion.img
          src={glassBuilding}
          alt="Building"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-y-0 top-1/2 -translate-y-1/2 
                     w-full md:w-1/2 
                     h-[16rem] sm:h-[22rem] md:h-[30rem] 
                     object-cover z-10"
        />

        {/* Main Grid only for right content */}
        <div className="relative grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] min-h-[20rem] sm:min-h-[28rem] md:min-h-[35rem]">
          {/* Left placeholder for desktop alignment */}
          <div className="hidden md:block" />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-black text-white flex flex-col justify-center px-4 sm:px-6 md:px-16 py-10 sm:py-14 md:py-20 items-center md:items-center ml-0 md:ml-8"
          >
            {/* Background Squares */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-30"
                src={bannerSqr}
                alt="Banner-Background"
              />
            </div>

            <div className="relative z-10 max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 leading-snug">
                Can light achieve perfect balance with design?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                At Zivio, we merge creativity with precision, delivering
                drawings, 3D visualizations, and samples to ensure lighting that
                unites beauty, function, and performance.
              </p>
              <button className="px-6 py-2 text-sm font-medium tracking-wide cursor-pointer transition border border-white md:w-40 hover:bg-white hover:text-black font-arimo">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlapping Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-4 sm:bottom-8 md:bottom-10 
                   right-4 sm:right-6 md:right-10 
                   w-[200px] sm:w-[260px] md:w-[320px] lg:w-[450px] 
                   shadow-lg z-20"
      >
        <img
          src={officeBg}
          alt="Office interior"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}
