import React from "react";
import indoor from "/src/assets/Products/b.png";
import pole from "/src/assets/Products/c.png";
import outdoor from "/src/assets/Products/d.png";
import solar from "/src/assets/Products/a.png";

export default function ProductGridSection() {
  const products = [
    {
      name: "Indoor",
      image: indoor, // replace with actual path
      bgText: "Indoor",
      customStyle: "left-[25%] scale-[0.7] top-[1rem]",
      link: "#",
    },
    {
      name: "Pole",
      image: pole, // replace with actual path
      bgText: "Pole",
      customStyle: "left-[35%] scale-[1.7] top-[5rem]",
      link: "#",
    },
    {
      name: "Outdoor",
      image: outdoor,
      bgText: "Outdoor",
      customStyle: "left-[50%] scale-[1.7] top-[5rem]",
      link: "#",
    },
    {
      name: "Solar",
      image: solar, // replace with actual path
      bgText: "Solar",
      customStyle: "left-[35%] scale-[1] top-[2rem]",
      link: "#",
    },
  ];
  return (
    <section className="w-full px-6 pb-20 bg-white md:px-6 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-50 flex flex-col items-center justify-end shadow-sm hover:shadow-md transition duration-300 h-[30rem] overflow-hidden"
          >
            <h2 className="absolute top-1/2 -translate-y-1/2 left-4 text-[4rem] md:text-[10rem] font-bold text-outline pointer-events-none select-none whitespace-nowrap font-arimo">
              {product.bgText}
            </h2>
            {/* Product image aligned to bottom */}
            <img
              src={product.image}
              alt={product.name}
              className={`absolute max-h-full max-w-full object-contain ${product.customStyle}`}
            />

            {/* Text content at bottom */}
            <div className="absolute text-left bottom-10 left-10">
              <h3 className="text-2xl font-normal text-fcolor">
                {product.name}
              </h3>
              <button className="flex items-center justify-center px-12 py-2 transition border border-gray-500 cursor-pointer font-arimo hover:bg-white hover:text-black">
                Explore Now !
              </button>
              <a
                href={product.link}
                className="block mt-2 text-sm text-black hover:text-gray-700 border-[1px] w-16"
              >
                View all
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
