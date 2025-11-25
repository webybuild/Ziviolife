import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { url2 } from "../../utils/config";
import { useRecoilState } from "recoil";
import categoryState from "../../atoms/categoryStateAtom";
import loaderState from "../../atoms/loaderStateAtom";
import categoryIdAtom from "../../atoms/categoryIdAtom";

function AddCategory({ setShowModal }) {
  const [name, setName] = useState("");
  const [categories, setCategories] = useRecoilState(categoryState);
  const [loader, setLoader] = useRecoilState(loaderState);
  const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);

  const inputStyle =
    "outline-none border border-gray-300 rounded-md px-2 py-1 w-full";
  const labelStyle = "font-semibold text-gray-700 text-sm py-1 px-2";

  async function addCategory() {
    try {
      setLoader(true);
      const res = await axios.post(url2 + "/category", { name });
      const cat = [...categories];
      cat.push(res.data.data);
      setCategories(cat);
      setCategoryId(res.data.data.id)
      setShowModal(false);
      toast.success(res.data.message, { autoClose: 3000 });
      setLoader(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message || error.message, {
        autoClose: 3000,
      });
      setLoader(false);
    }
  }

  return (
    <div className="bg-white">
      <div className="text-center text-gray-700 font-semibold py-2">
        Add New Category
      </div>
      <div className="flex flex-col justify-center">
        <label className={labelStyle}>Category Name</label>
        <input
          className={inputStyle}
          placeholder="Enter Category Name"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="text-center py-2">
          <button
            className="py-1 px-6 text-white bg-[#1b4242]"
            onClick={(e) => addCategory()}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddCategory;
