import React from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className="max-w-7xl mx-auto w-full gap-7 flex flex-col md:flex-row items-center justify-between px-6 md:px-0 py-30 ">
      {/* Left Content */}
      <div className="space-y-4 text-center md:text-left md:w-1/2 font-arsenal">
        <motion.h1
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-light md:text-5xl"
        >
          Zivio life,
        </motion.h1>
        <motion.h2
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl font-light md:text-5xl md:ml-16"
        >
          the art of <span className="font-bold">transformation.</span>
        </motion.h2>
      </div>

      {/* Right Content */}
      <div className="mt-8 text-base leading-relaxed text-center text-gray-600 md:mt-0 md:w-1/2 md:text-left font-arimo">
        <p>
          Zivio delivers innovative, sustainable lighting solutions that bring
          brilliance and efficiency to residential and commercial spaces.
        </p>
        <p className="mt-4">
          Founded in 2018, we believe lighting is more than illumination it’s an
          art that transforms ambience and design. With expertise in smart,
          architectural, and energy-efficient lighting, Zivio is trusted for
          solutions that inspire and endure.
        </p>
      </div>
    </section>
  );
}
