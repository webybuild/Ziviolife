import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import mainProductNameState from "../../atoms/mainProductNameStateAtom";
import singleProductInfo from "../../atoms/singleProductInfoAtom";
import axios from "axios";
import { url } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import loaderState from "../../atoms/loaderStateAtom";
import { toast } from "react-toastify";

import retilap from "../../assets/retilap.png";
import ce from "../../assets/ce.png";
import classI from "../../assets/classI.png";
import ip65 from "../../assets/ip65.png";
import ik09 from "../../assets/ik09.png";

function MainProductInfo() {
  const [mainProductName] = useRecoilState(mainProductNameState);
  const [mainProductInfo, setMainProductInfo] = useState({});
  const [, setProductInfo] = useRecoilState(singleProductInfo);

  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [prod, setProd] = useState("");
  const [, setLoader] = useRecoilState(loaderState);

  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const mainProduct =
      mainProductName === "" ? path[path.length - 1] : mainProductName;

    setCat(path[path.length - 3]);
    setSubCat(path[path.length - 2]);
    setProd(path[path.length - 1]);

    fetchMainProductInfo(mainProduct);
  }, [mainProductName]);

  async function fetchMainProductInfo(mainProduct) {
    try {
      setLoader(true);
      const { data } = await axios.get(
        url + "/main_product_info/" + mainProduct
      );
      setMainProductInfo(data.data);
      setLoader(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setLoader(false);
    }
  }

  function navigateToProductInfo(ind) {
    setProductInfo(mainProductInfo.products[ind]);
    navigate(
      window.location.pathname + "/" + mainProductInfo.products[ind].name
    );
  }

  return (
    <>
      {/* ===============================
          Breadcrumbs
      ================================ */}
      <div className="max-w-7xl mx-auto px-6 pt-28 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>Products</span>
          <span>›</span>
          <span className="capitalize">{cat}</span>
          <span>›</span>
          <span className="capitalize">{subCat.replace(/%20/g, " ")}</span>
          <span>›</span>
          <span className="font-medium text-black">
            {prod.replace(/%20/g, " ")}
          </span>
        </div>
      </div>

      {/* ===============================
          Product Hero Section
      ================================ */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Image */}
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 p-10">
            <img
              src={url + "/images/" + mainProductInfo.imageUrl}
              alt={prod}
              className="max-h-[320px] object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-semibold mb-2">
            {prod.replace(/%20/g, " ")}
          </h1>

          <h2 className="text-xl font-medium text-gray-600 mb-6">
            {subCat.replace(/%20/g, " ")}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
            {mainProductInfo.description}
          </p>

          <div className="border-t pt-4 mb-6" />

          {/* Accordion-like row */}
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-medium">Products</p>
            <span className="text-xl">›</span>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-6 mt-8">
            {
              mainProductInfo.complianceImages?.map((imgUrl, ind) => 
              <img key={ind} src={url + "/images/" + imgUrl} alt="cmp_img"/>
            )
            }
          </div>
        </div>
      </section>

      {/* ===============================
          Product Variants
      ================================ */}
      <section className="bg-[#f2f2f2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-16">
            Product <span className="font-light">Variants.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 place-items-center">
            {mainProductInfo?.products?.map((item, index) => (
              <div
                key={index}
                onClick={() => navigateToProductInfo(index)}
                className="cursor-pointer bg-white w-[280px] group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-[260px] flex items-center justify-center">
                  <img
                    src={url + "/images/" + item.images[0]}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="bg-[#3a3a3a] p-4 text-white space-y-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs opacity-80">
                    Product Code: {item.code}
                  </p>
                  <p className="text-xs opacity-80">Wattage: {item.wattage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProductInfo;
