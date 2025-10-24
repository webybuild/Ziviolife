// src/components/FullScreenMenu.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function FullScreenMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  // circle scale values: closed -> 0, open -> large (covers screen)
  const circleOpenScale = 36; // large enough to cover typical screens from top-right

  // smooth spring for scale
  const scaleTransition = {
    type: "spring",
    stiffness: 90,
    damping: 18,
    mass: 0.9,
  };

  const fadeTransition = { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] };

  return (
    <div>
      {/* Hamburger Button (unchanged position/behavior) */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((v) => !v)}
        className="absolute z-50 flex items-center justify-center w-10 h-10 cursor-pointer top-5 right-5"
      >
        <div className={`${isOpen ? "fixed" : "relative"} w-8 h-8`}>
          <motion.span
            initial={false}
            animate={
              isOpen
                ? { rotate: 45, y: 0, scaleX: 1 }
                : { rotate: 0, y: -6, scaleX: 1.5 }
            }
            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              width: 24,
              transformOrigin: "center center",
              display: "block",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 h-[1.5px] bg-white"
          />
          <motion.span
            initial={false}
            animate={
              isOpen
                ? { rotate: -45, y: 0, scaleX: 1 }
                : { rotate: 0, y: 2, scaleX: 0.8 }
            }
            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              width: 24,
              transformOrigin: "center center",
              display: "block",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 h-[1.5px] bg-white"
          />
        </div>
      </button>

      {/* Overlay + Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="overlay-menu"
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 flex items-start justify-center pointer-events-auto"
          >
            {/* animated circle (top-right) - GPU friendly transform
                IMPORTANT: animate opacity to 0 while scaling so the dark circle is not visible */}
            {/* <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: circleOpenScale, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={scaleTransition}
              style={{ transformOrigin: "100% 0%" }} // origin top-right
              className="absolute top-0 right-0 w-10 h-10 rounded-full bg-black z-40 will-change-transform pointer-events-none"
            /> */}

            {/* background image (fades in after scale starts) */}
            <motion.img
              src="/src/assets/navBg.jpeg"
              alt="Background"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ...fadeTransition, delay: 0.06 }}
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
            />

            {/* dark overlay for contrast (fades) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ ...fadeTransition, delay: 0.06 }}
              className="absolute inset-0 bg-black z-20 pointer-events-none"
            />

            {/* Main menu content */}
            <div className="relative z-50 w-full max-w-7xl px-8 md:px-12 pt-20 pb-12">
              {/* keep original hamburger behavior only; do not add another close button */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.28 }}
              >
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-x-8">
                  {/* Left: Big nav */}
                  <div className="lg:col-span-7 font-arsenal font-bold">
                    <nav aria-label="Primary" className="py-6">
                      <ul className="space-y-8">
                        <li>
                          <Link
                            to="/"
                            onClick={closeAll}
                            className="block text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white cursor-pointer"
                          >
                            Home
                          </Link>
                        </li>

                        <li>
                          <div>
                            <button
                              onClick={() => toggleSubmenu("company")}
                              aria-expanded={openSubmenu === "company"}
                              className="flex items-center gap-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white cursor-pointer"
                            >
                              Company
                              <span className="text-base md:text-lg opacity-80 ml-2">
                                {openSubmenu === "company" ? "▾" : "▸"}
                              </span>
                            </button>

                            {openSubmenu === "company" && (
                              <ul className="mt-6 ml-1 space-y-2 text-sm md:text-base text-white/90">
                                <li>
                                  <Link
                                    to="/company/about"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    About Company
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link
                                    to="/company/history"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Company History
                                  </Link>
                                </li> */}
                                <li>
                                  <Link
                                    to="/company/teams"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Teams
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/company/brands"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Our Brands
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>

                        <li>
                          <div>
                            <button
                              onClick={() => toggleSubmenu("products")}
                              aria-expanded={openSubmenu === "products"}
                              className="flex items-center gap-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white cursor-pointer"
                            >
                              Products
                              <span className="text-base md:text-lg opacity-80 ml-2">
                                {openSubmenu === "products" ? "▾" : "▸"}
                              </span>
                            </button>

                            {openSubmenu === "products" && (
                              <ul className="mt-6 ml-1 space-y-2 text-sm md:text-base text-white/90">
                                <li>
                                  <Link
                                    to="/products/indoor"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Indoor
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/products/outdoor"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Outdoor
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/products/solar"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    Solar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/products/all"
                                    onClick={closeAll}
                                    className="hover:underline"
                                  >
                                    All Products
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>

                        <li>
                          <Link
                            to="/projects"
                            onClick={closeAll}
                            className="block text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white cursor-pointer"
                          >
                            Projects
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* Right: compact links, contact and CTA */}
                  <div className="lg:col-span-5 mt-8 lg:mt-0 font-arsenal font-bold">
                    <div className="text-white/90">
                      <ul className="space-y-4 mb-6">
                        <li>
                          <Link
                            to="/downloads"
                            onClick={closeAll}
                            className="text-lg md:text-xl hover:text-white cursor-pointer"
                          >
                            Downloads
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            onClick={closeAll}
                            className="text-lg md:text-xl hover:text-white cursor-pointer"
                          >
                            Contacts
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-6 border-t border-white/10 pt-6">
                        <div className="mb-4">
                          <div className="text-sm text-white/60">
                            Factory Address
                          </div>
                          <div className="text-sm text-white/80 mt-2">
                            123 Manufacturing Rd, City, Country
                          </div>
                        </div>

                        <div className="flex gap-3 items-center">
                          <a
                            href="/contact"
                            onClick={closeAll}
                            className="inline-block px-5 py-3 bg-white text-black rounded-md font-medium shadow-sm hover:opacity-95 transition cursor-pointer"
                          >
                            Get in touch
                          </a>

                          <a
                            href="/downloads"
                            onClick={closeAll}
                            className="inline-block px-4 py-2 border border-white/20 text-white rounded-md hover:bg-white/10 transition cursor-pointer"
                          >
                            Catalog
                          </a>
                        </div>

                        <div className="mt-6 text-sm text-white/60">
                          <div>Mon - Fri: 9:00 - 18:00</div>
                          <div className="mt-2">+91 12345 67890</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.86 1.09A4.48 4.48 0 0 0 11.07 5.11a12.86 12.86 0 0 1-9.33-4.78 4.48 4.48 0 0 0 1.39 5.98A4.41 4.41 0 0 1 2 6.6v.06A4.48 4.48 0 0 0 6.75 11a4.5 4.5 0 0 1-2 .08 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 1 19.54a12.74 12.74 0 0 0 6.9 2.02c8.28 0 12.82-6.86 12.82-12.82 0-.2 0-.39-.02-.58A9.2 9.2 0 0 0 23 3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
