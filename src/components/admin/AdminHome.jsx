import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AddProduct from "./AddProduct";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../utils/config";
import ProductSubCategory from "./ProductSubCategory";
import MainProducts from "./MainProducts";
import { useRecoilState } from "recoil";
import categoryNameState from "../../atoms/categoryNameStateAtom";
import SingleProduct from "./SingleProduct";
import MainProductInfo from "./MainProductInfo";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";

function AdminHome(props) {
  const navigate = useNavigate();
  const location = useLocation(); // Update
  const [categories, setCategories] = useState([]);
  const [showCatList, setShowCatList] = useState(false);
  const [categoryName, setCategoryName] = useRecoilState(categoryNameState);

  const isProductPage = location.pathname.includes("/admin/products"); // update..
  const currentPath = location.pathname;

  useEffect(() => {
    fetchCategoryList();
    console.log(location.pathname)
    if(location.pathname === '/admin/') {
      navigate("/admin/add_product");
    }
  }, [null]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  async function fetchCategoryList() {
    try {
      const { data } = await axios.get(url + "/category_list");
      setCategories(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message || error.message, {
        autoClose: 3000,
      });
    }
  }

  function logout() {
    window.localStorage.removeItem('token');
    window.location.reload()
  }

  return (
    <div>
      <div className="bg-black fixed px-8 h-12 top-0 w-full">
        <div className="flex justify-between h-full items-center">
          <div className="text-white ml-4">
            <h1 className="text-2xl uppercase font-bold">Admin Panel</h1>
          </div>
          <div>
            <a
              href="/admin"
              className="flex justify-center items-center text-center text-white text-xl uppercase font-light tracking-[5px]"
            >
              ArtizeLight
            </a>
          </div>
          <div className="cursor-pointer">
            <LogoutIcon sx={{ color: "white" }} />
            <span className="text-white pl-1 text-sm font-semibold" onClick={() => logout()}>
              Log out
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[16rem]">
          <div className="bg-black h-full fixed top-12 w-[16rem]">
            <div className="h-[90vh]">
              <div className="flex flex-col h-full justify-between">
                <div className="ml-4 mt-8">
                  <Link to="/admin/add_product">
                    <div
                      className={`sideButton px-6 py-2 text-sm font-semibold text-gray-400 cursor-pointer rounded-l-3xl ${
                        location.pathname === "/admin/add_product"
                          ? "active"
                          : ""
                      }`}
                    >
                      Add Product
                    </div>
                  </Link>
                  <div
                    className={`sideButton px-6 py-2 font-semibold text-sm text-gray-400 cursor-pointer rounded-l-3xl  ${
                      isProductPage ? "active" : ""
                    }`}
                    onClick={() => setShowCatList(!showCatList)}
                  >
                    View Products
                  </div>
                  {showCatList && (
                    <div>
                      {categories.map((cat, ind) => (
                        <div
                          className={`px-10 text-sm py-2  cursor-pointer hover:text-white ${
                            currentPath ===
                            `/admin/products/${encodeURIComponent(cat.name)}`
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          key={ind}
                        >
                          <Link
                            to={`/admin/products/${cat.name}`}
                            onClick={() => {
                              setCategoryName(cat.name);
                            }}
                          >
                            {cat.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/admin">
                    <div
                      className={`sideButton px-6 py-2 font-semibold text-sm text-gray-400 cursor-pointer rounded-l-3xl`}
                    >
                      Recent
                    </div>
                  </Link>
                </div>
                <div className="text-white flex justify-center gap-3 items-center cursor-pointer">
                  <Avatar sx={{ bgcolor: "white", color: "black" }}>CS</Avatar>
                  <div>
                    <h5 className="text-sm">Cs Jirapure</h5>
                    <h6 className="text-xs">Admin</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[5] bg-[#061822] mt-6">
          <Routes>
            <Route
              path="/products/:category"
              element={<ProductSubCategory admin={true} />}
            />
            <Route
              path="/products/:category/:subCategory"
              element={<MainProducts admin={true} />}
            />
            <Route
              path="/products/:category/:subCategory/:mainProduct"
              element={<MainProductInfo />}
            />
            <Route
              path="/products/:category/:subCategory/:mainProduct/:product"
              element={<SingleProduct showButton={true} />}
            />
            <Route path="/add_product" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
