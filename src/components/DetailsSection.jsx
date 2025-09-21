import React from "react";
import ProductSlider from "./ProductSlider";
import { motion } from "framer-motion";
import projectOne from "/src/assets/project/Picture3.png";
import projectTwo from "/src/assets/project/Picture2.png";

export default function DetailsSection() {
  return (
    <section className="py-16 sm:py-20 max-w-[90rem] mx-auto px-4 sm:px-6">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-2 items-start h-full">
        {/* Background Text */}
        <h2 className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo leading-none">
          Details
        </h2>

        {/* Left + Right Images & Heading */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-24"
          >
            <img
              src={projectOne}
              alt="Mall Escalator"
              className="w-full h-auto object-cover shadow-lg"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col min-h-[24rem] md:min-h-[30rem] lg:min-h-[45rem] justify-between items-start md:items-center gap-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium font-arsenal leading-snug text-left md:text-left">
              Perfection in every <br /> detail
            </h2>
            <img
              src={projectTwo}
              alt="Downlight Product"
              className="w-full max-w-sm md:max-w-md h-auto object-contain shadow-lg"
            />
          </motion.div>
        </div>

        {/* Right Sidebar Content */}
        <div className="flex flex-col items-center lg:items-end gap-12">
          <ProductSlider />

          <div className="px-0 sm:px-8 flex flex-col gap-6 sm:gap-8 max-w-lg text-center lg:text-left">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Every fixture is crafted with meticulous attention, technical
              layouts and lighting simulations to flawless finishes and reliable
              installation. Decades of expertise ensure solutions that endure,
              perform, and inspire.
            </p>
            <button className="px-6 py-2 text-sm sm:text-base font-semibold cursor-pointer transition border border-black md:w-40 hover:bg-black hover:text-white">
              Find out more!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
