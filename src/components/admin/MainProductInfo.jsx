import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import mainProductNameState from "../../atoms/mainProductNameStateAtom";
import singleProductInfo from "../../atoms/singleProductInfoAtom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { url, url2 } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import retilap from "../../assets/retilap.png";
import ce from "../../assets/ce.png";
import classI from "../../assets/classI.png";
import ip65 from "../../assets/ip65.png";
import ik09 from "../../assets/ik09.png";
import editMainProductState from "../../atoms/editMainProductState";
import EditMainProduct from "./EditMainProduct";
import Modal from "./Modal";
import mainProductInfoState from "../../atoms/mainProductInfoState";
import loaderState from "../../atoms/loaderStateAtom";
import { toast } from "react-toastify";

function MainProductInfo({ showButton, width }) {
  const [mainProductName, setMainProductName] =
    useRecoilState(mainProductNameState);
  const [mainProductInfo, setMainProductInfo] =
    useRecoilState(mainProductInfoState);
  const [productInfo, setProductInfo] = useRecoilState(singleProductInfo);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [prod, setProd] = useState("");
  const [showEditForm, setShowEditForm] = useRecoilState(editMainProductState);
  const [loader, setLoader] = useRecoilState(loaderState);

  const navigate = useNavigate();

  useEffect(() => {
    var mainProduct;
    const path = window.location.pathname.split("/");
    if (mainProductName === "") {
      mainProduct = path[path.length - 1];
    } else {
      mainProduct = mainProductName;
    }
    setCat(path[path.length - 3]);
    setSubCat(path[path.length - 2]);
    setProd(path[path.length - 1]);
    fetchMainProductInfo(mainProduct);
  }, [mainProductName]);

  async function fetchMainProductInfo(mainProduct) {
    try {
      const { data } = await axios.get(
        url + "/main_product_info/" + mainProduct
      );
      console.log(data);
      setMainProductInfo(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToProductInfo(ind) {
    try {
      setProductInfo(mainProductInfo.products[ind]);
      const name = mainProductInfo.products[ind]["name"];
      const path = window.location.pathname;
      navigate(path + "/" + name);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMainProduct() {
    try {
      setLoader(true);
      const res = await axios.delete(
        url2 + "/main_product/" + mainProductInfo.id
      );
      toast.success(res.data.message, { autoClose: 3000 });
      let path = window.location.pathname.split("/");
      path.splice([path.length - 1], 1);
      console.log(path.join("/"));
      navigate(path.join("/"));
      // window.location.reload()
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
      {showEditForm && (
        <Modal
          setShowModal={setShowEditForm}
          Component={EditMainProduct}
          width={"w-3/5"}
        />
      )}
      <div className="flex justify-end gap-4 mt-6 py-6 px-4">
        <button
          className="px-6 py-1 text-white text-sm text-center ml-4 bg-[#1b4242] hover:bg-[#275252]"
          onClick={() => deleteMainProduct()}
        >
          Delete Main Product
        </button>
        <button
          className="px-6 py-1 text-white text-sm text-center ml-4 bg-[#1b4242] hover:bg-[#275252]"
          onClick={() => setShowEditForm(true)}
        >
          Modify Main Product
        </button>
      </div>
      <div className="relative">
        <div className="bg-white pt-2 px-8">
          <div className="breadCrumbs max-w-[1240px] mx-auto my-6 text-xs">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography sx={{ fontSize: "0.8rem" }} color="textPrimary">
                Products
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }} color="textPrimary">
                {cat} Lighting
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }} color="textPrimary">
                {subCat.replace(/%20/g, " ")}
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem" }}
                color="textSecondary"
                className="font-semibold"
              >
                {prod.replace(/%20/g, " ")}
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="max-w-[1240px] mx-auto px-4 flex items-start h-full gap-12 py-16">
            <div className="left flex-1">
              {/* <div className="border-solid border-zinc-200 border flex justify-center items-center"> */}
              <img
                className="max-h-[20rem] w-full"
                src={url + "/images/" + mainProductInfo.imageUrl}
                alt="main-image"
              />
              {/* </div> */}
            </div>
            <div className="right flex-1">
              <div className="productTitle min-h-[20rem]">
                <h1 className="text-5xl mb-6 font-bold">{prod}</h1>
                <h2 className="font-semibold text-xl mb-4">
                  {subCat.replace(/%20/g, " ")}
                </h2>
                <p className="normal-case">{mainProductInfo.description}</p>
              </div>
              <div className="flex items-center gap-6 mt-8">
                {
                  mainProductInfo.complianceImages?.map((imgUrl, ind) => 
                  <img key={ind} src={url + "/images/" + imgUrl} alt="cmp_img"/>
                )
                }
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto">
          <div className="pt-11 pb-28 px-24">
            <div>
              <h1 className="text-white text-2xl font-bold uppercase pb-8">
                Product Variant
              </h1>
            </div>
            <div className="category flex gap-16 flex-wrap justify-center items-center">
              {mainProductInfo?.products?.map((item, index) => (
                <div
                  key={index}
                  className="flex"
                  onClick={() => navigateToProductInfo(index)}
                >
                  <div className="bg-white cursor-pointer">
                    <div>
                      <img
                        className="w-60"
                        src={url + "/images/" + item.images[0]}
                        alt=""
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProductInfo;
