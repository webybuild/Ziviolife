import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import FullScreenMenu from "../home_components/FullScreenNav";
import Footer from "../home_components/Footer";
import ScrollToTopButton from "../home_components/ScrollToTopButton";

// Direct imports
import Home from "./Home";
import About from "./About";
import Downloads from "./Downloads";
import Contact from "./Contact";
import Admin from "./admin/Admin";
import ProductSubCategory from "../components/product/ProductSubCategory.jsx";
import MainProducts from "../components/product/MainProducts.jsx";
import MainProductInfo from "../components/product/MainProductInfo.jsx";
import SingleProduct from "../components/product/SingleProduct";

// This inner component can safely use useLocation()
function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <FullScreenMenu />}

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
        <Route path="/" element={<Home />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!isAdminRoute && <ScrollToTopButton />}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function LandingPage() {
  return (
    // <Router>
    <AppContent />
    // </Router>
  );
}
