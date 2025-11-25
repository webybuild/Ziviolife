// src/pages/Contact.jsx
import React from "react";
import ContactMap from "../home_components/ContactMap";
import PageHeader from "../home_components/PageHeader";
import headBg from "../../src/assets/Downloads/headBg.jpeg";

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle={
          <>
            ZIVIO combines <strong>precision</strong> engineering and{" "}
            <strong>timeless</strong> design to shape a brighter, more{" "}
            <strong>sustainable</strong> world.
          </>
        }
        bgImage={headBg}
        highlight="Us"
      />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Contact form (takes 7 of 12 cols on large screens) */}
          <section className="lg:col-span-7">
            <h2 className="text-3xl font-semibold mb-4">
              Send us a <span className="font-extrabold">message</span>
            </h2>
            <p className="text-gray-500 mb-8">
              Our friendly team would love to hear from you
            </p>

            <form className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">Name*</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">Country</span>
                  <input
                    name="country"
                    type="text"
                    placeholder="Country"
                    className="px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">Email*</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">Phone*</span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className="px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-2">Message</span>
                  <textarea
                    name="message"
                    rows="8"
                    placeholder="Message"
                    className="px-3 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  />
                </label>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="agree"
                    className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <span>
                    I have read the{" "}
                    <a className="underline" href="/privacy">
                      privacy policy
                    </a>{" "}
                    and agree to the processing of my data.
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium border border-gray-900 rounded transition hover:bg-black hover:text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </section>

          {/* RIGHT: contact details + map (takes 5 of 12 cols on large screens) */}
          <aside className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                  {/* location icon */}
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 21s-6-4.35-8.485-7.212C1.998 11.57 3 7.5 6 5.5 9 3.5 12 6 12 6s3-2.5 6-0.5c3 1.999 4.002 6.07 2.485 8.288C18 16.65 12 21 12 21z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Company Address</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Infinity Square, Unit No. 110, 1st Floor, Golani Naka, Vasai
                    East, Waliv, Maharashtra 401208, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                  {/* factory icon */}
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M3 21h18" />
                    <path d="M3 7l6 4v9" />
                    <path d="M9 11l6-4 6 4" />
                    <path d="M15 7v6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Factory Address</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    204 - Infinity Square Waliv Vasai East - Mumbai 401208
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Social</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="facebook"
                    className="w-9 h-9 flex items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H8.9V12h1.6V9.8c0-1.6.95-2.5 2.4-2.5.7 0 1.45.12 1.45.12v1.6h-.82c-.8 0-1.05.5-1.05 1v1.1h1.8l-.29 2.9h-1.51v7.05A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-label="linkedin"
                    className="w-9 h-9 flex items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM8 8h4.8v2.2h.06c.67-1.25 2.3-2.2 4-2.2C21.6 8 24 10.6 24 15.2V24H19V16.2c0-2.1-.04-4.8-3-4.8-3 0-3.46 2.3-3.46 4.6V24H8V8z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-label="twitter"
                    className="w-9 h-9 flex items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.16 4.6a4.28 4.28 0 0 0 1.33 5.72 4.2 4.2 0 0 1-1.94-.54v.05A4.28 4.28 0 0 0 6.7 14a4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.72 8.72 0 0 0 22.46 6z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-label="youtube"
                    className="w-9 h-9 flex items-center justify-center rounded bg-pink-500 text-white hover:opacity-95"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.2-.2-7.2-.2s-4.3 0-7.2.2c-.4 0-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.7v1.6C.2 12.9.5 14.6.5 14.6s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.1 7 .2 7 .2s4.3 0 7.2-.2c.4 0 1.3-.1 2.1-1 .6-.6.8-2.3.8-2.3s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.5-.2-3.5zM9.75 15.02v-6l5.2 3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
                  <div className="p-4">
                    <ContactMap />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
