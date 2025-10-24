// src/components/PartnersSection.jsx
import React from "react";

// Replace these imports with your actual logo paths
import logo1 from "../assets/About/brands/barc.png";
import logo2 from "../assets/About/brands/rbi.png";
import logo3 from "../assets/About/brands/hp.png";
import logo4 from "../assets/About/brands/tata.png";
import logo5 from "../assets/About/brands/jay.png";
import logo6 from "../assets/About/brands/jw.png";
import logo7 from "../assets/About/brands/hyatt.png";
import logo8 from "../assets/About/brands/godrej.png";

const logos = [
  { src: logo1, alt: "BARC logo" },
  { src: logo2, alt: "Reserve Bank logo" },
  { src: logo3, alt: "HP logo" },
  { src: logo4, alt: "Tata logo" },
  { src: logo5, alt: "Jaypee Group logo" },
  { src: logo6, alt: "JW Marriott logo" },
  { src: logo7, alt: "Hyatt logo" },
  { src: logo8, alt: "Godrej Interio logo" },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium mb-10 font-arsenal">
          <span className="font-extrabold">Our</span> Partners.
        </h2>

        {/* Logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 mb-10">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center 
                         w-[140px] h-[80px] md:w-[160px] md:h-[90px] 
                         lg:w-[180px] lg:h-[100px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className={`object-contain w-full h-full ${
                  idx === 0 ? "scale-125" : ""
                }`} // first logo slightly larger
              />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div>
          <button
            type="button"
            className="px-6 py-2 text-sm font-medium font-arimo cursor-pointer border border-black hover:bg-black hover:text-white transition-colors"
            aria-label="View all partners"
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
