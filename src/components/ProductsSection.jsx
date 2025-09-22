import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import productOne from "/src/assets/Products/Indoor/in1.png";
import productTwo from "/src/assets/Products/Indoor/in2.png";
import productThree from "/src/assets/Products/Indoor/in3.png";
import productFour from "/src/assets/Products/Indoor/in4.png";
import productFive from "/src/assets/Products/Indoor/in5.png";
import productSix from "/src/assets/Products/Indoor/in6.png";
import productSeven from "/src/assets/Products/Indoor/in7.png";

const productsData = {
  "New Product": [
    { id: 1, name: "FlareX ARCL8", img: "/images/flarex.png" },
    { id: 2, name: "Lumicube ASCL2", img: "/images/lumicube.png" },
    { id: 3, name: "Brightcore ARCL10", img: "/images/brightcore.png" },
  ],
  Indoor: [
    { id: 4, name: "Halocore ARCL13", img: productOne },
    { id: 5, name: "Luxpod ASCL1", img: productTwo },
    { id: 6, name: "Orionis ASCL7", img: productThree },
    { id: 7, name: "FlareX ARCL8", img: productFour },
    { id: 66, name: "Brightcore ARCL10", img: productFive },
    { id: 55, name: "Lumicube ASCL2", img: productSix },
    { id: 555, name: "Led Roof ASCL2", img: productSeven },
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4 max-w-7xl mx-auto py-6">
        <h2 className="text-2xl sm:text-3xl font-light">
          <span className="font-bold">Our</span> Products.
        </h2>
        <div className="flex flex-wrap gap-4 text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition-colors cursor-pointer ${
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

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {/* Product grid */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // triggers animation on tab change
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
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
                    <div className="absolute top-4 inset-0 bg-white/95 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                      <button className="px-6 py-1 flex gap-2 justify-center items-center border border-black text-black text-base cursor-pointer font-arimo font-semibold">
                        Details
                      </button>
                    </div>
                  </div>
                  <p className="text-center py-3 text-sm">{product.name}</p>
                </motion.div>
              ))}
              <div className="flex flex-col justify-center items-center space-y-6 text-center lg:text-left">
                <p className="text-base sm:text-lg font-medium text-center">
                  Zivio lighting that blends performance, design, and brilliance
                  for every space.
                </p>
                <button className="px-6 py-2 text-sm sm:text-base font-semibold cursor-pointer transition border border-black md:w-40 hover:bg-black hover:text-white">
                  Find out more!
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right-side CTA */}
      </div>
    </section>
  );
}
