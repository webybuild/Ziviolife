import { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useRecoilState } from "recoil";
import subCategoryNameState from "../../atoms/subCategoryNameStateAtom";
import axios from "axios";
import { url } from "../../utils/config";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function MainProducts({ admin }) {
  const [subCategoryName, setSubCategoryName] = useRecoilState(
    subCategoryNameState
  );
  const [mainProducts, setMainProducts] = useState([]);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");

  useEffect(() => {
    var subCategory;
    const path = window.location.pathname.split("/");
    if (subCategoryName === "") {
      subCategory = path[path.length - 1];
    } else {
      subCategory = subCategoryName;
    }
    setCat(path[path.length - 2]);
    setSubCat(subCategory);
    fetchMainProducts(subCategory);
  }, [subCategoryName]);

  async function fetchMainProducts(subCategory) {
    try {
      const { data } = await axios.get(url + "/mainproducts/" + subCategory);
      console.log(data);
      setMainProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mt-16">
        <div className="head px-8 py-8">
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
            }
            aria-label="breadcrumb"
          >
            <Typography
              sx={{ fontSize: "0.8rem", color: "white" }}
              color="textPrimary"
            >
              Products
            </Typography>
            <Typography
              sx={{ fontSize: "0.8rem", color: "white" }}
              color="textPrimary"
            >
              {cat}
            </Typography>
          </Breadcrumbs>
          <h1 className="text-3xl mt-3 font-bold text-white">{subCat}</h1>
        </div>
        <div className="min-h-screen py-12">
          <div className="category flex gap-16 flex-wrap justify-center items-center mb-32">
            {mainProducts.map((item, index) => (
              <Link
                to={`${admin ? "/admin" : ""}/products/${cat}/${subCat}/${
                  item.name
                }`}
              >
                <div key={index} className="flex">
                  <div className="bg-white">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProducts;
