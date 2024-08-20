import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
import AboutUs from "./Components/Pages/About";
import Gallery from "./Components/Pages/Gallery";
import Medals from  "./Components/Pages/Medals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/medals" element={<Medals />} />
    </Routes>
  );
}

export default App;
