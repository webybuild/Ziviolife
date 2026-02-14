import { useState } from "react";
import { toast } from "react-toastify";
import cross from "../../assets/basic_icons/cross.png";
import axios from "axios";
import { url } from "../../utils/config";
import UploadImages from "./UploadImages";
import { useRecoilState } from "recoil";
import mainProductState from "../../atoms/mainProductStateAtom";
import subCategoryIdAtom from "../../atoms/subCategoryIdAtom";
import loaderState from "../../atoms/loaderStateAtom";
import mainProductIdAtom from "../../atoms/mainProductIdAtom";

function AddMainProduct({ setShowModal }) {
  const [formData, setFormData] = useState("");
  const [techSpecs, setTechSpecs] = useState([]);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [complianceImages, setComplianceImages] = useState([]);
  const [featureImages, setFeatureImages] = useState([]);
  const [specCount, setSpecCount] = useState(1);
  const [mainProducts, setMainProducts] = useRecoilState(mainProductState);
  const [subCategoryId, setSubCategoryId] = useRecoilState(subCategoryIdAtom);
  const [mainProductId, setMainProductId] = useRecoilState(mainProductIdAtom);
  const [loader, setLoader] = useRecoilState(loaderState);

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

  function updateFormData(e) {
    const { name, value } = e.target;
    const data = { ...formData };
    data[name] = value;
    setFormData(data);
  }

  function renderSpecInputs() {
    const input = [];
    function deleteTechSpec(ind) {
      setSpecCount(+specCount - 1);
      const data = [...techSpecs];
      data.splice(ind, 1);
      setTechSpecs(data);
    }

    for (let i = 0; i < specCount; i++) {
      const element = (
        <div className="flex">
          <input
            className={inputStyle + " my-1"}
            key={i}
            value={techSpecs[i]}
            onChange={(e) => updateTechnicalSpecs(e, i)}
          />
          <div className="flex items-center px-1 cursor-pointer">
            <img
              src={cross}
              width={"20px"}
              height={"20px"}
              onClick={() => deleteTechSpec(i)}
            />
          </div>
        </div>
      );
      input.push(element);
    }
    return input;
  }

  function updateTechnicalSpecs(e, ind) {
    const { value } = e.target;
    const data = [...techSpecs];
    data[ind] = value;
    setTechSpecs(data);
  }


  async function addMainProduct() {
    if (subCategoryId) {
      try {
        setLoader(true);
        const data = new FormData();
        Object.keys(formData).forEach((fd) => {
          data.append(fd, formData[fd]);
        });
        data.append("subCategoryId", subCategoryId);
        data.append("techSpecs", JSON.stringify(techSpecs));
        data.append("image", image);
        featureImages.forEach((img) => data.append("featureImages", img));
        complianceImages.forEach((img) => data.append("complianceImages", img));
        const res = await axios.post(url + "/main_product", data);
        console.log(res.data);
        const products = [...mainProducts];
        products.push(res.data.data);
        setMainProducts(products);
        setMainProductId(res.data.data.id)
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
      toast.error("Please select a sub category!", { autoClose: 3000 });
    }
  }

  return (
    <div className="bg-white">
      <div className="text-center text-gray-700 font-semibold py-2">
        Add New Main Product
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
        <div className="flex py-1">
          <label className={labelStyle}>Technical Specifications</label>
          <span
            className="ml-2 px-2 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
            onClick={() => setSpecCount(+specCount + 1)}
          >
            + Add More
          </span>
        </div>
        {renderSpecInputs()}
        <input
          className="hidden"
          type="file"
          id="cat-img"
          accept="image/*"
          onChange={(e) => selectImage(e)}
        />
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <UploadImages
              title={"feature"}
              images={featureImages}
              setImages={setFeatureImages}
              id={"feat-img"}
              width={"50px"}
              textColor={"text-black"}
            />
          </div>
          <div className="flex-1">
            <UploadImages
              title={"compliance"}
              images={complianceImages}
              setImages={setComplianceImages}
              id={"comp-img"}
              width={"50px"}
              textColor={"text-black"}
            />
          </div>
        </div>
        {imgUrl && (
          <div className="flex justify-center py-4">
            <img src={imgUrl} alt="c-img" width={"100px"} height={"100px"} />
          </div>
        )}
        {!image ? (
          <div className="text-center py-3">
            <button className="py-1 px-6 text-white bg-[#1b4242]">
              <label className="cursor-pointer" htmlFor="cat-img">
                Select Product Image
              </label>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              className="py-1 px-6 text-white bg-[#1b4242]"
              onClick={(e) => addMainProduct()}
            >
              Add Main Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default AddMainProduct;
