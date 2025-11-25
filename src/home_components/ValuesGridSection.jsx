// src/components/ValuesGridSection.jsx
import React from "react";
import img1 from "../../src/assets/About/imaginationSec.jpeg"; // replace with your image paths
import img2 from "../../src/assets/About/beauty.jpeg";
import img3 from "../../src/assets/About/inclusivity.jpeg";
import img4 from "../../src/assets/About/authenticity.jpeg";

export default function ValuesGridSection() {
  const cards = [
    {
      title: "Imagination",
      text: "Curiosity fuels innovation, pushing the boundaries of lighting design.",
      img: img1,
      alt: "Imagination",
    },
    {
      title: "Beauty",
      text: "Precision and passion create lighting that inspires wonder.",
      img: img2,
      alt: "Beauty",
    },
    {
      title: "Inclusivity",
      text: "We embrace diversity turning collaboration into progress.",
      img: img3,
      alt: "Inclusivity",
    },
    {
      title: "Authenticity",
      text: "Integrity and honesty define every connection we build.",
      img: img4,
      alt: "Authenticity",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: Heading & Description */}
        <div className="pr-0 lg:pr-12 flex flex-col justify-center items-center h-full w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-light mb-6 font-arsenal">
            What defines the way we light the{" "}
            <span className="font-extrabold">future</span>.
          </h2>

          <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed font-arimo">
            At <strong>ZIVIO</strong>, lighting is more than illumination it is
            an expression of imagination, beauty, inclusivity, and authenticity.
            We craft solutions that transform spaces, blending innovation with
            timeless design. Guided by these values, we are committed to
            creating lighting that not only brightens environments but also
            inspires people and shapes the future of architectural design.
          </p>
        </div>

        {/* RIGHT: 2x2 Grid of Image Cards */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-6">
            {cards.map((c, idx) => (
              <article
                key={idx}
                className="
                  relative rounded-lg overflow-hidden
                  filter grayscale transition-all duration-300
                  hover:grayscale-0 hover:scale-[1.02] focus-within:grayscale-0
                  "
                tabIndex={0}
                aria-labelledby={`card-title-${idx}`}
              >
                {/* image */}
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-56 md:h-64 lg:h-80 object-cover"
                />

                {/* text block */}
                <div
                  className="absolute left-0 bottom-0 p-4 text-white z-10 
                bg-gradient-to-t from-black via-black/50 to-transparent w-full"
                >
                  <h3
                    id={`card-title-${idx}`}
                    className="text-3xl font-semibold leading-snug drop-shadow-md font-arsenal"
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm text-white/90 mt-1 drop-shadow-sm font-arimo">
                    {c.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
