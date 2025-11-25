import React from "react";
import { motion } from "framer-motion";
import indoor from "/src/assets/Products/b.png";
import pole from "/src/assets/Products/c.png";
import outdoor from "/src/assets/Products/d.png";
import solar from "/src/assets/Products/a.png";

export default function ProductGridSection() {
  const products = [
    {
      name: "Indoor",
      image: indoor,
      bgText: "Indoor",
      customStyle: "left-[25%] scale-[0.7] top-[1rem]",
      link: "#",
    },
    {
      name: "Pole",
      image: pole,
      bgText: "Pole",
      customStyle: "left-[35%] scale-[1.7] top-[5rem]",
      link: "#",
    },
    {
      name: "Outdoor",
      image: outdoor,
      bgText: "Outdoor",
      customStyle: "left-[50%] scale-[1.7] top-[5rem]",
      link: "#",
    },
    {
      name: "Solar",
      image: solar,
      bgText: "Solar",
      customStyle: "left-[35%] scale-[1] top-[2rem]",
      link: "#",
    },
  ];

  return (
    <section className="w-full px-6 pb-20 bg-white md:px-6 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.2, // slower fade
              delay: index * 0.3, // more stagger
              ease: "easeInOut", // smoother easing
            }}
            viewport={{ once: true }}
            className="relative bg-gray-50 flex flex-col items-center justify-end shadow-sm hover:shadow-md transition duration-300 h-[30rem] overflow-hidden"
          >
            {/* Background big text */}
            <h2 className="absolute top-1/2 -translate-y-1/2 left-4 text-[4rem] md:text-[10rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo">
              {product.bgText}
            </h2>

            {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              className={`absolute max-h-full max-w-full object-contain ${product.customStyle}`}
            />

            {/* Bottom content */}
            <div className="absolute text-left bottom-10 left-10">
              <h3 className="text-3xl font-arsenal font-normal text-black">
                {product.name}
              </h3>

              <a
                href={product.link}
                className="block mt-2 font-arimo text-sm text-gray-700 hover:text-black w-24 underline underline-offset-4"
              >
                Explore all
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
