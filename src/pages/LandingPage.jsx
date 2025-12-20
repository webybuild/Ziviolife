import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import FullScreenMenu from "../home_components/FullScreenNav";
import Footer from "../home_components/Footer";
import ScrollToTopButton from "../home_components/ScrollToTopButton";
import FullScreenLoader from "../home_components/FullScreenLoader";

// Direct imports (no lazy loading)
import Home from "./Home";
import About from "./About";
import Downloads from "./Downloads";
import Contact from "./Contact";
import Admin from "./admin/Admin";
import ProductSubCategory from "../components/product/ProductSubCategory.jsx";
import MainProducts from "../components/product/MainProducts.jsx";
import MainProductInfo from "../components/product/MainProductInfo.jsx";
import SingleProduct from "../components/product/SingleProduct";

// This inner component can safely use useLocation() because it’s inside <Router>
function AppContent({ loading, setLoading }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {loading && <FullScreenLoader />}

      {/* Hide global UI on admin routes if desired */}
      {!isAdminRoute && <FullScreenMenu />}

      <AnimatedRoutes setLoading={setLoading} />

      {!isAdminRoute && <ScrollToTopButton />}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function AnimatedRoutes({ setLoading }) {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
}

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    // </Router>
  );
}
