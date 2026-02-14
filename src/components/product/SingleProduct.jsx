import { useRecoilState } from "recoil";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import singleProductInfo from "../../atoms/singleProductInfoAtom";
import { url, url2 } from "../../utils/config";
import retilap from "../../assets/retilap.png";
import ce from "../../assets/ce.png";
import classI from "../../assets/classI.png";
import ip65 from "../../assets/ip65.png";
import ik09 from "../../assets/ik09.png";
import icon1 from "../../assets/download_icons/family_spect_sheet.png";
import icon2 from "../../assets/download_icons/product_spect_sheet.png";
import icon3 from "../../assets/download_icons/installation_manual.png";
import icon4 from "../../assets/download_icons/technical_drawing.png";
import icon5 from "../../assets/download_icons/2d_cad.png";
import icon6 from "../../assets/download_icons/bim_ifc.png";
import icon7 from "../../assets/download_icons/dialux_uld.png";
import icon8 from "../../assets/download_icons/ies.png";
import icon9 from "../../assets/download_icons/3d.png";
import icon10 from "../../assets/download_icons/ar_tracker.png";
import icon11 from "../../assets/download_icons/ce.png";
import Filter from "../admin/Filter";
import { useEffect, useState } from "react";
import mainProductNameState from "../../atoms/mainProductNameStateAtom";
import axios from "axios";
import loaderState from "../../atoms/loaderStateAtom";
import { toast } from "react-toastify";

function SingleProduct() {
  const [info, setInfo] = useRecoilState(singleProductInfo);
  const [mainProductName, setMainProductName] =
    useRecoilState(mainProductNameState);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [mainProd, setMainProd] = useState("");
  const [prod, setProd] = useState("");
  const [loader, setLoader] = useRecoilState(loaderState);

  useEffect(() => {
    if (Object.keys(info).length === 0) {
      fetchSingleProductInfo();
    }
  }, []);

  async function fetchSingleProductInfo() {
    try {
      setLoader(true);
      const product =
        window.location.pathname.split("/")[
          window.location.pathname.split("/").length - 1
        ];
      console.log(product);
      const res = await axios.get(url + "/product/" + product);
      console.log(res);
      setInfo(res.data.data);
      toast.success(res.data.message, { autoClose: 3000 });
      setLoader(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || error.message, {
        autoClose: 3000,
      });
      setLoader(false);
    }
  }

  useEffect(() => {
    var mainProduct;
    const path = window.location.pathname.split("/");
    if (mainProductName === "") {
      mainProduct = path[path.length - 1];
    } else {
      mainProduct = mainProductName;
    }
    setCat(path[path.length - 4]);
    setSubCat(path[path.length - 3]);
    setMainProd(path[path.length - 2]);
    setProd(path[path.length - 1]);
  }, [mainProductName]);

  const downloadImg = [
    { title: "Family Specification", image: icon1, key: "family-spec" },
    { title: "Product Specification", image: icon2, key: "product-spec" },
    { title: "Installation Manual", image: icon3, key: "install-manual" },
    { title: "Technical Drawing", image: icon4, key: "tech-drawing" },
    { title: "2D CAD", image: icon5, key: "2d-cad" },
    { title: "BIM IFC", image: icon6, key: "bim" },
    { title: "DIALux ULD", image: icon7, key: "dialux" },
    { title: "IES", image: icon8, key: "ies" },
    { title: "3D", image: icon9, key: "3d-view" },
    { title: "AR Tracker", image: icon10, key: "ar" },
    { title: "CE", image: icon11, key: "ce" },
  ];

  async function downloadPdf(filename) {
    if (filename) {
      try {
        const reqUrl = url + "/pdf/" + filename;
        const link = document.createElement("a");
        link.href = reqUrl;
        link.target = "_blank";
        link.click();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="">
        <div className="relative">
          <div className="bg-white pb-24 mt-20">
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
                <Typography sx={{ fontSize: "0.8rem" }} color="textPrimary">
                  {mainProd.replace(/%20/g, " ")}
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
            <div className="max-w-[1240px] mx-auto px-4 flex items-start h-full gap-12">
              <div className="left sticky top-[15%]">
                <div className="productTitle max-w-[1240px] mx-auto">
                  <h1 className="text-3xl mb-6 font-bold">
                    {info.name} -{" "}
                    <span className="font-light">{info.code}</span>
                  </h1>
                </div>
                <div className="border-solid border-zinc-200 border w-80 flex justify-center items-center">
                  {info.images ? (
                    <img src={url + "/images/" + info?.images[0]} alt="" />
                  ) : (
                    <img alt="variant-image" src="" />
                  )}
                </div>
                <div className="product_description mt-5 flex items-center">
                  <span>260x75 mm - 500 mm - 1 side</span>
                </div>
                <div className="stampImg flex items-center gap-4 mt-5">
                  <img src={retilap} alt="" />
                  <img src={ce} alt="" />
                  <img src={classI} alt="" />
                  <img src={ip65} alt="" />
                  <img src={ik09} alt="" />
                </div>
              </div>
              <div className="right">
                <div className="mb-2">
                  <h1 className="text-2xl font-bold">{info.name}</h1>
                  <h5 className="font-semibold">{info.code}</h5>
                </div>
                <div className="technicalTable">
                  {/* <h5></h5> */}
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-[#092635] text-white">
                        <th
                          colSpan="2"
                          className="py-2 px-4 border-b text-left font-light"
                        >
                          TECHNICAL SPECIFICATIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Material
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.material}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Size
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.size}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Lumen (lm)
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.lumen}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Efficacy (lm/W)
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.efficacy}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Driver option
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.driverOption}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Driver
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.driver}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Input voltage
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.inputVoltage}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Optic value
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.opticValues}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          CCT
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.cct}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          CRI
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.cri}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Finish Color
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.finishColor}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          IP
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.ip}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Dimming type
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.dimmingType}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Operating temperature
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.operatingTemperature}
                        </td>
                      </tr>
                      <tr className="bg-[#D9D9D9]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Wattage
                        </td>
                        <td className="py-2 px-4 border-b text-right font-light text-sm">
                          {info.wattage}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Lens / Reflector / Optic
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.lro}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Lifetime L80B50 (hours)
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.l80B50}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Product Description
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.description}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Area of Application
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.applicationArea}
                        </td>
                      </tr>
                      <tr className="bg-[#ECECEC]">
                        <td className="py-2 px-4 border-b font-light text-sm">
                          Product Benefits
                        </td>
                        <td className="py-2 px-4 border-b font-light text-right text-sm">
                          {info.benefits}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="downloads my-16">
                  <div className="my-8">
                    <h1 className="text-2xl font-bold text-gray-500 uppercase">
                      Downloads
                    </h1>
                  </div>
                  <div className="flex flex-wrap gap-16 justify-start items-center">
                    {downloadImg.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-3 cursor-pointer"
                        onClick={() =>
                          downloadPdf(JSON.parse(info.pdfs)[item.key])
                        }
                      >
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="opticsImg">
                  <div className="my-8">
                    <h1 className="text-2xl font-bold text-gray-500 uppercase">
                      LIGHT EFFECT
                    </h1>
                    <h6 className="text-gray-500 text-sm my-3">Compliance</h6>
                    <div className="flex gap-3">
                      {info.complianceImages &&
                        info.complianceImages.map((image, ind) => (
                          <img
                            key={ind}
                            className="border-2"
                            src={url + "/images/" + image}
                            alt=""
                            width={"50px"}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Filter variants={info.productVariants} /> */}
      </div>
    </>
  );
}

export default SingleProduct;
