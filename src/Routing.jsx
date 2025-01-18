import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Academics from "./components/Academics.jsx";
import Admission from "./components/Admission.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
