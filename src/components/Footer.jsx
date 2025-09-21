import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Social */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">ZiVIO®</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <Linkedin size={16} /> Linkedin
              </li>
              <li className="flex items-center gap-2 text-white font-medium transition">
                <Instagram size={16} /> Instagram
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <Twitter size={16} /> Twitter
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Downloads</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:text-white cursor-pointer font-medium text-white">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Cancellation and Refund
              </li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-white font-medium mb-4">Category</h3>
            <ul className="space-y-2">
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
        <div className="border-t border-gray-700 mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">Contact</h4>
          </div>
          <div>
            Infinity Square, Unit No. 110, 1st Floor, Golani Naka, Vasai East,
            Waliv, Maharashtra 401208, India.
          </div>
          <div className="space-y-2">
            <p>Tel. +91-9552152384 / +91-8237572384</p>
            <p>Mail. shree@ziviolife.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright © 2025 Ziviolife.</p>
        <p>
          Powered by <span className="text-white font-medium">Webybuild.</span>
        </p>
      </div>
    </footer>
  );
}
