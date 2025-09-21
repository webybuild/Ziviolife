import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import productOne from "/src/assets/Products/gardenlight.png";
import productTwo from "/src/assets/Products/a.png";
import productThree from "/src/assets/Products/b.png";
import productFour from "/src/assets/Products/c.png";
import gardenBg from "/src/assets/project/gardenbg.jpeg";
import interBg from "/src/assets/project/internoffice.jpeg";
import bgThree from "/src/assets/project/project1.png";

export default function ImpactSliderSection() {
  const productCarousel = [
    {
      name: "Led G5043 Garden Light",
      image: productOne,
      bg: gardenBg,
      link: "#",
    },
    {
      name: "Arclume Pole Light",
      image: productTwo,
      bg: interBg,
      link: "#",
    },
    {
      name: "Sigma Outdoor Light",
      image: productThree,
      bg: bgThree,
      link: "#",
    },
    {
      name: "Stela Solar Light",
      image: productFour,
      bg: interBg,
      link: "#",
    },
  ];

  // State for current product index
  // Current product
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = productCarousel[currentIndex];
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

  return (
    <section className="w-full px-6 md:px-0 py-20 bg-white max-w-7xl mx-auto">
      <div className="grid items-start grid-cols-1 mx-auto md:gap-16 md:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT SIDE */}

        <div className="relative flex justify-end w-full h-[28rem]">
          {/* Background House */}
          <img
            src={currentProduct.bg}
            alt="Background"
            className="absolute left-0 object-cover object-left w-2/3 h-full"
          />
          <div className="flex flex-col w-2/3 h-full bg-white border border-gray-300 mt-44">
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
                  className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/4 scale-150 max-h-[15rem] object-contain"
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

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-12">
          {/* Quote */}
          <div className="relative">
            <span className="absolute right-0 font-serif text-9xl text-black -top-10">
              “
            </span>
            <p className="py-4 text-2xl leading-relaxed text-black underline underline-offset-8">
              The spirit of creativity and design can be seen in every detail
              from setting new trends to adapting seamlessly to modern
              architecture and lifestyles.
            </p>
          </div>

          {/* Office Section */}
          <div className="flex flex-col gap-4 md:pl-16">
            <img
              src={interBg}
              alt="Office Lighting"
              className="object-cover w-full rounded-sm shadow"
            />
            <p className="text-base leading-relaxed text-gray-600 py-8 font-arimo">
              At Zivio, lighting is more than illumination it’s art with
              purpose. Each fixture blends form, function, and sustainability to
              transform spaces with timeless elegance and lasting performance.
            </p>
            <button className="px-6 py-2 text-base font-semibold cursor-pointer transition border border-black md:w-40 hover:bg-black hover:text-white">
              Find out more!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
