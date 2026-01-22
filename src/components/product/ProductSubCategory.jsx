import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import categoryNameState from "../../atoms/categoryNameStateAtom";
import axios from "axios";
import { url } from "../../utils/config";
import { Link } from "react-router-dom";
import loaderState from "../../atoms/loaderStateAtom";
import { toast } from "react-toastify";
import PageHeader from "../../home_components/PageHeader";
import aboutBg from "../../../src/assets/About/about.jpeg";

function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[260px] w-full flex items-center justify-center overflow-hidden">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`max-h-full object-contain transition-all duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function ProductSubCategory({ admin }) {
  const [categoryName] = useRecoilState(categoryNameState);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    let category;
    if (categoryName === "") {
      const path = window.location.pathname.split("/");
      category = path[path.length - 1];
    } else {
      category = categoryName;
    }
    setCat(category);
    fetchSubcategories(category);
  }, [categoryName]);

  async function fetchSubcategories(category) {
    try {
      setLoader(true);
      const { data } = await axios.get(url + "/subcategories/" + category);
      setCategories(data.data);
      setLoader(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setLoader(false);
    }
  }

  return (
    <>
      {/* Top Banner */}
      <section className="relative h-[38vh] w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <span>Products</span>
            <span className="opacity-60">›</span>
            <span className="text-white capitalize">{cat}</span>
          </div>

          {/* Title */}
          <h1 className="text-white text-4xl md:text-5xl font-semibold capitalize tracking-wide">
            {cat}
          </h1>

          {/* Subtitle */}
          <p className="mt-3 max-w-xl text-gray-300 text-sm leading-relaxed">
            Thoughtfully designed lighting solutions crafted for durability,
            performance, and architectural elegance.
          </p>
        </div>
      </section>

      {/* Breadcrumb + Title */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span>Products</span>
          <span>›</span>
          <span className="text-black capitalize">{cat}</span>
        </div>

        <h1 className="text-4xl font-semibold font-arsenal mb-16 capitalize">
          {cat}
        </h1>
      </div>

      {/* Category Grid */}
      <div className="bg-[#f2f2f2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 place-items-center">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`${admin ? "/admin" : ""}/products/${cat}/${item.name}`}
              className="w-full flex justify-center"
            >
              <div className="group bg-white w-[280px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="h-[260px] flex items-center justify-center overflow-hidden">
                  <ImageWithSkeleton
                    src={url + "/images/" + item.imageUrl}
                    alt={item.name}
                  />
                </div>

                {/* Title bar */}
                <div className="bg-[#3a3a3a] py-4 text-center transition-colors duration-300 group-hover:bg-black">
                  <p className="text-white text-sm font-medium tracking-wide">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See more */}
        <div className="flex justify-center mt-24">
          <button className="bg-black text-white px-10 py-3 text-sm">
            See more
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductSubCategory;
