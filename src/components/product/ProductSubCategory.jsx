import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import categoryNameState from "../../atoms/categoryNameStateAtom";
import axios from "axios";
import { url } from "../../utils/config";
import { Link } from "react-router-dom";
import loaderState from "../../atoms/loaderStateAtom";

function ProductSubCategory({ admin }) {
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [loader, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    var category;
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
      console.log(data);
      setCategories(data.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  return (
    <>
      <div>
        <div className="head px-8 py-8 mt-16">
          <h6 className="text-sm">Products</h6>
          <h1 className="text-3xl">
            {cat} <span className="font-bold">Lighting</span>
          </h1>
        </div>
        <div className="backgroundBody py-12 min-h-screen">
          <div className="category flex gap-16 flex-wrap justify-center items-center mb-32">
            {categories.map((item, index) => (
              <Link
                key={index}
                to={`${admin ? "/admin" : ""}/products/${cat}/${item.name}`}
              >
                <div key={index} className="flex">
                  <div className="bg-white cursor-pointer">
                    <div className="h-64">
                      <img
                        className="w-60 h-full"
                        src={url + "/images/" + item.imageUrl}
                        alt={item.name + "-icon"}
                      />
                    </div>
                    <div className="category-title bg-[#092635] min-h-[4rem] flex items-center px-4 text-white">
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSubCategory;
