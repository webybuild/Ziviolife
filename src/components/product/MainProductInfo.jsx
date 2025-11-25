import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import mainProductNameState from "../../atoms/mainProductNameStateAtom";
import singleProductInfo from "../../atoms/singleProductInfoAtom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { url } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import retilap from "../../assets/retilap.png";
import ce from "../../assets/ce.png";
import classI from "../../assets/classI.png";
import ip65 from "../../assets/ip65.png";
import ik09 from "../../assets/ik09.png";
import loaderState from "../../atoms/loaderStateAtom";

function MainProductInfo() {
  const [mainProductName, setMainProductName] = useRecoilState(
    mainProductNameState
  );
  const [mainProductInfo, setMainProductInfo] = useState({});
  const [productInfo, setProductInfo] = useRecoilState(singleProductInfo);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [prod, setProd] = useState("");
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
      setLoader(true)
      const { data } = await axios.get(
        url + "/main_product_info/" + mainProduct
      );
      console.log(data);
      setMainProductInfo(data.data);
      setLoader(false)
    } catch (error) {
      console.log(error);
      setLoader(false)
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

  return (
    <div>
      <div className="relative">
        <div className="bg-white mt-20">
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
              <div className="stampImg flex items-center gap-4 mt-5">
                <img src={retilap} alt="" />
                <img src={ce} alt="" />
                <img src={classI} alt="" />
                <img src={ip65} alt="" />
                <img src={ik09} alt="" />
              </div>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto px-4 py-2 flex items-start h-full gap-12">
            <div className="left flex-1">
              <h1 className="font-bold mb-3">TECHNICAL SPECIFICATIONS</h1>
              <ul className="features-list">
                {mainProductInfo?.techSpecs?.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="right flex-1">
              <h1 className="font-bold my-2">Feature</h1>
              <div className="flex flex-wrap gap-4">
                {mainProductInfo?.featureImages?.map((image, ind) => (
                  <img
                    key={ind}
                    src={url + "/images/" + image}
                    height={"70px"}
                    width={"70px"}
                    alt=""
                  />
                ))}
              </div>
              <div className="my-8">
                <div className="my-3">
                  <h1 className="font-bold">Optic</h1>
                </div>
                <div className="flex flex-wrap gap-4">
                  {mainProductInfo?.opticImages?.map((image, ind) => (
                    <img
                      key={ind}
                      src={url + "/images/" + image}
                      height={"70px"}
                      width={"70px"}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="backgroundBody pt-11 pb-28 px-24">
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
                    <div className="category-title bg-[#092635] text-white px-4 py-4 flex flex-col gap-3">
                      <p>
                        {item.name} -{" "}
                        <span className="font-light">{item.code}</span>
                      </p>
                      <p>{item.power}</p>
                      <img
                        className="max-w-[3rem]"
                        src={url + "/images/" + item.opticImages[0]}
                        alt="optic-img"
                      />
                      <p>{item.optic}</p>
                      <p>{item.dimension}</p>
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
