import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function FullScreenMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
      transition: { delay: 0.5, staggerChildren: 0.15 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Two-line Hamburger / Close Button (fixed + centered + thicker lines) */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute z-50 flex items-center justify-center w-10 h-10 cursor-pointer top-5 right-5"
      >
        <div className={`${isOpen ? "fixed" : "relative"} w-8 h-8`}>
          {/* Top line */}
          <motion.span
            initial={false}
            animate={
              isOpen
                ? { rotate: 45, y: 0, scaleX: 1 } // open -> perfect X
                : { rotate: 0, y: -6, scaleX: 1.5 } // closed -> slightly longer top
            }
            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              width: 24, // fixed layout width
              transformOrigin: "center center",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              display: "block",
            }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 h-[1.5px] 
    ${isOpen ? "bg-white" : "bg-white md:bg-white"}`}
          />

          {/* Bottom line */}
          <motion.span
            initial={false}
            animate={
              isOpen
                ? { rotate: -45, y: 0, scaleX: 1 } // open -> perfect X
                : { rotate: 0, y: 2, scaleX: 0.8 } // closed -> shorter bottom and shifted vertical
            }
            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              width: 24, // same fixed width for consistent rotation center
              transformOrigin: "center center",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              display: "block",
            }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 h-[1.5px] 
    ${isOpen ? "bg-white" : "bg-white md:bg-white"}`}
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 text-4xl text-white"
            >
              <motion.li
                variants={itemVariants}
                className="cursor-pointer hover:text-gray-400"
              >
                <Link
                  to="/"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="cursor-pointer hover:text-gray-400"
              >
                <Link
                  to="/about"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="cursor-pointer hover:text-gray-400"
              >
                Services
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="cursor-pointer hover:text-gray-400"
              >
                Contact
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
