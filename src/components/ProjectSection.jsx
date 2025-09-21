import React from "react";
import { motion } from "framer-motion";
import projectOne from "/src/assets/project/pic3.png";
import projectTwo from "/src/assets/project/fsdf.png";

const projects = [
  {
    id: 1,
    title: "Oberoi Sky City Mall",
    location: "Borivali, Maharashtra",
    img: projectOne, // replace with your image path
  },
  {
    id: 2,
    title: "Barc Mumbai",
    location: "Mumbai, Maharashtra",
    img: projectTwo, // replace with your image path
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light">
          <span className="font-bold">Our</span> Projects.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Read More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition">
          Read More
        </button>
      </motion.div>
    </section>
  );
}
