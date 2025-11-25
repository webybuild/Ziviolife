import axios from "axios";
import { toast } from "react-toastify";
import { url2 } from "../../utils/config";
import { useRecoilState } from "recoil";
import loaderState from "../../atoms/loaderStateAtom";
import { useState } from "react";
import editSubCategoryIdAtom from "../../atoms/editSubCategoryIdAtom";

function ModifySubCategory({ setShowModal }) {
  const [loader, setLoader] = useRecoilState(loaderState);
  const [name, setName] = useState("");
  const [id, setId] = useRecoilState(editSubCategoryIdAtom);

  const inputStyle =
    "outline-none border border-gray-300 rounded-md px-2 py-1 w-full";
  const labelStyle = "font-semibold text-gray-700 text-sm py-1 px-2";

  async function modifySubCategory() {
    try {
      console.log({ name, id });
      setLoader(true);
      const res = await axios.patch(url2 + "/sub_category", { name, id });
      toast.success(res.data.message, { autoClose: 3000 });
      setShowModal(false);
      setLoader(false);
      window.location.reload()
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message, {
        autoClose: 3000,
      });
      setLoader(false);
    }
  }

  return (
    <div>
      <div className="py-2 text-center font-semibold uppercase">
        Edit Sub Category
      </div>
      <label className={labelStyle}>Sub Category Name</label>
      <input
        className={inputStyle}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex justify-center py-2">
        <button
          className="px-4 py-1 rounded-md bg-[#1b4242] text-white"
          onClick={() => modifySubCategory()}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default ModifySubCategory;
