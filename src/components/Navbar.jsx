import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../utils/config";
import categoryNameState from "../atoms/categoryNameStateAtom";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [nav, setNav] = useState(false);
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const location = useLocation();

  useEffect(() => {
    fetchCategoryList();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  async function fetchCategoryList() {
    try {
      const { data } = await axios.get(url + "/category_list");
      setCategories(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message || error.message, {
        autoClose: 3000,
      });
    }
  }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar w-full h-16 fixed top-0 z-10">
      <div className="max-w-[1240px] mx-auto px-4 flex items-center h-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-20">
            <a
              href="/"
              className="flex justify-center items-center text-center text-white text-xl uppercase font-light tracking-[5px]"
            >
              ArtizeLight
            </a>
            <h5 className="text-white font-light text-sm hidden md:block">
              <Link to={"/about"}>About</Link>
            </h5>
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-white items-center gap-3 menu">
              <li className="font-light text-sm">
                <span>Products</span>
                <ul className="dropdown">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to={`/products/${category.name}`}
                        onClick={() => setCategoryName(category.name)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="font-light text-sm">Projects</li>
              <li className="font-light text-sm">
                <Link to={"/downloads"}>Downloads</Link>
              </li>
              <li className="font-light text-sm">
                <Link to={"/contact"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>FAQ</li>
            <button className="ml-4">Contact Us</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
