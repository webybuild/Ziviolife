import { useRecoilState } from "recoil";
import mainProductInfoState from "../../atoms/mainProductInfoState";
import axios from "axios";
import { toast } from "react-toastify";
import { url2 } from "../../utils/config";
import loaderState from "../../atoms/loaderStateAtom";
import editMainProductState from "../../atoms/editMainProductState";
import { useNavigate } from "react-router-dom";

function EditMainProduct() {
  const [formData, setFormData] = useRecoilState(mainProductInfoState);
  const [loader, setLoader] = useRecoilState(loaderState);
  const [showEditForm, setShowEditForm] = useRecoilState(editMainProductState);
  const navigate = useNavigate()
  const inputStyle =
    "outline-none border border-gray-300 rounded-md px-2 py-1 w-full";
  const labelStyle = "font-semibold text-gray-700 text-sm py-1 px-2";

  function updateFormData(e) {
    const { name, value } = e.target;
    const data = { ...formData };
    data[name] = value;
    setFormData(data);
  }



  async function updateMainProduct() {
    try {
      const { id, name, description } = formData;
      setLoader(true);
      const res = await axios.patch(url2 + "/main_product", {
        id,
        name,
        description,
      });
      toast.success(res.data.message, { autoClose: 3000 });
      setShowEditForm(false);
      let path = window.location.pathname.split('/')
      path[path.length - 1] = formData.name
      navigate(path.join('/'))
      window.location.reload()
      setLoader(false);
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
      <div className="text-center text-gray-700 font-semibold py-2 uppercase">
        Edit Main Product
      </div>
      <div className="flex flex-col justify-center">
        <label className={labelStyle}>Product Name</label>
        <input
          className={inputStyle}
          name="name"
          value={formData.name}
          onChange={(e) => updateFormData(e)}
        />
        <label className={labelStyle}>Product Description</label>
        <textarea
          className={inputStyle}
          name="description"
          value={formData.description}
          onChange={(e) => updateFormData(e)}
        />
        <div className="flex justify-center py-2">
          <button
            className="px-4 py-1 rounded-md bg-[#1b4242] text-white"
            onClick={() => updateMainProduct()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMainProduct;
