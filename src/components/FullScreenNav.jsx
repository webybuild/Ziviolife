import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function FullScreenMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // 'products' | 'company' | null

  const overlayVariants = {
    hidden: { clipPath: "circle(0% at 100% 0%)" },
    visible: {
      clipPath: "circle(150% at 100% 0%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.12 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const submenuVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0, // parent appears instantly
        staggerChildren: 0.06, // children start one after another
        delayChildren: 0.02, // small initial delay before first child (can be 0)
      },
    },
    exit: {
      opacity: 0,
      x: 24,
      transition: { duration: 0.12 },
    },
  };

  const submenuItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div>
      {/* Hamburger Button */}
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
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-start"
          >
            {/* Background image (optional) */}
            <img
              src="/src/assets/banner/impact-banner.jpeg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />

            {/* Main menu container */}
            <div className="relative z-10 w-full max-w-6xl mt-20 px-8 md:px-12">
              <motion.ul
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 text-white"
              >
                {/* Left Column (primary nav) */}
                <div>
                  <motion.li variants={itemVariants} className="mb-6">
                    <Link
                      to="/"
                      onClick={closeAll}
                      className="text-lg md:text-2xl hover:text-gray-300"
                    >
                      Home
                    </Link>
                  </motion.li>

                  {/* Company (has submenu) */}
                  <motion.li variants={itemVariants} className="mb-6">
                    <button
                      onClick={() => toggleSubmenu("company")}
                      aria-expanded={openSubmenu === "company"}
                      className="flex items-center gap-4 text-lg md:text-2xl hover:text-gray-300"
                    >
                      Company
                      <span className="text-sm opacity-80">
                        {openSubmenu === "company" ? "▾" : "▸"}
                      </span>
                    </button>

                    {/* Company submenu */}
                    <AnimatePresence>
                      {openSubmenu === "company" && (
                        <motion.ul
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="mt-4 ml-3 space-y-3 text-sm md:text-base"
                        >
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/company/about"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              About Company
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/company/history"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Company History
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/company/teams"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Teams
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/company/brands"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Our Brands
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/company/social"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Our Social Work
                            </Link>
                          </motion.li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {/* Products (has submenu) */}
                  <motion.li variants={itemVariants} className="mb-6">
                    <button
                      onClick={() => toggleSubmenu("products")}
                      aria-expanded={openSubmenu === "products"}
                      className="flex items-center gap-4 text-lg md:text-2xl hover:text-gray-300"
                    >
                      Products
                      <span className="text-sm opacity-80">
                        {openSubmenu === "products" ? "▾" : "▸"}
                      </span>
                    </button>

                    {/* Products submenu */}
                    <AnimatePresence>
                      {openSubmenu === "products" && (
                        <motion.ul
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="mt-4 ml-3 space-y-3 text-sm md:text-base"
                        >
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/products/indoor"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Indoor
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/products/pole"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Pole
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/products/outdoor"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Outdoor
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/products/solar"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              Solar
                            </Link>
                          </motion.li>
                          <motion.li variants={submenuItem}>
                            <Link
                              to="/products/all"
                              onClick={closeAll}
                              className="hover:text-gray-300"
                            >
                              All Products
                            </Link>
                          </motion.li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mb-6">
                    <Link
                      to="/projects"
                      onClick={closeAll}
                      className="text-lg md:text-2xl hover:text-gray-300"
                    >
                      Projects
                    </Link>
                  </motion.li>
                </div>

                {/* Right Column (other links + downloads / contacts) */}
                <div>
                  <motion.li variants={itemVariants} className="mb-6">
                    <Link
                      to="/downloads"
                      onClick={closeAll}
                      className="text-lg md:text-2xl hover:text-gray-300"
                    >
                      Downloads
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mb-6">
                    <Link
                      to="/contacts"
                      onClick={closeAll}
                      className="text-lg md:text-2xl hover:text-gray-300"
                    >
                      Contacts
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mb-6">
                    <Link
                      to="/sustainability"
                      onClick={closeAll}
                      className="text-lg md:text-2xl hover:text-gray-300"
                    >
                      Sustainability
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={itemVariants}
                    className="mt-6 text-sm md:text-base"
                  >
                    <div className="text-gray-300">Factory Address</div>
                    <div className="text-gray-400 text-xs md:text-sm mt-2">
                      123 Manufacturing Rd, City, Country
                    </div>
                  </motion.li>
                </div>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
