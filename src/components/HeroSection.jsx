import React from "react";
import lightImg from "../assets/light2.png";
import logo from "../assets/logo.png";
import homeBg from "/src/assets/home/Landing-bg.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[0.4fr_1.6fr] min-h-screen">
        {/* Left Side */}
        <div className="absolute md:relative flex flex-col justify-start bg-white">
          {/* Logo */}
          <div className="bg-black md:bg-white h-20 z-20 border-b-[1px] border-gray-300 flex justify-center items-center">
            <img
              src={logo}
              className="hidden md:block object-contain scale-[0.4]"
              alt="Ziviolife Logo"
            />
            <h1 className="text-white block md:hidden">Zivo</h1>
          </div>

          {/* Product Image */}
          <motion.img
            src={lightImg}
            alt="Lighting Product"
            className="z-10 object-contain w-full px-6 -mt-10 pb-9 swing-animation lg:scale-200 max-w-[22rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Product Info */}
          <div className="px-6 py-10 mt-24">
            <p className="mb-2 text-lg text-secondary font-arsenal">
              Recessed ceiling luminaire
            </p>
            <a
              href="#"
              className="text-sm font-medium transition border-b border-black hover:opacity-70"
            >
              View More
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-col items-end justify-center">
          {/* Background Image */}
          <img
            src={homeBg}
            alt="Background Room"
            className="absolute inset-0 object-cover w-full h-full"
          />
          {/* Dark Overlay */}
          <div
            className="absolute top-0 bottom-0 right-0 w-full md:w-2/5 md:max-w-xl
                bg-black
                md:bg-transparent
                md:bg-gradient-to-br md:from-black/90 md:via-gray-900/90 md:to-gray-800/90"
          />

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-md px-10 text-white md:px-20"
          >
            <h2 className="mb-6 text-5xl font-medium leading-tight md:text-6xl font-playfair">
              <span className="text-primary">Future</span> of <br /> Lighting
            </h2>
            <p className="mb-8 text-base tracking-wider text-white font-arsenal font-normal">
              Exceptional lighting solutions that blend beauty with unmatched
              performance.
            </p>
            <button className="flex items-center justify-center px-12 py-2 transition border border-white cursor-pointer font-arimo hover:bg-white hover:text-black">
              Explore Now !
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
