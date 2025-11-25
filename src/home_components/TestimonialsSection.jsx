import React from "react";

import brandGodrej from "../../src/assets/About/brands/godrej.png";
import brandTata from "../../src/assets/About/brands/tata.png";
import brandJaypee from "../../src/assets/About/brands/jay.png";
import brandMarriott from "../../src/assets/About/brands/jw.png";
import brandHyatt from "../../src/assets/About/brands/hyatt.png";
import brandHp from "../../src/assets/About/brands/hp.png";
import brandRbi from "../../src/assets/About/brands/rbi.png";
import brandBarc from "../../src/assets/About/brands/barc.png";

const testimonials = [
  {
    brand: brandGodrej,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Rohit Mehra",
    role: "Design Head, Godrej Interio",
  },
  {
    brand: brandTata,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Ananya Iyer",
    role: "Project Lead, TATA",
  },
  {
    brand: brandJaypee,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Vikram Choudhary",
    role: "Senior Architect, Jaypee Group",
  },
  {
    brand: brandMarriott,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Sophia D'Souza",
    role: "Hospitality Design Manager, JW Marriott",
  },
  {
    brand: brandHyatt,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Daniel Wong",
    role: "Regional Operations Director, Hyatt",
  },
  {
    brand: brandHp,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Kavita Sharma",
    role: "Infrastructure Manager, Hindustan Petroleum",
  },
  {
    brand: brandRbi,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Amelia Torres",
    role: "Globally Trusted Standards",
  },
  {
    brand: brandBarc,
    quote:
      "ZIVIO’s lighting transformed our project into something extraordinary. Their attention to detail and ability to merge function with beauty is unmatched.",
    name: "Arun Menon",
    role: "Facility Planning Lead, BARC",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gray-100 py-16 lg:py-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <header className="text-center mb-12 font-arsenal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            <span className="font-extrabold">Our</span> Testimonials.
          </h2>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="relative bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 transform"
            >
              {/* brand logo */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex-shrink-0 w-23 h-12 flex items-center justify-center">
                  <img
                    src={t.brand}
                    alt={`${t.name} brand`}
                    className="h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* quote */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* footer */}
              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded shadow-sm hover:opacity-95 transition"
            aria-label="View all testimonials"
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
