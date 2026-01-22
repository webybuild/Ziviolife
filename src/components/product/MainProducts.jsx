import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import subCategoryNameState from "../../atoms/subCategoryNameStateAtom";
import axios from "axios";
import { url } from "../../utils/config";
import { Link } from "react-router-dom";
import loaderState from "../../atoms/loaderStateAtom";
import { toast } from "react-toastify";
import aboutBg from "../../../src/assets/About/about.jpeg";

/* ===============================
   Image Skeleton Component
================================ */
function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[260px] w-full flex items-center justify-center overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

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

/* ===============================
   Main Component
================================ */
function MainProducts({ admin }) {
  const [subCategoryName] = useRecoilState(subCategoryNameState);
  const [mainProducts, setMainProducts] = useState([]);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const subCategory =
      subCategoryName === "" ? path[path.length - 1] : subCategoryName;

    setCat(path[path.length - 2]);
    setSubCat(subCategory);
    fetchMainProducts(subCategory);
  }, [subCategoryName]);

  async function fetchMainProducts(subCategory) {
    try {
      setLoader(true);
      const { data } = await axios.get(url + "/mainproducts/" + subCategory);
      setMainProducts(data.data);
      setLoader(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setLoader(false);
    }
  }

  return (
    <>
      {/* ===============================
          Premium Header
      ================================ */}
      <section className="relative h-[38vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <span>Products</span>
            <span className="opacity-60">›</span>
            <span className="capitalize">{cat}</span>
            <span className="opacity-60">›</span>
            <span className="text-white capitalize">
              {subCat.replace("%20", " ")}
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl font-semibold capitalize tracking-wide">
            {subCat.replace("%20", " ")}
          </h1>

          <p className="mt-3 max-w-xl text-gray-300 text-sm leading-relaxed">
            Precision-crafted lighting systems designed for modern architectural
            environments.
          </p>
        </div>
      </section>

      {/* ===============================
          Product Grid
      ================================ */}
      <section className="bg-[#f2f2f2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 place-items-center">
          {mainProducts.map((item, index) => (
            <Link
              key={index}
              to={`${admin ? "/admin" : ""}/products/${cat}/${subCat}/${
                item.name
              }`}
              className="w-full flex justify-center"
            >
              <div className="group bg-white w-[280px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="h-[260px] overflow-hidden">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <ImageWithSkeleton
                      src={url + "/images/" + item.imageUrl}
                      alt={item.name}
                    />
                  </div>
                </div>

                {/* Title */}
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
          <button className="bg-black text-white px-10 py-3 text-sm tracking-wide">
            See more
          </button>
        </div>
      </section>
    </>
  );
}

export default MainProducts;
