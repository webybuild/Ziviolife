import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import TechnicalSpecificationsForm from "./TechnicalSpecificationsForm";
import UploadImages from "./UploadImages";
import DownloadList from "./DownloadList";
import Modal from "./Modal";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import AddMainProduct from "./AddMainProduct";
import AddVariants from "./AddVariants";
import variantState from "../../atoms/variantsStateAtom";
import { url } from "../../utils/config";
import categoryState from "../../atoms/categoryStateAtom";
import subCategoryState from "../../atoms/subCategoryStateAtom";
import mainProductState from "../../atoms/mainProductStateAtom";
import loaderState from "../../atoms/loaderStateAtom";

function AddProduct() {
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [complianceImages, setComplianceImages] = useState([]);
  const [downloads, setDownloads] = useState({});
  const [variants, setVariants] = useRecoilState(variantState);
  const [categories, setCategories] = useRecoilState(categoryState);
  const [subCategories, setSubCategories] = useRecoilState(subCategoryState);
  const [mainProducts, setMainProducts] = useRecoilState(mainProductState);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);
  const [showMainProductModal, setShowMainProductModal] = useState(false);
  const [loader, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    fetchAllProuductData();
  }, [null]);

  function updateFormData(e) {
    const { name, value } = e.target;
    const data = { ...formData };
    data[name] = value;
    setFormData(data);
  }

  async function fetchAllProuductData() {
    try {
      const { data } = await axios.get(url + "/all_product_data");
      const { categories, subCategories, mainProducts } = data;
      setCategories(categories);
      setSubCategories(subCategories);
      setMainProducts(mainProducts);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message || error.message, {
        autoClose: 3000,
      });
    }
  }

  async function addProduct() {
    if (formData.mainProductId) {
      try {
        setLoader(true);
        const data = new FormData();
        Object.keys(formData).forEach((fd) => {
          data.append(fd, formData[fd]);
        });
        variants.forEach((variant) =>
          data.append("productVariants", JSON.stringify(variant))
        );
        images.forEach((image) => data.append("image", image));
        complianceImages.forEach((image) => data.append("complianceImages", image));
        Object.keys(downloads).forEach((key) =>
          data.append("pdf", downloads[key], key)
        );
        const res = await axios.post(url + "/product", data);
        setFormData({});
        setDownloads([]);
        setImages([]);
        setComplianceImages([]);
        setVariants([]);
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
      toast.error("Please select a product!", { autoClose: 3000 });
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-left text-xl font-bold my-12 text-white">
        ADD PRODUCT
      </h1>
      <CategoryForm
        categories={categories}
        subCategories={subCategories}
        mainProducts={mainProducts}
        formData={formData}
        updateFormData={updateFormData}
        setShowCategoryModal={setShowCategoryModal}
        setShowSubCategoryModal={setShowSubCategoryModal}
        setShowMainProductModal={setShowMainProductModal}
      />
      <TechnicalSpecificationsForm
        formData={formData}
        updateFormData={updateFormData}
      />
      <UploadImages
        title={"Product Variant Image"}
        images={images}
        setImages={setImages}
        id={"p-img"}
        textColor={"text-white"}
      />
      <UploadImages
        title={"Compliance Images"}
        images={complianceImages}
        setImages={setComplianceImages}
        id={"comp-img"}
        textColor={"text-white"}
      />
      <DownloadList downloads={downloads} setDownloads={setDownloads} />
      <AddVariants variants={variants} setVariants={setVariants} />
      <div className="text-center mt-12 py-4">
        <button
          className="text-white px-6 py-2 bg-[#1b4242] rounded-md"
          onClick={() => addProduct()}
        >
          Add Product
        </button>
      </div>
      {showCategoryModal && (
        <Modal
          setShowModal={setShowCategoryModal}
          Component={AddCategory}
          width={"w-1/3"}
        />
      )}
      {showSubCategoryModal && (
        <Modal
          setShowModal={setShowSubCategoryModal}
          Component={AddSubCategory}
          width={"w-1/3"}
        />
      )}
      {showMainProductModal && (
        <Modal
          setShowModal={setShowMainProductModal}
          Component={AddMainProduct}
          width={"w-3/5"}
        />
      )}
    </div>
  );
}

export default AddProduct;
