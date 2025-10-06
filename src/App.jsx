import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullScreenMenu from "./components/FullScreenNav";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";

function App() {
  return (
    <Router>
      {/* Navigation visible on every page */}
      <FullScreenMenu></FullScreenMenu>

      {/* Page content changes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/downloads" element={<Downloads />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
