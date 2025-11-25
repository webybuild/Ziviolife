import React from "react";
import { Link } from "react-router-dom";
import webybuild from "../../src/assets/newLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full px-6 lg:px-12 py-8 mx-auto place-content-center bg-[#1B4242] relative -z-30 -mt-40 h-[45rem] lg:h-[35rem]">
        {/* <h1 className="flex justify-center items-center text-2xl lg:text-[2rem] mb-12 text-center">
          Build Smarter. Better. Faster. Websites
        </h1> */}
        <div className="w-full fixed bottom-0 left-0 ">
          {/* <div className="grid grid-cols-2 gap-0 md:gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-4">
              <a
                className="flex gap-1 justify-center items-center w-9/12"
                href="/"
                title="Webybuild"
              >
                <div className="flex-[1]">
                  <img className="w-full" src="" alt="" />
                </div>
                <div className="flex-[2]">
                  <p className="multi_color_heading font-bold uppercase">
                    Artizelite
                  </p>
                  <p className="multi_color_heading uppercase font-semibold tracking-widest text-xs"></p>
                </div>
              </a>
              <p className="my-4 text-sm leading-normal text-justify text-gray-500">
                Artizelite presents some of its best with new qualities, various
                products have high watt capicity with long lasting capicity and
                always bright, see how we present a new product just for you
                all.
              </p>
            </div>

            <nav className="col-span-1 md:col-span-1 lg:col-span-2 mt-4">
              <p className="mb-3 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>
              <Link
                to="/"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                About
              </Link>

              <Link
                to="/blogs"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Blogs
              </Link>
              <Link
                to="/growth"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Growth
              </Link>
              <Link
                to="/contacts"
                className="flex mb-3 text-sm font-normal tracking-widest transition md:mb-2 text_effect"
              >
                Contacts
              </Link>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-3 mt-4">
              <p className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Services
              </p>
              <Link
                to="/services/web-design"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Website Design
              </Link>
              <a
                href="/services/web-development"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Web Development
              </a>
              <a
                href="/services/inventory-management"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Inventory Management
              </a>
              <a
                href="/services/cloud-services"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Cloud Services
              </a>
              <Link
                to="/services/logo-design"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Logo Design
              </Link>
              <a
                href="/services/digital-marketing"
                className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
              >
                Seo and Digital Marketing
              </a>
            </nav>

            <div className="col-span-3">
              <p className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Get in Touch
              </p>
              <div className="my-4">
                <div className="flex items-center gap-2">
                  <img className="w-[1.8rem] md:w-[2rem]" src="" alt="" />
                  <h1 className="text-gray-500 text-sm lg:text-base">
                    hello@webybuild.com
                  </h1>
                </div>
              </div>
              <div className="my-4">
                <div className="flex items-center gap-2">
                  <img className="w-[2rem]" src="" alt="" />
                  <h1 className="font-light text-sm lg:text-base">
                    USA, Canada, Germany, Australia, Switzerland, Ireland
                  </h1>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold my-4">Follow Us</h1>
                <div className="flex gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/in/harsh-j-b509b4172/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="twitter" />
                  </a>
                  <a
                    href="https://twitter.com/WEBYBUILD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/webybuild"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="twitter" />
                  </a>
                  <a
                    href="https://in.pinterest.com/webybuild/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/webybuild/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col-reverse items-start justify-between py-2 mt-4 border-t border-gray-100 md:flex-row md:items-center">
            <p className="w-full mb-6 text-xs text-center text-white md:mb-0 lg:pl-4">
              © Copyright 2024 Artizelite. All Rights Reserved.
            </p>
            <div className="w-full flex items-center justify-center space-x-6 md:items-center md:justify-center pr-4">
              <Link
                to="https://www.weybuild.com"
                className="text-xs text-white transition text_effect flex items-center gap-1"
              >
                Powered by
                <span>
                  <img className="w-6" src={webybuild} alt="" srcset="" />
                </span>
                www.webybuild.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
