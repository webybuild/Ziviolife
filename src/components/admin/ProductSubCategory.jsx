import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import categoryNameState from "../../atoms/categoryNameStateAtom";
import axios from "axios";
import { url, url2 } from "../../utils/config";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ModifySubCategory from "./ModifySubCategory";
import editSubCategoryIdAtom from "../../atoms/editSubCategoryIdAtom";
import { toast } from "react-toastify";
import loaderState from "../../atoms/loaderStateAtom";

function ProductSubCategory({ admin }) {
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  const [id, setId] = useRecoilState(editSubCategoryIdAtom);
  const [showModal, setShowModal] = useState(false);
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
      const { data } = await axios.get(url + "/subcategories/" + category);
      console.log(data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function showEditModal(id) {
    setId(id);
    setShowModal(true);
  }

  async function deleteSubCategory(id) {
    try {
      setLoader(true);
      const res = await axios.delete(url2 + "/sub_category/" + id);
      toast.success(res.data.message, { autoClose: 3000 });
      setLoader(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message, {
        autoClose: 3000,
      });
      setLoader(false);
    }
  }

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} Component={ModifySubCategory} />
      )}
      <div>
        <div className="head px-8 py-8 mt-16">
          <h6 className="text-sm text-white">Products /</h6>
          <h1 className="text-3xl text-white">{cat}</h1>
        </div>
        <div className="py-12 min-h-screen">
          <div className="category flex gap-16 flex-wrap justify-center items-center mb-32">
            {categories.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Link
                  key={index}
                  to={`${admin ? "/admin" : ""}/products/${cat}/${item.name}`}
                >
                  <div className="flex">
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
                <div className="flex justify-between p-4">
                  <button
                    className="px-4 py-1 rounded bg-white"
                    onClick={() => showEditModal(item.id)}
                  >
                    Modify
                  </button>
                  <button
                    className="px-4 py-1 rounded bg-white"
                    onClick={() => deleteSubCategory(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSubCategory;
