import React from "react";
import { motion } from "framer-motion";
import catalogue from "/src/assets/banner/catalogue.png";
import lamp from "/src/assets/Products/post top light.png"; // replace with your actual lamp image

export default function DownloadsSection() {
  return (
    <section className="relative px-6 py-12 bg-gray-100 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr_] gap-10 max-w-[90rem] mx-auto items-center">
        {/* LEFT COLUMN */}
        <div className="relative flex flex-col items-start justify-center text-center px-8">
          {/* Background year */}
          <h2 className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo leading-none">
            2025
          </h2>
          {/* Catalogue image */}
          <motion.img
            src={catalogue}
            alt="Catalogue"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 w-[250px] md:w-[350px] mx-auto top-24 left-32"
          />

          {/* Text & Button */}
          <div className="flex mt-6 flex-col gap-6 items-center justify-center w-1/2">
            {" "}
            <h3 className="text-4xl font-arsenal">Catalogue</h3>
            <button className="px-6 py-2 text-sm sm:text-base font-semibold cursor-pointer transition border text-white bg-black md:w-40 hover:bg-white hover:text-black">
              Download
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-md flex flex-col items-start justify-between py-20 px-10 relative"
        >
          {/* Text */}
          <div>
            <h3 className="text-3xl font-arsenal mb-2">Certificates</h3>
            <p className="text-gray-500 text-sm mb-6">
              Globally Trusted Standards
            </p>
            <button className="px-6 py-2 text-sm sm:text-base font-semibold cursor-pointer transition border text-black bg-white md:w-40 hover:bg-black hover:text-white">
              Download
            </button>
          </div>

          {/* Lamp image */}
          <img
            src={lamp}
            alt="Lamp"
            className="absolute -right-16 bottom-0 h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
