import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainProductInfo from "./product/MainProductInfo";
import MainProducts from "./product/MainProducts";
import ProductSubCategory from "./product/ProductSubCategory";
import SingleProduct from "./product/SingleProduct";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";

function Home({ onLoad }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products/:category" element={<ProductSubCategory />} />
        <Route
          path="/products/:category/:subCategory"
          element={<MainProducts />}
        />
        <Route
          path="/products/:category/:subCategory/:mainProduct"
          element={<MainProductInfo />}
        />
        <Route
          path="/products/:category/:subCategory/:mainProduct/:product"
          element={<SingleProduct />}
        />
        <Route path="/" element={<MainPage onLoad={onLoad} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
