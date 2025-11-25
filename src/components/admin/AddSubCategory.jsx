import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../../utils/config";
import { useRecoilState } from "recoil";
import subCategoryState from "../../atoms/subCategoryStateAtom";
import categoryIdAtom from "../../atoms/categoryIdAtom";
import loaderState from "../../atoms/loaderStateAtom";
import subCategoryIdAtom from "../../atoms/subCategoryIdAtom";

function AddSubCategory({ setShowModal }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [subCategories, setSubCategories] = useRecoilState(subCategoryState);
  const [categoryId] = useRecoilState(categoryIdAtom);
  const [loader, setLoader] = useRecoilState(loaderState);
  const [subCategoryId, setSubCategoryId] = useRecoilState(subCategoryIdAtom);

  const inputStyle =
    "outline-none border border-gray-300 rounded-md px-2 py-1 w-full";
  const labelStyle = "font-semibold text-gray-700 text-sm py-1 px-2";

  function selectImage(e) {
    const file = e.target.files[0];
    if(file.size > 1000000) {
      return toast.error('Image size can not exceed 1mb!', { autoClose: 2000 })
    }
    setImage(file);
    setImgUrl(URL.createObjectURL(file));
  }

  async function addSubCategory() {
    if (categoryId) {
      try {
        setLoader(true);
        const data = new FormData();
        data.append("name", name);
        data.append("categoryId", categoryId);
        data.append("image", image);
        const res = await axios.post(url + "/sub_category", data);
        const subCat = [...subCategories];
        subCat.push(res.data.data);
        setSubCategories(subCat);
        setSubCategoryId(res.data.data.id)
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
    } else {
      toast.error("Please select a category!", { autoClose: 3000 });
    }
  }

  return (
    <div className="bg-white">
      <div className="text-center text-gray-700 font-semibold py-2">
        Add New Sub-Category
      </div>
      <div className="flex flex-col justify-center">
        <label className={labelStyle}>Sub Category Name</label>
        <input
          className={inputStyle}
          placeholder="Enter Category Name"
          onChange={(e) => setName(e.target.value)}
        />
        {imgUrl && (
          <div className="flex justify-center py-4">
            <img src={imgUrl} alt="c-img" width={"300px"} height={"300px"} />
          </div>
        )}
        {!image && (
          <div className="text-center py-3">
            <button className="py-1 px-6 text-white bg-[#1b4242]">
              <label className="cursor-pointer" htmlFor="cat-img">
                Select Image
              </label>
            </button>
          </div>
        )}
        {image && (
          <div className="text-center">
            <button
              className="py-1 px-6 text-white bg-[#1b4242]"
              onClick={(e) => addSubCategory()}
            >
              Add Sub-Category
            </button>
          </div>
        )}
        <input
          className="hidden"
          type="file"
          id="cat-img"
          accept="image/*"
          onChange={(e) => selectImage(e)}
        />
      </div>
    </div>
  );
}
export default AddSubCategory;
