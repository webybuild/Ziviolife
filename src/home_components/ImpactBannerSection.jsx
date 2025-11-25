import React from "react";
import { motion } from "framer-motion";
import impactBanner from "/src/assets/banner/impact-banner.jpeg";
import projectImg from "/src/assets/project/project1.png";

export default function ImpactBannerSection() {
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className="w-full py-16">
      {/* Top Section */}
      <div className="relative w-full h-[80vh] bg-black">
        <img
          src={impactBanner} // replace with actual hero image
          alt="Modern Lighting Interior"
          className="absolute inset-0 object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
          <motion.p
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl text-xl leading-tight tracking-wider text-white md:text-4xl font-arsenal"
          >
            <span className="font-bold">Zivio</span> crafts lighting that goes
            beyond <span className="font-bold">illumination</span>, combining
            <span className="font-bold"> innovation</span> and design to
            transform spaces with beauty, efficiency, and
            <span className="font-bold"> lasting impact</span>.
          </motion.p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-2 px-6 md:px-0 items-center max-w-7xl mx-auto -mt-16">
        {/* Left Column */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-16 mt-20 space-y-6 text-center md:text-left"
        >
          <h2 className="text-2xl font-light md:text-4xl font-arsenal leading-normal">
            Innovating Lighting Solutions That Inspire Architecture Since{" "}
            <span className="font-bold">2018.</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base font-arimo">
            Zivio delivers innovative, sustainable lighting solutions that bring
            brilliance and efficiency to residential and commercial spaces.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base font-arimo">
            Founded in 2018, we believe lighting is more than illumination it’s
            an art that transforms ambience and design. With expertise in smart,
            architectural, and energy efficient lighting, Zivio is trusted for
            solutions that inspire and endure.
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="relative w-full h-[20rem] md:h-[30rem]">
          <img
            src={projectImg}
            alt="Modern Interior Lighting"
            className="absolute object-cover w-full h-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
