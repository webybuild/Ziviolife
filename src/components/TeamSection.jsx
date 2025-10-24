// src/components/TeamSection.jsx
import React, { useState, useEffect } from "react";

import p1 from "../../src/assets/About/teams/people1.jpg";
import p2 from "../../src/assets/About/teams/p2.jpg";
import p3 from "../../src/assets/About/teams/p3.jpg";
import p4 from "../../src/assets/About/teams/p4.jpg";
import p5 from "../../src/assets/About/teams/p5.jpg";
import p7 from "../../src/assets/About/teams/p7.jpg";
import p8 from "../../src/assets/About/teams/p8.jpg";
import p9 from "../../src/assets/About/teams/p9.jpg";

/*
  TeamSection with modal on the "i" button.
  - Click the "i" button to open a modal with a short fake bio.
  - Modal is dismissible by the close button, clicking the overlay, or pressing Escape.
  - Uses an aspect ratio wrapper for stable image rendering.
*/

const people = [
  {
    name: "Cs Jirapure",
    role: "Chief Executive Officer",
    img: p1,
    bio: "Cs leads the company vision with over 15 years of global design and business strategy experience. He focuses on fostering cross-disciplinary teams and scaling creative solutions for large commercial projects.",
  },
  {
    name: "Marcus Leong",
    role: "Head of Design & Innovation",
    img: p2,
    bio: "Marcus drives product innovation and leads the design team. He combines material research, prototyping, and human-centered lighting studies to create award-winning concepts.",
  },
  {
    name: "Sophia Grant",
    role: "Lighting Design Specialist",
    img: p3,
    bio: "Sophia designs lighting experiences for hospitality and cultural spaces. Her work focuses on perception, warmth, and energy efficiency to enhance atmosphere and comfort.",
  },
  {
    name: "Isabella Moreau",
    role: "Creative Director",
    img: p4,
    bio: "Isabella leads visual storytelling and brand identity. She brings art direction and architectural sensibility together to ensure every installation reads as an elegant experience.",
  },
  {
    name: "Camila Rodríguez",
    role: "Marketing & Communications Lead",
    img: p5,
    bio: "Camila shapes the brand voice and communications strategy. She specializes in product launches, partnership programs, and content that highlights design intent.",
  },
  {
    name: "Arjun Patel",
    role: "Senior Electrical Engineer",
    img: p7,
    bio: "Arjun is the technical lead for lighting systems, ensuring safety, efficiency, and performance. He collaborates with design teams to translate concepts into reliable installations.",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Sustainability Consultant",
    img: p8,
    bio: "Hiroshi guides sustainable material choices and lifecycle planning. He evaluates environmental impact and helps implement circular practices across product development.",
  },
  {
    name: "David Kim",
    role: "Project Operations Manager",
    img: p9,
    bio: "David coordinates project delivery and client relations. He ensures timelines, budgets, and on-site teams operate smoothly while maintaining quality standards.",
  },
];

export default function TeamSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const openModal = (idx) => {
    setSelectedIndex(idx);
    setIsOpen(true);
    // document.body.style.overflow = "hidden";
    document.body.style.overflow = "";
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-12 font-arsenal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            It takes{" "}
            <span className="font-extrabold">imagination, precision,</span> and{" "}
            <span className="font-extrabold">collaboration</span> to
            <br className="hidden md:inline" /> redefine how the world
            experiences light, meet the{" "}
            <span className="font-extrabold">people who make it possible.</span>
          </h2>
        </header>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {people.map((p, idx) => (
            <article
              key={idx}
              className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden"
            >
              {/* Image with stable aspect ratio */}
              <div className="w-full h-[236px] aspect-[21/13] bg-gray-100 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info area */}
              <div className="relative px-4 py-4 bg-white">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{p.role}</p>
                </div>

                {/* Info icon */}
                <button
                  type="button"
                  aria-label={`More about ${p.name}`}
                  onClick={() => openModal(idx)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 bg-white text-gray-600 cursor-pointer"
                >
                  <span className="text-xs font-medium">i</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left: image */}
              <div className="md:w-1/3 w-full">
                <img
                  src={people[selectedIndex].img}
                  alt={people[selectedIndex].name}
                  className="w-full h-56 md:h-full object-cover"
                />
              </div>

              {/* Right: content */}
              <div className="md:w-2/3 p-6">
                <h3
                  id="team-modal-title"
                  className="text-xl font-semibold mb-2"
                >
                  {people[selectedIndex].name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {people[selectedIndex].role}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {people[selectedIndex].bio}
                </p>

                <div className="mt-6 flex items-center justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm bg-gray-100 rounded border border-gray-200 hover:bg-gray-200 transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Close X */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-3 right-3 rounded-full w-9 h-9 flex items-center justify-center bg-white border border-gray-200 text-gray-600 shadow-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
