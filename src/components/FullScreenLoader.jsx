// src/components/FullScreenLoader.jsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../../src/assets/logoDarkBg.png"; // adjust path if needed

export default function FullScreenLoader() {
  // logo breathing animation (spring-like loop)
  const logoAnim = {
    animate: {
      scale: [1, 1.03, 1, 0.995, 1],
      y: [0, -4, 0, -2, 0],
      transition: {
        duration: 2.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // rotating subtle glow behind logo
  const glowAnim = {
    animate: {
      rotate: [0, 45, 90, 135, 180],
      transition: { duration: 8, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* small keyframes for the dots animation */}
      <style>{`
        @keyframes dots {
          0% { content: ''; }
          33% { content: '.'; }
          66% { content: '..'; }
          100% { content: '...'; }
        }
        .loading-dots::after {
          content: '';
          animation: dots 1s steps(3, end) infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center gap-6 px-6">
        {/* Rotating soft glow behind the logo */}
        <motion.div
          {...glowAnim}
          aria-hidden="true"
          className="absolute rounded-full w-[360px] h-[360px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,200,90,0.06), rgba(255,200,90,0.02) 40%, rgba(0,0,0,0))",
            filter: "blur(40px)",
          }}
        />

        {/* Logo container with breathing animation */}
        <motion.div
          {...logoAnim}
          className="relative w-[200px] sm:w-[240px] md:w-[300px] lg:w-[360px] h-auto flex items-center justify-center"
        >
          <img
            src={logo}
            alt="ZIVIO"
            className="relative w-full h-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
            style={{ imageRendering: "auto" }}
            draggable="false"
          />
        </motion.div>

        {/* Loading label */}
        <div className="text-center">
          <div className="text-sm text-gray-300 tracking-wide">
            Loading
            <span
              className="loading-dots text-gray-300 ml-1"
              aria-hidden="true"
            />
          </div>

          {/* smoother animated progress hint */}
          <div className="mt-3 h-1 w-44 bg-white/6 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-110%" }}
              animate={{ x: "110%" }}
              transition={{ duration: 1.6, ease: "linear", repeat: Infinity }}
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        </div>

        {/* Screenreader only text */}
        <span className="sr-only">Application is loading</span>
      </div>
    </div>
  );
}
