import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import indoorDownlight from "/src/assets/Products/indoor downlight -alis.png";
import productTwo from "/src/assets/Products/a.png";
import productThree from "/src/assets/Products/b.png";
import productFour from "/src/assets/Products/c.png";

export default function ProductSlider() {
  const productCarousel = [
    {
      name: "Indoor Downlight",
      image: indoorDownlight,
      //   bg: "/src/assets/project/gardenbg.jpeg",
      link: "#",
    },
    {
      name: "Arclume Pole Light",
      image: productTwo,
      link: "#",
    },
    {
      name: "Sigma Outdoor Light",
      image: productThree,
      link: "#",
    },
    {
      name: "Stela Solar Light",
      image: productFour,
      link: "#",
    },
  ];

  // State for current product index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Handlers
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % productCarousel.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? productCarousel.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Current product
  const currentProduct = productCarousel[currentIndex];

  return (
    <div className="relative flex justify-end w-[20rem] h-[28rem]">
      <div className="flex flex-col w-full h-full border border-gray-300">
        {/* Image wrapper with overlap */}
        <div className="relative w-full h-full">
          {/* Foreground Product */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentProduct.image}
              src={currentProduct.image}
              alt={currentProduct.name}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 m-auto scale-[1.6] max-h-[15rem] object-contain"
            />
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-between">
          <div className="p-6">
            {" "}
            <p className="text-base text-gray-800 font-arsenal">
              {currentProduct.name}
            </p>
            <a
              href={currentProduct.link}
              className="mt-1 text-xs underline transition hover:text-gray-600"
            >
              View More
            </a>
          </div>

          {/* Arrows */}
          <div className="flex items-end justify-center text-3xl">
            <button
              onClick={handlePrev}
              className="px-3 py-1 border-t border-l border-gray-300 cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 transition-colors duration-200 group-hover:text-black"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1 border-t-[1px] border-l-[1px] border-gray-300 hover:bg-gray-100 group cursor-pointer"
            >
              <svg
                className="text-gray-300 transition-colors duration-200 group-hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
