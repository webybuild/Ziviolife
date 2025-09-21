import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productsData = {
  "New Product": [
    { id: 1, name: "FlareX ARCL8", img: "/images/flarex.png" },
    { id: 2, name: "Lumicube ASCL2", img: "/images/lumicube.png" },
    { id: 3, name: "Brightcore ARCL10", img: "/images/brightcore.png" },
  ],
  Indoor: [
    { id: 4, name: "Halocore ARCL13", img: "/images/halocore.png" },
    { id: 5, name: "Luxpod ASCL1", img: "/images/luxpod.png" },
    { id: 6, name: "Orionis ASCL7", img: "/images/orionis.png" },
    { id: 7, name: "Magna ASCL9", img: "/images/magna.png" },
  ],
  Outdoor: [
    { id: 8, name: "Outdoor Lamp A", img: "/images/outdoor1.png" },
    { id: 9, name: "Outdoor Lamp B", img: "/images/outdoor2.png" },
    { id: 10, name: "Outdoor Lamp C", img: "/images/outdoor3.png" },
  ],
  Poles: [
    { id: 11, name: "Pole Light A", img: "/images/pole1.png" },
    { id: 12, name: "Pole Light B", img: "/images/pole2.png" },
  ],
};

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("Indoor");

  const tabs = ["New Product", "Outdoor", "Indoor", "Poles"];

  return (
    <section className="bg-gray-100 px-4 sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-light">
          <span className="font-bold">Our</span> Products.
        </h2>
        <div className="flex flex-wrap gap-4 text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition-colors ${
                activeTab === tab
                  ? "text-black font-medium"
                  : "hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-black"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Product grid */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // triggers animation on tab change
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {productsData[activeTab].map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  className="bg-white shadow-sm relative group"
                >
                  <div className="relative w-full h-48 flex items-center justify-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="object-contain max-h-40"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <button className="px-4 py-2 border border-white text-white text-sm">
                        👁 View
                      </button>
                    </div>
                  </div>
                  <p className="text-center py-3 text-sm">{product.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right-side CTA */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <p className="text-base sm:text-lg font-semibold">
            Zivio lighting that blends performance, design, and brilliance for
            every space.
          </p>
          <button className="px-6 py-3 border border-black font-medium hover:bg-black hover:text-white transition">
            Find out more!
          </button>
        </div>
      </div>
    </section>
  );
}
