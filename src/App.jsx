import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import FullScreenMenu from "./components/FullScreenNav";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FullScreenLoader from "./components/FullScreenLoader";

// Direct imports (no lazy loading)
import Home from "./pages/Home";
import About from "./pages/About";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import Admin from "./pages/admin/Admin";

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
        <Route path="/" element={<Home />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} /> {/* ✅ new admin route */}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
}
