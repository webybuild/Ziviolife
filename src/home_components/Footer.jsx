import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import logoFooter from "/src/assets/logoFooter.svg";

export default function Footer() {
  const socials = [
    { name: "Linkedin", icon: <Linkedin size={16} /> },
    { name: "Instagram", icon: <Instagram size={16} /> },
    { name: "Twitter", icon: <Twitter size={16} /> },
  ];
  return (
    <footer className="bg-[#060606] text-gray-300 text-sm font-arimo pt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Social */}
          <div>
            <img
              className="w-40 h-auto mb-6 -mt-6"
              src={logoFooter}
              alt="Logo Footer"
            />
            <ul className="space-y-4">
              {socials.map((social, index) => (
                <motion.li
                  key={index}
                  whileHover="hover"
                  className="relative flex items-center gap-2 cursor-pointer text-[#7F7F7F] hover:text-white transition"
                >
                  {social.icon} {social.name}
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    variants={{
                      hover: { scaleX: 0.5 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 -bottom-2 h-[1px] w-full origin-left bg-[#8C8C8C]"
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Explore</h3>
            <ul className="space-y-2 text-[#989898] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Downloads</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-[#989898] text-sm">
              <li className="hover:text-white cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:text-white cursor-pointer font-medium">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Cancellation and Refund
              </li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Category</h3>
            <ul className="space-y-2 text-[#989898] text-sm">
              <li className="hover:text-white cursor-pointer">Indoor</li>
              <li className="hover:text-white cursor-pointer">Outdoor</li>
              <li className="hover:text-white cursor-pointer">Decorative</li>
              <li className="hover:text-white cursor-pointer">Pole</li>
              <li className="hover:text-white cursor-pointer">Solar</li>
              <li className="hover:text-white cursor-pointer">Highmast</li>
            </ul>
          </div>
        </div>

        {/* Contact Block */}
        <div className="border-t border-gray-700 mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="text-white text-2xl font-medium mb-2 text-center">
              Contact
            </h4>
          </div>
          <div className="text-[#989898]">
            Infinity Square, Unit No. 110, 1st Floor, Golani Naka, Vasai East,
            Waliv, Maharashtra 401208, India.
          </div>
          <div className="space-y-2 text-[#989898]">
            <p>Tel. +91-9552152384 / +91-8237572384</p>
            <p>Mail. shree@ziviolife.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#989898]">
        <div className="flex justify-between w-full px-16">
          {" "}
          <div>
            <p>Copyright © 2025 Ziviolife.</p>
          </div>
          <div>
            {" "}
            <p>
              Powered by{" "}
              <span className="text-white font-medium">Webybuild.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
